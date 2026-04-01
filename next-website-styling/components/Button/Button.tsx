import styles from "./button.module.css";

interface FormButtonProps {
  children: string;
  version: "primary" | "secondary" | "form";
  type: "submit" | "reset" | "button";
  isDisabled?: boolean;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  version,
  type,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={styles[version]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FormButton;
