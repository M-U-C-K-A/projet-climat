"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  { src: "/gmail.svg", alt: "Gmail Logo" },
  { src: "/arc_browser.svg", alt: "Arc Logo" },
  { src: "/sourcegraph.svg", alt: "Sourcegraph Logo" },
  { src: "/react.svg", alt: "React Logo" },
  { src: "/google-palm.svg", alt: "google palm" },
  { src: "/nextjs_icon_dark.svg", alt: "Nextjs dark Logo" },
  { src: "/postgresql.svg", alt: "postgres Logo" },
  { src: "/vscode.svg", alt: "vscode Logo" },
  { src: "/google-idx.svg", alt: "google-idx Logo" },
];

export const Case = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    <img src={image.src} alt={image.alt} className="max-h-20"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};