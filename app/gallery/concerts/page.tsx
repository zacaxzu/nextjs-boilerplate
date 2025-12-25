import fs from "fs";
import path from "path";
import ConcertsClient from "../macro/MacroClient";

export default function ConcertsPage() {
  const imagesDir = path.join(process.cwd(), "public/images/concerts");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/concerts/${file}`
  );

  return <ConcertsClient images={images} />;
}
