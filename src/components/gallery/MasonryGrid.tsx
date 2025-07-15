"use client";

import Marquee from "react-fast-marquee";
import Masonry from "react-masonry-css";
import { Media, RevealFx } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 3,
    720: 1,
  };

  return (
    <RevealFx>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <Media
          priority={index < 10}
          sizes="(fitwidth: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 12" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
        />
      ))}
    </Masonry>
    </RevealFx>
    
  );
}
