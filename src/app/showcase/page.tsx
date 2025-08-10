// page.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Slider from 'react-slick';

// Import des styles de react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// --- Interfaces pour gérer toutes nos mises en page ---
interface VehicleSpec {
  label: string;
  value: string;
}
interface FeatureSection {
  title: string;
  subtitle: string;
  items?: {
    image: string;
    description: string;
  }[];
}
interface ColorOption {
  id: string;
  name: string;
  color: string;
  imageSrc: string; // Le chemin vers l'image correspondante
}

const ShowcasePage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('black');

  // --- Données pour la Fiche Technique ---
  const vehicleSpecs: VehicleSpec[] = [
    { label: 'Transmission', value: '4x2' },
    { label: 'Puissance', value: '150/3600tr/min' },
    { label: 'Couple', value: '400Nm/1500-2500 tr/min' },
    { label: 'Motorisation', value: '1,9L-Diesel turbo' },
    { label: 'Boite a vitesse', value: 'Manuelle-6 rapport' },
    { label: 'Dimension', value: '2330x1580x480' },
    { label: 'Nbr de porte', value: '2porte/2sieges' },
  ];
  const initialSpecsCount = 4;

  const heroImages = ['/images/carou.png', '/images/carou2.png', '/images/img_clip_path_group.png'];

  // --- Données pour les sections de caractéristiques ---
  const puissanceSection: FeatureSection = {
    title: 'Puissance',
    subtitle: 'La puissance qui fait la différence.',
    items: [
      { image: '/images/carou.png', description: 'Moteur puissant, taillé pour affronter les conditions les plus extrêmes.' },
      { image: '/images/carou2.png', description: 'Couple élevé disponible à bas régime pour une traction optimale.' },
      { image: '/images/img_clip_path_group.png', description: 'Fiabilité prouvée pour les professionnels les plus exigeants.' },
    ],
  };
  
  const pneuSection: FeatureSection = {
    title: 'Pneu',
    subtitle: 'Des pneus surélevés pour dominer tous les terrains.',
    items: [
      { image: '/images/img_clip_path_group.png', description: 'Traction Control System Evite le patinage des roues et avance meme dans la boue.' },
      { image: '/images/carou.png', description: "Grace a sa garde au sol eleve, capable d'affronter tout types de chantiers." },
    ],
  };

  const siegeSection: FeatureSection = {
    title: 'Siege',
    subtitle: 'Confort pensé pour tenir tous les trajets.',
    items: [
        { image: '/images/carou.png', description: 'sièges et volant multifonction en cuir' },
        { image: '/images/carou2.png', description: 'sièges réglables pour un maintien personnalisé toute la journée.' },
        { image: '/images/img_clip_path_group.png', description: 'Confort pensé pour les professionnels avec cabine spacieuse' },
    ]
  };
  
  const visionSection: FeatureSection = {
    title: 'Systeme de vision',
    subtitle: 'Une vue complète, zéro angle mort.',
    items: [
        { image: '/images/img_clip_path_group.png', description: 'Systeme de vision offre une visibilite optimale autour de vehicule.' },
        { image: '/images/carou.png', description: 'Simplifie les déplacements en espaces restreints, évite les collisions.' },
        { image: '/images/carou2.png', description: 'Caméras et capteurs intelligents pour assister en temps réel.' },
    ]
  };

  const securiteSection: FeatureSection = {
    title: 'Securite',
    subtitle: 'Contrôle total, protection maximale.',
    items: [
        { image: '/images/img_clip_path_group.png', description: 'Systeme de vision offre une visibilite optimale autour de vehicule.' },
        { image: '/images/carou.png', description: 'Simplifie les déplacements en espaces restreints, évite les collisions.' },
        { image: '/images/carou2.png', description: 'Caméras et capteurs intelligents pour assister en temps réel.' },
    ]
  };

  const colorOptions: ColorOption[] = [
    { id: 'black', name: 'Noir', color: '#000000', imageSrc: '/images/carou.png' },
    { id: 'silver', name: 'Argent', color: '#d9d9d9', imageSrc: '/images/carou2.png' },
    { id: 'red', name: 'Rouge', color: '#f11a1a', imageSrc: '/images/img_clip_path_group.png' }, 
    { id: 'green', name: 'Vert', color: '#04b200', imageSrc: '/images/carou.png' },
  ];

  // On trouve l'objet complet de la couleur active pour accéder à son image
  const activeColor = colorOptions.find((c) => c.id === selectedColor) || colorOptions[0];

  return (
    <div className="w-full bg-gray-100">
      <Header />

      <main className="w-full">
        {/* Section Carrousel */}
        <section>
          <Slider
            dots
            autoplay
            autoplaySpeed={4000}
            arrows={false}
            infinite
            className="w-full h-[50vh] md:h-[90vh] max-h-[700px]"
          >
            {heroImages.map((src, i) => (
              <div key={i} className="relative w-full h-[50vh] md:h-[90vh] max-h-[700px]">
                <Image
                  src={src}
                  alt={`Hero slide ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </Slider>
        </section>

        {/* --- SECTION TECHNIQUE (FICHE TECHNIQUE ET TOUTES LES CARACTÉRISTIQUES) --- */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 1. Titre et grille de la Fiche Technique */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fiche Technique</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[1, 2].map((colNum) => (
                <div key={colNum} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="relative w-full h-56 mb-6 rounded-md overflow-hidden">
                    <Image
                      src={colNum === 1 ? '/images/carou.png' : '/images/carou2.png'}
                      alt={`Vue du véhicule ${colNum}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    {vehicleSpecs.slice(0, initialSpecsCount).map((spec, index) => (
                      <div
                        key={`col${colNum}-initial-${index}`}
                        className="flex justify-between items-center border-b border-gray-200 pb-3 text-sm"
                      >
                        <p className="font-semibold text-gray-800">{spec.label}</p>
                        <p className="text-gray-600 text-right">{spec.value}</p>
                      </div>
                    ))}
                    {isExpanded &&
                      vehicleSpecs.slice(initialSpecsCount).map((spec, index) => (
                        <div
                          key={`col${colNum}-expanded-${index}`}
                          className="flex justify-between items-center border-b border-gray-200 pb-3 text-sm"
                        >
                          <p className="font-semibold text-gray-800">{spec.label}</p>
                          <p className="text-gray-600 text-right">{spec.value}</p>
                        </div>
                      ))}
                    {vehicleSpecs.length > initialSpecsCount && (
                      <div className="text-center pt-2">
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          {isExpanded ? 'Lire moins' : 'Lire la suite'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 2. Section "Puissance" */}
            <div className="mt-16 md:mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {puissanceSection.title}
                </h2>
                <p className="mt-2 text-lg text-gray-600">{puissanceSection.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {puissanceSection.items?.map((item, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={`${puissanceSection.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 3. Section "Pneu" */}
            <div className="mt-16 md:mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {pneuSection.title}
                </h2>
                <p className="mt-2 text-lg text-gray-600">{pneuSection.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pneuSection.items?.map((item, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={`${pneuSection.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 4. Section "Siege" */}
            <div className="mt-16 md:mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{siegeSection.title}</h2>
                <p className="mt-2 text-lg text-gray-600">{siegeSection.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {siegeSection.items?.map((item, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={`${siegeSection.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Section "Systeme de vision" */}
            <div className="mt-16 md:mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{visionSection.title}</h2>
                <p className="mt-2 text-lg text-gray-600">{visionSection.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {visionSection.items?.map((item, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={`${visionSection.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Section "Securite" */}
            <div className="mt-16 md:mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{securiteSection.title}</h2>
                <p className="mt-2 text-lg text-gray-600">{securiteSection.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {securiteSection.items?.map((item, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={`${securiteSection.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section pour le choix de couleur */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Personnalisez votre véhicule
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Choisissez la couleur qui vous ressemble avant d'acheter.
              </p>
            </div>
            <div className="w-full h-[300px] md:h-[500px] relative rounded-lg overflow-hidden shadow-2xl mb-12">
              <Image
                key={activeColor.id}
                src={activeColor.imageSrc}
                alt={`Aperçu du véhicule en couleur ${activeColor.name}`}
                fill
                className="object-cover transition-opacity duration-500 ease-in-out"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Choisissez votre couleur</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-16 h-16 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 focus:outline-none flex items-center justify-center ${selectedColor === color.id ? 'ring-4 ring-offset-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color.color }}
                    aria-label={`Choisir la couleur ${color.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShowcasePage;