import { motion } from "framer-motion";
const Simple = () => {
  return (
    <motion.div
      className=" bg-red-800 border w-52 h-52  rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5 }}
    ></motion.div>
  );
};

export default Simple;
