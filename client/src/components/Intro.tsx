import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircle, Search, AlertCircle, ShieldCheck, Users, BadgeCheck } from 'lucide-react';
import gallery1 from '@/assets/gallery/gallery1.jpg';

export default function Intro() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

    return (
        <section id="intro" className="py-24 bg-midnight-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            강남 달토, 왜 이렇게 <br />
                            <span className="text-gradient-aurora">물어보는 분들</span>이 많을까요?
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                강남에서 하이퍼블릭 가라오케나 달토를 찾는 분들 대부분이
                                처음부터 이런 생각을 합니다.
                            </p>
                            <ul className="space-y-4 my-8">
                                <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                    <Search className="w-8 h-8 text-aurora-cyan flex-shrink-0" />
                                    <span className="text-gray-200 font-medium">"광고는 많은데, 막상 가격은 안 나와 있고"</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                    <HelpCircle className="w-8 h-8 text-aurora-purple flex-shrink-0" />
                                    <span className="text-gray-200 font-medium">"주대 얼마인지, 어떻게 진행되는지 정확히 안 알려준다"</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                    <AlertCircle className="w-8 h-8 text-aurora-pink flex-shrink-0" />
                                    <span className="text-gray-200 font-medium">"괜히 갔다가 생각보다 많이 나오면 어쩌지"</span>
                                </li>
                            </ul>
                            <p>
                                <strong className="text-white">강남 달토 (달리는토끼)</strong>는 이런 걱정을 줄이기 위해
                                운영 방식부터 다르게 가져가고 있습니다.
                            </p>
                            <p>
                                "무조건 좋다", "무조건 싸다" 같은 말 안 합니다.
                                대신 <strong className="text-white">지금 상황이 어떤지, 얼마 정도 생각하셔야 하는지</strong>,
                                그리고 <strong className="text-white">이용해도 괜찮을지 아닐지</strong>를 먼저 말씀드립니다.
                            </p>
                            <p className="text-gray-500 text-base">
                                강남 하이퍼블릭 가라오케 시장에는 수많은 업체가 있습니다.
                                그 중에서 <strong className="text-gray-300">강남 달토(달리는토끼)</strong>가 반복 고객 비율이 높은 이유는
                                단 하나입니다 — 처음부터 솔직하게 말하기 때문입니다.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-cyan to-aurora-purple opacity-20 blur-[80px] rounded-full" />
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-6">
                            <img
                                src={gallery1}
                                alt="강남 달토 달리는토끼 프리미엄 룸 인테리어"
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-gray-300">
                                    달토 프리미엄 룸 인테리어
                                </span>
                            </div>
                        </div>

                        <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
                            <h3 className="text-2xl font-bold mb-6 text-white">처음 연락 주시는 분들께</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                강남 달토를 처음 문의하시는 분들 중 절반 이상은
                                이미 다른 곳에서 불편한 경험을 해보신 분들입니다.
                                강남 가라오케, 강남 하이퍼블릭을 찾다가
                                정보가 부족해 실망하신 분들이 많습니다.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-pink mt-2.5 flex-shrink-0" />
                                    <p className="text-gray-300">설명이랑 실제가 달랐거나</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-purple mt-2.5 flex-shrink-0" />
                                    <p className="text-gray-300">가격을 나중에야 알았거나</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan mt-2.5 flex-shrink-0" />
                                    <p className="text-gray-300">분위기가 부담스러웠던 경우들</p>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-white font-medium">
                                    오늘 한 번 받는 손님보다,<br />
                                    <span className="text-aurora-gold">다음에 다시 연락 주는 손님</span>이 더 중요합니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="glass-panel p-7 rounded-2xl border border-aurora-gold/20 bg-aurora-gold/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-aurora-gold/20 border border-aurora-gold/30 text-aurora-gold text-xs font-bold tracking-widest uppercase">2026년 최신</span>
                            <h3 className="text-white font-bold text-lg">강남 달토 2026년 현재 운영 현황</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            {[
                                { label: "운영 상태", value: "정상 운영 중", sub: "연중무휴, 매일 18:00~" },
                                { label: "출근 인원", value: "정기 출근", sub: "다양한 구성원 상시 대기" },
                                { label: "예약 방식", value: "전화·문자·텔레그램", sub: "당일 예약 가능" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                                    <p className="text-aurora-gold font-bold mb-0.5">{item.value}</p>
                                    <p className="text-gray-400 text-xs">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs mt-4">
                            * 2026년 4월 기준 정보입니다. 최신 출근 상황은 전화(010-2303-3778)로 확인하세요.
                        </p>
                    </div>
                </div>

                <div ref={ref2} className="mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            강남 달토(달리는토끼)가 <span className="text-gradient-aurora">다른 이유</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            강남 하이퍼블릭 가라오케 중에서 달토가 꾸준히 선택받는 세 가지 핵심 이유입니다.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: ShieldCheck,
                                color: "text-aurora-cyan",
                                bg: "bg-aurora-cyan/10 border-aurora-cyan/20",
                                title: "투명한 가격 공개",
                                body: "강남 달토는 방문 전에 주대·TC 구조를 명확히 안내합니다. 현장에서 갑자기 가격이 달라지거나 설명 없이 추가 비용이 붙는 구조가 아닙니다. 사전에 안내한 금액이 곧 최종 금액입니다.",
                            },
                            {
                                icon: Users,
                                color: "text-aurora-purple",
                                bg: "bg-aurora-purple/10 border-aurora-purple/20",
                                title: "많은 출근 인원",
                                body: "강남 달토는 출근 인원이 많아 초이스의 선택 폭이 넓습니다. 취향에 맞게 추천드리는 방식으로 진행되며, 억지로 강요하거나 불편한 상황을 만들지 않습니다. 손님의 만족을 최우선으로 합니다.",
                            },
                            {
                                icon: BadgeCheck,
                                color: "text-aurora-gold",
                                bg: "bg-aurora-gold/10 border-aurora-gold/20",
                                title: "높은 재방문율",
                                body: "강남 달토의 재방문 고객 비율은 업계 평균보다 높습니다. 한 번 방문하셨다가 다음에도 달토를 찾는 분들이 많은 이유는 간단합니다 — 처음 설명한 대로 실제도 동일하기 때문입니다.",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className={`glass-panel p-8 rounded-2xl border ${item.bg}`}
                            >
                                <div className="mb-5">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h4 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
