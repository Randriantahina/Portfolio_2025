'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('Message envoyé avec succès !');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Erreur lors de l’envoi.');
    }
  }

  return (
    <div className="px-6 max-w-[1000px] mx-auto py-20 md:my-12" id="contact">
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-effect rounded-2xl p-10 md:p-16 shadow-2xl border border-white/10 relative overflow-hidden shiny-line-effect"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-purple-100 via-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_2px_32px_rgba(128,0,255,0.5)]">
            Contacte-me
          </h2>

          <div className="grid md:grid-cols-2 place-items-center gap-8">
            {/* ICONES */}
            <div className="flex flex-col items-center gap-8">
              <Image
                src="/phone.png"
                alt="Phone"
                width={96}
                height={96}
                className="w-24 h-24 object-contain rounded-full shadow-lg"
              />
              <Image
                src="/mail.png"
                alt="Mail"
                width={100}
                height={96}
                className="w-24 h-24 object-contain rounded-full shadow-lg"
              />
            </div>

            {/* FORMULAIRE */}
            <form
              method="POST"
              className="w-full space-y-4"
              id="form"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your Email ..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-purple-600 bg-white/10 text-white placeholder-gray-400 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />

              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="your message ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-purple-600 bg-white/10 text-white placeholder-gray-400 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg hover:brightness-110 transition duration-200 ease-in-out"
              >
                Envoyer le message
              </button>

              {status && (
                <p className="text-center text-white mt-4 drop-shadow-[0_2px_8px_rgba(128,0,255,0.7)]">
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
};

export default Contact;
