// Pour utiliser les nouvelles icônes, vous devez d'abord installer les bibliothèques :
// npm install lucide-react framer-motion
// ou
// yarn add lucide-react framer-motion

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  User,
  Mail,
  Menu,
  X,
  Car,
  Wrench,
  ScanSearch,
  PaintRoller,
  Puzzle,
  ConciergeBell,
  ShieldCheck,
} from 'lucide-react';

// --- Composants réutilisés : Header et Footer (à importer depuis vos fichiers) ---
// Note : J'utilise la version claire du Header/Footer que vous avez fournie précédemment.

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
      className={`w-full bg-white/90 backdrop-blur-sm text-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md ${className}`}
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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} AutoPrestige. Tous droits réservés.</p>
        <p className="text-sm mt-2">L'excellence, à chaque kilomètre.</p>
      </div>
    </footer>
  );
};

// --- Composant principal de la page SAV ---
export default function SAVPage() {
  const services = [
    {
      title: 'Entretien et Révision',
      description:
        'Confiez-nous votre véhicule pour des révisions complètes effectuées par nos experts, garantissant performance et longévité.',
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      imageUrl:
        'https://images.unsplash.com/photo-1567789825623-a12731c433cb?q=80&w=2574&auto=format&fit=crop',
    },
    {
      title: 'Diagnostic Électronique',
      description:
        'Grâce à nos équipements de pointe, nous identifions avec précision toute anomalie électronique pour une fiabilité sans faille.',
      icon: <ScanSearch className="h-10 w-10 text-blue-600" />,
      imageUrl:
        'https://images.unsplash.com/photo-1621996346565-e326e7e2480e?q=80&w=2670&auto=format&fit=crop',
    },
    {
      title: 'Carrosserie et Peinture',
      description:
        "Rayures, impacts ou personnalisation ? Notre atelier redonne à votre voiture son éclat d'origine avec des produits et techniques de haute qualité.",
      icon: <PaintRoller className="h-10 w-10 text-blue-600" />,
      imageUrl:
        'https://images.unsplash.com/photo-1603357317426-3d9925a3a2e2?q=80&w=2574&auto=format&fit=crop',
    },
    {
      title: "Pièces d'Origine",
      description:
        "Nous utilisons exclusivement des pièces et accessoires d'origine constructeur pour préserver l'intégrité et la valeur de votre véhicule.",
      icon: <Puzzle className="h-10 w-10 text-blue-600" />,
      imageUrl:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop',
    },
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] bg-gray-800 text-white flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="images/sav.jpg"
              alt="Atelier de service après-vente"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Un Service d'Excellence
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Parce que votre tranquillité d'esprit est notre priorité, notre service après-vente
              vous accompagne.
            </p>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nos Prestations</h2>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez comment nous prenons soin de votre véhicule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-8"
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6 py-16 text-center">
          <a
            href="/contact"
            className="mt-8 inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Prendre Rendez-vous
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
