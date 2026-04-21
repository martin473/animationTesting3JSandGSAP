import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SectionNav } from "../components/section-nav";
import { CreativePanelsDemo } from "./creative-panels-demo";

export const metadata: Metadata = {
  title: "Creative Coding",
  description:
    "GSAP motion with Flip-driven interaction and TouchDesigner-sourced video—creative coding for web and realtime performance.",
};

const highlights = [
  "This page is animated with GSAP: an industry-standard, high-end motion toolkit trusted by Fortune 500 teams for polished, performant interaction.",
  "The clips you see were built in TouchDesigner—a live video-coding environment trusted by globally recognized music festivals, trade shows, and arts organizations.",
  "The work sits at the intersection of artistic intent and hard technical craft: complex math, video rendering, 3D animation, 3D modeling, and more.",
  "Multiple stacked panels sample the breadth of that practice—marrying complex code, math, and art into a single, tactile experience.",
];

/** Break out of a max-width article column to viewport width (no extra chrome). */
function FullBleedStage({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-screen max-w-[100vw] shrink-0 overflow-visible"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {children}
    </div>
  );
}

export default function PanelCreativePage() {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-6 pt-6 pb-14 sm:px-10">
        <SectionNav current="creativecoding" />
        <header className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Creative work example
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Creative Coding
          </h1>
          <p className="text-sm text-muted-foreground">
            Developed with zero AI assistance
          </p>
        </header>

        <div className="mb-5 flex flex-col gap-2">
          <section>
            <p className="text-muted-foreground">
              <strong className="font-semibold text-foreground">
                Click on the stack
              </strong>{" "}
              to see the next video. GSAP Flip handles DOM changes elegantly so
              the deck feels physical.
            </p>
          </section>

          <FullBleedStage>
            <div
              className="relative -mt-[0.5in] min-h-[calc(11vh+min(120vw,450px)+1.25rem)] w-full overflow-visible py-2"
              aria-label="Interactive panel stack demo"
            >
              <CreativePanelsDemo />
            </div>
          </FullBleedStage>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What this page highlights</h2>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="rounded-xl border p-4">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
