import {gsap} from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger);


const sectionSix = gsap.timeline();
const sectionSixTime = 0.6;

sectionSix.from("#hero-6", {duration:1.5, alpha:0, x:-100})
            .from("#address", {duration: sectionSixTime, alpha:0, x:-100}, "-=0.3")   
            .from("#phone", {duration: sectionSixTime, alpha:0, x:-100}, "-=0.3")
            .from("#email", {duration: sectionSixTime, alpha:0, x:-100}, "-=0.3");
            
        
export function sectionSixTimeline(){ 
    ScrollTrigger.create({
        // markers: true, 
        animation: sectionSix,
        toggleActions: "play none none none",
        trigger: "#section-6",
        start: "top 60%",
        end: "bottom 70%"
      });
}