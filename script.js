export default function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;

    ScrollReveal({ reset: false });

    targetElements.forEach(({ element, animation }) => {
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}
import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
}
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();