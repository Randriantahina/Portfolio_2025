'use client';
import React, { useState } from 'react';
import Image from 'next/image';
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
    <div className="px-6 max-w-[1000px] mx-auto  md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="flex flex-col items-center my-3 gap-6">
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

          <form
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Contact Me</p>

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={4}
              placeholder="Your Message ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition duration-200 ease-in-out shadow-lg"
            >
              Send Message
            </button>
            {status && <p className="text-white text-center p-4">{status}</p>}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
