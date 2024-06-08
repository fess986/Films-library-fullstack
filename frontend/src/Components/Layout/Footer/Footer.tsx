import React from 'react';
import Logo from '../../UI/Logo.tsx/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="main-page__footer footer">
      <Logo footer={true} />
      <div className="footer__copyright copypright">
        <p>Fess inc@</p>
      </div>
    </footer>
  )
};

export default Footer;