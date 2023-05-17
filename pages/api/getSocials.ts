import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { Socials } from "@/typings";

const query = groq`
  *[_type == "socials"]
`
type Data = {
  socials: Socials[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const socials: Socials[] = await sanityClient.fetch(query);
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.status(200).json({ socials })
}