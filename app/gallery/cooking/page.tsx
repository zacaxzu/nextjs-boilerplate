import fs from "fs";
import path from "path";
import EventsClient from "../macro/GalleryClient";

export default function EventsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/cooking");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/cooking/${file}`
  );

  return <EventsClient images={images} />;
}
