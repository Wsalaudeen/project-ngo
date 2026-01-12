import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamMember = ({ member }) => (
    <div className="group relative">
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 shadow-lg bg-slate-100">
            {member.image ? (
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <span className="text-4xl font-bold opacity-20">{member.initials}</span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex gap-4 justify-center text-white">
                    {/* Placeholder links - can be updated with real links later */}
                    <button className="hover:text-primary-300 transition-colors"><Mail size={20} /></button>
                </div>
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
            <p className="text-primary-600 font-medium text-sm tracking-wide uppercase mb-3">{member.role}</p>
            {member.bio && <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>}
        </div>
    </div>
);

const TeamSection = ({ title, members, gridCols = "md:grid-cols-2 lg:grid-cols-4" }) => (
    <div className="mb-20 last:mb-0">
        <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center relative inline-block left-1/2 -translate-x-1/2">
            {title}
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-primary-200 rounded-full"></span>
        </h3>
        <div className={`grid grid-cols-1 ${gridCols} gap-x-8 gap-y-12 justify-center`}>
            {members.map((member, idx) => (
                <TeamMember key={idx} member={member} />
            ))}
        </div>
    </div>
);

const Team = () => {
    const executives = [
        {
            name: 'Lady Jane Kalu Ndukwe',
            role: 'Chief Executive Officer (CEO)',
            image: '/ceo_latest.jpg', // Updated CEO image
            bio: 'Founder, ESVO'
        }
    ];

    const management = [
        {
            name: 'Kwame David Akwada',
            role: 'Head, Brands and Marketing',
            image: '/head_brands.jpg',
            initials: 'KD'
        },
        {
            name: 'Kaitlin Gee-Akwada',
            role: 'Head, Corporate Communications & PR / Board Secretary',
            image: '/kaitlin_new.jpg',
            initials: 'KG'
        },
        {
            name: 'Mr. Kalu K. Ndukwe',
            role: 'Head, Finance and Administration',
            bio: 'Chartered Auditor and Professional Payroll Accounting for Proprietors',
            image: '/kalu_ndukwe.jpg',
            initials: 'KN'
        }
    ];

    const patrons = [
        {
            name: 'Chief Kalu Ndukwe',
            role: 'Board Patron',
            bio: 'Chief Executive and MD, Crispy Nigeria Limited, Ndafia Restaurant and Stores, and KAN Biscuits, Aba',
            image: '/chief_kalu.jpg',
            initials: 'CK'
        },
        {
            name: 'Dr. Ifendu A. Nnanna',
            role: 'Board Patron',
            bio: 'Accomplished R&D Professional with over 25 years experience in the food/CPG industry (Smucker, Kellogg, ADG, Proliant, Monsanto).',
            image: '/dr_ifendu.jpg',
            initials: 'IN'
        },
        {
            name: 'Hon. Jim Steinke',
            role: 'Board Patron',
            bio: 'Counselor at Sheffield City Council, UK',
            image: '/jim_steinke.jpg',
            initials: 'JS'
        },

    ];

    return (
        <Section className="bg-white" id="team">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-4 block">Our People</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Meet The Team</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The dedicated leadership and patrons guiding our mission to restore civility and respect.
                    </p>
                </div>

                <TeamSection title="Executive Leadership" members={executives} gridCols="md:grid-cols-1 justify-items-center max-w-sm mx-auto" />
                <TeamSection title="Management Team" members={management} gridCols="md:grid-cols-2 lg:grid-cols-3" />
                <TeamSection title="Board of Patrons" members={patrons} gridCols="md:grid-cols-2 lg:grid-cols-3" />

            </Container>
        </Section>
    );
};

export default Team;
