import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X, Star, Trophy, Zap } from 'lucide-react'

const AnimatedFeedback = ({ type, message, xpGained, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  const getIcon = () => {
    switch (type) {
      case 'correct':
        return <CheckCircle className="h-8 w-8 text-green-500" />
      case 'incorrect':
        return <X className="h-8 w-8 text-red-500" />
      case 'achievement':
        return <Trophy className="h-8 w-8 text-yellow-500" />
      case 'levelup':
        return <Star className="h-8 w-8 text-purple-500" />
      default:
        return <Zap className="h-8 w-8 text-blue-500" />
    }
  }

  const getColors = () => {
    switch (type) {
      case 'correct':
        return 'from-green-400 to-green-600'
      case 'incorrect':
        return 'from-red-400 to-red-600'
      case 'achievement':
        return 'from-yellow-400 to-yellow-600'
      case 'levelup':
        return 'from-purple-400 to-purple-600'
      default:
        return 'from-blue-400 to-blue-600'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -50 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className={`bg-gradient-to-br ${getColors()} p-8 rounded-2xl text-white text-center shadow-2xl max-w-sm mx-4`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              {getIcon()}
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-bold mb-2"
            >
              {message}
            </motion.h3>
            
            {xpGained > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Star className="h-5 w-5" />
                <span>+{xpGained} XP</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const XPBar = ({ currentXP, maxXP, level }) => {
  const percentage = (currentXP / maxXP) * 100

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span>Nível {level}</span>
        <span>{currentXP}/{maxXP} XP</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="xp-bar h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

const FloatingXP = ({ xp, onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{ opacity: 1, y: -50, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.5 }}
      onAnimationComplete={onComplete}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
    >
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
        +{xp} XP
      </div>
    </motion.div>
  )
}

const StreakCounter = ({ streak, isActive }) => {
  return (
    <motion.div
      animate={isActive ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      <motion.div
        animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        🔥
      </motion.div>
      <span className={`font-bold ${isActive ? 'text-orange-500' : 'text-muted-foreground'}`}>
        {streak}
      </span>
    </motion.div>
  )
}

export { AnimatedFeedback, XPBar, FloatingXP, StreakCounter }

