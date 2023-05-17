import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { Project } from "@/typings";

const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
`;

type Data = {
  project: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const project: Project[] = await sanityClient.fetch(query);
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.status(200).json({ project });
}
