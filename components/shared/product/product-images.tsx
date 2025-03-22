"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// take in a prop of images (an array of strings)
//  and return a list of images
const ProductImages = ({ images }: { images: string[] }) => {
  // default state is 0
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        // current is the current index eg 0
        src={images[current]}
        alt="Product Image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      {/* small images */}
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "border   mr-2 cursor-pointer hover:border-orange-600",
              current === index && "  border-orange-500"
            )}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt={"image"} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
