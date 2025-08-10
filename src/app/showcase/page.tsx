'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import { VehicleSpec, FeatureSection, ColorOption } from '@/types/showcase';
import Slider from 'react-slick';

// Import react-slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShowcasePage: React.FC = () => {
  // Moved heroImages inside the component to be accessible
  const heroImages = ['/images/carou.png', '/images/carou2.png', '/images/img_clip_path_group.png'];

  const vehicleSpecs: VehicleSpec[] = [
    { label: 'Transmision', value: '4x2' },
    { label: 'Puissance', value: '150/3600tr/min' },
    { label: 'Couple', value: '400Nm/1500-2500 tr/min' },
    { label: 'Motorisation', value: '1,9L-Diesel turbo' },
    { label: 'Boite a vitesse', value: 'Manuelle-6 rappoort' },
    { label: 'Dimensimo', value: '2330x1580x480' },
    { label: 'Nbr de porte', value: '2porte/2sieges' },
  ];
  const featureSections: FeatureSection[] = [
    {
      title: 'Puissance',
      subtitle: 'La puissance qui fait la différence.',
      images: ['/images/carou.png'],
      descriptions: [
        'Moteur puissant, taillé pour affronter les conditions les plus extrêmes.',
        'Moteur puissant, taillé pour affronter les conditions les plus extrêmes.',
        'Moteur puissant, taillé pour affronter les conditions les plus extrêmes.',
      ],
    },
    {
      title: 'Pneu',
      subtitle: 'Des pneus surélevés pour dominer tous les terrains.',
      images: ['/images/img_clip_path_group.png', '/images/img_clip_path_group.png'],
      descriptions: [
        'Traction Control System Evite le patinage des roues et avance meme dans la boue',
        "Grace a sa garde au sol eleve Capable d'affronter tout types de chantiers",
      ],
    },
    {
      title: 'Siege',
      subtitle: 'Confort pensé pour tenir tous les trajets.',
      images: [
        '/images/img_clip_path_group.png',
        '/images/img_clip_path_group.png',
        '/images/img_clip_path_group.png',
      ],
      descriptions: [
        'sièges et volant multifonction en cuir',
        'sièges réglables pour un maintien personnalisé toute la journée.',
        'Confort pensé pour les professionnels avec cabine spacieuse',
      ],
    },
    {
      title: 'Systeme de vision',
      subtitle: 'Une vue complète, zéro angle mort.',
      images: [
        '/images/img_clip_path_group.png',
        '/images/img_clip_path_group.png',
        '/images/img_clip_path_group.png',
      ],
      descriptions: [
        'Systeme de vision offre une visibilite optimale autour de vehicule',
        'simplifie les déplacements en espaces restreints, évite collisions.',
        'Caméras et capteurs intelligents pourassiteren temps réel.',
      ],
    },
    {
      title: 'Securite',
      subtitle: 'Contrôle total, protection maximale.',
      images: [
        '/images/img_clip_path_group.png',
        '/images/img_clip_path_group.png',
        '/images/img_clip_path_group.png',
      ],
      descriptions: [
        'Systeme de vision offre une visibilite optimale autour de vehicule',
        'simplifie les déplacements en espaces restreints, évite collisions.',
        'Caméras et capteurs intelligents pourassiteren temps réel.',
      ],
    },
  ];
  const colorOptions: ColorOption[] = [
    { id: 'black', name: 'Noir', color: '#000000' },
    { id: 'silver', name: 'Argent', color: '#d9d9d9' },
    { id: 'red', name: 'Rouge', color: '#f11a1a' },
    { id: 'green', name: 'Vert', color: '#04b200' },
  ];

  return (
    <div className="w-full bg-[#f2f2f2] min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="w-full">
        <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-start items-center w-full">
          <section className="w-full">
            <Slider
              dots
              autoplay
              autoplaySpeed={4000}
              arrows
              infinite
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[614px]"
            >
              {heroImages.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[614px]"  // ← updated
                >
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
          {/* Vehicle Specifications and Images */}
          <section className="w-full">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mr-[34px] sm:mr-[51px] lg:mr-[68px] ml-[38px] sm:ml-[57px] lg:ml-[76px]">
                <div className="flex flex-col justify-start items-center w-full">
                  {/* Vehicle Images Row */}
                  <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                    <div className="w-full sm:w-[44%]">
                      <Image
                        src="/images/img_clip_path_group.png"
                        alt="Nissan Navara Side View"
                        width={548}
                        height={248}
                        className="w-full h-[150px] sm:h-[180px] lg:h-[248px] object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-[44%]">
                      <Image
                        src="/images/img_clip_path_group.png"
                        alt="Nissan Navara Front View"
                        width={548}
                        height={248}
                        className="w-full h-[150px] sm:h-[180px] lg:h-[248px] object-cover"
                      />
                    </div>
                  </div>
                  {/* Specifications List */}
                  <div className="mt-[13px] sm:mt-[19px] lg:mt-[26px] mr-[22px] sm:mr-[33px] lg:mr-[44px] w-full">
                    <div className="flex flex-col gap-[9px] sm:gap-[13px] lg:gap-[18px] w-full">
                      {vehicleSpecs.map((spec, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row justify-center items-start sm:items-center w-full gap-2 sm:gap-0"
                        >
                          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full sm:w-auto gap-2 sm:gap-0">
                            <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-poppins font-semibold leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#000000]">
                              {spec.label}
                            </span>
                            <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-poppins font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#000000] ml-0 sm:ml-[24px] md:ml-[36px] lg:ml-[48px]">
                              {spec.value}
                            </span>
                          </div>
                          <div className="hidden sm:flex flex-row gap-[24px] sm:gap-[36px] lg:gap-[48px] justify-center items-center w-full sm:flex-1 px-[28px] sm:px-[42px] lg:px-[56px]">
                            <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-poppins font-semibold leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#000000]">
                              {spec.label}
                            </span>
                            <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-poppins font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#000000]">
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Puissance Section Title */}
                  <div className="mt-[16px] sm:mt-[24px] lg:mt-[32px] text-center">
                    <h2 className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-arial font-bold leading-[21px] sm:leading-[28px] md:leading-[35px] lg:leading-[42px] text-[#000000]">
                      Puissance
                    </h2>
                    <p className="text-[16px] sm:text-[22px] md:text-[27px] lg:text-[32px] font-arial font-normal leading-[18px] sm:leading-[25px] md:leading-[31px] lg:leading-[37px] text-[#000000] mt-[5px] sm:mt-[7px] lg:mt-[10px]">
                      La puissance qui fait la différence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Sections */}
          {featureSections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="w-full">
              <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mr-[27px] sm:mr-[40px] lg:mr-[54px] ml-[18px] sm:ml-[27px] lg:ml-[36px]">
                  <div className="flex flex-col justify-start items-center w-full">
                    {/* Feature Images */}
                    <div
                      className={`flex flex-col ${section.images.length === 2 ? 'sm:flex-row justify-between' : 'sm:flex-row justify-center'} items-center w-full gap-4 sm:gap-[21px] lg:gap-[42px] ${sectionIndex === 0 ? '' : 'mt-[20px] sm:mt-[30px] lg:mt-[40px]'}`}
                    >
                      {section.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`${section.images.length === 2 ? 'w-full sm:w-[46%]' : 'w-full sm:w-[32%]'} ${sectionIndex === 1 && imageIndex === 0 ? 'mt-[2px] sm:mt-[3px] lg:mt-[4px]' : ''}`}
                        >
                          <Image
                            src={image}
                            alt={`${section.title} Feature ${imageIndex + 1}`}
                            width={section.images.length === 2 ? 580 : 392}
                            height={section.images.length === 2 ? 250 : 256}
                            className={`w-full ${section.images.length === 2 ? 'h-[150px] sm:h-[180px] lg:h-[250px]' : 'h-[150px] sm:h-[180px] lg:h-[256px]'} object-cover`}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Feature Descriptions */}
                    <div
                      className={`mt-[4px] sm:mt-[6px] lg:mt-[8px] ${sectionIndex !== 0 ? 'mr-[7px] sm:mr-[10px] lg:mr-[14px]' : ''} ml-[3px] sm:ml-[4px] lg:ml-[6px] w-full`}
                    >
                      <div
                        className={`flex flex-col ${section.descriptions.length === 2 ? 'sm:flex-row justify-between' : 'sm:flex-row justify-start'} items-start sm:items-center w-full gap-4 sm:gap-[21px] lg:gap-[42px]`}
                      >
                        {section.descriptions.map((description, descIndex) => (
                          <p
                            key={descIndex}
                            className={`text-[16px] sm:text-[22px] md:text-[27px] lg:text-[32px] font-poppins font-light leading-[24px] sm:leading-[33px] md:leading-[40px] lg:leading-[48px] text-[#000000] ${section.descriptions.length === 2 ? 'w-full sm:w-[44%]' : descIndex === 0 ? 'w-full sm:w-[34%] self-start' : 'w-full sm:w-[32%]'}`}
                          >
                            {description}
                          </p>
                        ))}
                      </div>
                    </div>
                    {/* Section Title and Subtitle (for sections after Puissance) */}
                    {sectionIndex > 0 && (
                      <div className="mt-[27px] sm:mt-[40px] lg:mt-[54px] text-center">
                        <h2 className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-arial font-bold leading-[21px] sm:leading-[28px] md:leading-[35px] lg:leading-[42px] text-[#000000]">
                          {section.title}
                        </h2>
                        <p className="text-[16px] sm:text-[22px] md:text-[27px] lg:text-[32px] font-arial font-normal leading-[18px] sm:leading-[25px] md:leading-[31px] lg:leading-[37px] text-[#000000] mt-[4px] sm:mt-[6px] lg:mt-[8px]">
                          {section.subtitle}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
          {/* Color Selection Section */}
          <section className="w-full">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mr-[27px] sm:mr-[40px] lg:mr-[54px] ml-[18px] sm:ml-[27px] lg:ml-[36px]">
                <div className="flex flex-col justify-start items-center w-full">
                  {/* Color Selection Title */}
                  <div className="mt-[21px] sm:mt-[31px] lg:mt-[42px] text-center">
                    <h2 className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-arial font-bold leading-[21px] sm:leading-[28px] md:leading-[35px] lg:leading-[42px] text-[#000000]">
                      Choisir la couleur avant ACHETER
                    </h2>
                  </div>
                  {/* Vehicle Color Preview */}
                  <div className="mt-[15px] sm:mt-[22px] lg:mt-[30px] w-full">
                    <Image
                      src="/images/img_clip_path_group.png"
                      alt="Nissan Navara Color Preview"
                      width={1274}
                      height={760}
                      className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[760px] object-cover"
                    />
                  </div>
                  {/* Color Selection Interface */}
                  <div className="mt-[25px] sm:mt-[37px] lg:mt-[50px] w-full">
                    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end w-full gap-4 sm:gap-0">
                      <span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-inknut-antiqua font-normal leading-[62px] sm:leading-[83px] md:leading-[104px] lg:leading-[124px] text-[#000000] text-center sm:text-left">
                        Choisir votre couleur
                      </span>
                      <div className="px-[28px] sm:px-[42px] lg:px-[56px] w-full sm:flex-1">
                        <div className="flex flex-wrap sm:flex-nowrap gap-[19px] sm:gap-[28px] lg:gap-[38px] justify-center items-center">
                          {colorOptions.map((color) => (
                            <button
                              key={color.id}
                              className="w-[52px] h-[52px] sm:w-[78px] sm:h-[78px] lg:w-[104px] lg:h-[104px] rounded-full hover:scale-110 transition-transform duration-200 border-2 border-transparent hover:border-gray-400"
                              style={{ backgroundColor: color.color }}
                              aria-label={`Select ${color.name} color`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShowcasePage;
