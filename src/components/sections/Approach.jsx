import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { Eye, Target, Heart } from 'lucide-react';


const Approach = () => {
    return (
        <Section className="bg-white" id="about">
            <Container>
                {/* Header */}
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-4 block">About ESVO</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Founder's Message</h3>
                </div>

                {/* Founder's Message Content */}
                {/* Founder's Message Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
                    {/* Left Column: Message Text */}
                    <div className="bg-slate-50 rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
                        {/* Decorative Quote */}
                        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                            <span className="text-8xl font-serif text-primary-900">"</span>
                        </div>

                        <div className="prose prose-lg text-slate-700 relative z-10 leading-relaxed space-y-6">
                            <p className="font-medium text-lg text-slate-900">
                                Imagine a student going to school each day feeling invisible and unheard.
                            </p>
                            <p className="font-medium text-lg text-slate-900">
                                Imagine a patient spoken to harshly and left unattended.
                            </p>
                            <p className="font-medium text-lg text-slate-900">
                                Picture a vulnerable person in a care home treated without dignity or compassion.
                            </p>

                            <p>
                                These realities are why the Etiquette and Social Values Organization (ESVO) was founded.
                            </p>
                            <p>
                                Through the Civility Improvement Initiative, the Good Manners Toolkit, and the Humanity and Refinement Toolkit, we work with schools, universities, care homes, and healthcare facilities to restore civility, respect, and human dignity.
                            </p>
                            <p>
                                Supported by mentorship and structured monitoring, we help institutions become spaces where kindness is intentional, respect is practiced, and every individual matters.
                            </p>
                            <p className="text-primary-800 font-medium italic">
                                Join us in building a more civil, humane, and respectful society; one interaction at a time.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Founder Profile */}
                    <div className="flex flex-col items-center text-center lg:sticky lg:top-32">
                        <div className="relative mb-8 group">
                            <div className="absolute inset-0 bg-primary-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <img
                                src="/founder_update.jpg"
                                alt="Lady Jane Kalu Ndukwe"
                                className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white relative z-10"
                            />
                        </div>

                        <h4 className="text-2xl font-bold text-slate-900 font-serif mb-2">Lady Jane Kalu Ndukwe</h4>
                        <p className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-6">Founder, ESVO</p>

                        <div className="w-16 h-1 bg-primary-200 rounded-full mb-6"></div>

                        <p className="text-slate-500 italic max-w-xs">
                            "When conscience is awakened, transformation becomes possible."
                        </p>
                    </div>
                </div>

                {/* Bottom Cards: Vision, Mission, Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Vision */}
                    <div className="bg-white p-10 rounded-3xl text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Eye size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            A society guided by respect and conscience
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-10 rounded-3xl text-center cursor-pointer">
                        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Target size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To nurture moral awareness, courteous behaviour, and humane leadership
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="bg-white p-10 rounded-3xl text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Heart size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Core Values</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Respect | Kindness | Integrity | Service | Conscience
                        </p>
                    </div>
                </div>

            </Container>
        </Section>
    );
};

export default Approach;
