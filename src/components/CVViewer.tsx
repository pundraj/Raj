import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';
import cvPdf from '@/RajCV26oct.pdf';

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVViewer({ isOpen, onClose }: CVViewerProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'RajCV26oct.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl max-w-5xl w-full h-[95vh] max-h-[95vh] flex flex-col shadow-2xl border border-[#d4af37]/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#d4af37]/20">
                <h2 className="text-[#0a0a0a] dark:text-[#fafaf8] text-xl font-semibold">
                  My Resume
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 gold-gradient hover:shadow-xl text-[#0a0a0a] rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-[#d4af37]/30"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 bg-[#f5f5f0] dark:bg-[#0a0a0a] hover:bg-[#d4af37]/20 rounded-full flex items-center justify-center transition-colors border border-[#d4af37]/20"
                  >
                    <X className="w-5 h-5 text-[#0a0a0a] dark:text-[#fafaf8]" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 p-6 overflow-auto" style={{ height: 'calc(95vh - 120px)', minHeight: '600px' }}>
                <iframe
                  src={cvPdf}
                  className="w-full border-0 rounded-lg"
                  title="CV Viewer"
                  style={{ 
                    height: '100%',
                    minHeight: '600px',
                    width: '100%',
                    display: 'block'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

