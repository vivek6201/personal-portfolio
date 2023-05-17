import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { Skills } from "@/typings";

const query = groq`
  *[_type == "skills"]
`
type Data = {
  skills: Skills[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const skills: Skills[] = await sanityClient.fetch(query);
  res.status(200).json({ skills })
}