'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- Interfaces ---
interface VehicleSpec {
  label: string;
  value: string;
  description?: string;
}

interface TechnicalSectionData {
  imageSrc: string;
  alt: string;
  specs: VehicleSpec[];
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
  imageSrc: string;
}

const ShowcasePage: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();

  // --- Données ---
  const initialSpecsCount = 3; 

  const technicalSections: TechnicalSectionData[] = [
    {
      imageSrc: '/images/cabsim.png',
      alt: 'Caractéristiques du moteur et de la performance',
      specs: [
        {
          label: 'Transmission',
          value: '4x2',
        },
        {
          label: 'Puissance',
          value: '150/3600tr/min',
        },
        {
          label: 'Couple',
          value: '400Nm/1500-2500 tr/min',
        },
        {
          label: 'Motorisation',
          value: '1,9L-Diesel turbo',
        },
        {
          label: 'Boite a vitesse',
          value: 'Manuelle-6 rapport',
        },
        {
          label: 'Dimension Benne',
          value: '2330x1580x480mm',
        },
        {
          label: 'Nbr de porte',
          value: '2 portes / 2 sièges',
        },
      ],
    },
    {
      imageSrc: '/images/cabdou.png',
      alt: 'Caractéristiques de la cabine et de la carrosserie',
      specs: [
        {
          label: 'Transmission',
          value: '4x4',
        },
        {
          label: 'Puissance',
          value: '163/3600tr/min',
        },
        {
          label: 'Couple',
          value: '400Nm/1500-2500 tr/min',
        },
        {
          label: 'Motorisation',
          value: '1,9L-Diesel turbo',
        },
        {
          label: 'Boite a vitesse',
          value: 'Manuelle-6 rapport',
        },
        {
          label: 'Dimension Benne',
          value: '1520x1520x540mm',
        },
        {
          label: 'Nbr de porte',
          value: '4 portes / 5 sièges',
        },
      ],
    },
  ];

  const featureSections: FeatureSection[] = [
    {
      title: 'Puissance',
      subtitle: 'La puissance qui fait la différence.',
      items: [
        {
          image: '/images/motor3.png',
          description: 'Moteur puissant, taillé pour affronter les conditions les plus extrêmes.',
        },
        {
          image: '/images/image1.png',
          description: 'Couple élevé disponible à bas régime pour une traction optimale.',
        },
        {
          image: '/images/motor.png',
          description: 'Fiabilité prouvée pour les professionnels les plus exigeants.',
        },
      ],
    },
    {
      title: 'Pneu',
      subtitle: 'Des pneus surélevés pour dominer tous les terrains.',
      items: [
        {
          image: '/images/pneu2.png',
          description:
            'Traction Control System Evite le patinage des roues et avance meme dans la boue.',
        },
        {
          image: '/images/pneu3.png',
          description:
            "Grace a sa garde au sol eleve, capable d'affronter tout types de chantiers.",
        },
      ],
    },
    {
      title: 'Siege',
      subtitle: 'Confort pensé pour tenir tous les trajets.',
      items: [
        { image: '/images/inter0.png', description: 'sièges et volant multifonction en cuir' },
        {
          image: '/images/inter3.png',
          description: 'sièges réglables pour un maintien personnalisé toute la journée.',
        },
        {
          image: '/images/inter4.png',
          description: 'Confort pensé pour les professionnels avec cabine spacieuse',
        },
      ],
    },
    {
      title: 'Systeme de vision',
      subtitle: 'Une vue complète, zéro angle mort.',
      items: [
        {
          image: '/images/vision7.png',
          description: 'Systeme de vision offre une visibilite optimale autour de vehicule.',
        },
        {
          image: '/images/vision9.png',
          description: 'Simplifie les déplacements en espaces restreints, évite les collisions.',
        },
        {
          image: '/images/vision4.png',
          description: 'Caméras et capteurs intelligents pour assister en temps réel.',
        },
      ],
    },
    {
      title: 'Securite',
      subtitle: 'Contrôle total, protection maximale.',
      items: [
        {
          image: '/images/vision3.png',
          description: 'Systeme de vision offre une visibilite optimale autour de vehicule.',
        },
        {
          image: '/images/vision1.png',
          description: 'Simplifie les déplacements en espaces restreints, évite les collisions.',
        },
        {
          image: '/images/vision8.png',
          description: 'corrige la trajectoire (stabilite en virage ou en cas de derapage).',
        },
      ],
    },
  ];

  const colorOptions: ColorOption[] = [
    { id: 'black', name: 'Noir', color: '#000000', imageSrc: '/images/colk.png' },
    { id: 'white', name: 'Blanc', color: '#EEEEEE', imageSrc: '/images/colb.png' },
    { id: 'silver', name: 'Argent', color: '#9E9E9E', imageSrc: '/images/colg.png' },
    { id: 'red', name: 'Rouge', color: '#f11a1a', imageSrc: '/images/colh.png' },
    { id: 'blue', name: 'Bleu', color: '#32458f', imageSrc: '/images/colz.png' },
  ];

  const activeColor = colorOptions.find((c) => c.id === selectedColor) || colorOptions[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMuted(!entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }
    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  // Toggle expansion for all cards simultaneously
  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="w-full bg-stone-50">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            ref={videoRef}
            src="/images/vedio.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.button
            onClick={() => {
              controls.start({ y: [0, 10, 0], transition: { duration: 0.5 } });
              document.getElementById('fiche-technique')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            aria-label="Faire défiler vers le bas"
            animate={controls}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-10 h-10 text-white" />
            </motion.div>
          </motion.button>
        </section>

        {/* Technical Specifications */}
        <section id="fiche-technique" className="py-10 md:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-2">
                Fiche Technique
              </h2>
              <div className="w-16 h-0.5 bg-stone-300 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-stone-200 flex flex-col"
                >
                  <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden">
                    <Image src={section.imageSrc} alt={section.alt} fill className="object-cover" />
                  </div>
                  <div className="space-y-4 flex-grow flex flex-col">
                    {section.specs.slice(0, initialSpecsCount).map((spec, specIndex) => (
                      <div
                        key={`section${sectionIndex}-initial-${specIndex}`}
                        className="border-b border-stone-100 pb-3"
                      >
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-stone-700">{spec.label}</p>
                          <p className="text-stone-600 font-semibold">{spec.value}</p>
                        </div>
                        {spec.description && (
                          <p className="mt-2 text-sm text-stone-600 italic">{spec.description}</p>
                        )}
                      </div>
                    ))}

                    {/* MODIFICATION 3 : On vérifie l'état de la carte spécifique (isExpanded[sectionIndex]) */}
                    {isExpanded &&
                      section.specs.slice(initialSpecsCount).map((spec, specIndex) => (
                        <div
                          key={`section${sectionIndex}-expanded-${specIndex}`}
                          className="border-b border-stone-100 pb-3"
                        >
                          <div className="flex justify-between items-center">
                            <p className="font-medium text-stone-700">{spec.label}</p>
                            <p className="text-stone-600 font-semibold">{spec.value}</p>
                          </div>
                          {spec.description && (
                            <p className="mt-2 text-sm text-stone-600 italic">{spec.description}</p>
                          )}
                        </div>
                      ))}

                    {section.specs.length > initialSpecsCount && (
                      <div className="text-center pt-3 mt-auto">
                        <button
                          // MODIFICATION 4 : On appelle la nouvelle fonction avec l'index de la carte
                          onClick={toggleExpanded}
                          className="font-semibold text-stone-700 hover:text-stone-900 transition-colors duration-200 flex items-center justify-center mx-auto"
                        >
                          {/* MODIFICATION 5 : On vérifie l'état de la carte spécifique pour le texte du bouton */}
                          {isExpanded ? (
                            <>
                              <span>Lire moins</span>
                              <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>Lire la suite</span>
                              <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Sections */}
        {featureSections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className={`py-10 md:py-14 ${sectionIndex % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-stone-600 max-w-3xl mx-auto">{section.subtitle}</p>
                <div className="w-16 h-0.5 bg-stone-300 mx-auto mt-4" />
              </div>
              <div
                className={`grid grid-cols-1 gap-6 ${section.items?.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}
              >
                {section.items?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-stone-200"
                  >
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${section.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-stone-700 text-center">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Color Customization */}
        <section className="py-10 md:py-14 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-2">
                Personnalisation
              </h2>
              <div className="w-16 h-0.5 bg-stone-300 mx-auto mt-4" />
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-2/3 h-[350px] md:h-[500px] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  key={activeColor.id}
                  src={activeColor.imageSrc}
                  alt={`Aperçu du véhicule en couleur ${activeColor.name}`}
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out"
                />
              </div>
              <div className="w-full lg:w-1/3 space-y-6">
                <h3 className="text-xl font-semibold text-stone-800 text-center lg:text-left">
                  Couleurs disponibles
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`group relative p-4 rounded-lg transition-all ${selectedColor === color.id ? 'ring-2 ring-stone-900' : 'hover:shadow-md'}`}
                      style={{ backgroundColor: color.color }}
                      aria-label={`Choisir la couleur ${color.name}`}
                    ></button>
                  ))}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                  <h4 className="text-lg font-semibold text-stone-800 mb-3">Votre sélection</h4>
                  <div className="flex items-center mb-4">
                    <div
                      className="w-8 h-8 rounded-full mr-3 border border-stone-300"
                      style={{ backgroundColor: activeColor.color }}
                    />
                    <div>
                      <p className="font-medium text-stone-900">{activeColor.name}</p>
                      <p className="text-xs text-stone-600">Couleur extérieure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShowcasePage;