'use client'
import { Panel, VideoPanel } from "./panel";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { useState, useRef, useEffect } from "react";

gsap.registerPlugin(Flip)

export default function Page() {
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
        "/art/differentialgrowth.mp4",
        "/art/pixellatedgeometry.mp4",
        "/art/hand rotate.mp4",
        "/art/prettynoise.mp4",
    ]

    var ct = -1
    videos = videos.map(item => [ct += 1, item])

    const [videoOrder, setVideoOrder] = useState(videos)
    const flipState = useRef(null)

    useEffect(() => {
        if (!flipState.current) return
        Flip.from(flipState.current, {
            targets: ".item",
            duration: 0.4,
            ease: "sine.inOut",
            absolute: true,
            onEnter: (elements) =>
                gsap.from(elements, {
                    duration: 0.2,
                    yPercent: 20,
                    opacity: 0,
                    ease: "expo.out"
                }),
            onLeave: (elements) =>
                gsap.to(elements, {
                    duration: 0.2,
                    yPercent: 5,
                    xPercent: -5,
                    opacity: 0,
                    ease: "expo.out",
                })
        })
        flipState.current = null
    }, [videoOrder])

    useGSAP(() => {
        function moveCard() {
            const videoElements = document.querySelectorAll<HTMLVideoElement>(".item video")
            const nextVideo = videoElements[1]
            if (nextVideo) {
                void nextVideo.play()
            }

            flipState.current = Flip.getState(".item")
            setVideoOrder(prev => {
                const next = [...prev]
                const first = next.shift()
                next.push(first)
                return next
            })
        }

        document.body.addEventListener("click", moveCard)
        return () => document.body.removeEventListener("click", moveCard)
    }, [])

    return (
        <div className="slider absolute w-[80vw] max-w-[300px] [perspective:100px] top-[30vh] left-1/2 -translate-x-1/2 -translate-y-1/2">
            {videoOrder.map((video, index) => (
                <div
                    key={`video-${video[0]}`}
                    className={`item item-${video[0]} absolute w-[80vw] max-w-[300px] [aspect-ratio:2/3] bg-transparent transform-gpu will-change-transform`}
                    style={{
                        left: (index - (videoOrder.length - 1) / 2) * 3,
                        top: (index - (videoOrder.length - 1) / 2) * 2,
                        zIndex: videoOrder.length - index
                    }}
                >
                    <VideoPanel url={video[1]} video={video[1]} isActive={index === 0} />
                </div>
            ))}
        </div>
    )
}