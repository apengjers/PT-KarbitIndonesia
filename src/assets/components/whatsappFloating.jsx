import React from "react";
import {createPortal} from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function Wa() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=62895385303546&text=Halo%20Karbit%20Indonesia%2C%20saya%20mau%20tanya..."
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
    );
}

export default function WaFloatingPortal() {
    if (typeof document === "undefined") 
        return null;
    return createPortal(<Wa/>, document.body);
}
