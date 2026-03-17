import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="section-padding overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Discover smart gadgets designed to upgrade your everyday life.
                    </h2>
                    <p className="text-white/80 text-lg mb-10">
                        Join thousands of customers who have already simplified their digital daily routine with Vorazone.
                    </p>
                    <a 
                        href="https://vorazone.myshopify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 inline-block"
                    >
                        Shop Now
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
