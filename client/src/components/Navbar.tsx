import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '소개', href: '#intro' },
        { name: '시스템', href: '#system' },
        { name: '주대및가격', href: '#pricing' },
        { name: '후기', href: '#reviews' },
        { name: 'FAQ', href: '#faq' },
        { name: '오시는길', href: '#location' },
        { name: '예약문의', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-midnight-950/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="font-bold text-2xl tracking-tighter" data-testid="link-logo">
                    <span className="text-white">DAL</span>
                    <span className="text-aurora-cyan">TO</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                            data-testid={`link-nav-${link.name}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:01023033778"
                        className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all text-sm font-medium text-aurora-cyan"
                        data-testid="link-phone-nav"
                    >
                        010-2303-3778
                    </a>
                </div>

                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    data-testid="button-mobile-menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-midnight-950 border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg text-gray-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                    data-testid={`link-mobile-nav-${link.name}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}