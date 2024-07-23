import React from 'react';

const Footer = () => (
    <footer>
        <p>Built using Next.js and with <a href='https://gitconnected.com/aabir' target='_blank'>gitconnected.com</a> API </p>
        <style jsx>{`
            footer {
                position: absolute;
                bottom: 0;
                width: auto;
                height: 5vh;
                right: 0;
                left: 0;
            }
            p {
                margin: 0;
                font-size: 0.9em;
                text-align: center;
            }
        `}</style>
    </footer>
);

export default Footer;