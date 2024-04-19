import React from 'react';

const Footer = () => (
    <footer>
        <p>Built using Next.js and with gitconnected.com API </p>
        <style jsx>{`
            footer {
                margin-top: 0; /* take available whitespace */
                margin-bottom: -10px;      /* remove bottom whitespace */
                padding-bottom: 5px;
                height: 100px; 
                margin: 0 auto;
            }
            p {
                margin: 0;
            }
        `}</style>
    </footer>
);

export default Footer;