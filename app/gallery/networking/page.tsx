import fs from "fs";
import path from "path";
import EventsClient from "../macro/MacroClient";

export default function EventsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/networking");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/networking/${file}`
  );

  return <EventsClient images={images} />;
}
