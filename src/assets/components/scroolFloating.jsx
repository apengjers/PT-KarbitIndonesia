import React from "react";
import {createPortal} from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

function Scroll() {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <a
            href="#"
            onClick={scrollToTop}
            className="scroll-float"
            rel="noopener noreferrer"
            aria-label="Scrool ke atas">
            <FontAwesomeIcon icon={faArrowUp}/>
        </a>
    );
}

export default function ScrollFloating() {
    if (typeof document === "undefined") 
        return null;
    return createPortal(<Scroll/>, document.body);
}
