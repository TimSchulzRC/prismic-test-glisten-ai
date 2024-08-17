import { RichTextField } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";

type Props = {
  title: RichTextField;
  description?: RichTextField;
};

export default function SectionTitle({ title, description }: Props) {
  return (
    <>
      <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={title} />
      </h2>
      {description && (
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={description} />
        </div>
      )}
    </>
  );
}
