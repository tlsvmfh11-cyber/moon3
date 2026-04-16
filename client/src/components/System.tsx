import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function System() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

    const steps = [
        {
            num: "01",
            title: "사전 문의",
            desc: "인원, 방문 시간, 모임 성격만 알려주세요.",
            detail: "전화·문자·텔레그램 모두 가능합니다. 방문 인원 수와 시간대만 말씀해 주셔도 그날 기준 정확한 주대와 예상 비용을 안내해드립니다. 당일 예약도 가능하며, 복잡한 절차 없이 연락 한 번으로 모든 안내가 끝납니다.",
        },
        {
            num: "02",
            title: "도착 및 룸 안내",
            desc: "대기 없이 가능한 바로 입실해서 자리부터 잡아드립니다.",
            detail: "강남 달토는 사전 문의를 마치신 분들께 대기 없이 바로 룸을 안내해드립니다. 도착 즉시 편안하게 자리를 잡을 수 있으며, 어색하거나 불편한 상황 없이 차분하게 시작할 수 있습니다.",
        },
        {
            num: "03",
            title: "주류 설명",
            desc: "주대와 이용 시간을 명확히 설명드리고 시작합니다.",
            detail: "강남 달토에서는 룸 입실 직후 주대 구조, 이용 시간, 추가 비용 발생 가능성을 모두 명확하게 설명드립니다. 설명 후 동의하시면 진행하고, 이 단계에서 마음이 바뀌어도 문제없습니다. 투명한 설명이 우선입니다.",
        },
        {
            num: "04",
            title: "초이스 진행",
            desc: "취향에 맞게 추천드리며, 강요는 절대 없습니다.",
            detail: "강남 달토는 출근 인원이 많아 선택의 폭이 넓습니다. 손님의 취향과 분위기에 맞게 추천드리는 방식으로 진행되며, 억지로 강요하거나 불편한 상황을 만드는 구조가 아닙니다. 마음에 드는 분을 편하게 선택하시면 됩니다.",
        },
        {
            num: "05",
            title: "연장 여부 선택",
            desc: "분위기에 따라 자유롭게 선택하시면 됩니다.",
            detail: "기본 이용 시간이 끝나면 연장 여부를 자유롭게 선택하실 수 있습니다. 연장을 원치 않으셔도 불편한 눈치 주는 일 없이 편하게 마무리하실 수 있습니다. 모든 결정은 손님이 하십니다.",
        }
    ];

    return (
        <section id="system" className="py-24 bg-obsidian relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-cyan/30 bg-aurora-cyan/10 text-aurora-cyan text-xs font-semibold tracking-widest uppercase mb-6">System</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        달토 이용 시스템, <span className="text-gray-500">어렵지 않습니다</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        강남 달토(달리는토끼)는 처음 방문하시는 분들도 부담 없이 이해할 수 있도록
                        5단계 프로세스로 안내해드립니다. 사전 문의부터 퇴장까지 모든 단계에서
                        손님의 편의와 투명한 소통을 최우선으로 합니다.
                    </p>
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
                                    <p className="text-sm text-aurora-cyan/80 font-medium mb-3 leading-relaxed">
                                        {step.desc}
                                    </p>
                                    <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                        {step.detail}
                                    </p>
                                </div>
                            </div>

                            {idx !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <p className="text-gray-300 italic mb-8">
                        "달토 시스템은 억지로 끌고 가는 구조가 아니라<br className="md:hidden" /> 손님이 편한 쪽으로 맞추는 방식입니다."
                    </p>
                </div>

                <div ref={ref2} className="mt-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">강남 달토 이용 전 꼭 알아두세요</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-400 text-sm leading-relaxed">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan mt-2 flex-shrink-0" />
                                    <p><strong className="text-gray-200">주대 구조:</strong> 강남 달토의 주대는 요일·시간대·인원에 따라 달라집니다. 방문 전 사전 문의를 통해 정확한 금액을 확인하시기 바랍니다.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-purple mt-2 flex-shrink-0" />
                                    <p><strong className="text-gray-200">현금·카드 가능:</strong> 달토는 현금 및 카드 모두 결제 가능하며, 정찰제로 운영합니다. 현장 추가 요금 없이 사전 안내 금액 그대로입니다.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-pink mt-2 flex-shrink-0" />
                                    <p><strong className="text-gray-200">당일 예약 가능:</strong> 사전 예약 없이도 당일 문의 후 방문이 가능합니다. 다만 출근 인원 상황에 따라 확인이 필요할 수 있습니다.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-gold mt-2 flex-shrink-0" />
                                    <p><strong className="text-gray-200">1인 방문 환영:</strong> 강남 달토는 혼자 오시는 분들도 편하게 이용하실 수 있습니다. 1인 방문 고객을 위한 맞춤 안내를 드리고 있습니다.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan mt-2 flex-shrink-0" />
                                    <p><strong className="text-gray-200">픽업 서비스:</strong> 자차가 없거나 이동이 어려우신 경우 사전에 말씀해 주시면 픽업 서비스를 안내해드립니다.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-purple mt-2 flex-shrink-0" />
                                    <p><strong className="text-gray-200">연중무휴 운영:</strong> 강남 달토는 연중무휴로 운영하며, 평일·주말 모두 동일하게 이용하실 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
