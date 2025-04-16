import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  gridArea?: string;
};

const photos: Photo[] = [
  {
    src: "/gallery/01_event_photo.jpg",
    width: 1200,
    height: 800,
    alt: "Community event with people engaging in discussion",
    gridArea: "span 2 / span 1",
  },
  {
    src: "/gallery/02_event_photo.jpg",
    width: 1200,
    height: 800,
    alt: "Technical presentation about Infra and GitHub Actions",
    gridArea: "span 1 / span 1",
  },
  {
    src: "/gallery/03_event_photo.jpg",
    width: 1600,
    height: 900,
    alt: "VanJS presentation session",
    gridArea: "span 1 / span 1",
  },
  {
    src: "/gallery/04_event_photo.jpg",
    width: 800,
    height: 600,
    alt: "Engaged audience at tech meetup",
    gridArea: "span 1 / span 1",
  },
  {
    src: "/gallery/05_event_photo.jpg",
    width: 800,
    height: 600,
    alt: "Small group discussion session",
    gridArea: "span 1 / span 1",
  },
  {
    src: "/gallery/06_event_photo.jpg",
    width: 1200,
    height: 800,
    alt: "Packed audience at tech conference",
    gridArea: "span 1 / span 2",
  },
  {
    src: "/gallery/07_event_photo.jpg",
    width: 1200,
    height: 800,
    alt: "Tech community gathering",
    gridArea: "span 1 / span 1",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Event Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {photos.map((photo, idx) => (
          <div
            key={photo.src}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            style={{ 
              gridArea: photo.gridArea,
              height: "100%",
              width: "100%"
            }}
            onClick={() => setIndex(idx)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
