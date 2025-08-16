'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
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

      <main className="flex-grow ">
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

    </div>
  );
}
