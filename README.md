# MakeMeSites

Static Next.js website with a PHP contact endpoint. No Node.js mail server is required on the hosting account.

## Build and publish to PHP hosting

1. Run `npm ci` and `npm run build` locally.
2. Upload **the contents of `out/`** to the PHP hosting document root (for example `public_html/`). This includes `sendmail.php`, the four policy HTML files and `_next/` assets.
3. Confirm PHP 7.4+ executes `.php` files and the hosting account permits PHP `mail()`. Configure the business mailbox `info@makemesites.com` and the host's SPF/DKIM settings. The default recipient and sender are that address; server environment variables `MMS_CONTACT_TO` and `MMS_CONTACT_FROM` can override them. Never use the visitor's address as From.
4. Test one real enquiry from both the main form and a consultation modal. A successful PHP response means the hosting mail transport accepted the message, not that the destination inbox has delivered it. If `mail()` is disabled, use the hosting provider's PHP SMTP configuration/transport before publishing; this implementation cannot bypass that restriction.
5. The endpoint permits browser origins `https://makemesites.com` and `https://www.makemesites.com`. Update its allowlist if the site's production domain changes. A static-only host or the Next.js development server cannot execute PHP; a PHP-enabled server is required.

## Privacy implementation and operational review

- Policies in English and Spanish identify Semen Kurtsov, NIE/NIF Y9784779H, Psj Buenos Aires 20, 17310 Lloret de Mar, Girona, Spain. Contact email is the existing website address `info@makemesites.com`.
- Persistent footer links use `/privacy-policy.html`, `/cookie-policy.html` and Spanish equivalents, matching Next.js static export filenames.
- Both forms show a first-layer privacy notice. They request name/email and optional phone/message. Responding to requested proposals uses pre-contractual measures, rather than an unnecessary compulsory marketing/consent checkbox.
- `mms-cookie-choice` stores only the chosen notice option, version and expiry in first-party local storage. A valid choice lasts 180 days. Expired records are ignored; records remain until replaced/cleared. Both buttons currently enable exactly the same experience because no optional trackers are integrated. Future trackers need a new inventory, consent version, purpose-specific controls and actual blocking before consent.
- Licensed Adobe Fonts remains loaded from the original kit; no unlicensed local Sporty font is introduced. Adobe's font service processes technical requests independently of the cookie notice. Its documented cookie/IP behavior is disclosed.
- Before publishing, check the actual hosting/CDN for additional cookies, confirm provider identities, log/backup retention and any international transfer safeguards. The source repository alone cannot establish these facts. Apply the stated enquiry retention period (up to 12 months after last contact) to the business mailbox/backups, with exceptions for contracts, legal obligations and concrete disputes. Confirm provider agreements where GDPR Article 28 applies.
- Security counters are hashed IP records in the PHP temporary directory. They permit five attempts in ten minutes; expired files are removed on subsequent requests after twenty minutes. The host must permit writable temporary storage. Configure a periodic cleanup if requests may stop for long periods.

## Sources

The Global Hub Iberico privacy/cookie pages were used as structural references, with original wording adapted to this website's actual fields, controller, local storage and Adobe integration. Relevant sources:

- https://globalhubiberico.com/privacy-policy.html
- https://globalhubiberico.com/cookie-policy.html
- https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng (GDPR, especially Articles 6, 12–13, 15–22, 28 and Chapter V)
- https://www.aepd.es/preguntas-frecuentes/17-internet-y-redes-sociales/FAQ-1707-importancia-de-las-cookies-en-la-proteccion-de-datos
- https://www.adobe.com/privacy/policies/adobe-fonts.html
