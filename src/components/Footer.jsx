import React from 'react';

function Footer() {
  return (
    <footer
    id='footer'
      className="py-4 fixed bottom-0 left-0 w-full"
      style={{
        backgroundColor: '#333333', // Charcoal background
        color: '#b2ebf2', // Pale blue text
      }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2025 FloodGuard HQ. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;