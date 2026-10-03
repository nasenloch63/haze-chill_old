"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ElementRef, useRef } from "react";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";

const INSTAGRAM_URL = "https://www.instagram.com/haze_and_chill_cafe/";

const floatTransition = { duration: 4.5, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" };

function TrippyImage({
  src,
  alt,
  shadowClass,
  align,
  phrase,
  yParallax,
  rotateHover,
}: {
  src: string;
  alt: string;
  shadowClass: string;
  align: "left" | "right" | "center";
  phrase: string;
  yParallax: ReturnType<typeof useTransform<number, number>>;
  rotateHover: number;
}) {
  const floatY =
    align === "left" ? -14 : align === "right" ? 18 : -8;
  return (
    <motion.div
      style={{ y: yParallax }}
      className={`relative ${
        align === "left"
          ? "md:mt-0"
          : align === "right"
            ? "md:mt-24"
            : "md:mt-12"
      }`}
    >
      <p
        className={`pointer-events-none absolute -z-10 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase leading-none text-white/[0.04] sm:text-white/[0.06] ${
          align === "left"
            ? "-left-2 top-1/2 -translate-y-1/2 md:-left-8"
            : align === "right"
              ? "-right-2 top-1/4 text-right md:-right-6"
              : "left-1/2 top-1/3 -translate-x-1/2 text-center"
        }`}
        aria-hidden
      >
        {phrase}
      </p>
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: rotateHover,
          transition: { type: "spring", stiffness: 260, damping: 18 },
        }}
        animate={{
          y: [0, floatY, 0],
        }}
        transition={floatTransition}
        className={`aspect-[3/5] overflow-hidden rounded-2xl border border-white/10 bg-black/20 ${shadowClass}`}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1200}
          className="h-full w-full object-cover object-center"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </motion.div>
    </motion.div>
  );
}

export function ArtOfChillGallery() {
  const { t } = useLanguage();
  const ref = useRef<ElementRef<"section">>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [55, -65]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-55, 85]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(109,40,217,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-violet-200/70">{t.gallery.body}</p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col gap-12 md:gap-10 lg:gap-16">
            <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
              <TrippyImage
                src="/gallery/pic1.webp"
                alt={t.gallery.pic1Alt}
                shadowClass="shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                align="left"
                phrase={t.gallery.phrase1}
                yParallax={y1}
                rotateHover={-2.5}
              />
              <TrippyImage
                src="/gallery/pic2.webp"
                alt={t.gallery.pic2Alt}
                shadowClass="shadow-[0_0_40px_rgba(16,185,129,0.5)]"
                align="right"
                phrase={t.gallery.phrase2}
                yParallax={y2}
                rotateHover={2.5}
              />
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
              <TrippyImage
                src="/gallery/pic3.webp"
                alt={t.gallery.pic3Alt}
                shadowClass="shadow-[0_0_40px_rgba(139,92,246,0.45)]"
                align="left"
                phrase={t.gallery.phrase3}
                yParallax={y3}
                rotateHover={-2.5}
              />
              <TrippyImage
                src="/gallery/pic4.webp"
                alt={t.gallery.pic4Alt}
                shadowClass="shadow-[0_0_40px_rgba(16,185,129,0.45)]"
                align="right"
                phrase={t.gallery.phrase4}
                yParallax={y4}
                rotateHover={2.5}
              />
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
              <TrippyImage
                src="/gallery/pic5.webp"
                alt={t.gallery.pic5Alt}
                shadowClass="shadow-[0_0_40px_rgba(139,92,246,0.45)]"
                align="left"
                phrase={t.gallery.phrase5}
                yParallax={y1}
                rotateHover={-2.5}
              />
              <TrippyImage
                src="/gallery/pic6.webp"
                alt={t.gallery.pic6Alt}
                shadowClass="shadow-[0_0_40px_rgba(16,185,129,0.45)]"
                align="right"
                phrase={t.gallery.phrase6}
                yParallax={y2}
                rotateHover={2.5}
              />
            </div>


          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex justify-start sm:mt-12"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-orange-400/40 bg-white/5 px-5 py-3 text-sm font-semibold text-orange-300 shadow-[0_0_24px_rgba(251,146,60,0.15)] backdrop-blur-md transition-all hover:border-orange-400/70 hover:bg-orange-500/10 hover:text-orange-200 hover:shadow-[0_0_32px_rgba(251,146,60,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400/80 sm:text-base"
              aria-label={t.nav.instagramLabel}
            >
              <Instagram
                className="h-5 w-5 shrink-0 text-orange-400 transition-colors group-hover:text-orange-300"
                strokeWidth={2}
              />
              {t.gallery.instagramCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
