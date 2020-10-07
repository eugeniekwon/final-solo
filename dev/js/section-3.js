import {gsap} from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger);


const sectionThree = gsap.timeline();
const sectionThreeTime = 1;

sectionThree.from("#hero-3", {duration:1.5, alpha:0, x:-100})
            .from("#sale-xl", {duration: sectionThreeTime, alpha:0, x:100})
            .from("#bottom-container", {duration: 2, alpha:0});
            



export function sectionThreeTimeline(){ 
    ScrollTrigger.create({
        // markers: true, 
        animation: sectionThree,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start: "top 60%",
        end: "bottom 70%"
      });
}