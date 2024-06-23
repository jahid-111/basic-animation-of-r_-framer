import { motion } from "framer-motion";
const ButtonTap = () => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.4, transition: { yoyo: Infinity } }}
        className="  bg-green-500 px-6 p-2 rounded-lg  text-white "
      >
        Tap me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
