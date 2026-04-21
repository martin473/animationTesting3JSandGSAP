"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type Screenshot = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ScreenshotCarouselProps = {
  screenshots: Screenshot[];
};

/**
 * Viewport matches device class: portrait phone frame on small screens,
 * 16:9 “desktop monitor” on md+. Images use object-contain inside the frame.
 */
export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = screenshots.length;

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index],
  );

  if (count === 0) return null;

  const prev = () => setIndex((current) => (current - 1 + count) % count);
  const next = () => setIndex((current) => (current + 1) % count);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-left text-xl font-semibold tracking-tight text-foreground">
          {screenshots[index].title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {index + 1}/{count}
        </p>
      </div>
      <div className="w-full">
        <div
          className="relative mx-auto w-full max-w-[min(100%,min(28rem,calc(88dvh*9/16)))] overflow-hidden rounded-md border-solid border-border shadow-sm [border-width:1pt] md:max-w-none"
        >
          {/* Portrait 9:16 on small screens; 16:9 “monitor” from md up (padding % of width). */}
          <div className="relative h-0 w-full pb-[177.78%] md:pb-[56.25%]">
            <div className="absolute inset-0">
              <div
                className="flex h-full w-full transition-transform duration-500 ease-in-out"
                style={trackStyle}
              >
                {screenshots.map((shot) => (
                  <div
                    key={`${shot.src}::${shot.title}`}
                    className="relative h-full w-full shrink-0"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 767px) min(100vw, 28rem), (max-width: 1200px) min(896px, 90vw), 896px"
                      className="bg-muted/40 object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background/90 px-3 py-2 text-lg font-semibold leading-none shadow-sm transition-colors hover:bg-accent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background/90 px-3 py-2 text-lg font-semibold leading-none shadow-sm transition-colors hover:bg-accent"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
