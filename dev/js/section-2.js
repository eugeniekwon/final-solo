import {gsap} from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger);


const sectionTwo = gsap.timeline();
const sectionTwoTime = 1;

sectionTwo.from("#hero-2", {duration:1.5, alpha:0, x:-100})
            .from("#intro-xl", {duration: sectionTwoTime, alpha: 0, x:200})
            .from("#grid-xl", {duration: sectionTwoTime, alpha: 0, y:-150})
            .from("#tree-xl", {duration: sectionTwoTime, alpha: 0})
            .from("#quote", {duration: sectionTwoTime, alpha: 0, x:-400})
            .from("#photography-xl", {duration: sectionTwoTime, alpha: 0}, "+=0.2");



export function sectionTwoTimeline(){ 
    ScrollTrigger.create({
        // markers: true, 
        animation: sectionTwo,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start: "top 60%",
        end: "bottom 70%"
      });
}