import { motion } from "framer-motion";

const TextMotion = () => {
  const message = "We Are Enjoying Reactive Accelarator Course From LWS";
  const wordSlpit = message.split(" ");
  // console.log(wordSlpit)

  return (
    <div className=" flex gap-1  text-2xl items-center">
      {wordSlpit.map((word, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
        >
          {word}
        </motion.p>
      ))}
    </div>
  );
};

export default TextMotion;
