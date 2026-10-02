<?php
// Requires PHP 7.4+ and a configured hosting mail transport.
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function reply(int $status, bool $success): void {
    http_response_code($status);
    echo json_encode(['success' => $success]);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Allow: POST'); reply(405, false); }
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 80000) reply(413, false);
// Same-origin browser submissions only; no permissive CORS.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ['https://makemesites.com', 'https://www.makemesites.com'], true)) reply(403, false);
if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') reply(403, false);
function field(string $key, int $limit): string {
    $value = $_POST[$key] ?? '';
    if (!is_string($value) || strlen($value) > $limit || preg_match('//u', $value) !== 1) reply(422, false);
    return trim($value);
}
$name = field('name', 400);
$email = field('email', 254);
$phone = field('phone', 160);
$message = field('message', 20000);
if (field('website', 1000) !== '') reply(422, false);
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n\x00-\x1F\x7F]/', $email . $name . $phone)) reply(422, false);
// Short-lived hashed IP counters outside the document root; locking prevents parallel bypass.
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$path = sys_get_temp_dir() . '/mms-contact-' . hash('sha256', __DIR__ . $ip) . '.json';
$handle = fopen($path, 'c+');
if (!$handle || !flock($handle, LOCK_EX)) reply(503, false);
$entry = json_decode(stream_get_contents($handle), true);
$now = time();
if (!is_array($entry) || $now - ($entry['start'] ?? 0) >= 600) $entry = ['start' => $now, 'count' => 0];
if ($entry['count'] >= 5) { flock($handle, LOCK_UN); fclose($handle); header('Retry-After: 600'); reply(429, false); }
$entry['count']++;
ftruncate($handle, 0); rewind($handle); fwrite($handle, json_encode($entry)); fflush($handle); flock($handle, LOCK_UN); fclose($handle);
// Delete expired counters, including those for visitors who never return.
foreach (glob(sys_get_temp_dir() . '/mms-contact-*.json') ?: [] as $old) {
    if (filemtime($old) < $now - 1200) @unlink($old);
}
$recipient = getenv('MMS_CONTACT_TO') ?: 'info@makemesites.com';
$sender = getenv('MMS_CONTACT_FROM') ?: 'info@makemesites.com';
foreach ([$recipient, $sender] as $address) {
    if (!filter_var($address, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $address)) reply(503, false);
}
$body = "New MakeMeSites enquiry\n\nName: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n";
$headers = ['From' => $sender, 'Reply-To' => $email, 'MIME-Version' => '1.0', 'Content-Type' => 'text/plain; charset=UTF-8'];
// Never send an automatic reply to an unverified visitor address.
if (!mail($recipient, 'MakeMeSites website enquiry', $body, $headers)) reply(503, false);
reply(200, true);
