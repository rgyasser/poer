'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, User, Mail, Phone, MessageSquare, CheckCircle, Zap, GaugeCircle, Gem } from 'lucide-react';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Devis', href: '/devis' },
        { label: 'SAV', href: '/sav' },
        { href: '/contact', label: 'Contact' },
    ];
    return (
        <header className="w-full bg-white/90 backdrop-blur-sm text-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto px-6 flex justify-between items-center h-20">
                <a href="/" className="flex-shrink-0 flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors">
  <img src="images/logo.png" alt="" className='w-13 hover:scale-95 transition-transform'/>
</a>
                <nav className="hidden lg:flex gap-8">
                    {menuItems.map(item => (
                        <a key={item.label} href={item.href} className="relative group font-medium text-gray-700 hover:text-blue-600 transition-colors">
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
                <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6h16" /></svg>
                </button>
            </div>
            {menuOpen && (
                <nav className="lg:hidden bg-white"><div className="flex flex-col p-4">{menuItems.map(item => <a key={item.label} href={item.href} className="py-2 px-4 text-gray-700 rounded hover:bg-gray-100">{item.label}</a>)}</div></nav>
            )}
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} AutoPrestige. Tous droits réservés.</p>
        </div>
    </footer>
);

export default function DevisPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Données du devis :", formData);
        setIsSubmitted(true);
    };

    const carFeatures = [
        { icon: <GaugeCircle className="text-blue-600" />, text: "0-100 km/h en 2.9s" },
        { icon: <Zap className="text-blue-600" />, text: "Puissance de 720 ch" },
        { icon: <Gem className="text-blue-600" />, text: "Finitions en fibre de carbone" },
    ];

    if (isSubmitted) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                <main className="flex-grow flex items-center justify-center text-gray-900 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center bg-white border border-gray-200 p-10 rounded-2xl shadow-lg"
                    >
                        <CheckCircle className="text-green-500 w-24 h-24 mx-auto mb-6"/>
                        <h2 className="text-3xl font-bold text-center mb-4">Demande envoyée !</h2>
                        <p className="text-gray-600 text-lg">Merci, {formData.name || 'pour votre intérêt'}.<br/>Nous avons bien reçu votre demande et nous vous contacterons très prochainement.</p>
                        <button 
                            onClick={() => setIsSubmitted(false)} 
                            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                        >
                            Faire une autre demande
                        </button>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow w-full pt-24">
                <div className="min-h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                    >
                        {/* Partie Gauche : Infos Véhicule */}
                        <div className="p-8 flex flex-col justify-center">
                            <motion.img 
                                src="images/image1.jpg" 
                                alt="Voiture de sport" 
                                className="rounded-lg mb-6 shadow-md"
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Demandez un devis pour la Superbe GT</h2>
                            <p className="text-gray-600 mb-6">Vivez l'exception. Remplissez le formulaire pour obtenir une offre personnalisée et faire le premier pas vers votre rêve.</p>
                            <div className="space-y-3">
                                {carFeatures.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        {feature.icon}
                                        <span className="text-gray-700">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Partie Droite : Formulaire */}
                        <form onSubmit={handleSubmit} className="p-8 bg-gray-50 space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-900">Vos informations</h3>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Nom complet" 
                                    required 
                                    onChange={handleChange} 
                                    className="w-full pl-12 p-4 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Adresse e-mail" 
                                    required 
                                    onChange={handleChange} 
                                    className="w-full pl-12 p-4 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Numéro de téléphone" 
                                    onChange={handleChange} 
                                    className="w-full pl-12 p-4 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                />
                            </div>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-6 text-gray-400" />
                                <textarea 
                                    name="message" 
                                    rows={5} 
                                    placeholder="Un message ou des précisions ?" 
                                    onChange={handleChange} 
                                    className="w-full pl-12 p-4 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full p-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 active:scale-95 transform transition-all duration-300 ease-in-out shadow-md"
                            >
                                Envoyer ma demande
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}