'use client';

import { useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid =
    formData.name.trim() !== '' && formData.message.trim() !== '' && isValidEmail(formData.email);

  const triggerConfetti = () => {
    try {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        try {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#8b5cf6', '#f43f5e', '#10b981'],
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#8b5cf6', '#f43f5e', '#10b981'],
          });
        } catch {
          // Ignore confetti errors on unsupported mobile browsers
        }

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch {
      // Safely ignore
    }
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        triggerConfetti();

        // Auto reset after 20 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', message: '' });
        }, 20000);
      } else {
        const errorText = data.error ? String(data.error) : 'Failed to send message';
        setErrorMsg(`❌ ${errorText}`);
      }
    } catch {
      setErrorMsg('❌ Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-8 lg:px-20 max-w-6xl mx-auto w-full scroll-mt-24"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
        >
          Get In <span className="text-brand-purple">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-lg"
        >
          Interested in working together or have a question? Drop a message!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-8">
            Contact Information
          </h3>
          <div className="space-y-6">
            <a
              href="mailto:pdnsyamkumar@gmail.com"
              className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-brand-purple group-hover:shadow-brand-purple/20 transition-all">
                <SiGmail className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-[#EA4335] transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <span className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-brand-purple transition-colors">
                  pdnsyamkumar@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dola-naga-syam-kumar-peraka-135b4b14a/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all">
                <FaLinkedin className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                <span className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-blue-500 transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </a>

            <a
              href="https://github.com/pdnsyamkumar-work"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-slate-900 dark:group-hover:border-white transition-all">
                <FaGithub className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                <span className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  GitHub Profile
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-rose-500 group-hover:shadow-rose-500/20 transition-all">
                <FaFilePdf className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-rose-500 transition-colors" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Resume</p>
                <div className="flex gap-3 items-center">
                  <a
                    href="/PDN_Syam_Kumar_SDET_II.pdf?v=2"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                  >
                    View
                  </a>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <a
                    href="/PDN_Syam_Kumar_SDET_II.pdf?v=2"
                    download
                    className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-md backdrop-blur-sm relative overflow-hidden min-h-[450px] flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6">
                  Send a Message
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3 rounded-lg text-sm font-medium bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800"
                  >
                    {errorMsg}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-gradient-to-r from-brand-purple to-brand-peach hover:from-[#8e5ed1] hover:to-[#e0755d] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-brand-purple/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 transform active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                className="flex flex-col items-center justify-center text-center h-full py-10"
              >
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <span className="text-4xl">✅</span>
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                  🎉 Thank You,{' '}
                  <span className="text-brand-purple">{formData.name.split(' ')[0]}</span>!
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  Your message has been received successfully.
                </p>

                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  📬 I&apos;ll get back to you within 24 hours.
                </p>

                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Have a wonderful day! 🚀
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
