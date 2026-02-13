import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Train, Clock, Car, Phone } from 'lucide-react';

export default function Location() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const infoItems = [
        {
            icon: MapPin,
            title: "주소",
            desc: "서울특별시 강남구 강남대로 인근",
            sub: "정확한 위치는 전화 문의 시 안내드립니다",
            color: "text-aurora-pink",
            bg: "bg-aurora-pink/20",
        },
        {
            icon: Train,
            title: "지하철",
            desc: "강남역 하차 후 도보 이동 가능",
            sub: "2호선 · 신분당선 강남역",
            color: "text-aurora-cyan",
            bg: "bg-aurora-cyan/20",
        },
        {
            icon: Clock,
            title: "영업시간",
            desc: "매일 저녁 6시(18:00) ~ 새벽",
            sub: "평일 ~05시 / 금·토 ~06시 / 일 ~04시",
            color: "text-aurora-gold",
            bg: "bg-aurora-gold/20",
        },
        {
            icon: Car,
            title: "픽업 서비스",
            desc: "자차가 없으신 경우 픽업 안내",
            sub: "사전 문의 시 편하게 안내해드립니다",
            color: "text-aurora-purple",
            bg: "bg-aurora-purple/20",
        },
    ];

    return (
        <section id="location" className="py-24 bg-obsidian relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-aurora-cyan/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-pink/30 bg-aurora-pink/10 text-aurora-pink text-xs font-semibold tracking-widest uppercase mb-6">Access</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        강남 달토 <span className="text-gray-500">오시는 길</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        강남역 인근, 편하게 방문하실 수 있습니다
                    </p>
                </div>

                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {infoItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-6 rounded-2xl border border-white/5"
                        >
                            <div className={`p-3 ${item.bg} rounded-lg w-fit mb-4`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2" data-testid={`text-location-title-${idx}`}>{item.title}</h3>
                            <p className="text-gray-300 font-medium mb-1">{item.desc}</p>
                            <p className="text-sm text-gray-500">{item.sub}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">처음 방문하시는 분들을 위한 안내</h3>
                        <div className="space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                강남 달토(달리는토끼)는 <strong className="text-white">강남역 인근</strong>에 위치해 있어
                                대중교통으로도 편하게 오실 수 있습니다.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                    <h4 className="text-white font-semibold mb-2">대중교통 이용 시</h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>2호선 · 신분당선 강남역 하차</li>
                                        <li>도보 이동 가능 거리</li>
                                        <li>버스 이용 시 강남역 정류장 하차</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                    <h4 className="text-white font-semibold mb-2">자가용 이용 시</h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>인근 유료 주차장 이용 가능</li>
                                        <li>대리운전 서비스 이용 가능</li>
                                        <li>자차 없으시면 픽업 서비스 안내</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 p-5 bg-gradient-to-r from-aurora-cyan/10 to-aurora-purple/10 rounded-xl border border-aurora-cyan/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <Phone className="w-5 h-5 text-aurora-cyan" />
                                    <p className="text-white font-semibold">위치 안내가 필요하시면</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    전화(<a href="tel:01023033778" className="text-aurora-cyan hover:underline" data-testid="link-location-phone">010-2303-3778</a>) 주시면 정확한 위치와 오시는 방법을 안내드립니다.
                                    픽업이 필요하신 경우에도 미리 말씀해 주세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}