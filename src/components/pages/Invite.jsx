import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { School, Building, ArrowRight } from 'lucide-react';

const Invite = () => {
    return (
        <div className="pt-20">
            <Section className="bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Invite Us</h1>
                        <p className="text-xl font-medium text-slate-600 max-w-2xl mx-auto">
                            Partner with ESVO to build a culture of civility, respect, and humane leadership.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        {/* School Section */}
                        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col h-full cursor-pointer hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <School size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Schools</h3>
                            <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                                Are you seeking to cultivate a kinder, more respectful culture within your school? Our Good Manners Toolkit is designed to promote positive behaviour, mutual respect, and character development. We also support schools in establishing Good Manners Clubs to sustain these values.
                            </p>
                        </div>

                        {/* Organization Section */}
                        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col h-full cursor-pointer hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <Building size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Organisations</h3>
                            <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                                Are you experiencing high staff turnover or declining team morale in your organisation? Our Humanity and Refinement Toolkit addresses these challenges by equipping teams with conscience-based leadership and emotional intelligence for healthier relationships and improved workplace culture.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto text-center bg-primary-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Ready to transform your community?</h3>
                            <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                                Do not allow a toxic environment to persist. Get in touch with us today to begin creating a more respectful, humane, and thriving community.
                            </p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeqL72fQQY0-yg-4-1yqbtOTX_CerptyaGUH2We5mz6Q--CNQ/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-white text-primary-900 font-bold py-4 px-8 rounded-xl hover:bg-primary-50 transition-colors"
                            >
                                Fill Expression of Interest Form
                                <ArrowRight className="ml-2" size={20} />
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Invite;
