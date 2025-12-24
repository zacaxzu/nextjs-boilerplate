import fs from "fs";
import path from "path";
import EventsClient from "./MacroClient";

export default function EventsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/macro");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/macro/${file}`
  );

  return <EventsClient images={images} />;
}
