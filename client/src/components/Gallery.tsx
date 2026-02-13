import { motion } from 'framer-motion';

import gallery1 from '@/assets/gallery/gallery1.jpg';
import gallery2 from '@/assets/gallery/gallery2.jpg';
import gallery3 from '@/assets/gallery/gallery3.jpg';
import gallery4 from '@/assets/gallery/gallery4.jpg';
import gallery5 from '@/assets/gallery/gallery5.jpg';
import gallery6 from '@/assets/gallery/gallery6.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-midnight-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-purple">공간</span> 미리보기
                    </h2>
                    <p className="text-xl text-gray-400">
                        달리는토끼의 실제 공간입니다
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                        >
                            <img
                                src={src}
                                alt={`강남 달토 매장 이미지 ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                                data-testid={`img-gallery-${idx + 1}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}