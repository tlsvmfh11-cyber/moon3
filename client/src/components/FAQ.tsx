import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';

const faqData = [
    {
        q: "강남 달토(달리는토끼) 가격은 얼마인가요?",
        a: "강남 달토의 주대 가격은 요일, 시간대, 인원수에 따라 달라집니다. 전화(010-2303-3778)로 문의하시면 그날 기준의 정확한 견적을 안내드립니다. 현금/카드 정찰제로 운영하며, 사전에 안내한 가격에서 추가 비용이 발생하지 않습니다. 평일과 주말의 요금 차이가 있으며, 심야 시간대는 별도 안내가 있습니다.",
    },
    {
        q: "달토 이용 시스템은 어떻게 되나요?",
        a: "강남 달토는 5단계로 진행됩니다. ① 사전 문의(인원·시간·성격 전달) → ② 도착 시 바로 룸 안내(대기 없음) → ③ 주대·이용 시간 명확 설명 → ④ 초이스 진행(취향 맞춤, 강요 없음) → ⑤ 연장 여부 자유 선택. 모든 과정에서 손님의 편의를 우선으로 하며, 불필요한 압박이나 강요는 없습니다.",
    },
    {
        q: "강남 달토 예약은 어떻게 하나요?",
        a: "전화(010-2303-3778), 문자, 또는 텔레그램(@hscompanyshs)으로 문의하시면 됩니다. 방문 인원, 방문 시간, 대략적인 분위기/취향을 알려주시면 맞춤 안내를 드립니다. 당일 예약도 가능하며, 복잡한 온라인 예약 절차 없이 연락 한 번으로 모든 안내가 완료됩니다.",
    },
    {
        q: "강남 달토 당일 예약도 가능한가요?",
        a: "네, 강남 달토는 당일 예약도 가능합니다. 당일 방문을 원하시는 경우 전화(010-2303-3778) 또는 문자로 연락 주시면 그날 출근 상황과 가용 룸을 확인한 후 바로 안내드립니다. 다만 금요일·토요일 등 성수기에는 조금 일찍 문의해 주시는 것이 좋습니다.",
    },
    {
        q: "강남 달토 위치는 어디인가요?",
        a: "강남 달토(달리는토끼)는 서울특별시 강남구 강남대로 인근에 위치해 있습니다. 강남역에서 도보 이동이 가능하며, 2호선·신분당선 강남역을 이용하시면 편리합니다. 자차가 없으신 경우 픽업 서비스도 안내해드립니다. 정확한 위치는 전화 문의 시 안내드립니다.",
    },
    {
        q: "달토 초이스는 어떻게 진행되나요?",
        a: "강남 달토의 초이스는 손님의 취향에 맞게 추천드리는 방식으로 진행됩니다. 억지로 진행하거나 강요하는 구조가 아니며, 편하게 말씀해 주시면 그에 맞게 안내해드립니다. 출근 인원이 많아 선택의 폭이 넓으며, 마음에 드지 않으시면 다시 안내해드립니다. 손님의 만족이 우선입니다.",
    },
    {
        q: "픽업 서비스가 있나요?",
        a: "네, 강남 달토는 상황에 따라 픽업 서비스를 안내해드리고 있습니다. 자차가 없거나 이동이 애매하신 경우, 사전에 말씀해 주시면 편하게 오실 수 있도록 도와드립니다. 픽업 위치와 시간은 문의 시 협의하여 결정합니다.",
    },
    {
        q: "혼자 가도 괜찮을까요?",
        a: "물론입니다. 강남 달토에는 혼자 오시는 분들도 많습니다. 어색하지 않도록 분위기를 맞춰드리며, 편하게 즐기실 수 있도록 안내해드립니다. 1인 방문 시에도 동일한 서비스와 투명한 가격 안내를 받으실 수 있습니다.",
    },
    {
        q: "강남 달토 영업시간은 어떻게 되나요?",
        a: "강남 달토(달리는토끼)는 매일 저녁 6시(18:00)부터 영업합니다. 평일(월~목)은 새벽 5시, 금/토요일은 새벽 6시, 일요일은 새벽 4시까지 운영합니다. 연중무휴로 운영하며, 명절·공휴일에도 정상 운영합니다.",
    },
    {
        q: "TC 비용이 무엇인가요?",
        a: "TC(Time Charge)는 이용 시간과 동반 인원에 따라 책정되는 비용으로, 강남 하이퍼블릭 가라오케의 기본 비용 구조입니다. 강남 달토에서는 TC 비용도 사전에 명확히 안내드리며, 현장에서 갑자기 추가되는 일이 없습니다. 인원이 많을수록 1인당 TC 부담이 낮아집니다.",
    },
    {
        q: "카드 결제가 가능한가요?",
        a: "네, 강남 달토는 현금과 카드 결제 모두 가능합니다. 정찰제로 운영되며 카드 결제 시 별도 수수료가 추가되지 않습니다. 결제 방식과 관계없이 사전에 안내한 금액이 최종 금액입니다.",
    },
    {
        q: "단체로 방문해도 되나요?",
        a: "네, 강남 달토는 단체 방문도 환영합니다. 회식, 모임, 기념일 등 다양한 목적으로 단체 방문하시는 분들이 많습니다. 단체 방문 시에는 사전에 인원을 알려주시면 그에 맞는 룸과 주대 견적을 안내드립니다.",
    },
    {
        q: "강남 달토에서 노래방 이용도 가능한가요?",
        a: "강남 달토(달리는토끼)는 하이퍼블릭 가라오케 형태로 운영됩니다. 노래를 즐기실 수 있는 공간이 갖춰져 있으며, 노래와 함께 편안하게 즐기실 수 있습니다. 자세한 이용 방식은 문의 시 안내드립니다.",
    },
    {
        q: "처음 방문하는데 무엇을 준비해야 하나요?",
        a: "처음 방문하시는 분들은 특별히 준비하실 것이 없습니다. 방문 전 전화(010-2303-3778)로 인원, 방문 시간만 알려주시면 모든 안내를 드립니다. 강남 달토는 처음 방문하시는 분들도 편안하게 이용하실 수 있도록 단계별로 명확하게 설명드립니다.",
    },
    {
        q: "강남 달토와 일반 노래방의 차이가 무엇인가요?",
        a: "강남 달토(달리는토끼)는 일반 코인노래방이나 일반 노래방과 다른 하이퍼블릭 가라오케입니다. 음료와 초이스 서비스가 함께 제공되는 프리미엄 엔터테인먼트 공간으로, 보다 완성된 서비스와 분위기를 경험하실 수 있습니다. 가격은 일반 노래방보다 높지만, 그에 맞는 서비스를 제공합니다.",
    },
    {
        q: "연장은 어떻게 하나요? 강요가 있나요?",
        a: "강남 달토에서는 기본 이용 시간이 끝나면 연장 여부를 자유롭게 선택하실 수 있습니다. 연장을 원치 않으셔도 전혀 불편한 눈치를 주지 않으며, 손님이 결정하시면 됩니다. 연장 비용도 현장에서 명확히 안내드리므로 갑자기 추가 비용이 발생하는 일은 없습니다.",
    },
    {
        q: "강남 달토 주말 요금이 평일과 다른가요?",
        a: "네, 강남 달토는 주말(금·토)과 평일 요금이 다소 차이가 있습니다. 주말은 수요가 높아 평일 대비 요금이 높게 책정될 수 있으며, 심야 시간대는 추가 안내가 있습니다. 방문 전 전화(010-2303-3778)로 문의하시면 그날 기준으로 정확하게 안내드립니다.",
    },
    {
        q: "강남 달토와 강남 퍼블릭의 차이가 무엇인가요?",
        a: "강남 달토(달리는토끼)는 '하이퍼블릭' 형태로, 일반 퍼블릭보다 한 단계 높은 프리미엄 서비스를 제공합니다. 룸 인테리어, 음향 시스템, 초이스 인원 구성 등이 일반 퍼블릭과 다르며, 서비스 퀄리티와 분위기 면에서 차이가 있습니다. 정확한 차이는 문의 시 상세히 설명드립니다.",
    },
    {
        q: "달토 방문 시 신분증이 필요한가요?",
        a: "강남 달토는 성인만 이용 가능한 업장입니다. 신분증을 지참하시면 보다 원활하게 입장하실 수 있습니다. 미성년자는 이용이 불가하며, 연령 확인이 필요할 경우 신분증 제시를 요청드릴 수 있습니다.",
    },
    {
        q: "강남 달토 2026년 현재 정상 운영 중인가요?",
        a: "네, 강남 달토(달리는토끼)는 2026년 현재도 강남역 인근에서 정상 운영 중입니다. 연중무휴로 매일 저녁 6시부터 운영하며, 최신 출근 상황과 가격 정보는 전화(010-2303-3778) 또는 텔레그램(@hscompanyshs)으로 실시간 확인하실 수 있습니다.",
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
                        강남 달토 <span className="text-gradient-aurora">자주 묻는 질문</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-3">
                        강남 달토(달리는토끼)에 대해 궁금하신 점을 모았습니다
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base">
                        강남 하이퍼블릭 가라오케를 처음 이용하시는 분들이 가장 많이 물어보시는
                        질문 20가지를 정리했습니다. 아래에서 원하시는 답변을 찾으시거나,
                        직접 전화 문의 주시면 더욱 자세히 안내드립니다.
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
                                <h3 className="text-base md:text-lg font-semibold text-white pr-4">{item.q}</h3>
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

                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="glass-panel p-6 rounded-2xl border border-aurora-cyan/20 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <p className="text-white font-semibold mb-1">더 궁금하신 점이 있으신가요?</p>
                            <p className="text-gray-400 text-sm">위에서 찾지 못한 질문은 전화로 바로 확인하세요. 그날 기준으로 솔직하게 답변드립니다.</p>
                        </div>
                        <a
                            href="tel:01023033778"
                            className="flex-shrink-0 flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-aurora-cyan to-aurora-purple text-midnight-950 font-bold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all"
                            data-testid="link-faq-call"
                        >
                            <Phone className="w-4 h-4" />
                            010-2303-3778
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
