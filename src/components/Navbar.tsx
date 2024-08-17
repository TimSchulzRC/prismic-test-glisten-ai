"use client";

import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/Wordmark";
import { asLink, Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

type Props = {
  settings: Content.SettingsDocument;
};

export default function Navbar({ settings }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      {/* Desktop Nav */}
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <WordMark />
            <span className="sr-only">Glisten AI Homepage</span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        <ul className="hidden gap-6 md:flex">
          {settings.data.navigation.map((item, i) => {
            return (
              <li key={`${item.label} ${i}`}>
                {item.cta_button ? (
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                ) : (
                  <PrismicNextLink
                    field={item.link}
                    className="inline-flex min-h-11 items-center"
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </PrismicNextLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end gap-4 bg-dark pr-4 pt-6 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          className="block p-2 text-3xl text-white md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(false)}
        >
          <MdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="grid justify-items-end gap-8">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <ButtonLink
                  key={item.label}
                  field={item.link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </ButtonLink>
              );
            }
            return (
              <PrismicNextLink
                key={item.label}
                field={item.link}
                className="block px-3 text-3xl first:mt-8"
                onClick={() => setOpen(false)}
                aria-current={
                  pathname.includes(asLink(item.link) as string)
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </PrismicNextLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
