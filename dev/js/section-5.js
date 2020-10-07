import {gsap} from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger);


const sectionFive = gsap.timeline();
const sectionFiveTime = 1;

sectionFive.from("#hero-5", {duration:1.5, alpha:0, x:-100})
            .from("#section-5-xl", {duration: sectionFiveTime, alpha:0})
            .from("#section-5b", {duration: sectionFiveTime, alpha:0, x:150})  
            .from("#history-5bc", {duration: sectionFiveTime, alpha:0, x:-150})
            .from("#section-5d", {duration: sectionFiveTime, alpha:0, x:150}) 
            .from("#section-5e", {duration: sectionFiveTime, alpha:0});
            

export function sectionFiveTimeline(){ 
    ScrollTrigger.create({
        // markers: true, 
        animation: sectionFive,
        toggleActions: "play none none none",
        trigger: "#section-5",
        start: "top 60%",
        end: "bottom 70%"
      });
}