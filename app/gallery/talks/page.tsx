import fs from "fs";
import path from "path";
import EventsClient from "../macro/MacroClient";

export default function EventsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/talks");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/talks/${file}`
  );

  return <EventsClient images={images} />;
}
