import React from 'react';
import Logo from '../../UI/Logo.tsx/Logo';
import { DivCopyright, FooterSignIn } from './styles';

const FooterFilmCard: React.FC = () => {
  return (
    <FooterSignIn>
      <Logo footer={true} />
      <DivCopyright>Fess inc@</DivCopyright>
    </FooterSignIn>
  )
};

export default FooterFilmCard;