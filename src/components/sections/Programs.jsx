import React from 'react';
import { Package, Briefcase, Globe } from 'lucide-react';
import Section from '../common/Section';
import Container from '../common/Container';

const Programs = () => {
    return (
        <Section id="programs" className="bg-white">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">Our Signature Tool Kits</h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Comprehensive toolkits and initiatives designed to cultivate values, character, and responsible leadership
                    </p>
                </div>

                {/* Top Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Card 1: Good Manners */}
                    <div className="bg-white rounded-3xl p-10 cursor-pointer">
                        <div className="flex items-start justify-between mb-8">
                            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center">
                                <Package size={28} strokeWidth={1.5} />
                            </div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wide">
                                Ages 7-13
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Good Manners Tool Kit</h3>
                        <p className="text-slate-500 text-sm mb-8">
                            Shaping courteous, confident, and emotionally aware children
                        </p>

                        <p className="text-slate-600 leading-relaxed text-sm">
                            An engaging toolkit that helps children embrace respect, consideration, and kindness through stories, games, roleplay, reflection, and creative expression.
                        </p>
                    </div>

                    {/* Card 2: Humanity & Refinement */}
                    <div className="bg-white rounded-3xl p-10 cursor-pointer">
                        <div className="flex items-start justify-between mb-8">
                            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                                <Briefcase size={28} strokeWidth={1.5} />
                            </div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-wide">
                                Leaders, Educators & Caregivers
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Humanity and Refinement Tool Kit</h3>
                        <p className="text-slate-500 text-sm mb-8">
                            For professionals working with minors and vulnerable persons
                        </p>

                        <p className="text-slate-600 leading-relaxed text-sm">
                            Equips teams to lead and serve with conscience, courtesy, emotional intelligence, and accountability fostering refined behaviour and positive institutional culture.
                        </p>
                    </div>
                </div>

                {/* Bottom Banner: Civility Initiative */}
                <div className="bg-primary-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                            <circle cx="300" cy="100" r="200" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                <Globe size={32} className="text-white" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Civility Improvement Initiative</h3>
                                <div className="text-primary-200 text-sm font-medium"></div>
                            </div>
                        </div>

                        <div className="space-y-10 max-w-4xl">
                            <p className="text-lg text-primary-50 leading-relaxed font-medium">
                                The Civility Improvement Initiative is ESVO’s flagship programme designed to restore civility, empathy, refinement, and human dignity across schools, healthcare facilities, care homes, institutions, and communities in South-East Nigeria.
                            </p>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-4">Why This Matters</h4>
                                <p className="text-base text-primary-100 leading-relaxed mb-4">
                                    Across many sectors, declining standards of conduct, limited emotional intelligence, and weakened value systems are affecting learning environments, service delivery, leadership effectiveness, and social cohesion. When respect erodes, trust breaks down, and communities suffer.
                                </p>
                                <p className="text-base text-primary-100 leading-relaxed">
                                    This initiative responds by addressing behavior at its root. ESVO equips individuals and institutions with the mindset needed to foster respectful relationships, and safer, more inclusive environments.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-6">Our Impact Vision</h4>
                                <p className="text-base text-primary-100 leading-relaxed mb-6">
                                    By strengthening character and promoting everyday civility, the Civility Improvement Initiative contributes to:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Improved behaviour and emotional intelligence in schools',
                                        'More compassionate and ethical leadership in institutions',
                                        'Safer, kinder, and more dignified spaces for learning, care, and service',
                                        'Stronger communities grounded in mutual respect and humanity'
                                    ].map((item, i) => (
                                        <div key={i} className="px-6 py-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-sm font-medium text-white flex items-center">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-base text-primary-100 italic leading-relaxed border-t border-white/20 pt-8 mt-8">
                                "At its heart, this programme affirms that sustainable social change begins with how we treat one another, intentionally, consistently, and together."
                            </p>
                        </div>
                    </div>
                </div>

            </Container>
        </Section>
    );
};

export default Programs;
