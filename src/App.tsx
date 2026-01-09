import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import System from './components/System';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-midnight-950 min-h-screen text-white font-sans selection:bg-aurora-cyan selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Intro />
                <System />
                <Pricing />
                <Reviews />
                <Contact />
            </main>
        </div>
    );
}

export default App;
