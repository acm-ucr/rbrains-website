import * as React from "react";
import Image from "next/image";
import { carousel } from "@/data/carousel";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselOrientation() {
  return (
    <Carousel orientation="horizontal" className="mx-auto w-full max-w-6xl">
      <CarouselContent className="h-1/3">
        {carousel.map((photo, index) => (
          <CarouselItem
            key={index}
            className="flex basis-full items-center justify-center md:basis-1/2"
          >
            <div className="flex h-[500px] w-full items-center justify-center">
              <Card className="h-full w-full">
                <CardContent className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="h-full w-full rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
