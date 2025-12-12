import React from 'react';
import { Heart, Users, Shield, Lightbulb } from 'lucide-react';
import Container from '../common/Container';

const ValuesStats = () => {
    const stats = [
        { icon: Heart, label: 'Respect', sub: 'The foundation of all meaningful relationships' },
        { icon: Users, label: 'Kindness', sub: 'Creating environments of care and compassion' },
        { icon: Shield, label: 'Integrity', sub: 'Acting with honesty and moral principles' },
        { icon: Lightbulb, label: 'Conscience', sub: 'Awakening moral awareness in every heart' },
    ];

    return (
        <section className="py-20 relative z-20 bg-slate-50/50">
            <Container>
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">Overview</h2>

                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 leading-tight mb-8">
                        We believe that respect, kindness, and awakened conscience are the foundations of a peaceful and humane society.
                    </p>

                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Through mentorship, values-based education, and leadership development, ESVO equips individuals to act with empathy, integrity, and purpose creating environments where minors and vulnerable persons are valued and protected.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                                <stat.icon size={28} strokeWidth={2} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{stat.label}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ValuesStats;
