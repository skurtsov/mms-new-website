"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
const KEY = 'mms-cookie-choice';
const VERSION = 1;
export default function PrivacyControls() {
  const es = usePathname().startsWith('/es');
  const prefix = es ? '/es' : '';
  const [open,setOpen] = useState(false);
  useEffect(() => {
    try { const choice = JSON.parse(localStorage.getItem(KEY)); setOpen(!choice || choice.version !== VERSION || !['accepted','necessary'].includes(choice.choice) || !Number.isFinite(choice.expires) || choice.expires <= Date.now()); }
    catch { setOpen(true); }
  }, []);
  function choose(choice) {
    try { localStorage.setItem(KEY,JSON.stringify({version:VERSION,choice,expires:Date.now()+180*24*60*60*1000})); } catch { /* Browsing remains available without storage. */ }
    setOpen(false);
  }
  return <>
    <footer className="site-footer" lang={es ? 'es' : 'en'}><a href={es ? '/es.html' : '/'}>MakeMeSites</a><nav aria-label={es ? 'Enlaces legales' : 'Legal links'}>
      <a href={prefix + '/privacy-policy.html'}>{es ? 'Política de privacidad' : 'Privacy Policy'}</a>
      <a href={prefix + '/cookie-policy.html'}>{es ? 'Política de cookies' : 'Cookie Policy'}</a>
      <button type="button" onClick={()=>setOpen(true)}>{es ? 'Preferencias de cookies' : 'Cookie settings'}</button>
    </nav></footer>
    {open && <section lang={es ? 'es' : 'en'} className="cookie-banner" aria-labelledby="cookie-title">
      <h2 id="cookie-title">{es ? 'Tu privacidad' : 'Your privacy'}</h2>
      <p>{es ? 'Este sitio no utiliza cookies de análisis ni publicidad. Solo guardamos tu elección en este navegador durante 180 días. Aceptar no activa ningún seguimiento.' : 'This site uses no analytics or advertising cookies. We only remember your choice in this browser for 180 days. Accepting does not enable any tracking.'}</p>
      <a href={prefix + '/cookie-policy.html'}>{es ? 'Política de cookies' : 'Cookie Policy'}</a>
      <div className="cookie-actions"><button type="button" onClick={()=>choose('necessary')}>{es ? 'Solo necesarias' : 'Necessary only'}</button><button type="button" onClick={()=>choose('accepted')}>{es ? 'Aceptar' : 'Accept'}</button></div>
    </section>}
  </>;
}
