import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		image: image(),

		// Relación
		author: z.string(),

		// Relación
		tags: z.array(z.string()),
	}),
});

export const collections = {
    blog: blogCollection,
    // la carpeta de post tiene que llamarse igual que la colección, en este caso blog
    // si no se llama igual, no se va a poder acceder a los posts desde la colección
    // se pueden crear más colecciones, pero tienen que tener su propia carpeta
    // y su propio esquema, por ejemplo:
    // portfolio: defineCollection({
    //     type: "content",
    //     schema: z.object({
    //         title: z.string(),
    //         date: z.date(), y así
};