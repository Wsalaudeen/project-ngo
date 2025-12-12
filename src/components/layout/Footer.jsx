import React from 'react';
import Container from '../common/Container';

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-slate-300 pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
                    {/* Brand Section */}
                    <div className="lg:pr-12">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl flex-shrink-0"></div>
                            <div>
                                <h3 className="text-white text-2xl font-bold leading-none mb-1">ESVO</h3>
                                <p className="text-slate-400 text-sm">Etiquette and Social Values Organization</p>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-md">
                            Restoring civility and moral consciousness through values-based education in homes, schools, and communities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>Enugu, Nigeria</li>
                            <li>info@esvo.ng</li>
                            <li>+234 XXX XXX XXXX</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>© 2025 Etiquette and Social Values Organization (ESVO). All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
