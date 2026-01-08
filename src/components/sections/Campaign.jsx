import React from 'react';
import Container from '../common/Container';
import { Heart, CheckCircle, Gift, CreditCard, Phone, Mail } from 'lucide-react';

const Campaign = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden" id="campaign">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <Container>
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
                    <span className="inline-block py-2 px-4 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold tracking-wide mb-6">
                        Civility Improvement Initiative Campaign 2026
                    </span>
                    <h2 className="text-slate-900 font-bold tracking-tight text-3xl md:text-4xl mb-8 leading-tight">
                        Help Us Nurture a Kinder Society
                    </h2>

                    <div className="space-y-4 text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto">
                        <p>Imagine children growing up with respect.</p>
                        <p>Leaders shaped by kindness.</p>
                        <p>Communities guided by empathy.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 relative z-10">
                    {/* Left Column: Context & Vision */}
                    <div>
                        <div className="prose prose-lg text-slate-600 mb-10">
                            <p className="leading-relaxed">
                                That is the heart of the <strong className="text-primary-800">Civility Improvement Initiative Campaign 2026</strong>—a movement restoring civility, refinement, and human dignity across schools, higher institutions, care homes, and healthcare facilities in South East Nigeria.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <span className="p-2 bg-yellow-100 text-yellow-700 rounded-lg mr-3">
                                    <Heart size={20} fill="currentColor" />
                                </span>
                                Why Your Support Matters
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Kinder, safer learning and living spaces',
                                    'Healthier schools, institutions, and workplaces',
                                    'A new generation leading with respect and empathy'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-primary-700 font-medium italic bg-primary-50 p-4 rounded-xl text-center">
                                "Every contribution helps plant these values where they matter most—early and intentionally."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Ways to Support */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                            <span className="p-2 bg-blue-100 text-blue-700 rounded-lg mr-3">
                                <Gift size={20} />
                            </span>
                            Ways to Support
                        </h3>

                        {/* Tool Kits */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <div className="bg-primary-900 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Good Manners Tool Kit</h4>
                                    <p className="text-primary-200 text-sm mb-4">For children</p>
                                </div>
                                <div className="text-2xl font-bold">₦18,000</div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-300 transition-colors duration-300 hover:scale-[1.02]">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Humanity & Refinement Tool Kit</h4>
                                    <p className="text-slate-500 text-sm mb-4">For professionals & caregivers</p>
                                </div>
                                <div className="text-2xl font-bold text-primary-700">₦25,000</div>
                            </div>
                        </div>

                        <div className="mt-6 text-slate-600 text-sm">
                            Your support directly equips learners and caregivers with practical tools for respectful living.
                        </div>
                    </div>
                </div>

                {/* Donation & Contact Info */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden z-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        {/* Contribution Details */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center">
                                <CreditCard className="mr-3 text-primary-400" />
                                Make a Contribution
                            </h3>

                            <div className="space-y-6 text-slate-300">
                                <div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Account Name</div>
                                    <div className="text-xl font-mono text-white bg-slate-800/50 p-3 rounded-lg border border-slate-700 inline-block min-w-[250px]">____________________</div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Bank</div>
                                    <div className="text-xl font-mono text-white bg-slate-800/50 p-3 rounded-lg border border-slate-700 inline-block min-w-[250px]">____________________</div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Account Number</div>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-slate-800/50 p-3 rounded-lg border border-slate-700 inline-block min-w-[250px]">__________________</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Guidance */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-8 text-primary-200">For guidance on how to support</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400">Phone</div>
                                            <div className="text-lg font-medium">____________________________</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400">Email</div>
                                            <div className="text-lg font-medium">____________________________</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-xl font-serif italic text-primary-100/90 text-center">
                                    "Together, we can raise better humans and build a more civil society—one life at a time."
                                </p>
                                <div className="text-center mt-4 font-bold tracking-widest uppercase text-sm text-white/50">
                                    Character Today. A Kinder Society Tomorrow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Campaign;
