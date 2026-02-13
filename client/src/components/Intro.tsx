import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircle, Search, AlertCircle } from 'lucide-react';
import introVisual from '@/assets/intro_visual.png';

export default function Intro() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                            왜 이렇게 <br />
                            <span className="text-gradient-aurora">물어보는 분들</span>이 많을까요?
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                강남에서 가라오케나 하이퍼블릭을 찾는 분들 대부분이<br />
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
                                <strong className="text-white">강남 달토 (달리는토끼)</strong>는 이런 걱정을 줄이기 위해<br />
                                운영 방식부터 다르게 가져가고 있습니다.
                            </p>
                            <p>
                                "무조건 좋다", "무조건 싸다" 같은 말 안 합니다.<br />
                                대신 <strong className="text-white">지금 상황이 어떤지, 얼마 정도 생각하셔야 하는지</strong>,<br />
                                그리고 <strong className="text-white">이용해도 괜찮을지 아닐지</strong>를 먼저 말씀드립니다.
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
                            <img src={introVisual} alt="Abstract Visual" className="w-full h-auto object-cover opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                        </div>

                        <div className="glass-panel p-8 md:p-12 rounded-3xl relative">
                            <h3 className="text-2xl font-bold mb-6 text-white">처음 연락 주시는 분들께</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                강남 달토를 처음 문의하시는 분들 중 절반 이상은<br />
                                이미 다른 곳에서 불편한 경험을 해보신 분들입니다.
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
            </div>
        </section>
    );
}