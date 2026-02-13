import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import pricingCrystal from '@/assets/pricing_crystal.png';

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="pricing" className="py-24 bg-midnight-950 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-aurora-purple/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            가격과 주대,<br />
                            <span className="text-gradient-aurora">숨기지 않습니다</span>
                        </h2>
                        <div className="space-y-8 text-lg text-gray-400">
                            <p>
                                가격 이야기는 애매하게 말하면 꼭 문제가 생깁니다.<br />
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
                                    "현금/카드 정찰제 운영"
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}