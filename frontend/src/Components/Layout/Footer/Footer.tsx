import React from 'react';

export interface FooterProps {
  text?: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return <footer>{text}</footer>;
};

export default Footer;