"use client";
import { useState } from "react";

export default function Contact() {

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      setStatus('sending');
      await fetch('https://script.google.com/macros/s/AKfycbw-lx13H46ymT5-MtCIgjFOdNgK9Tleci4b-BtGs2t0-6wgYeOoIfGw9fHV7ACUyQXh/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 px-5 lg:px-10 bg-navy-light/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            Contact <span className="text-gradient">Me</span>
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 reveal">
            <div className="relative w-40 h-72 rounded-[2rem] border-4 border-pink/70 shadow-neonLg bg-gradient-to-b from-panel2 to-navy flex items-center justify-center">
              <div className="absolute top-3 w-10 h-1 rounded-full bg-pink/50"></div>
              <svg className="w-14 h-14 text-pink animate-pulseGlow" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
              <div className="absolute bottom-4 w-8 h-8 rounded-full border border-pink/40"></div>
            </div>

            <div className="text-center">
              <p className="font-display font-semibold text-lg text-white mb-2">Tejaswi Sunil Gawai</p>
              <p className="text-gray-400 text-sm mb-1"><a href="mailto:tejaswigawai07@gmail.com" className="hover:text-pink transition-colors">tejaswigawai07@gmail.com</a></p>
              <p className="text-gray-400 text-sm"><a href="tel:8766409341" className="hover:text-pink transition-colors">+91 8766409341</a></p>
            </div>
          </div>

          <form className="space-y-4 reveal" onSubmit={handleSubmit}>
            <input type="text" name="name" required placeholder="Your Name" className="w-full rounded-xl bg-panel border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-pink focus:shadow-neon transition-all" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full rounded-xl bg-panel border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-pink focus:shadow-neon transition-all" />
            <textarea required name="message" rows={4} placeholder="Your Message" className="w-full rounded-xl bg-panel border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-pink focus:shadow-neon transition-all resize-none"></textarea>
            <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-deep px-6 py-3 text-sm font-semibold shadow-neon hover:shadow-neonLg transition-all disabled:opacity-70">
              Send Message
            </button>
            {status === 'sending' && <p className="text-pink-400 text-sm text-center mt-2">Sending...</p>}
            {status === 'sent' && <p className="text-green-400 text-sm text-center mt-2">✓ Message sent!</p>}
            {status === 'error' && <p className="text-red-400 text-sm text-center mt-2">Something went wrong. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
