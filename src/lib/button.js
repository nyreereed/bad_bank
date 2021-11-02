import { BiLoaderAlt } from "react-icons/bi";
import { animated, config, useSpring } from "react-spring";

const AnimatedLoader = animated(BiLoaderAlt);

const Button = ({ children, isLoading = false, ...props }) => {
  const loaderAnimation = useSpring({
    loop: true,
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
    config: config.slow,
  });

  return (
    <button
      {...props}
      className="px-3 py-2 font-bold rounded bg-red-400 text-white grid grid-cols-1 items-center content-center justify-items-center gap-2 whitespace-nowrap disabled:opacity-50"
    >
      {isLoading ? <AnimatedLoader style={loaderAnimation} /> : children}
    </button>
  );
};

export default Button;
