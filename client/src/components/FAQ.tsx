import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        q: "강남 달토(달리는토끼) 가격은 얼마인가요?",
        a: "강남 달토의 주대 가격은 요일, 시간대, 인원수에 따라 달라집니다. 전화(010-2303-3778)로 문의하시면 그날 기준의 정확한 견적을 안내드립니다. 현금/카드 정찰제로 운영하며, 사전에 안내한 가격에서 추가 비용이 발생하지 않습니다.",
    },
    {
        q: "달토 이용 시스템은 어떻게 되나요?",
        a: "강남 달토는 5단계로 진행됩니다. ① 사전 문의(인원·시간·성격 전달) → ② 도착 시 바로 룸 안내 → ③ 주대·이용 시간 명확 설명 → ④ 초이스 진행(취향 맞춤, 강요 없음) → ⑤ 연장 여부 자유 선택. 모든 과정에서 손님의 편의를 우선으로 합니다.",
    },
    {
        q: "강남 달토 예약은 어떻게 하나요?",
        a: "전화(010-2303-3778), 문자, 또는 텔레그램(@hscompanyshs)으로 문의하시면 됩니다. 방문 인원, 방문 시간, 대략적인 분위기/취향을 알려주시면 맞춤 안내를 드립니다. 당일 예약도 가능합니다.",
    },
    {
        q: "강남 달토 위치는 어디인가요?",
        a: "강남 달토(달리는토끼)는 서울특별시 강남구 강남대로 인근에 위치해 있습니다. 강남역에서 도보 이동이 가능하며, 자차가 없으신 경우 픽업 서비스도 안내해드립니다. 정확한 위치는 전화 문의 시 안내드립니다.",
    },
    {
        q: "달토 초이스는 어떻게 진행되나요?",
        a: "강남 달토의 초이스는 손님의 취향에 맞게 추천드리는 방식으로 진행됩니다. 억지로 진행하거나 강요하는 구조가 아니며, 편하게 말씀해 주시면 그에 맞게 안내해드립니다. 출근 인원이 많아 선택의 폭이 넓습니다.",
    },
    {
        q: "픽업 서비스가 있나요?",
        a: "네, 강남 달토는 상황에 따라 픽업 서비스를 안내해드리고 있습니다. 자차가 없거나 이동이 애매하신 경우, 사전에 말씀해 주시면 편하게 오실 수 있도록 도와드립니다.",
    },
    {
        q: "혼자 가도 괜찮을까요?",
        a: "물론입니다. 강남 달토에는 혼자 오시는 분들도 많습니다. 어색하지 않도록 분위기를 맞춰드리며, 편하게 즐기실 수 있도록 안내해드립니다. 1인 방문도 환영합니다.",
    },
    {
        q: "강남 달토 영업시간은 어떻게 되나요?",
        a: "강남 달토(달리는토끼)는 매일 저녁 6시(18:00)부터 영업합니다. 평일(월~목)은 새벽 5시, 금/토요일은 새벽 6시, 일요일은 새벽 4시까지 운영합니다. 연중무휴로 운영합니다.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-midnight-950 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-gold/30 bg-aurora-gold/10 text-aurora-gold text-xs font-semibold tracking-widest uppercase mb-6">FAQ</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        <span className="text-gradient-aurora">자주 묻는 질문</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        강남 달토(달리는토끼)에 대해 궁금하신 점을 모았습니다
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqData.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass-panel rounded-2xl border border-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                data-testid={`button-faq-${idx}`}
                            >
                                <h3 className="text-lg font-semibold text-white pr-4">{item.q}</h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-aurora-cyan flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-6 text-gray-400 leading-relaxed" data-testid={`text-faq-answer-${idx}`}>
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">더 궁금하신 점이 있으시면 편하게 문의해주세요</p>
                    <a
                        href="tel:01023033778"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-aurora-cyan to-aurora-purple text-midnight-950 font-bold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all"
                        data-testid="link-faq-call"
                    >
                        전화로 문의하기 010-2303-3778
                    </a>
                </div>
            </div>
        </section>
    );
}