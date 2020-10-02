import {gsap} from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger);


const sectionFour = gsap.timeline();
const sectionFourTime = 1;

sectionFour.from("#hero-4", {duration: sectionFourTime, alpha:0, x:-100})
            .from("#gallery li:nth-child(1)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(2)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(3)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(4)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(5)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(6)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(7)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")
            .from("#gallery li:nth-child(8)", {duration: 0.4, alpha:0, x:-20}, "-=0.08")


export function sectionFourTimeline(){ 
    ScrollTrigger.create({
        // markers: true, 
        animation: sectionFour,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start: "top 60%",
        end: "bottom 70%"
      });
}