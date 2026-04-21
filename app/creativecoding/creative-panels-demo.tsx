"use client";

import { VideoPanel } from "./panel";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useState, useRef, useEffect } from "react";

gsap.registerPlugin(Flip);

const videos = [
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
];
const videoEntries = videos.map((item, index) => [index, item] as const);

export function CreativePanelsDemo() {
  const [videoOrder, setVideoOrder] = useState(videoEntries);
  const flipState = useRef<Flip.FlipState | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [readyVideoIds, setReadyVideoIds] = useState<Set<number>>(new Set());
  const [timedOut, setTimedOut] = useState(false);
  const leadVideoId = videoOrder[0]?.[0];
  const leadVideoReady =
    leadVideoId !== undefined && readyVideoIds.has(leadVideoId);
  const isLoading = !leadVideoReady && !timedOut;
  const isInteractionLocked = isLoading;

  const handleVideoReady = (videoId: number) => {
    setReadyVideoIds((prev) => {
      if (prev.has(videoId)) return prev;
      const next = new Set(prev);
      next.add(videoId);
      return next;
    });
  };

  useEffect(() => {
    const timeout = window.setTimeout(() => setTimedOut(true), 4000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, {
      targets: ".item",
      duration: 0.4,
      ease: "sine.inOut",
      absolute: true,
            onEnter: (elements: Element[]) =>
                gsap.from(elements, {
          duration: 0.2,
          yPercent: 20,
          opacity: 0,
          ease: "expo.out",
        }),
            onLeave: (elements: Element[]) =>
                gsap.to(elements, {
          duration: 0.2,
          yPercent: 5,
          xPercent: -5,
          opacity: 0,
          ease: "expo.out",
        }),
    });
    flipState.current = null;
  }, [videoOrder]);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    function moveCard() {
      if (isInteractionLocked) return;
      const videoElements =
        document.querySelectorAll<HTMLVideoElement>(".item video");
      const nextVideo = videoElements[1];
      if (nextVideo) {
        void nextVideo.play();
      }

      flipState.current = Flip.getState(".item");
      setVideoOrder((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first === undefined) return prev;
        next.push(first);
        return next;
      });
    }

    stack.addEventListener("click", moveCard);
    return () => stack.removeEventListener("click", moveCard);
  }, [isInteractionLocked]);

  return (
    <div
      ref={stackRef}
      className="slider perspective-dramatic absolute top-[11vh] left-1/2 w-[80vw] max-w-[300px] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
    >
      {videoOrder.map((video, index) => (
        <div
          key={`video-${video[0]}`}
          className={`item item-${video[0]} absolute w-[80vw] max-w-[300px] aspect-2/3 bg-transparent transform-gpu will-change-transform`}
          style={{
            left: (index - (videoOrder.length - 1) / 2) * 3,
            top: (index - (videoOrder.length - 1) / 2) * 2,
            zIndex: videoOrder.length - index,
          }}
        >
          <div className="relative h-full w-full">
            <VideoPanel
              url={video[1]}
              video={video[1]}
              isActive={index === 0}
              onVideoReady={() => handleVideoReady(video[0] as number)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
