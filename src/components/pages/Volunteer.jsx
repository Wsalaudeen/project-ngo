import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';

const Volunteer = () => {
    return (
        <div className="pt-20"> {/* Add padding top to account for fixed navbar if applicable, or just generic spacing */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Volunteer With Us</h1>

                        <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed space-y-6">
                            <p className="text-xl font-medium text-slate-800">
                                Join us in promoting strong values and creating meaningful impact.
                            </p>

                            <p>
                                Our volunteers support outreach to schools, universities, care homes, and healthcare facilities by delivering our Good Manners Toolkit and Humanity and Refinement Toolkit, mentoring participants, and supporting programme implementation.
                            </p>

                            <div className="bg-primary-50 p-10 rounded-3xl mt-12 text-center">
                                <p className="text-xl font-medium text-primary-900 mb-8 max-w-2xl mx-auto">
                                    If you are passionate about service and positive social change, we would love to hear from you.
                                </p>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeqL72fQQY0-yg-4-1yqbtOTX_CerptyaGUH2We5mz6Q--CNQ/viewform?usp=header"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-primary-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Fill Expression of Interest Form
                                    <ArrowRight className="ml-2" size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Volunteer;
