import { motion } from 'framer-motion';
import { Smartphone, Zap, Laptop, Home, Car } from 'lucide-react';

const categories = [
    { 
        name: 'Phone Accessories', 
        icon: <Smartphone className="w-8 h-8" />, 
        href: 'https://vorazone.myshopify.com/collections/phone-accessories',
        color: 'bg-blue-50 text-blue-600'
    },
    { 
        name: 'Charging Devices', 
        icon: <Zap className="w-8 h-8" />, 
        href: 'https://vorazone.myshopify.com/collections/charging-devices',
        color: 'bg-yellow-50 text-yellow-600'
    },
    { 
        name: 'Laptop Accessories', 
        icon: <Laptop className="w-8 h-8" />, 
        href: 'https://vorazone.myshopify.com/collections/laptop-accessories',
        color: 'bg-purple-50 text-purple-600'
    },
    { 
        name: 'Smart Home Gadgets', 
        icon: <Home className="w-8 h-8" />, 
        href: 'https://vorazone.myshopify.com/collections/smart-home',
        color: 'bg-green-50 text-green-600'
    },
    { 
        name: 'Car Tech Accessories', 
        icon: <Car className="w-8 h-8" />, 
        href: 'https://vorazone.myshopify.com/collections/car-tech',
        color: 'bg-red-50 text-red-600'
    },
];

const Categories = () => {
    return (
        <section id="categories" className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Product Categories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of innovative solutions designed for every part of your digital life.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${category.color}`}>
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                            <a 
                                href={category.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all"
                            >
                                View Products
                                <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArrowRight = ({ size }: { size: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M5 12h14m-7-7 7 7-7 7"/>
    </svg>
);

export default Categories;
