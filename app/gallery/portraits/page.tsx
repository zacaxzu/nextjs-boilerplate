import fs from "fs";
import path from "path";
import EventsClient from "./PortraitsClient";

export default function EventsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/portraits");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/portraits/${file}`
  );

  return <EventsClient images={images} />;
}
