import About from '@/sections/about';
import Showcase from '@/sections/showcase';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Showcase />

      <About />
    </main>
  );
}
