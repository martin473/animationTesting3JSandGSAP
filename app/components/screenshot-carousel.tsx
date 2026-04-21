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
 * Single full-width carousel. On md+ the slide viewport uses the browser height
 * so screenshots read at a comfortable scale; images use object-contain.
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
          className="relative h-[min(70dvh,720px)] overflow-hidden rounded-md border-solid border-border shadow-sm [border-width:1pt] md:h-dvh"
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
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
                  sizes="(max-width: 896px) 100vw, 896px"
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
  );
}
