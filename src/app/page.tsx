import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import DevelopmentStacks from '@/sections/dev-stacks';
import Projects from '@/sections/projects';
import Showcase from '@/sections/showcase';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />

      <Showcase />

      <About />

      <Projects />

      <DevelopmentStacks />

      <Contact />

      <Footer />
    </main>
  );
}
