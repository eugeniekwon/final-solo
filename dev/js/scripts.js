var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;
 
function mouseClick(){
 
 if($(window).width() <= 992){
 console.log("click");
 if(isVisible === false){
 $nav.show();
 isVisible = true;
 }
 else{
 $nav.hide();
 isVisible = false;
 }
 } 
}
 
$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);



//gsap
import {sectionOneTimeline} from "./section-1.js";
import {sectionTwoTimeline} from "./section-2.js";
import {sectionThreeTimeline} from "./section-3.js";
import {sectionFourTimeline} from "./section-4.js";
import {sectionFiveTimeline} from "./section-5.js";
import {sectionSixTimeline} from "./section-6.js";

sectionOneTimeline();
sectionTwoTimeline(); 
sectionThreeTimeline(); 
sectionFourTimeline(); 
sectionFiveTimeline(); 
sectionSixTimeline(); 