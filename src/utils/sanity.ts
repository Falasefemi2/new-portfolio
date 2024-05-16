/** @format */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "skm4nw2d",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-05-16",
});

export default client;

export async function getProjects() {
  const query = `*[_type == 'project'] {
    title,
      _id,
      link,
      description,
      tags,
      'imageUrl': image.asset->url
  }`;

  const projects = await client.fetch(query);
  return projects;
}
