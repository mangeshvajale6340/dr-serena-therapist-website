
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-[#f5f3ff] text-gray-900">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center px-4 bg-[url('https://t3.ftcdn.net/jpg/04/28/12/90/360_F_428129004_4PIYoC3aLBqhKiwlFnuDcfQaNGlkXHJR.jpg')] bg-cover bg-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-white/80 p-10 rounded-xl max-w-2xl mx-auto">
          <img src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg" alt="Dr. Serena Blake" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
          <h1 className="text-4xl font-bold mb-4">Dr. Serena Blake, PsyD</h1>
          <p className="text-lg mb-6">Compassionate Therapy for a Healthier You</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">Book a Session</button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-gray-700 leading-relaxed bg-[#f0e9ff] p-4 rounded-md">
            I’m Dr. Serena Blake, a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. I blend evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
