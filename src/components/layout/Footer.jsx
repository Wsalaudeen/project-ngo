import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../common/Container';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/esvo.official?igsh=MTQxMXMycTA0aWc3dw==', label: 'Instagram' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/etiquette-and-social-values-organization-esvo/', label: 'LinkedIn' },
        { icon: Youtube, href: 'https://youtube.com/@esvoafrica?si=z5W4hUh-ovAc5VcY', label: 'YouTube' },
    ];

    return (
        <footer className="bg-[#0B1120] text-slate-300 pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/">
                            <img
                                src="/esvoLogo1.png"
                                alt="ESVO logo"
                                className="w-40 h-auto mb-6 object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm mb-6">
                            Restoring civility and moral consciousness through values-based education in homes, schools, and communities.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target={social.href.startsWith('http') ? '_blank' : undefined}
                                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-slate-800/80 text-slate-400 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3.5 text-slate-400 text-sm">
                            <li><a href="/#about" className="hover:text-white transition-colors">About ESVO</a></li>
                            <li><a href="/#programs" className="hover:text-white transition-colors">Our Programs</a></li>
                            <li><a href="/#impact" className="hover:text-white transition-colors">Impact & Reach</a></li>
                            <li><a href="/#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="/#campaign" className="hover:text-white transition-colors">2026 Campaign</a></li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">Get Involved</h4>
                        <ul className="space-y-3.5 text-slate-400 text-sm">
                            <li><Link to="/volunteer" className="hover:text-white transition-colors">Volunteer Application</Link></li>
                            <li><Link to="/partner" className="hover:text-white transition-colors">Partner & Sponsor Tiers</Link></li>
                            <li><Link to="/invite" className="hover:text-white transition-colors">Invite ESVO to Your School</Link></li>
                            <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                                <span>Coal City Garden Estate, Enugu.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                                <span>esvoafrica@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                                <span>+234 806 603 8421</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>© 2025-2026 Etiquette and Social Values Organization (ESVO). All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

