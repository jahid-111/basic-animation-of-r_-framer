import { motion } from "framer-motion";

const Keyframe = () => {
  return (
    <motion.div
      className=" bg-blue-400 border w-32 h-32 m-4"
      animate={{
        borderRadius: ["20%", "0%", "50%", "0%", "20%"],
        rotate: [0, 90, 18, 45, 180],
        scale: [1, 15, 1, 1, 1],
      }}
      transition={{ duration: 3 }}
    >
      {" "}
    </motion.div>
  );
};

export default Keyframe;
