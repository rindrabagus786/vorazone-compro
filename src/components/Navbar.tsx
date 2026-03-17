import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Settings } from 'lucide-react';
import SupportModal from './SupportModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isSupportOpen, setIsSupportOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['about', 'categories', 'products'];
            let current = '';

            if (window.scrollY < 100) {
                current = '';
            } else {
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 200 && rect.bottom >= 200) {
                            current = section;
                            break;
                        }
                    }
                }
                
                // Keep the last section highlighted if reaching end of the page
                if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                    current = 'products';
                }
            }

            setActiveSection(current);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', id: '' },
        { name: 'About', href: '/#about', id: 'about' },
        { name: 'Categories', href: '/#categories', id: 'categories' },
        { name: 'Products', href: '/#products', id: 'products' },
    ];

    const shopifyUrl = "https://vorazone.myshopify.com";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-white border-b-4 border-primary ${scrolled ? 'shadow-md py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <span className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">V</span>
                    <span>VORAZONE</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`relative text-sm font-medium transition-colors py-2 ${activeSection === link.id ? 'text-primary' : 'hover:text-primary'}`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full items-center justify-center flex"
                                    initial={false}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    ))}
                    <a 
                        href={shopifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary-dark transition-all transform hover:scale-105"
                    >
                        <ShoppingBag size={16} />
                        Shop Now
                    </a>
                    <button 
                        onClick={() => setIsSupportOpen(true)}
                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                        title="Support"
                    >
                        <Settings size={20} />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    className={`text-lg font-medium transition-colors ${activeSection === link.id ? 'text-primary' : 'hover:text-primary'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a 
                                href={shopifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-5 py-3 rounded-xl text-center font-medium flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <ShoppingBag size={20} />
                                Shop Now
                            </a>
                            <button 
                                onClick={() => {
                                    setIsSupportOpen(true);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 text-gray-600 font-medium"
                            >
                                <Settings size={20} />
                                Support Center
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Support Modal */}
            <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
        </nav>
    );
};

export default Navbar;
