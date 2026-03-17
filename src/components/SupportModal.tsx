import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Shield, FileText, Truck, ExternalLink } from 'lucide-react';

interface SupportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
    const shopifyUrl = "https://vorazone.myshopify.com";

    const supportItems = [
        {
            title: 'Contact Us',
            description: 'Get in touch with our support team.',
            icon: <Mail className="text-blue-500" />,
            href: '/support#contact'
        },
        {
            title: 'Privacy Policy',
            description: 'How we handle your data.',
            icon: <Shield className="text-green-500" />,
            href: '/support#privacy'
        },
        {
            title: 'Terms of Service',
            description: 'Our rules and regulations.',
            icon: <FileText className="text-orange-500" />,
            href: '/support#terms'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Modal */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-[320px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] z-[70] overflow-hidden flex flex-col sm:rounded-l-[2rem]"
                    >
                        {/* Header */}
                        <div className="p-5 flex justify-between items-center bg-white">
                            <div>
                                <h2 className="text-lg font-bold">Support</h2>
                                <p className="text-xs text-gray-500">How can we help?</p>
                            </div>
                            <button 
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-5 pb-5 overflow-y-auto flex-1">
                            <div className="grid gap-2">
                                {supportItems.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center p-3 rounded-2xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                                            {/* Scaling the icon down slightly */}
                                            <div className="scale-75">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <h3 className="text-xs font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-[10px] text-gray-400 group-hover:text-gray-500">{item.description}</p>
                                        </div>
                                        <ExternalLink size={12} className="text-gray-300 group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>

                            <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                                <p className="text-[10px] text-gray-400">
                                    Visit our <a href={shopifyUrl} className="text-primary font-bold hover:underline">Help Center</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SupportModal;
