import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PavementTBL from "../irisPciForm/tables/pavementTable";
export default function TableCarousel() {
  return (
    <Carousel>
      <div>
        <PavementTBL />
      </div>
      <div>
        <PavementTBL />
      </div>
      <div>
        <PavementTBL />
      </div>
    </Carousel>
  );
}
