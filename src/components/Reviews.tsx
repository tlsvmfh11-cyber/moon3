import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        "설명이랑 실제가 같다",
        "혼자 와도 어색하지 않다",
        "출근 인원이 많아서 좋았다",
        "분위기가 부담스럽지 않다"
    ];

    return (
        <section id="reviews" className="py-24 bg-obsidian relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        다시 찾는 <span className="text-gray-500">이유</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        한 번 오고 끝나는 손님보다 다시 연락 주는 손님이 많습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((text, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-panel p-8 rounded-2xl relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-white/5 w-8 h-8 group-hover:text-aurora-purple/40 transition-colors" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-aurora-gold fill-current" />
                                ))}
                            </div>
                            <p className="text-lg font-medium text-white group-hover:text-aurora-cyan transition-colors">
                                "{text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        달리는토끼, 달토라는 이름으로 꾸준히 찾는 분들이 있다는 건<br />
                        결국 <span className="text-white">편했기 때문</span>이라고 생각합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
