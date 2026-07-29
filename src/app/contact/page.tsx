"use client";

import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = formData.name.trim() !== '' && formData.message.trim() !== '' && isValidEmail(formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: `❌ ${data.error || 'Failed to send message'}` });
      }
    } catch (err) {
      setStatus({ type: 'error', message: '❌ Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Get In <span className="text-brand-purple">Touch</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Interested in working together or have a question? Drop a message!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <FaEnvelope className="text-xl text-slate-700 dark:text-slate-300" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <a href="mailto:pdnsyamkumar@gmail.com" className="text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-purple transition-colors font-medium">pdnsyamkumar@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <FaLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-purple transition-colors font-medium">LinkedIn Profile</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <FaGithub className="text-xl text-slate-900 dark:text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                <a href="https://github.com/pdnsyamkumar-work" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-purple transition-colors font-medium">GitHub Profile</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <FaFilePdf className="text-xl text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Resume</p>
                <a href="/Syam_Kumar_Resume.pdf" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-purple transition-colors font-medium">Download Resume PDF</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-slate-800/30 p-8 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none" 
                placeholder="Your message..."
              ></textarea>
            </div>
            
            {status && (
              <div className={`p-4 rounded-lg text-sm font-medium ${
                status.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' 
                  : 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
              }`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting || !isFormValid}
              className="w-full bg-brand-purple hover:bg-[#8e5ed1] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-brand-purple/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
