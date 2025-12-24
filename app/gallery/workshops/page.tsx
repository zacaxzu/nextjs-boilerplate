import fs from "fs";
import path from "path";
import EventsClient from "./WorkshopsClient";

export default function EventsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/workshops");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/workshops/${file}`
  );

  return <EventsClient images={images} />;
}
