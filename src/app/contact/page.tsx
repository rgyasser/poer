'use client';

import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send, MapPin, Phone, Menu, X, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Devis', href: '/devis' },
    { label: 'SAV', href: '/sav' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`w-full bg-white backdrop-blur-sm text-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md ${className}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a
            href="/"
            className="flex-shrink-0 flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors"
          >
            <img
              src="images/logo.png"
              alt=""
              className="w-13 hover:scale-95 transition-transform"
            />
          </a>

          <button
            className="block lg:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden lg:flex items-center">
            <div className="flex gap-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative group font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-lg text-gray-700 text-left py-3 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} AutoPrestige. Tous droits réservés.</p>
        <p className="text-sm mt-2">Conçu avec passion pour les amateurs de vitesse.</p>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main
        className="flex-grow w-full bg-cover bg-center bg-fixed text-gray-900 pt-24"
        style={{ backgroundImage: "url('images/image2.jpg')" }}
      >
        <div className="min-h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Partie Gauche : Infos et Carte */}
            <div className="flex flex-col justify-between p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-3 tracking-wide text-gray-800">
                  Contactez-nous
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                  Prêt à prendre la route ? Remplissez le formulaire ou utilisez nos coordonnées.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <MapPin className="text-blue-600 text-2xl flex-shrink-0" />
                    <span className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors">
                      Route Nationale 1 Complexe Commercial Ain Al Hayat Mag 6 Skhirat, Maroc{' '}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Mail className="text-blue-600 text-2xl flex-shrink-0" />
                    <a
                      href="mailto:contact@autoprestige.com"
                      className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors"
                    >
                      nabil.baiz@cais.ma
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+33123456789"
                  className="mt-10 w-full flex items-center justify-center gap-3 p-4 bg-green-600 rounded-lg font-bold text-lg text-white hover:bg-green-700 active:scale-95 transform transition-all duration-300 ease-in-out shadow-lg shadow-green-500/20"
                >
                  <Phone />
                  <span>Appeler maintenant (+212 661 064 329)</span>
                </a>
              </div>

              <div className="mt-8 h-64 w-full rounded-lg overflow-hidden border border-gray-300 relative">
                <iframe
                  src="https://www.google.com/maps?q=Route+Nationale+1+Complexe+Commercial+Ain+Al+Hayat+Mag+6+Skhirat+Maroc&output=embed"  // new embed link
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none flex items-end p-4">
                  <div className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-lg border border-gray-200">
                    <MapPin className="text-blue-600 h-5 w-5" />
                    <span className="text-gray-800 text-sm font-medium">charika</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partie Droite : Formulaire */}
            <form className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200 space-y-6">
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">Envoyez-nous un message</h3>

              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 placeholder-gray-400"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                <input
                  type="email"
                  placeholder="Votre adresse e-mail"
                  required
                  className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 placeholder-gray-400"
                />
              </div>

              {/* Numéro de téléphone */}
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                <input
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  required
                  pattern="[0-9]{8,15}"
                  inputMode="numeric"
                  className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 placeholder-gray-400"
                />
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-6 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                <textarea
                  rows={6}
                  placeholder="Votre message..."
                  className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 p-4 bg-blue-600 rounded-lg font-bold text-lg text-white hover:bg-blue-700 active:scale-95 transform transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20"
              >
                <Send className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
