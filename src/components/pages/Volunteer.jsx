import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';

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

                            <div className="bg-primary-50 p-8 rounded-3xl mt-12 cursor-pointer hover:shadow-md transition-all duration-300">
                                <p className="text-lg font-medium text-primary-900 mb-0">
                                    If you are passionate about service and positive social change, we would love to hear from you.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Volunteer;
