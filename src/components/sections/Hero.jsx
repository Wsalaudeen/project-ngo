import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';

const Hero = () => {
    const [currentImage, setCurrentImage] = React.useState(0);


    const images = [
        "/hero_1.jpg",
        "/hero_2.jpg",
        "/hero_3.jpg",
        "/hero_4.jpg",
        "/hero_5.jpg"
    ];



    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);



    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            <div className="absolute top-0 right-0 -z-10 opacity-40">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="100" r="200" fill="#ccfbf1" />
                </svg>
            </div>

            <Container>
                <div className="text-center max-w-4xl mx-auto px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6 tracking-wide uppercase">
                        A home for civility and conscience
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
                        Investing in <span className="text-primary-600">Values</span>, Inspiring <span className="text-primary-600">Respect</span>, Transforming <span className="relative inline-block">Society<svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" /></svg></span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Restoring civility and moral consciousness in homes, schools, institutions, and communities through values-based education.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <a href="#programs">
                            <Button
                                variant="primary"
                                className="w-full sm:w-auto px-10 h-14 text-lg shadow-lg shadow-primary-200"
                            >
                                Our Programs
                            </Button>
                        </a>
                        <a href="#about">
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto px-10 h-14 text-lg"
                            >
                                Learn More
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="relative mt-4 mx-auto max-w-5xl group">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/30 rounded-full filter blur-3xl opacity-50 -z-10"></div>
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-400/30 rounded-full filter blur-3xl opacity-50 -z-10"></div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
