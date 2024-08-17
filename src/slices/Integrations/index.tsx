import Bounded from "@/components/Bounded";
import SectionTitle from "@/components/SectionTitle";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import { Fragment } from "react";
import {
  FaCloudflare,
  FaDigitalOcean,
  FaFigma,
  FaFly,
  FaGithub,
  FaNpm,
} from "react-icons/fa6";
import background from "./background.jpg";
import StarBg from "./StarBg";
import StylizedLogoMark from "./StylizedLogoMark";

const icons = {
  digitalocean: <FaDigitalOcean />,
  cloudflare: <FaCloudflare />,
  npm: <FaNpm />,
  github: <FaGithub />,
  figma: <FaFigma />,
  fly: <FaFly />,
};

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBg />
      <div className="relative">
        <SectionTitle
          title={slice.primary.heading}
          description={slice.primary.body}
        />
        <div className="mt-20 flex flex-col items-center md:flex-row">
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
      </div>
    </Bounded>
  );
};

export default Integrations;
