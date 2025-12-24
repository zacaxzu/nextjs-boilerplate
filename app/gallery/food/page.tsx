import fs from "fs";
import path from "path";
import FoodClient from "./FoodClient";

export default function FoodPage() {
  const imagesDir = path.join(process.cwd(), "public/images/food");
  const images = fs.readdirSync(imagesDir).map(
    (file) => `/images/food/${file}`
  );

  return <FoodClient images={images} />;
}
