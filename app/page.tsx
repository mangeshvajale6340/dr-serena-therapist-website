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
      <section className="flex items-center justify-center h-screen text-center px-4 bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?t=st=1751365788~exp=1751369388~hmac=c96928dfb30a073356528f6fbbd8d80cd9bf0a9303f4aad73255c292cfc9eb31&w=826')]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/80 p-10 rounded-xl max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Dr. Serena Blake, PsyD</h1>
          <p className="text-lg mb-6">Compassionate Therapy for a Healthier You</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            Book a Session
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-gray-700 leading-relaxed bg-[#f0e9ff] p-4 rounded-md">
            I’m Dr. Serena Blake, a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. I blend evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from
            trauma.
          </p>
          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p><strong>📍 Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p><strong>📞 Phone:</strong> (323) 555-0192</p>
            <p><strong>📧 Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-indigo-600">serena@blakepsychology.com</a></p>
            <p><strong>🕒 Office Hours:</strong> In-person: Tue & Thu (10 AM–6 PM), Virtual via Zoom: Mon, Wed & Fri (1 PM–5 PM)</p>
            <p><strong>💼 Experience:</strong> 8 years of practice, 500+ sessions</p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Services & Specialties</h3>
          <div className="grid gap-10 md:grid-cols-3 text-left">
            {/* Individual Therapy */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white shadow rounded"
            >
              <img
                src="https://www.mpowerminds.com/assetOLD/images/Individual.jpg"
                alt="Individual Therapy"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="font-medium text-lg mb-2">Anxiety & Stress Management</h4>
              <p className="text-sm text-gray-600">
                Focused sessions for managing anxiety, stress, and emotional challenges.
              </p>
            </motion.div>

            {/* Trauma Counseling */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white shadow rounded"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleGHRa9KpmEJ94c7qtKTiAwux1tsjwTzFWw&s"
                alt="Trauma Counseling"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="font-medium text-lg mb-2">Trauma Recovery</h4>
              <p className="text-sm text-gray-600">
                Safe, supportive therapy to help you process and heal from trauma.
              </p>
            </motion.div>

            {/* Relationship Therapy */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white shadow rounded"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleGHRa9KpmEJ94c7qtKTiAwux1tsjwTzFWw&s"
                alt="Relationship Therapy"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="font-medium text-lg mb-2">Relationship Counseling</h4>
              <p className="text-sm text-gray-600">
                Support for couples navigating communication, trust, and connection.
              </p>
            </motion.div>
          </div>

          {/* Fees */}
          <div className="mt-10 text-left text-sm text-gray-600">
            <p><strong>💵 Session Fees:</strong></p>
            <ul className="list-disc ml-6">
              <li>$200 / individual session</li>
              <li>$240 / couples session</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h3>
          <div className="text-left space-y-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-lg">Do you accept insurance?</h4>
              <p>No, but a superbill is provided for self-submission.</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">Are online sessions available?</h4>
              <p>Yes—all virtual sessions via Zoom.</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">What is your cancellation policy?</h4>
              <p>24-hour notice required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#f0e9ff]">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-6 text-center">Contact Me</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-white text-gray-500">
        © 2025 Dr. Serena Blake. All rights reserved.
      </footer>
    </main>
  );
}

