import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative min-h-[100dvh] bg-midnight-950 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('@/assets/hero_bg.png')] bg-cover bg-center opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/60 via-transparent to-midnight-950" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-aurora-purple/30 bg-aurora-purple/10 backdrop-blur-md mb-4">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-aurora-purple uppercase">Running Rabbit</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
                        강남 <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-pink">달토</span><br />
                        솔직한 가격안내
                    </h1>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                        가격·주대·이용 시스템을 숨기지 않고<br className="md:hidden" /> 있는 그대로 설명합니다.<br />
                        부담 없는 하이퍼블릭 가라오케
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
                        <a
                            href="#contact"
                            className="w-full md:w-auto px-8 py-4 bg-white text-midnight-950 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                        >
                            예약 문의하기
                        </a>
                        <a
                            href="#system"
                            className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-md"
                        >
                            시스템 확인
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
                    <div className="w-1 h-3 bg-aurora-cyan rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
