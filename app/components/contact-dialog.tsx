import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 bottom-4 z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* 왼쪽 연락처 정보 */}
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold leading-none tracking-tight">
                    연락처
                  </h2>
                </div>
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>경기도 김포시</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>010 0000 0000</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-primary" />
                      <a className="hover:text-primary transition-colors">
                        pandayy@naver.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Instagram className="h-5 w-5 text-primary" />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        sieun55555
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
