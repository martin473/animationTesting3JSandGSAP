//https://demos.gsap.com/demo/card-stack/
//https://codepen.io/GreenSock/pen/Yzdzxem
//https://folge.me/tools/css-to-tailwind-converter

'use client'
import { Panel, VideoPanel } from "./panel";
import { useGSAP } from '@gsap/react'; //install this library, use like useEffect, can load all GSAP info on mount, or on click or other
import {gsap} from 'gsap';
import {Flip} from 'gsap/Flip';
import { cloneElement } from "react";

export default function Page(){
    const files = ["/art/1yof chrome3 post.png",
        "/art/1yof trans bg viewport 1.png",
        "/art/1yof trans bg viewport 2.png",
        "/art/1yof trans bg viewport 3.png",
        "/art/1yof trans bg viewport 4.png",
        "/art/1yof trans bg viewport 5.png",
        "/art/1yof trans bg viewport 6.png",
        "/art/1yof trans bg viewport 7.png",
        "/art/1yof trans bg wireframe 1.png",
        "/art/1yof trans bg wireframe 2.png"
    ]
    let videos = [
        "/art/sampler.mp4",
        "/art/border.mp4",
        "/art/wingdingsinging.mp4",
        "/art/animatedcdplayer.mp4",
        "/art/illuminatedcity.mp4",
        "/art/3dcalculusshapes.mp4",
        "/art/3drandomnoise.mp4",
        //"/art/animatedsprites.mp4",
        "/art/differentialgrowth.mp4",
        "/art/pixellatedgeometry.mp4",
        "/art/hand rotate.mp4",
        "/art/prettynoise.mp4",
    ]
    //add a count of video 0 to len-1

    var ct = -1
    videos = videos.map( item => [ct +=1, item])
    //[[ct, len]...]
    const art = files.map(picture =>
        <Panel key={ picture } url={ picture } image={ picture }/>
    );
    const film = videos.map(video =>
        <div key={`video-${video[0]}`} className={`item item-${video[0]} left-${video[0]*20} top-${video[0]*20} absolute w-[300px] [aspect-ratio:2/3] bg-transparent`}>
            <VideoPanel key={ video[1] } url={ video[1] } video={ video[1] } />
        </div>
    );

    //gsap
    

    

    useGSAP(() => { //useEffect like hook for react with gsap logic that access DOM after it is loaded
        console.clear(); // Start with a clean console on refesh
        const slider = document.querySelector(".slider");
        const items = gsap.utils.toArray(".item");
        const offset = 30;
        gsap.registerPlugin(Flip)
        //FIX HYDRATION ERROR
                    //moveCard Function does this
                    //Browser extensions modifying the HTML
                    //this is shifting the dom around instead of shifting the pos of every item
                    //FLIP does that naturally? OR na? 
                    //https://gsap.com/community/forums/topic/43202-hydration-error-while-using-usegsap-and-scrolltrigger-in-nextjs/

        function moveCard() {
        //FIX CREATION
        //contains data other creation logic is accessing
        const lastItem = slider.querySelector(".item:last-child"); //slider selects
            if (slider && lastItem) {
                lastItem.style.display = "none"; // Hide the last item
                // FIX CREATION
                /*
                ideas
                    instead of classname temp copy entire div and rerender at end
                        can do this by creating some videoItem object instead
                        https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
                        create element also can create a "div"
                                    <div key={`video-${video[0]}`} className={`item item-${video[0]} left-${video[0]*20} top-${video[0]*20} absolute w-[300px] [aspect-ratio:2/3] bg-transparent`}>
                                        <VideoPanel key={ video[1] } url={ video[1] } video={ video[1] } />
                                    </div>
                    shuffle item positions instead of reloading entire videos
                    insert at end and then delete so you don't have to reload entire video, if browser supports loading from cache
                */
                const newItem = film[0]
                //const newItem = document.createElement("div", {class: ""}, film[0]); //create item VideoPanel(url, string)
                //newItem.className = lastItem.className; // Set the same class name
                //newItem.child = lastItem.child; // Set the same class name

                slider.insertBefore({ newItem }, slider.firstChild); // Insert the new item at the beginning of the slider
            }
        }
        document.body.addEventListener("click", (e) => {
            let state = Flip.getState(".item");
            moveCard();
            Flip.from(state, {
                targets: ".item",
                ease: "sine.inOut",
                absolute: true,
                onEnter: (elements) => {
                return gsap.from(elements, {
                    duration: 0.3,
                    yPercent: 20,
                    opacity: 0,
                    ease: "expo.out"
                });
                },
                onLeave: (element) => {
                return gsap.to(element, {
                    duration: 0.3,
                    yPercent: 5,
                    xPercent: -5,
                    transformOrigin: "bottom left",
                    opacity: 0,
                    ease: "expo.out",
                    onComplete () {
                    console.log("logging", element[0])
                    slider.removeChild(element[0]);
                    }
                });
                }
            });
        });
    }, []);
    return(
        
        <div className="slider absolute w-[300px] h-[200px] [perspective:100px] top-[30vh] left-2/4 -translate-x-1/2">
            {film}
        </div>
    )
}
