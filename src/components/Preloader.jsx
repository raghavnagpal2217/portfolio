import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-2xl sm:text-3xl text-ink">
              <span className="text-accent">{'<'}</span>
              <span className="tracking-wide">AM</span>
              <span className="text-accent">{' />'}</span>
            </div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-surface-border">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-dark via-accent to-accent-light"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
