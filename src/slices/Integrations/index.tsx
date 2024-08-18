import Bounded from "@/components/Bounded";
import SectionTitle from "@/components/SectionTitle";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";
import background from "./background.jpg";
import StarBg from "./StarBg";

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
        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default Integrations;
