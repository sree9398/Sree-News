import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>designed and developed by <span><a className='footer-name' href="https://sreekanthsree.netlify.app/" target="_blank" rel="noopener noreferrer">Sree</a></span></p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '0px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
