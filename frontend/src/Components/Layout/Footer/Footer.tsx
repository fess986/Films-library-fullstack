import React from 'react';
import Logo from '../../UI/Logo.tsx/Logo';
import { DivCopyright, FooterMain } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterMain>
      <Logo footer={true} />
      <DivCopyright>Fess inc@</DivCopyright>
    </FooterMain>
  )
};

export default Footer;