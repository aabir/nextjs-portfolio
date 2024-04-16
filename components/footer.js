import React from 'react';

const Footer = () => (
    <footer>
        <p>Built using Next.js and with gitconnected.com API </p>
        <style jsx>{`
            footer {
                width: 100%;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p {
                margin: 0;
            }
        `}</style>
    </footer>
);

export default Footer;