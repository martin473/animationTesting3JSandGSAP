'use client'
import { gsap } from "gsap";
import {useState, useEffect} from "react";

export default function gsaptest1() {
    useEffect(() => {
        tl.to(".box1", {duration: 1, rotation: -360})
            .to(".box2", {duration: 2, x: -100, ease: 'elastic.out'})
            .to(".box3", {duration: 2, rotation: 360, x: 100, ease: 'expo.out'});
        document.querySelectorAll(".box").forEach(function(box) {
            box.addEventListener("mouseenter", function() {
                gsap.effects.fade(this);
            });
        });
    }, []);  

    var tl = gsap.timeline({delay: 1, repeat: -1, yoyo: true});
    gsap.registerEffect({
        name: "fade",
        defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
        effect: (targets, config) => {
            return gsap.to(targets, {duration: config.duration, opacity: 0});
        }
    });
    //sequenced one-after-the-other
    
    return(
    <div className="flex border-10 border-black items-center justify-center min-h-dvh flex-col">
        <div className="box box1 size-32 bg-amber-400 rounded-xl m-1.5"></div>
        <div className="box box2 size-32 bg-amber-600 rounded-xl m-1.5"></div>
        <div className="box box3 size-32 bg-amber-800 rounded-xl m-1.5"></div>
    </div>
    );
    
}