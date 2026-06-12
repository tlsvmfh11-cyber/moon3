import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import gallery4 from '@/assets/gallery/gallery4.jpg';

export default function Reviews() {
    const reviews = [
        {
            text: "설명이랑 실제가 같다",
            detail: "강남 달토에서는 사전에 안내해준 가격 그대로였고, 현장에서 갑자기 비용이 추가되는 일이 없었습니다. 다른 강남 하이퍼블릭과 달리 투명하게 운영한다는 느낌이 확실했습니다.",
            tag: "투명한 운영",
            date: "2026.04"
        },
        {
            text: "혼자 와도 어색하지 않다",
            detail: "1인 방문이라서 걱정했는데 분위기를 잘 맞춰주셔서 전혀 어색하지 않았습니다. 혼자 강남 달토를 처음 이용하는 분들도 부담 없이 오셔도 됩니다.",
            tag: "1인 방문",
            date: "2026.04"
        },
        {
            text: "출근 인원이 많아서 좋았다",
            detail: "강남 달토는 출근 인원이 많아서 초이스 폭이 넓었습니다. 취향에 맞게 잘 맞춰주셔서 만족스러운 시간을 보냈습니다. 다음에도 또 방문할 것 같습니다.",
            tag: "다양한 선택",
            date: "2026.03"
        },
        {
            text: "분위기가 부담스럽지 않다",
            detail: "강남 하이퍼블릭 처음 가봤는데 달토라서 다행이었습니다. 억지로 뭔가를 강요하는 느낌이 없고, 편안하게 즐길 수 있었습니다. 처음 가시는 분들께 추천합니다.",
            tag: "편안한 분위기",
            date: "2026.03"
        },
        {
            text: "재방문했습니다",
            detail: "처음 달토를 갔을 때 설명이 너무 명확해서 인상적이었습니다. 한 달 뒤 지인들과 다시 방문했는데 그때도 동일하게 잘 운영되고 있었습니다. 믿을 수 있는 곳입니다.",
            tag: "재방문",
            date: "2026.04"
        },
        {
            text: "주대 설명이 명확하다",
            detail: "강남 달토에서는 룸에 들어가기 전에 주대와 TC 비용을 명확하게 설명해줍니다. 다른 강남 가라오케에서 나중에야 가격을 알게 되어 당황했던 경험이 있었는데, 달토는 달랐습니다.",
            tag: "투명한 가격",
            date: "2026.02"
        },
        {
            text: "픽업까지 잘 해줬다",
            detail: "강남역에서 이동이 애매했는데 픽업 서비스를 요청했더니 빠르게 도와주셨습니다. 처음 방문이었는데 픽업부터 퇴장까지 모든 과정이 매끄러웠습니다.",
            tag: "픽업 서비스",
            date: "2026.03"
        },
        {
            text: "회식으로 갔는데 완벽했다",
            detail: "팀 회식으로 달토를 방문했습니다. 인원이 많았는데도 룸 안내부터 주대 설명까지 깔끔하게 진행됐습니다. 회식 장소로 강남 달토를 추천할 수 있습니다.",
            tag: "단체 방문",
            date: "2026.04"
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-obsidian relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-purple/30 bg-aurora-purple/10 text-aurora-purple text-xs font-semibold tracking-widest uppercase mb-6">Reviews</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        강남 달토, 다시 찾는 <span className="text-gray-500">이유</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-2">
                        한 번 오고 끝나는 손님보다 다시 연락 주는 손님이 많습니다.
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base">
                        강남 달토(달리는토끼)를 이용해주신 분들의 실제 경험을 공유합니다.
                        투명한 운영과 편안한 분위기 덕분에 재방문율이 높습니다. (2026년 최신 후기)
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            whileHover={{ y: -5 }}
                            className="glass-panel p-8 rounded-2xl relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-white/5 w-8 h-8 group-hover:text-aurora-purple/40 transition-colors" />
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-aurora-gold fill-current" />
                                ))}
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-block px-2 py-0.5 rounded-full bg-aurora-purple/10 border border-aurora-purple/20 text-aurora-purple text-xs font-medium">
                                    {review.tag}
                                </span>
                                <span className="text-gray-600 text-xs">{review.date}</span>
                            </div>
                            <p className="text-lg font-medium text-white group-hover:text-aurora-cyan transition-colors mb-3" data-testid={`text-review-${idx}`}>
                                "{review.text}"
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {review.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-14 relative rounded-3xl overflow-hidden"
                >
                    <img
                        src={gallery4}
                        alt="강남 달토 럭셔리 분위기 인테리어 2026"
                        className="w-full h-[260px] md:h-[340px] object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-obsidian/90 via-obsidian/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-end">
                        <div className="px-10 md:px-16 max-w-lg text-right">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">달토가 특별한 이유</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                강남 달토의 럭셔리한 분위기와 세심한 서비스가 재방문을 만들어냅니다.
                                처음 방문부터 편안하고 특별한 경험을 선사합니다.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-10 max-w-4xl mx-auto">
                    <div className="glass-panel p-8 rounded-3xl border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-6 h-6 text-aurora-gold" />
                            <h3 className="text-xl font-bold text-white">강남 달토 2026년 이용 통계</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "높은", unit: "재방문율", desc: "다시 찾는 고객 비율" },
                                { value: "100%", unit: "투명 가격", desc: "사전 안내 금액 = 최종 금액" },
                                { value: "연중", unit: "무휴 운영", desc: "매일 저녁 6시부터" },
                                { value: "다수", unit: "출근 인원", desc: "폭넓은 초이스 가능" },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-3xl font-bold text-aurora-cyan mb-1">{stat.value}</div>
                                    <div className="text-white font-semibold text-sm mb-1">{stat.unit}</div>
                                    <div className="text-gray-500 text-xs">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        달리는토끼, 달토라는 이름으로 꾸준히 찾는 분들이 있다는 건<br />
                        결국 <span className="text-white">편했기 때문</span>이라고 생각합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
