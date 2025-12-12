import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { HeartHandshake, Handshake, School } from 'lucide-react';

const AudienceCards = () => {
    const cards = [
        {
            title: 'Volunteer',
            desc: 'Join our outreaches and make a direct impact in communities',
            icon: HeartHandshake,
            btn: 'Join Us',
        },
        {
            title: 'Partner or Sponsor',
            desc: 'Support our programmes and help us reach more people',
            icon: Handshake,
            btn: 'Partner with ESVO',
        },
        {
            title: 'Invite ESVO',
            desc: 'Bring our values-based education to your school or organization',
            icon: School,
            btn: 'Invite Us',
        }
    ];

    return (
        <Section className="bg-white">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-slate-500 font-medium tracking-wide text-sm mb-4 block">Get Involved</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        Join the movement for a kinder, safer, and more respectful society
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer">
                            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <card.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed px-2">
                                {card.desc}
                            </p>
                            <button className="bg-primary-700 text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-800 transition-colors w-full sm:w-auto">
                                {card.btn}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="bg-primary-700 rounded-[2.5rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-lg md:text-xl font-medium text-primary-100 mb-4">Ready to Make a Difference?</h3>
                        <p className="text-2xl md:text-3xl font-bold mb-10 leading-snug">
                            Together, we can build a society where respect leads, conscience protects, and character inspires
                        </p>
                        <button className="bg-white text-primary-700 font-bold py-4 px-10 rounded-xl hover:bg-primary-50 transition-colors shadow-lg">
                            Contact Us Today
                        </button>
                    </div>
                </div>

            </Container>
        </Section>
    );
};

export default AudienceCards;
