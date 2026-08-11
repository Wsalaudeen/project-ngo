import React, { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { Sprout, Leaf, TreeDeciduous, ArrowRight, X, CreditCard, Copy, Check, Heart, ShieldCheck } from 'lucide-react';

const Partner = () => {
    const [selectedTier, setSelectedTier] = useState(null);
    const [copied, setCopied] = useState(false);
    const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
    const [pledgeData, setPledgeData] = useState({ name: '', email: '', phone: '', schoolName: '' });

    const sponsorshipOptions = [
        {
            title: 'Civility Seed Partner',
            price: '₦25,000',
            usd: '≈ USD $18–$20',
            description: 'Supports toolkit production and partial distribution for one school or institution.',
            icon: Sprout,
            color: 'text-green-500',
            bg: 'bg-green-50',
            btnBg: 'bg-green-600 hover:bg-green-700',
        },
        {
            title: 'Civility Growth Partner',
            price: '₦50,000',
            usd: '≈ USD $35–$40',
            description: 'Covers full toolkit production and delivery for one school or institution, with basic mentorship support.',
            icon: Leaf,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            btnBg: 'bg-emerald-600 hover:bg-emerald-700',
        },
        {
            title: 'Civility Impact Partner',
            price: '₦100,000',
            usd: '≈ USD $70–$75',
            description: 'Provides comprehensive support, including full toolkit provision, mentorship, monitoring, documentation, and partner recognition across ESVO platforms.',
            icon: TreeDeciduous,
            color: 'text-primary-700',
            bg: 'bg-primary-50',
            btnBg: 'bg-primary-700 hover:bg-primary-800',
        }
    ];

    const handleCopyAccount = async () => {
        try {
            await navigator.clipboard.writeText('1986721334');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const handlePledgeSubmit = (e) => {
        e.preventDefault();
        setPledgeSubmitted(true);
    };

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
                                The ESVO Civility Improvement Initiative is dedicated to restoring civility, respect, and human leadership in communities, schools and institutions through practical toolkits, mentorship, and structured monitoring.
                            </p>
                            <p className="text-lg font-medium text-slate-800">
                                Your support transforms everyday environments into spaces where respect is practiced, character is strengthened, and human dignity is upheld.
                            </p>
                        </div>
                    </div>

                    {/* Sponsorship Options */}
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl font-bold text-center text-slate-900 mb-4">Sponsorship Options</h3>
                        <p className="text-center text-slate-600 text-lg mb-12">Sponsor a School or Institution</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {sponsorshipOptions.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-3xl p-8 flex flex-col justify-between h-full bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div>
                                        <div className={`w-16 h-16 ${option.bg} ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                                            <option.icon size={32} strokeWidth={1.5} />
                                        </div>

                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h4>

                                        <div className="mb-4">
                                            <span className={`text-3xl font-bold ${option.color} block`}>{option.price}</span>
                                            <span className="text-sm text-slate-400 font-medium">{option.usd}</span>
                                        </div>

                                        <p className="text-slate-600 leading-relaxed mb-8">
                                            {option.description}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedTier(option);
                                            setPledgeSubmitted(false);
                                        }}
                                        className={`w-full text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 ${option.btnBg} shadow-md`}
                                    >
                                        <span>Sponsor This Tier</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="bg-slate-50 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-slate-200/60">
                            <p className="text-lg text-slate-700 font-medium italic">
                                "All partners are recognised for their contribution to advancing civility, character education, and humane leadership."
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Sponsorship Modal */}
            {selectedTier && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-white rounded-[2.5rem] max-w-xl w-full p-8 sm:p-10 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setSelectedTier(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {pledgeSubmitted ? (
                            <div className="text-center py-8 space-y-4">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                    <Heart size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Thank You for Your Partnership!</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    We have recorded your pledge for the <span className="font-semibold text-slate-900">{selectedTier.title} ({selectedTier.price})</span>. Please proceed with the bank transfer details below to complete your sponsorship.
                                </p>
                                <div className="bg-slate-900 text-white rounded-2xl p-6 text-left space-y-3 mt-4">
                                    <div className="text-xs text-slate-400 uppercase font-semibold">Access Bank</div>
                                    <div className="text-lg font-medium text-slate-100">Etiquette and social values organizations</div>
                                    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-xl">
                                        <span className="text-xl font-mono tracking-wider font-bold">1986721334</span>
                                        <button
                                            type="button"
                                            onClick={handleCopyAccount}
                                            className="text-xs bg-primary-600 hover:bg-primary-700 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                                        >
                                            {copied ? <Check size={14} /> : <Copy size={14} />}
                                            {copied ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedTier(null)}
                                    className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors mt-6"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 ${selectedTier.bg} ${selectedTier.color} rounded-xl flex items-center justify-center`}>
                                        <selectedTier.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{selectedTier.title}</h3>
                                        <span className={`text-lg font-bold ${selectedTier.color}`}>{selectedTier.price}</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                    {selectedTier.description}
                                </p>

                                {/* Direct Bank Details Box */}
                                <div className="bg-slate-900 text-white rounded-2xl p-5 mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                                            <CreditCard size={14} />
                                            Direct Bank Transfer
                                        </span>
                                        <span className="text-xs text-primary-300 font-medium">Access Bank</span>
                                    </div>
                                    <div className="text-sm font-medium mb-3">Etiquette and social values organizations</div>
                                    <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                                        <span className="text-lg font-mono tracking-wider font-bold">1986721334</span>
                                        <button
                                            type="button"
                                            onClick={handleCopyAccount}
                                            className="text-xs bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                                        >
                                            {copied ? <Check size={14} /> : <Copy size={14} />}
                                            {copied ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                </div>

                                {/* Partner Form */}
                                <form onSubmit={handlePledgeSubmit} className="space-y-4">
                                    <h4 className="text-sm font-semibold text-slate-800">Partner Details (Optional)</h4>
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your Name or Organization *"
                                            value={pledgeData.name}
                                            onChange={(e) => setPledgeData({ ...pledgeData, name: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm text-slate-900"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email Address *"
                                            value={pledgeData.email}
                                            onChange={(e) => setPledgeData({ ...pledgeData, email: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm text-slate-900"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={pledgeData.phone}
                                            onChange={(e) => setPledgeData({ ...pledgeData, phone: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm text-slate-900"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-primary-200 mt-2 flex items-center justify-center gap-2"
                                    >
                                        <span>Complete Partnership Pledge</span>
                                        <ShieldCheck size={18} />
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Partner;

