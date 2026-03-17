import { motion } from 'framer-motion';

const About = () => {
    const shopifyUrl = "https://vorazone.myshopify.com";

    return (
        <section id="about" className="section-padding">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-primary/5 rounded-3xl overflow-hidden aspect-square flex items-center justify-center"
                >
                    <img src="/about-tech.png" alt="About Vorazone Team" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6">About Vorazone</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Vorazone is a modern technology brand focused on smart devices and innovative gadgets designed to improve productivity, convenience, and everyday digital life.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Our mission is to bridge the gap between complex technology and everyday simplicity, providing you with tools that are as beautiful as they are functional.
                    </p>
                    <a 
                        href={shopifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-4"
                    >
                        Visit Our Store
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
