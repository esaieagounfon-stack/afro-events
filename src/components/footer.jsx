import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-fuchsia-500/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Liens de navigation */}
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#accueil" className="hover:text-fuchsia-300 transition duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#evenements" className="hover:text-fuchsia-300 transition duration-300">
                  Événements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-fuchsia-300 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Icônes sociales */}
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75 transition duration-300">
              <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-75 transition duration-300">
              <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-75 transition duration-300">
              <img src="/Whatsap.png" alt="WhatsApp" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-slate-400">
          <p>&copy; 2024 AfroEvent. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;