import { Socials } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,{
    next:{
      revalidate:10
    }
  });
  const data = await res.json();
  const socials: Socials[] = data.socials;

  // console.log("fetching",socials); 
  return socials;
};