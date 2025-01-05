import { ReactNode } from "react";

interface ButtonProps {
  btnText?: string | ReactNode;
  theme?: string;
  onButtonClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  btnText = "Button",
  theme = "theme-button",
  onButtonClick,
}) => {
  return (
    <button
      onClick={onButtonClick}
      className={`${theme} px-6 py-3 inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors ring-offset-white`}
    >
      {btnText}
    </button>
  );
};

export default Button;
