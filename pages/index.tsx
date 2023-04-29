import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen w-full snap-y snap-mandatory overflow-y-scroll z-0 overflow-hidden scroll-smooth scrollbar-thin scrollbar- scrollbar-thumb-orange-400 '>
      <Head>
        <title>My Portfolio</title>
      </Head>
      
      <Header/>
      
      <section id='hero' className='h-full w-full snap-start'>
        <Hero/>
      </section>

      <section id='about' className='h-full w-full snap-center'>
        <About />
      </section>

      <section id='projects' className='h-full w-full snap-start'>
        <Projects/>
      </section>

      <section id='skills' className='h-full w-full snap-center'>
        <Skills/>
      </section>

      <section id='contact' className='h-full w-full snap-start'>
        <Contact/>
      </section>
    </div>
  )
}
