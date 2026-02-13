import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import System from '@/components/System';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <div className="bg-midnight-950 min-h-screen text-white font-sans">
            <Navbar />
            <main>
                <Hero />
                <Intro />
                <System />
                <Pricing />
                <Gallery />
                <Reviews />
                <FAQ />
                <Location />
                <Contact />
            </main>
        </div>
    );
}