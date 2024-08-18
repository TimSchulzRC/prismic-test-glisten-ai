"use client";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import clsx from "clsx";
import gsap from "gsap";
import { Fragment, useRef } from "react";
import {
  FaCloudflare,
  FaDigitalOcean,
  FaFigma,
  FaFly,
  FaGithub,
  FaNpm,
} from "react-icons/fa6";
import StylizedLogoMark from "./StylizedLogoMark";

const icons = {
  digitalocean: <FaDigitalOcean />,
  cloudflare: <FaCloudflare />,
  npm: <FaNpm />,
  github: <FaGithub />,
  figma: <FaFigma />,
  fly: <FaFly />,
};
type Props = {
  slice: Content.IntegrationsSlice;
};

export default function AnimatedContent({ slice }: Props) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".pulsing-logo", { opacity: 1 });
        gsap.set(".pulsing-icon", { opacity: 1 });
        return;
      }
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            { opacity: 1, stagger: { from: "center", each: 0.3 }, duration: 1 },
            {
              opacity: 0.4,
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="mt-20 flex flex-col items-center md:flex-row"
    >
      {slice.primary.icons.map((item, index) => (
        <Fragment key={index}>
          {index === Math.floor(slice.primary.icons.length / 2) && (
            <>
              <StylizedLogoMark />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
            {item.icon && icons[item.icon]}
          </div>
          {index < slice.primary.icons.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.primary.icons.length / 2) &&
                  "rotate-180",
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
