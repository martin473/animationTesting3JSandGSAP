'use client' //animation is handled better in client components
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; //import libraries like this
import { useGSAP } from '@gsap/react'; //install this library, use like useEffect, can load all GSAP info on mount, or on click or other
//read more
//https://medium.com/@1shyam2shyam/using-gsap-with-next-js-a-guide-to-animations-bc5b832a70f0
export default function textShuffle() {
    gsap.registerPlugin(SplitText, ScrollTrigger); //register them
    useGSAP(() => { //useEffect like hook for react with gsap logic that access DOM after it is loaded
        let wrapper = document.querySelector(".Horizontal");
        let text = document.querySelector(".Horizontal__text");
        let split = SplitText.create(".Horizontal__text", { type: "chars, words" });
        const scrollTween = gsap.to(text, {
            xPercent: -100,
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                pin: true,
                end: "+=5000px",
                scrub: true
            }
        });
        split.chars.forEach((char) => {
            gsap.from(char, {
                yPercent: "random(-200, 200)",
                rotation: "random(-20, 20)",
                ease: "back.out(1.2)",
                scrollTrigger: {
                trigger: char,
                containerAnimation: scrollTween,
                start: "left 100%",
                end: "left 30%",
                scrub: 1
                }
            });
        });
    }, []);
    

    
    //DOM to animate
    return ( 
    <section className="bg-black Horizontal overflow-hidden h-screen flex items-center">
        <div className="container">
            <h3 className="Horizontal__text flex w-max text-white whitespace-nowrap gap-[1vw] pl-[100vw] text-[clamp(2rem, 10vw, 12rem)] font-semibold leading-[1.1]">
            Nova New Chorus 
           </h3>
        </div>
    </section>
    );
}