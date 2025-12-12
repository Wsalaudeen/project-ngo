import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import { Eye, Target, Heart } from 'lucide-react';

const Approach = () => {
    return (
        <Section className="bg-white" id="about">
            <Container>
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">About ESVO</h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Founded on the belief that character and values shape the future
                    </p>
                </div>

                {/* Main Content: Story & Profile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
                    {/* Left: Our Story */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Our Story</h3>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            ESVO was born from a deep conviction that the erosion of civility, respect, and moral consciousness threatens the safety and dignity of vulnerable persons—especially children.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We believe every individual has the potential to live honourably, lead compassionately, and contribute meaningfully to society when equipped with the right values.
                        </p>
                    </div>

                    {/* Right: Founder Profile Card */}
                    <div className="bg-white rounded-3xl p-8 cursor-pointer">
                        <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                alt="Jane Kalu Ndukwe"
                                className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-slate-900">Jane Kalu Ndukwe</h4>
                                <div className="text-primary-600 font-medium mb-2">Chief Executive, ESVO</div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Former head teacher • UK-trained in hospitality & counselling • Host of "Etiquette Matters" on Coal City FM
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-1 h-12 bg-primary-500 rounded-full flex-shrink-0"></div>
                            <p className="text-slate-600 italic font-medium">
                                "When conscience is awakened, transformation becomes possible."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Cards: Vision, Mission, Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Vision */}
                    <div className="bg-white p-10 rounded-3xl text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Eye size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            A society guided by respect and conscience
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-10 rounded-3xl text-center cursor-pointer">
                        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Target size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To nurture moral awareness, courteous behaviour, and humane leadership
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="bg-white p-10 rounded-3xl text-center cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Heart size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Core Values</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Respect | Kindness | Integrity | Service | Conscience
                        </p>
                    </div>
                </div>

            </Container>
        </Section>
    );
};

export default Approach;
