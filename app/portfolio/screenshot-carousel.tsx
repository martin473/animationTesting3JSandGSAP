"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Screenshot = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ScreenshotCarouselProps = {
  screenshots: Screenshot[];
  mobileSized?: boolean;
};

export default function ScreenshotCarousel({
  screenshots,
  mobileSized = false,
}: ScreenshotCarouselProps) {
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
      <div className={mobileSized ? "mx-auto w-full max-w-md" : "w-full"}>
        <div className="relative overflow-hidden rounded-md border-solid border-border shadow-sm [border-width:1pt]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={trackStyle}
          >
            {screenshots.map((shot) => (
              <div key={shot.src} className="w-full shrink-0">
                <div className={mobileSized ? "relative aspect-9/19.5 w-full" : ""}>
                  {mobileSized ? (
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      className="block h-auto w-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border bg-background/90 px-3 py-2 text-lg font-semibold leading-none shadow-sm transition-colors hover:bg-accent"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border bg-background/90 px-3 py-2 text-lg font-semibold leading-none shadow-sm transition-colors hover:bg-accent"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
