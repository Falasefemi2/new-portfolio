/** @format */

// /** @format */

// import useSanityClient from "@sanity/astro";
// import type { PortableTextBlock } from "@portabletext/types";
// import type { ImageAsset, Slug } from "@sanity/types";
// import groq from "groq";

// export async function getPosts(): Promise<Post[]> {
//   return await useSanityClient().fetch(
//     groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
//   );
// }

// export async function getPost(slug: string): Promise<Post> {
//   return await useSanityClient().fetch(
//     groq`*[_type == "post" && slug.current == $slug][0]`,
//     {
//       slug,
//     }
//   );
// }

// export interface Post {
//   _type: "post";
//   _createdAt: string;
//   title?: string;
//   slug: Slug;
//   excerpt?: string;
//   mainImage?: ImageAsset;
//   body: PortableTextBlock[];
// }

// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "skm4nw2d",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-05-16",
});

export async function getProjects() {
  const query = `*[_type == 'project'] {
    title,
    image,
    description,
    link,
    tags
  }`;

  const projects = await client.fetch(query);
  return projects;
}
