import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Zap } from 'lucide-react';

const reasons = [
    {
        title: 'High Quality Gadgets',
        description: 'Modern and practical devices designed for everyday use, built with premium materials.',
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: 'Smart Everyday Solutions',
        description: 'Technology that simplifies daily tasks and improves efficiency in your digital life.',
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        title: 'Safe & Secure Shopping',
        description: 'Reliable service and secure online transactions through our Shopify-powered store.',
        icon: <ShieldCheck className="w-6 h-6" />,
    },
];

const Features = () => {
    return (
        <section className="bg-text text-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Vorazone</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We combine cutting-edge technology with elegant design to create products that you'll love to use every day.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
