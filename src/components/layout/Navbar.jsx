import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';
import Container from '../common/Container';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
    ];

    const renderLink = (link, mobile = false) => {
        const className = mobile
            ? "block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
            : "text-slate-600 hover:text-primary-600 font-medium transition-colors";

        if (link.to) {
            const isActive = location.pathname === link.to;
            return (
                <Link
                    key={link.name}
                    to={link.to}
                    className={className}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </Link>
            );
        }

        // For hash links: if on home page, use simple href. If not, prefix with /
        const href = isHome ? link.href : `/${link.href}`;

        return (
            <a
                key={link.name}
                href={href}
                className={className}
                onClick={() => setIsOpen(false)}
            >
                {link.name}
            </a>
        );
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
            aria-label="Main navigation"
        >
            <Container>
                <div className="flex justify-between items-center py-2">
                    <div className="flex-shrink-0 flex flex-col justify-center">
                        <Link to="/" className="cursor-pointer">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
                                ESVO
                            </h1>
                            <p className="text-xs md:text-sm text-primary-700 font-medium tracking-wide">
                                Think Right, Act Right, Live Right.
                            </p>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => renderLink(link))}
                        <a href="#contact">
                            <Button variant="primary" className="py-2.5 px-6 text-sm">Get Involved</Button>
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary-600 p-2 focus:outline-none"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full border-t border-slate-100"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="px-4 pt-4 pb-6 space-y-3">
                        {navLinks.map((link) => renderLink(link, true))}
                        <div className="pt-2">
                            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full">
                                <Button variant="primary" className="w-full justify-center">Get Involved</Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
