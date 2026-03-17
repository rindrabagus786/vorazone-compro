import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const shopifyUrl = "https://vorazone.myshopify.com";

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
                    >
                        Future of Gadgets
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Smart Devices for <span className="text-primary">Everyday Life</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        Vorazone delivers innovative smart gadgets and electronic accessories designed to upgrade everyday life with practical and modern technology.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href={shopifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2"
                        >
                            Explore Products
                            <ArrowRight size={20} />
                        </a>
                        <a 
                            href="#about"
                            className="px-6 py-3 rounded-full border border-gray-200 font-medium hover:bg-gray-50 transition-all"
                        >
                            Learn More
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                        <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img src="/hero-tech.png" alt="Premium Gadgets" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Floating elements */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20"
                    >
                        <span className="text-2xl font-bold">Premium</span>
                    </motion.div>
                    <motion.div 
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20"
                    >
                        <span className="text-2xl font-bold">Smart</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
