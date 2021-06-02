import { motion } from "framer-motion";
import "../styles/globals.css";

const INITIAL_OPACITY = 0;
const FINAL_OPACITY = 1;
const TRANSITION_SPEED = 1;

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: INITIAL_OPACITY }}
      animate={{ opacity: FINAL_OPACITY }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
