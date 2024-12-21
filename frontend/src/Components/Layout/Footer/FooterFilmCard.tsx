import React from 'react';

import { DivCopyright, FooterSignIn } from './styles';
import Logo from '../../UI/Logo.tsx/Logo';

const FooterFilmCard: React.FC = () => {
  return (
    <FooterSignIn>
      <Logo footer={true} />
      <DivCopyright>Fess inc@</DivCopyright>
    </FooterSignIn>
  )
};

export default FooterFilmCard;