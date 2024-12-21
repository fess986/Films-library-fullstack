import React from 'react';

import { DivCopyright, FooterMain } from './styles';
import Logo from '../../UI/Logo.tsx/Logo';

const Footer: React.FC = () => {
  return (
    <FooterMain>
      <Logo footer={true} />
      <DivCopyright>Fess inc@</DivCopyright>
    </FooterMain>
  )
};

export default Footer;