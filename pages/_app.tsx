import '../styles/globals.css'
import { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { FC } from 'react'

const INITIAL_OPACITY = 0
const FINAL_OPACITY = 1
const TRANSITION_SPEED = 1

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <motion.div
      initial={{ opacity: INITIAL_OPACITY }}
      animate={{ opacity: FINAL_OPACITY }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
