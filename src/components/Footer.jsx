import React from 'react';
function Footer(){
    const currentyear = new Date().getFullYear();
    return  ( <p>
        copyright 2024 {currentyear}
    </p> )
}
export default Footer;