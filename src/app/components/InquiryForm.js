"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function InquiryForm({ lang }) {
  const es = usePathname().startsWith('/es');
  const [status, setStatus] = useState('idle');
  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch('/sendmail.php', { method: 'POST', body: new URLSearchParams(new FormData(form)), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Failed');
      form.reset(); setStatus('success');
    } catch { setStatus('error'); }
  }
  return <form onSubmit={submit} className="inquiry-form">
    {['name','email','phone','message'].map((field,i) => <label key={field} className="block text-white mt-3">
      <span>{lang.contact.placeholder[i]}</span>
      {field === 'message' ? <textarea name={field} maxLength={5000} className="custom-input w-full p-2" rows={3} /> : <input name={field} type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'} autoComplete={field === 'phone' ? 'tel' : field} required={field !== 'phone'} maxLength={field === 'name' ? 100 : field === 'email' ? 254 : 40} className="custom-input w-full p-2" />}
    </label>)}
    <div className="form-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="form-privacy">{es ? 'Responsable: Semen Kurtsov (MakeMeSites). Usamos tus datos para responder a tu consulta y preparar una propuesta a tu petición. Teléfono y mensaje opcionales. Puedes ejercer tus derechos en info@makemesites.com.' : 'Controller: Semen Kurtsov (MakeMeSites). We use your details to answer your enquiry and prepare a proposal at your request. Phone and message are optional. Exercise your data rights at info@makemesites.com.'} <a href={es ? '/es/privacy-policy.html' : '/privacy-policy.html'}>{es ? 'Información de privacidad' : 'Privacy information'}</a></p>
    <button type="submit" disabled={status === 'sending'} className="form-send">{status === 'sending' ? (es ? 'Enviando…' : 'Sending…') : lang.contact.button_text}</button>
    <p role={status === 'error' ? 'alert' : 'status'} aria-live="polite" className="text-white">{status === 'success' ? (es ? 'Tu consulta se ha enviado correctamente.' : 'Your enquiry has been sent successfully.') : status === 'error' ? (es ? 'No se pudo enviar. Inténtalo de nuevo o escribe a info@makemesites.com.' : 'Could not send. Please retry or email info@makemesites.com.') : ''}</p>
  </form>;
}
