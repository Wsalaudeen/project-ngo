import React from 'react';
import Container from '../common/Container';
import Section from '../common/Section';
import { User, School, Globe, Briefcase } from 'lucide-react';

const ImpactData = () => {
    const stats = [
        { label: '4,000+', sub: 'Students Impacted', icon: User },
        { label: '20', sub: 'Partner Schools', icon: School },
        { label: '10', sub: 'Districts Engaged', icon: Globe },
        { label: 'Growing', sub: 'Team of Experts', icon: Briefcase },
    ];

    return (
        <Section className="bg-slate-50" id="impact">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Impact</h2>
                    <p className="text-slate-600">Every number represents a life strengthened and a future made brighter.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-6">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.label}</div>
                            <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ImpactData;
