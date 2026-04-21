
//import { react } from "react";
//import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TopBar from "../components/topBar";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
export function topButton(){
    return(<div className="relative bg-[rgba(255,255,255,0.15)] backdrop-filter backdrop-blur-[2px] backdrop-saturate-180 border border-solid border-[rgba(255,255,255,0.8)] rounded-[2rem] [box-shadow:0_8px_32px_rgba(31,38,135,0.2),inset_0_4px_20px_rgba(255,255,255,0.3)]"></div>)
}

export function VideoPanel({
  url,
  video,
  isActive,
  onVideoReady
}: {
  url: string;
  video: string;
  isActive: boolean;
  onVideoReady?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasNotifiedReadyRef = useRef(false);

  const onVideoReadyRef = useRef(onVideoReady);

  useEffect(() => {
    onVideoReadyRef.current = onVideoReady;
  }, [onVideoReady]);

  const notifyReady = useCallback(() => {
    if (hasNotifiedReadyRef.current) return;
    hasNotifiedReadyRef.current = true;
    onVideoReadyRef.current?.();
  }, []);

  useLayoutEffect(() => {
    hasNotifiedReadyRef.current = false;
    const el = videoRef.current;
    if (!el) return;
    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      notifyReady();
    }
  }, [video, notifyReady]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      void el.play();
      return;
    }

    el.pause();
  }, [isActive]);

  return (

        <div className="flex m-6 bg-black flex-col rounded-lg   w-50 h-100 backdrop-filter backdrop-blur-[2px] [box-shadow:0_8px_32px_rgba(31,38,135,0.2),inset_0_4px_20px_rgba(255,255,255,0.3)]">
            <TopBar url={url} bgCol="bg-gray-300/70" />
            <div className="w-full h-full bg-black rounded-b-lg flex items-center align-middle">
                <video
                  ref={videoRef}
                  className="rounded-b-lg will-change-transform"
                  width="320"
                  height="240"
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={notifyReady}
                  onCanPlay={notifyReady}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>  
        </div>

  )
}
export function Panel({url, image}:{url: string; image: string}) {
    return(
        <div className="flex m-6 flex-col rounded-lg  bg-gray-300/80 w-50 h-100 backdrop-filter backdrop-blur-[2px] [box-shadow:0_8px_32px_rgba(31,38,135,0.2),inset_0_4px_20px_rgba(255,255,255,0.3)]">
            <TopBar url={url} textCol="text-gray-750" />
            <div className="w-full h-full rounded-b-lg flex items-center align-middle">
                <Image 
                    src={image}
                    alt="broken"
                    width="320"
                    height="320"/>
            </div>  
        </div>
    )
}