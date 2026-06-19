import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

function AdminDemoBanner({ className = '' }) {
  return (
    <motion.div
      className={`admin-demo-banner relative z-20 w-full max-w-4xl mx-auto px-4 ${className}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="admin-demo-banner-inner rounded-xl px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Shield className="admin-demo-banner-icon w-5 h-5 shrink-0" />
          <p className="admin-demo-banner-text text-sm sm:text-base font-bold leading-relaxed">
            To View Admin Panel, Please Sign in with Email -{' '}
            <span className="admin-demo-banner-highlight">admin@gmail.com</span>
            {' '}and Password -{' '}
            <span className="admin-demo-banner-highlight">Admin123@#$</span>
          </p>
          <Shield className="admin-demo-banner-icon w-5 h-5 shrink-0" />
        </div>
      </div>
    </motion.div>
  );
}

export default AdminDemoBanner;
