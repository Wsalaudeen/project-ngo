import React from 'react';
import Container from '../common/Container';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-white" id="contact">
            <Container>
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">Contact Us</h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Let's work together to build a more civil and respectful society
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Location */}
                    <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                            <MapPin size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Location</h3>
                        <p className="text-slate-900 font-semibold text-lg">Enugu, Nigeria</p>
                    </div>

                    {/* Phone */}
                    <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                            <Phone size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Phone</h3>
                        <p className="text-slate-900 font-semibold text-lg">+234 806 603 8421</p>
                    </div>

                    {/* Email */}
                    <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                            <Mail size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Email</h3>
                        <p className="text-slate-900 font-semibold text-lg">info@esvo.ng</p>
                    </div>
                </div>



                {/* Social Media */}
                <div className="text-center">
                    <h3 className="text-slate-500 font-medium mb-8">Follow us on social media</h3>
                    <div className="flex justify-center gap-6">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
                            >
                                <Icon size={20} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;
