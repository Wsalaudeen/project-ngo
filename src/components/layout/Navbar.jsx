import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <Container>
                <div className="flex justify-between items-center py-2">
                    <div className="flex-shrink-0 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
                            ESVO
                        </h1>
                        <p className="text-xs md:text-sm text-primary-700 font-medium tracking-wide">
                            Think Right, Act Right, Live Right.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" className="py-2.5 px-6 text-sm">Get Involved</Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary-600 p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full border-t border-slate-100">
                    <div className="px-4 pt-4 pb-6 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <Button variant="primary" className="w-full justify-center">Get Involved</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
