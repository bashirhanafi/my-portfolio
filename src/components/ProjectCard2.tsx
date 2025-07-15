"use client";

import { Carousel } from "@once-ui-system/core";

export interface ProjectImageCarouselProps {
  images: string[];
  alt?: string;
  sizes?: string;
  className?: string;
}

export const ProjectCard2: React.FC<ProjectImageCarouselProps> = ({
  images,
  alt = "",
  sizes = "(max-width: 920px) 100vw, 960px",
  className,
}) => {
  
  return (
    <Carousel
      className="w-full h-[300px] rounded-xl overflow-hidden"
      items={images.map((src) => ({
        key: src,
        slide: src,         
        alt: alt,
      }))}
    />
  );
};
