import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import SectionTitle from "@/components/SectionTitle";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PlainLogo from "./PlainLogo";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <div className="glass-container mb-8 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
        <PlainLogo />
      </div>
      <SectionTitle title={slice.primary.heading} />
      <ButtonLink field={slice.primary.button_link} className="mt-6">
        {slice.primary.button_text || "Learn more"}
      </ButtonLink>
    </Bounded>
  );
};

export default CallToAction;
