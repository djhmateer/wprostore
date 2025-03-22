"use server";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export const getLatestProducts = async () => {
  //   const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      // createdAt: "desc",
      // numReviews: "desc",
      // stock: "desc",
      price: "desc",
    },
  });
  // convert prisma object to plain JS object
  return convertToPlainObject(data);
};

// Get single product by slug
export const getProductBySlug = async (slug: string) => {
  const startTime = performance.now();

  // Enable query logging for this specific query
  prisma.$queryRaw`SET log_statement = 'all'`;

  console.log("getProductBySlug", slug);
  const foo = await prisma.product.findFirst({
    where: { slug: slug }

  });

  const endTime = performance.now();

  // am getting 13ms for this query - is this real?
  console.log(`DB query took ${endTime - startTime}ms`);

  // console.log("returned", foo);
  return foo;
};
