import React from "react";
import {createPortal} from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

function Scroll() {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
            className="scroll-float"
            rel="noopener noreferrer"
            aria-label="Scroll ke atas">
            <FontAwesomeIcon icon={faArrowUp}/>
        </a>
    );
}

export default function ScrollFloating() {
    if (typeof document === "undefined") 
        return null;
    return createPortal(<Scroll/>, document.body);
}
