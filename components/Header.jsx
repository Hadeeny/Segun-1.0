import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className="flex p-5 justify-between sticky z-40 top-0 max-w-6xl mx-auto items-center">
      <motion.div
        initial={{ x: -100, scale: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-2"
      >
        <SocialIcon
          bgColor="transparent"
          fgColor="#fafafa"
          url="https://github.com/Hadeeny/"
        />
        {/* <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.upwork.com/freelancers/~018c36812a4ee78398?s=1110580755057594368"
        /> */}
        <SocialIcon
          bgColor="transparent"
          fgColor="#fafafa"
          url="https://www.linkedin.com/in/segundeniyi/"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="#fafafa"
          url="https://twitter.com/segun_deniyi"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, scale: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex space-x-2 items-center"
      >
        <SocialIcon bgColor="transparent" fgColor="#fafafa" network="email" />
        <p className="hidden md:flex uppercase text-sm text-white">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
