import { motion } from "framer-motion";

interface Props {
  from: string;
  to: string;
}

export default function NewCountry(props: Props) {
  return (
    <motion.div className="pb-4" layout>
      <h3>{props.to}</h3>
      <hr />
      <h3>{props.from}</h3>
    </motion.div>
  );
}
