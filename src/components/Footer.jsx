import React from 'react';

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="bg-primary py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} AnishPillai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

