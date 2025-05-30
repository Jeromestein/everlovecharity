'use client'

import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

// Format large numbers into readable format with suffix
const formatCurrency = (value: number): string => {
  const suffixes = ['', 'K', 'M', 'B', 'T']
  let suffixIndex = 0
  let formattedValue = value

  while (formattedValue >= 1000 && suffixIndex < suffixes.length - 1) {
    formattedValue /= 1000
    suffixIndex++
  }

  return `$${formattedValue.toFixed(1)}${suffixes[suffixIndex]}`
}

export function ImpactStats() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // Start counting animations
    const percentageCounter = { value: 100 }
    const moneyCounter = { value: 10 }

    animate(
      percentageCounter,
      {
        value: 8,
      },
      {
        duration: 2,
        onUpdate: () => {
          const el = document.querySelector('#percentage')
          if (el) el.textContent = Math.round(percentageCounter.value) + '%'
        },
      },
    )

    // Animate money value with increasing zeros
    const animateMoneyValue = async () => {
      const values = [
        100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000,
        100000000000, 1000000000000, 10000000000000,
      ]

      for (const value of values) {
        await animate(moneyCounter, { value }, { duration: 0.3 })
        const el = document.querySelector('#money')
        if (el) el.textContent = '$' + moneyCounter.value.toLocaleString()
      }
    }

    animateMoneyValue()
  }, [animate])

  return (
    <section className="bg-white py-10" ref={scope}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg bg-gradient-to-br from-rose-200 to-purple-50 flex flex-col justify-between min-h-[200px]">
            <span className="text-4xl text-muted-foreground font-normal">Only</span>
            <motion.span
              id="percentage"
              initial={{ color: 'rgb(22, 163, 74)' }}
              animate={{ color: 'rgb(225, 29, 72)' }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="text-7xl font-bold"
            >
              100%
            </motion.span>
            <span className="text-xl text-muted-foreground font-normal">
              of children in low-income countries can read by age 10
            </span>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-rose-200 to-purple-50 flex flex-col justify-between min-h-[200px]">
            <span className="text-4xl text-muted-foreground font-normal">More than</span>
            <motion.span
              id="money"
              className="text-3xl md:text-5xl text-rose-600 font-bold break-all leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              $10
            </motion.span>
            <span className="text-xl text-muted-foreground font-normal">
              dollars are lost each year as a result of children not learning
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
