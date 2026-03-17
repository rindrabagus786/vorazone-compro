import { Facebook, Instagram, ShoppingBag } from 'lucide-react';

const Footer = () => {
    const shopifyUrl = "https://vorazone.myshopify.com";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-base">V</span>
                            <span>VORAZONE</span>
                        </a>
                        <p className="text-gray-500 mb-6">
                            Delivering innovative smart gadgets and electronic accessories designed to upgrade everyday life with practical and modern technology.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href={shopifyUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                                <ShoppingBag size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-gray-500 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="/#about" className="text-gray-500 hover:text-primary transition-colors">About</a></li>
                            <li><a href="/#categories" className="text-gray-500 hover:text-primary transition-colors">Categories</a></li>
                            <li><a href="/#products" className="text-gray-500 hover:text-primary transition-colors">Products</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="/support#contact" className="text-gray-500 hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="/support#privacy" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="/support#terms" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Shopify Store</h4>
                        <p className="text-gray-500 mb-6">Ready to explore our full catalog? Visit our official store for secure checkout.</p>
                        <a 
                            href={shopifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary-dark transition-all"
                        >
                            <ShoppingBag size={18} />
                            Visit Our Store
                        </a>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>© {currentYear} Vorazone Technology. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
