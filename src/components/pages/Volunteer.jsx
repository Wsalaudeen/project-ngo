import React, { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { Heart, UserCheck, Calendar, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const Volunteer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        interest: 'School Outreach & Good Manners Clubs',
        availability: 'Flexible',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission API delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    const volunteerRoles = [
        {
            title: 'School Outreach & Club Mentors',
            desc: 'Help deliver the Good Manners Toolkit and facilitate Good Manners Clubs in local schools.',
            icon: Heart,
            color: 'bg-blue-50 text-blue-600',
        },
        {
            title: 'Civility Ambassadors',
            desc: 'Lead community awareness sessions, workshops, and youth leadership summits.',
            icon: UserCheck,
            color: 'bg-emerald-50 text-emerald-600',
        },
        {
            title: 'Event & Logistics Support',
            desc: 'Assist in organizing summit events, materials distribution, and partner engagements.',
            icon: Calendar,
            color: 'bg-purple-50 text-purple-600',
        }
    ];

    return (
        <div className="pt-20">
            <Section className="bg-slate-50/60">
                <Container>
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4 tracking-wide">
                            <Sparkles size={16} />
                            Join the Civility Movement
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Volunteer With Us</h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Join us in promoting strong moral values, character education, and human leadership across schools, care institutions, and communities.
                        </p>
                    </div>

                    {/* Roles Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {volunteerRoles.map((role, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                                <div className={`w-14 h-14 rounded-2xl ${role.color} flex items-center justify-center mb-6`}>
                                    <role.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{role.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Form / Success Card Container */}
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200/80 relative overflow-hidden">
                            {isSubmitted ? (
                                <div className="text-center py-12 space-y-6">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">Application Received!</h2>
                                    <p className="text-slate-600 text-lg max-w-lg mx-auto leading-relaxed">
                                        Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our volunteer coordination team has received your application and will reach out to you via <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                                    </p>
                                    <div className="pt-4">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setFormData({
                                                    fullName: '',
                                                    email: '',
                                                    phone: '',
                                                    city: '',
                                                    interest: 'School Outreach & Good Manners Clubs',
                                                    availability: 'Flexible',
                                                    message: ''
                                                });
                                            }}
                                            className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl hover:bg-slate-800 transition-colors"
                                        >
                                            Submit Another Application
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Volunteer Application Form</h2>
                                        <p className="text-slate-600">Fill in your details below to express your interest in joining our team.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    required
                                                    placeholder="e.g. Chidimma Okeke"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="e.g. name@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    placeholder="e.g. +234 801 234 5678"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">
                                                    City / Location *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    required
                                                    placeholder="e.g. Enugu"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Primary Area of Interest
                                                </label>
                                                <select
                                                    id="interest"
                                                    name="interest"
                                                    value={formData.interest}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900 bg-white"
                                                >
                                                    <option value="School Outreach & Good Manners Clubs">School Outreach & Good Manners Clubs</option>
                                                    <option value="Mentorship & Character Coaching">Mentorship & Character Coaching</option>
                                                    <option value="Event Logistics & Support">Event Logistics & Support</option>
                                                    <option value="Media & Public Relations">Media & Public Relations</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="availability" className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Availability
                                                </label>
                                                <select
                                                    id="availability"
                                                    name="availability"
                                                    value={formData.availability}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900 bg-white"
                                                >
                                                    <option value="Flexible">Flexible</option>
                                                    <option value="Weekdays">Weekdays</option>
                                                    <option value="Weekends">Weekends</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Why do you want to volunteer with ESVO?
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                placeholder="Tell us briefly about your motivation..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-slate-900 resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                                            <span className="text-xs text-slate-500 flex items-center gap-1.5">
                                                <ShieldCheck size={16} className="text-primary-600" />
                                                Your information is kept private & secure.
                                            </span>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary-200 disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <span>Submitting Application...</span>
                                                ) : (
                                                    <>
                                                        <span>Submit Volunteer Form</span>
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Volunteer;

