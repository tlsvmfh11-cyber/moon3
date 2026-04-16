import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import pricingCrystal from '@/assets/pricing_crystal.png';

export default function Pricing() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-24 bg-midnight-950 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-aurora-purple/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            달토 가격과 주대,<br />
                            <span className="text-gradient-aurora">숨기지 않습니다</span>
                        </h2>
                        <div className="space-y-8 text-lg text-gray-400">
                            <p>
                                가격 이야기는 애매하게 말하면 꼭 문제가 생깁니다.
                                그래서 강남 달토에서는 가격, 주대, TC 구조를 투명하게 공개합니다.
                            </p>
                            <div className="pl-6 border-l-2 border-aurora-gold/50">
                                <p className="text-white italic">
                                    "싸다"는 표현은 쓰지 않습니다.<br />
                                    대신 이 정도면 납득할 수 있다는 기준으로 운영합니다.
                                </p>
                            </div>
                            <p>
                                현장에서 갑자기 추가로 붙거나, 설명 없이 넘어가는 구조가 아닙니다.
                                사전에 안내한 기준에서 벗어나지 않습니다.
                            </p>
                            <p className="text-base text-gray-500">
                                강남 달토(달리는토끼)의 주대 가격은 요일, 시간대, 방문 인원에 따라 달라집니다.
                                평일과 주말의 가격 차이가 있으며, 심야 시간대 추가 요금 구조도 사전에 안내드립니다.
                                정확한 금액은 전화 또는 문자 문의 시 그날 기준으로 솔직하게 말씀드립니다.
                            </p>
                        </div>

                        <div className="mt-10 space-y-4">
                            <h3 className="text-lg font-bold text-white">가격 관련 자주 묻는 내용</h3>
                            {[
                                { q: "주대가 얼마인가요?", a: "요일·시간대·인원에 따라 달라집니다. 문의 시 그날 기준으로 정확히 안내드립니다." },
                                { q: "TC 비용이 따로 있나요?", a: "TC 구조와 비용도 사전에 명확히 설명드립니다. 현장 깜짝 추가 없습니다." },
                                { q: "카드 결제 되나요?", a: "현금·카드 모두 가능합니다. 정찰제로 운영되며 추가 수수료 없습니다." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/5">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-4 h-4 text-aurora-gold mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-semibold text-sm mb-1">{item.q}</p>
                                            <p className="text-gray-400 text-sm">{item.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="glass-panel rounded-3xl p-8 md:p-10 border border-aurora-cyan/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-aurora-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={pricingCrystal}
                                alt="강남 달토 달리는토끼 투명한 가격 안내 주대 정보"
                                className="absolute -right-20 -top-20 w-[300px] h-[300px] object-contain opacity-60 pointer-events-none mix-blend-screen"
                            />

                            <h3 className="text-2xl font-bold mb-8 relative z-10 text-white">오늘의 견적 확인하기</h3>

                            <ul className="space-y-6 relative z-10">
                                {[
                                    "요일별/시간대별 정확한 주대 안내",
                                    "인원수에 따른 1/N 견적 산출",
                                    "추가 비용 발생 가능성 사전 고지",
                                    "현금/카드 정찰제 운영",
                                    "TC 구조 및 비용 사전 설명",
                                    "연장 요금 사전 안내",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aurora-cyan/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-aurora-cyan" />
                                        </div>
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 relative z-10">
                                <a
                                    href="tel:01023033778"
                                    className="block w-full py-4 bg-gradient-to-r from-aurora-cyan to-aurora-purple text-midnight-950 font-bold text-center rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all"
                                    data-testid="link-pricing-call"
                                >
                                    지금 바로 전화로 확인하기
                                </a>
                                <p className="mt-4 text-center text-sm text-gray-500">
                                    * 문의 주시면 그날 기준으로 솔직하게 말씀드립니다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 glass-panel p-6 rounded-2xl border border-aurora-gold/20">
                            <h4 className="text-aurora-gold font-bold mb-3 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                달토 가격 안내 원칙
                            </h4>
                            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                                <li>• 방문 전 안내한 가격이 곧 최종 가격입니다</li>
                                <li>• 현장에서 갑자기 비용이 올라가는 구조가 아닙니다</li>
                                <li>• 인원이 많을수록 1인당 부담이 낮아집니다</li>
                                <li>• 평일 낮 시간대는 상대적으로 저렴하게 이용 가능합니다</li>
                                <li>• 음식 추가 여부, 연장 여부 모두 선택 사항입니다</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <div ref={ref2} className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                강남 달토 <span className="text-gradient-aurora">요금 체계 이해하기</span>
                            </h3>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                                강남 하이퍼블릭 가라오케의 요금 체계는 복잡해 보이지만,
                                달토는 이를 최대한 쉽고 명확하게 설명해드립니다.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "주대 (주류 비용)",
                                    color: "border-aurora-cyan/30",
                                    accent: "text-aurora-cyan",
                                    desc: "룸에서 마시는 주류 비용으로, 선택하시는 주종과 병수에 따라 달라집니다. 강남 달토는 선택하신 주종의 가격을 명확히 안내드립니다.",
                                },
                                {
                                    title: "TC (시간 비용)",
                                    color: "border-aurora-purple/30",
                                    accent: "text-aurora-purple",
                                    desc: "TC는 이용 시간과 동반 인원에 따라 책정되는 비용입니다. 사전에 인원과 시간을 말씀해 주시면 정확한 TC 비용을 미리 안내드립니다.",
                                },
                                {
                                    title: "연장 비용",
                                    color: "border-aurora-gold/30",
                                    accent: "text-aurora-gold",
                                    desc: "기본 시간 이후 연장을 원하실 경우 추가 비용이 발생합니다. 연장 비용도 현장에서 명확히 안내드리며, 강요 없이 자유롭게 선택하실 수 있습니다.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className={`glass-panel p-6 rounded-2xl border ${item.color}`}>
                                    <h4 className={`text-lg font-bold mb-3 ${item.accent}`}>{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
