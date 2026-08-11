import React, { useState } from 'react';
import { Package, Briefcase, Globe, ArrowRight, X, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import Section from '../common/Section';
import Container from '../common/Container';
import GoodMannersImg from '../../assets/good-manners-kit.jpg';
import HumanityKitImg from '../../assets/humanity-kit.jpg';

const Programs = () => {
    const [selectedToolkit, setSelectedToolkit] = useState(null);

    const toolkits = {
        goodManners: {
            title: 'The Good Manners Tool Kit',
            subtitle: 'Shaping courteous, confident, and emotionally aware children',
            target: 'Ages 7-13 (Primary & Junior Secondary)',
            price: '₦17,000 per copy',
            image: GoodMannersImg,
            color: 'primary',
            badgeBg: 'bg-primary-50 text-primary-700',
            btnBg: 'bg-primary-700 hover:bg-primary-800 text-white',
            overview: 'An engaging, interactive toolkit designed to instill essential social values, empathy, respect, and positive daily habits in growing children through stories, roleplays, reflection journals, and creative exercises.',
            modules: [
                'Module 1: Respect for Self & Others (Everyday Etiquette)',
                'Module 2: Kindness & Anti-Bullying (Building Safe Classrooms)',
                'Module 3: Emotional Intelligence & Conflict Resolution',
                'Module 4: Respecting Authorities & Caring for Environment',
                'Module 5: The 21-Day Civility Challenge'
            ]
        },
        humanity: {
            title: 'The Humanity and Refinement Tool Kit',
            subtitle: 'For leaders and professionals working with minors and vulnerable persons',
            target: 'Educators, Healthcare Workers, Caregivers & Corporate Leaders',
            price: '₦28,000 per copy',
            image: HumanityKitImg,
            color: 'amber',
            badgeBg: 'bg-amber-50 text-amber-700',
            btnBg: 'bg-amber-600 hover:bg-amber-700 text-white',
            overview: 'Equips teams, leaders, and caregivers to serve with high emotional awareness, conscience, refined conduct, and moral accountability, fostering safe institutional culture in schools, healthcare facilities, and care homes.',
            modules: [
                'Module 1: Refined Leadership & Professional Ethics',
                'Module 2: Safeguarding Minors & Vulnerable Persons',
                'Module 3: Constructive Communication & Workplace Harmony',
                'Module 4: De-escalation & Emotional Regulation',
                'Module 5: Institutional Accountability & Culture Change'
            ]
        }
    };

    return (
        <Section id="programs" className="bg-white">
            <Container>
                {/* Our Programs */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">Our Programs</h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Purpose-driven initiatives designed to build respectful schools, confident youth leaders, and a culture of civility.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: 'Respectful Schools Programme',
                            description: 'An Anti-bullying Programme promoting Safe, Inclusive Learning Systems'
                        },
                        {
                            title: 'Young Ambassadors of Respect Summit',
                            description: 'A platform for youth leadership, dialogue, and advocacy for values-based citizenship.'
                        },
                        {
                            title: 'Ambassador of Respect Programme',
                            description: 'Featuring the 21-Day Civility Challenge.'
                        }
                    ].map((program, index) => (
                        <div key={index} className="rounded-3xl border border-slate-200 bg-primary-50/50 p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 mb-6">
                                <Package size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{program.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">{program.description}</p>
                        </div>
                    ))}
                </div>

                {/* Signature Tool Kits Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">Our Signature Tool Kits</h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Comprehensive toolkits and initiatives designed to cultivate values, character, and responsible leadership
                    </p>
                </div>

                {/* Content Container */}
                <div className="space-y-24 mb-24">
                    {/* Item 1: Good Manners */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Image Side */}
                        <div className="w-full lg:w-5/12">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 group max-w-lg mx-auto lg:max-w-none">
                                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img
                                    src={GoodMannersImg}
                                    alt="The Good Manners Tool Kit"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full lg:w-7/12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                                    <Package size={24} strokeWidth={1.5} />
                                </span>
                                <span className="py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide">
                                    Ages 7-13
                                </span>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                The Good Manners Tool Kit
                            </h3>

                            <p className="text-xl text-slate-500 font-medium mb-6">
                                Shaping courteous, confident, and emotionally aware children
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                An engaging toolkit that helps children embrace respect, consideration, and kindness through stories, games, roleplay, reflection, and creative expression.
                            </p>

                            <button
                                type="button"
                                onClick={() => setSelectedToolkit(toolkits.goodManners)}
                                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-primary-200"
                            >
                                <span>Explore Toolkit Syllabus</span>
                                <BookOpen size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Item 2: Humanity & Refinement */}
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Text Side */}
                        <div className="w-full lg:w-7/12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600">
                                    <Briefcase size={24} strokeWidth={1.5} />
                                </span>
                                <span className="py-1.5 px-4 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold tracking-wide">
                                    Leaders, Educators & Caregivers
                                </span>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                The Humanity and Refinement Tool Kit
                            </h3>

                            <p className="text-xl text-slate-500 font-medium mb-6">
                                For leaders and professionals working with minors and vulnerable persons
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Equips teams to lead and serve with conscience, courtesy, emotional intelligence, and accountability fostering refined behaviour and positive institutional culture.
                            </p>

                            <button
                                type="button"
                                onClick={() => setSelectedToolkit(toolkits.humanity)}
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-amber-200"
                            >
                                <span>Explore Toolkit Syllabus</span>
                                <BookOpen size={18} />
                            </button>
                        </div>

                        {/* Image Side */}
                        <div className="w-full lg:w-5/12">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 group max-w-lg mx-auto lg:max-w-none">
                                <div className="absolute inset-0 bg-amber-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img
                                    src={HumanityKitImg}
                                    alt="The Humanity and Refinement Tool Kit"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
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
                        </div>
                    </div>
                </div>
            </Container>

            {/* Toolkit Preview Modal */}
            {selectedToolkit && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-white rounded-[2.5rem] max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => setSelectedToolkit(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <span className={`py-1.5 px-4 rounded-full text-sm font-semibold ${selectedToolkit.badgeBg}`}>
                                {selectedToolkit.target}
                            </span>
                            <span className="text-slate-400 font-medium text-sm">{selectedToolkit.price}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{selectedToolkit.title}</h3>
                        <p className="text-slate-600 text-base mb-6">{selectedToolkit.overview}</p>

                        <div className="space-y-4 mb-8">
                            <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <Sparkles size={20} className="text-primary-600" />
                                Key Curriculum Modules Included:
                            </h4>
                            <div className="space-y-3">
                                {selectedToolkit.modules.map((module, idx) => (
                                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3 text-slate-800 text-sm font-medium">
                                        <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{module}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href="/partner"
                                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold py-3.5 px-8 rounded-xl transition-all shadow-md ${selectedToolkit.btnBg}`}
                            >
                                <span>Sponsor This Toolkit for a School</span>
                                <ArrowRight size={18} />
                            </a>
                            <button
                                type="button"
                                onClick={() => setSelectedToolkit(null)}
                                className="w-full sm:w-auto bg-slate-100 text-slate-700 font-semibold py-3.5 px-6 rounded-xl hover:bg-slate-200 transition-colors"
                            >
                                Close Preview
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Programs;

