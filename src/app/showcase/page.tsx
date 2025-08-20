'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

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

// --- Carousel Image Interface ---
interface CarouselImage {
  src: string;
  alt: string;
}

const ShowcasePage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);

  const controls = useAnimation();

  // --- Image Data ---
  const desktopImages: CarouselImage[] = [
    { src: '/images/poer00.png', alt: 'Desktop Image 1' },
    { src: '/images/poer11.png', alt: 'Desktop Image 2' },
  ];

  const mobileImages: CarouselImage[] = [
    { src: '/images/poermobile1.png', alt: 'Mobile Image 1' },
    { src: '/images/poermobile22.png', alt: 'Mobile Image 2' },
  ];

  // --- Données ---
  const initialSpecsCount = 3;

  const technicalSections: TechnicalSectionData[] = [
    {
      imageSrc: '/images/cabsim.png',
      alt: 'Caractéristiques du moteur et de la performance',
      specs: [
        {
          label: 'Nom',
          value: 'Elite Simple Cabine',
        },
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
          label: 'Boîte de vitesse ',
          value: 'Manuelle-6 rapport',
        },
        {
          label: 'Dimension Benne',
          value: '2330x1580x480mm',
        },
        {
          label: 'Nombre de porte ',
          value: '2 portes / 2 sièges',
        },
      ],
    },
    {
      imageSrc: '/images/cabdou.png',
      alt: 'Caractéristiques de la cabine et de la carrosserie',
      specs: [
        {
          label: 'Nom',
          value: 'Pilot Double Cabine',
        },
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
          label: 'Boîte de vitesse ',
          value: 'Manuelle-6 rapport',
        },
        {
          label: 'Dimension Benne',
          value: '1520x1520x540mm',
        },
        {
          label: 'Nombre de porte',
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
          image: '/images/pneu.png',
          description: "Charge utile 1.5 T et traction jusqu'à 3 T",

        },
        {
          image: '/images/motor.png',
          description: '163 chevaux prêts à relever tous les défis, jour après jour.',
        },
      ],
    },
    {
      title: 'Pneu',
      subtitle: 'Des pneus surélevés pour dominer tous les terrains (245 / 70 R 17).',
      items: [
        {
          image: '/images/pneu22.png',
          description:
            'Ce pneu de dimension 245/70 R17 est conçu pour offrir une excellente adhérence sur route sèche comme mouillée, tout en garantissant confort et stabilité de conduite.',
        },
        {
          image: '/images/pneu3.png',
          description:
            "Traction Control System. Evite le patinage des roues et avance même dans la boue",
        },
      ],
    },
    {
      title: 'Siège',
      subtitle: 'Confort pensé pour tenir tous les trajets.',
      items: [
        { image: '/images/inter0.png', description: 'sièges et volant multifonction en cuir' },
        {
          image: '/images/inter3.png',
          description: 'sièges réglables pour un maintien personnalisé toute la journée',
        },
        {
          image: '/images/inter4.png',
          description: 'Confort pensé pour les professionnels avec cabine spacieuse.',
        },
      ],
    },
    {
      title: 'Système  de vision',
      subtitle: 'Une vue complète, zéro angle mort.',
      items: [
        {
          image: '/images/vision7.png',
          description: 'Le système de vision offre une visibilité optimale autour du véhicule.',
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
      title: 'Sécurité',
      subtitle: 'Contrôle total, protection maximale.',
      items: [
        {
          image: '/images/vision3.png',
          description: 'Évite le risque de retournement. Sécurité sur pentes.',
        },
        {
          image: '/images/vision1.png',
          description: 'Empêche les roues de bloquer au freinage/contrôle même sur sol glissant.',
        },
        {
          image: '/images/vision8.png',
          description: 'Corrige la trajectoire (stabilité en virage ou en cas de dérapage).',
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Example breakpoint for mobile
      setCarouselImages(isMobile ? mobileImages : desktopImages);
    };

    handleResize(); // Set initial images on component mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (carouselImages.length > 0) {
      const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(slideInterval);
    }
  }, [carouselImages, currentSlide]); // Rerun effect if images change

  // Toggle expansion for all cards simultaneously
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full bg-stone-50">
      <Header />

      <main className="w-full">
        {/* Hero Section with Carousel */}
        <section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
          <AnimatePresence>
            {carouselImages.length > 0 && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
                className="w-full h-full"
              >
                <Image
                  src={carouselImages[currentSlide].src}
                  alt={carouselImages[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Call to Action Content */}
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
            <Link
              href="/contact"
              className="bg-black/20 backdrop-blur-sm border border-white/75 text-white font-bold py-2 px-6 rounded-lg text-base hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contactez-nous
            </Link>
          </div> */}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </section>

        {/* Technical Specifications */}
        <section id="fiche-technique" className="py-3 md:py-3 bg-white">
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
                          onClick={toggleExpanded}
                          className="font-semibold text-stone-700 hover:text-stone-900 transition-colors duration-200 flex items-center justify-center mx-auto"
                        >
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