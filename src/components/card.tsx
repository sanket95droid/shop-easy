"use client";

import Image from "next/image";
import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function Card({
  id,
  name,
  description,
  price,
  imageUrl,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <CardContainer className="inter-var mx-4">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[15rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs max-w-sm mt-1 dark:text-neutral-300 line-clamp-2 text-ellipsis"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="700"
            width="700"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-gray-400"
          >
            Click here &rarr;
          </CardItem>
          <CardItem
            translateZ={20}
            as="p"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-semibold"
          >
            ${price}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
