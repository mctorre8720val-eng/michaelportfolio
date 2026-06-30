import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ finishLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 3200);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  const letters = "Michael".split("");

  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <div className="loader-content">
        <div className="loader-name">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                y: 80,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="loader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: "easeInOut",
          }}
        />

        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.6,
          }}
        >
          React • Vite • Node.js • Express • Flutter • MongoDB • Prisma • Git • Docker • Vercel
        </motion.p>
      </div>
    </motion.div>
  );
}