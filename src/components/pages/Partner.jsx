import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { Sprout, Leaf, TreeDeciduous } from 'lucide-react';

const Partner = () => {
    const sponsorshipOptions = [
        {
            title: 'Civility Seed Partner',
            price: '₦25,000',
            usd: '≈ USD $18–$20',
            description: 'Supports toolkit production and partial distribution for one school or institution.',
            icon: Sprout,
            color: 'text-green-500',
            bg: 'bg-green-50',
            border: 'border-green-100',
        },
        {
            title: 'Civility Growth Partner',
            price: '₦50,000',
            usd: '≈ USD $35–$40',
            description: 'Covers full toolkit production and delivery for one school or institution, with basic mentorship support.',
            icon: Leaf,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
        },
        {
            title: 'Civility Impact Partner',
            price: '₦100,000',
            usd: '≈ USD $70–$75',
            description: 'Provides comprehensive support, including full toolkit provision, mentorship, monitoring, documentation, and partner recognition across ESVO platforms.',
            icon: TreeDeciduous,
            color: 'text-primary-700',
            bg: 'bg-primary-50',
            border: 'border-primary-100',
        }
    ];

    return (
        <div className="pt-20">
            <Section className="bg-white">
                <Container>
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Partner With Us</h1>
                        <h2 className="text-2xl font-medium text-primary-700 mb-8">Support the ESVO Civility Improvement Initiative</h2>

                        <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
                            <p className="mb-6">
                                The ESVO Civility Improvement Initiative is dedicated to restoring civility, respect, and humane leadership in schools and institutions through practical toolkits, mentorship, and structured monitoring.
                            </p>
                            <p className="text-lg font-medium text-slate-800">
                                Your support transforms everyday environments into spaces where respect is practiced, character is strengthened, and human dignity is upheld.
                            </p>
                        </div>
                    </div>

                    {/* Sponsorship Options */}
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Sponsorship Options</h3>
                        <p className="text-center text-slate-600 text-lg mb-12">Sponsor a School or Institution</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {sponsorshipOptions.map((option, idx) => (
                                <div key={idx} className={`rounded-3xl p-8 flex flex-col h-full bg-white cursor-pointer shadow-md transition-all duration-300`}>
                                    <div className={`w-16 h-16 ${option.bg} ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <option.icon size={32} strokeWidth={1.5} />
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h4>

                                    <div className="mb-4">
                                        <span className={`text-2xl font-bold ${option.color} block`}>{option.price}</span>
                                        <span className="text-sm text-slate-400 font-medium">{option.usd}</span>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed flex-grow">
                                        {option.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="bg-slate-50 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                            <p className="text-lg text-slate-700 font-medium italic">
                                "All partners are recognised for their contribution to advancing civility, character education, and humane leadership."
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Partner;
