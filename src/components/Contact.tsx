import { Phone, MessageSquare, Car, Send } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" className="bg-midnight-950 pt-24 pb-32 md:pb-12 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('@/assets/contact_bg.png')] bg-cover bg-bottom opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/40 to-midnight-950" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-aurora-mesh opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Pickup Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">픽업 및 예약 안내</h2>

                        <div className="bg-white/5 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-aurora-purple/20 rounded-lg">
                                    <Car className="text-aurora-purple w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">픽업 서비스</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                강남 달토는 상황에 따라 픽업 서비스도 안내해드리고 있습니다.<br />
                                자차가 없거나 이동이 애매하신 경우 미리 말씀해 주세요.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-200">예약 시 필요한 정보</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-obsidian p-4 rounded-xl border border-white/5 text-center">
                                    <span className="block text-gray-500 text-sm mb-1">STEP 1</span>
                                    <span className="text-white font-medium">방문 인원</span>
                                </div>
                                <div className="bg-obsidian p-4 rounded-xl border border-white/5 text-center">
                                    <span className="block text-gray-500 text-sm mb-1">STEP 2</span>
                                    <span className="text-white font-medium">방문 시간</span>
                                </div>
                                <div className="col-span-2 bg-obsidian p-4 rounded-xl border border-white/5 text-center">
                                    <span className="block text-gray-500 text-sm mb-1">STEP 3</span>
                                    <span className="text-white font-medium">대략적인 분위기/취향</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            편하게 <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-pink">문의주세요</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            화려한 말로 포장하지 않습니다.<br />
                            현장에서 실제로 하는 방식 그대로 설명하고,<br />
                            손님 입장에서 불편할 수 있는 부분을 최대한 줄여드립니다.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="tel:01023033778"
                                className="group flex items-center justify-between p-6 bg-gradient-to-r from-aurora-cyan/10 to-aurora-purple/10 border border-aurora-cyan/20 rounded-2xl hover:border-aurora-cyan/50 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <Phone className="text-aurora-cyan w-8 h-8 group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-sm text-aurora-cyan font-bold">24시간 전화 문의</p>
                                        <p className="text-2xl font-bold text-white">010-2303-3778</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-aurora-cyan group-hover:text-black transition-all">
                                    →
                                </div>
                            </a>

                            <a
                                href="sms:01023033778"
                                className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <MessageSquare className="text-gray-400 w-8 h-8 group-hover:text-white transition-colors" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-400 font-medium">문자 메세지</p>
                                        <p className="text-xl font-bold text-white">문자로 문의하기</p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://t.me/hscompanyshs"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <Send className="text-sky-400 w-8 h-8 group-hover:text-white transition-colors -rotate-45 mb-1 mr-1" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-400 font-medium">텔레그램</p>
                                        <p className="text-xl font-bold text-white">@hscompanyshs</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                    <p>© 2024 Gangnam Dalto Running Rabbit. All rights reserved.</p>
                </div>
            </div>

            {/* Mobile Floating Action Bar */}
            <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-2xl -z-10 shadow-2xl" />
                <div className="flex items-center justify-between p-2 border border-white/10 rounded-2xl">
                    <a
                        href="tel:01023033778"
                        className="flex-1 flex items-center justify-center gap-2 py-3 mr-2 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-xl text-black font-bold shadow-[0_0_15px_rgba(45,212,191,0.3)] active:scale-95 transition-transform"
                    >
                        <Phone size={18} fill="currentColor" />
                        전화걸기
                    </a>
                    <a
                        href="sms:01023033778"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl text-white font-bold hover:bg-white/20 active:scale-95 transition-all"
                    >
                        <MessageSquare size={18} />
                        문자유
                    </a>
                </div>
            </div>
        </footer>
    );
}
