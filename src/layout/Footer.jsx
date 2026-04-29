import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)' }} className="py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kaveesha Sandeepani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
