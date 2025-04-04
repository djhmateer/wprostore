import { z } from "zod";

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(value), {
  message: "Price must have exactly 2 decimal places",
});

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 1 character"),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(1, "Product must have have at least 1 image is required"),
  isFeatured: z.boolean(),
  // banner: z.string().optional(),
  banner: z.string().nullable(),
  price: currency,
});
