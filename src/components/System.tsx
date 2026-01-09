import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function System() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
        {
            num: "01",
            title: "사전 문의",
            desc: "인원, 방문 시간, 모임 성격만 알려주세요.",
        },
        {
            num: "02",
            title: "도착 및 룸 안내",
            desc: "대기 없이 가능한 바로 입실해서 자리부터 잡아드립니다.",
        },
        {
            num: "03",
            title: "주류 설명",
            desc: "주대와 이용 시간을 명확히 설명드리고 시작합니다.",
        },
        {
            num: "04",
            title: "초이스 진행",
            desc: "취향에 맞게 추천드리며, 강요는 절대 없습니다.",
        },
        {
            num: "05",
            title: "연장 여부 선택",
            desc: "분위기에 따라 자유롭게 선택하시면 됩니다.",
        }
    ];

    return (
        <section id="system" className="py-24 bg-obsidian relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        이용 시스템, <span className="text-gray-500">어렵지 않습니다</span>
                    </h2>
                    <p className="text-gray-400">처음 오시는 분들도 이해하기 쉽게 구성되어 있습니다.</p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 group-hover:border-aurora-purple/30">
                                <span className="text-5xl font-bold text-white/5 group-hover:text-aurora-purple/20 transition-colors absolute top-4 right-4">
                                    {step.num}
                                </span>
                                <div className="relative z-10 mt-8">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-aurora-cyan transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Connector Line (Desktop) */}
                            {idx !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <p className="text-gray-300 italic">
                        "달토 시스템은 억지로 끌고 가는 구조가 아니라<br className="md:hidden" /> 손님이 편한 쪽으로 맞추는 방식입니다."
                    </p>
                </div>
            </div>
        </section>
    );
}
