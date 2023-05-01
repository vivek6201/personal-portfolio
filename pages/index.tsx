import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import Contact from "@/components/Contact";
import { GetStaticProps } from "next";
import { PageInfo, Project, Skills, Socials } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

const inter = Inter({ subsets: ["latin"] });

type Props ={
  pageInfo: PageInfo,
  projects: Project[],
  skills: Skills[],
  socials: Socials[]
}

export default function Home({pageInfo,skills,socials,projects}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen w-full snap-y snap-mandatory overflow-y-scroll z-0 overflow-hidden scroll-smooth md:scrollbar-thin md:scrollbar- scrollbar-thumb-orange-400 ">
      <Head>
        <title>Vivek - Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="h-full w-full snap-start">
        <Hero pageInfo = {pageInfo}/>
      </section>

      <section id="about" className="h-full w-full snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="projects" className="h-full w-full snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="skills" className="h-full w-full snap-center">
        <SkillsComponent skills={skills}/>
      </section>

      <section id="contact" className="h-full w-full snap-start">
        <Contact />
      </section>

    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Socials[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    },
    //- When a request comes in

    //next.js will attemp to re-generate the page
    //- When a request comes in
    //- Atmost once every 10 secs
    revalidate:1,
  };
};
