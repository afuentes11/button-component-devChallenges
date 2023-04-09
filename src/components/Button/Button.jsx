import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon.jsx";
import "./Button.css";

/**
 * This is a React component for rendering a button with optional icons and customizable styles.
 * @returns A React functional component named "Button" is being returned. It takes in several props
 * such as children, variant, size, startIcon, endIcon, disableShadow, and disabled. It renders a
 * button element with the appropriate class names based on the props passed in, and also renders
 * startIcon and endIcon if they are provided.
 */
export function Button({
  label,
  variant,
  size,
  startIcon,
  endIcon,
  disableShadow,
  disabled,
  color,
  ...props
}) {
  const [buttonClassName, iconClassName] = createClassNames({
    variant,
    size,
    disableShadow,
    disabled,
    color,
  });

  const drawStartIcon = startIcon ? (
    <Icon additionalClaseName={iconClassName}>{startIcon}</Icon>
  ) : (
    ""
  );
  const drawEndIcon = endIcon ? (
    <Icon additionalClaseName={iconClassName}>{endIcon}</Icon>
  ) : (
    ""
  );

  return (
    <button className={buttonClassName} {...props}>
      {drawStartIcon}
      {label}
      {drawEndIcon}
    </button>
  );
}

/**
 * The function creates a list of class names based on input parameters for a button component in a
 * React application.
 * @returns An array containing two strings: `buttonClassName` and `iconClassName`.
 */
function createClassNames({ variant, size, disableShadow, disabled, color }) {
  const buttonClassNames = ["button"];
  const iconClassNames = [];

  buttonClassNames.push(`button--variant-${variant}`);

  if (disableShadow) buttonClassNames.push("button--no-shadow");

  buttonClassNames.push(`button--size-${size}`);

  buttonClassNames.push(`button--color-${color}`);
  iconClassNames.push(`icon--color-${color}`);

  switch (variant) {
    case "default":
      disabled ? buttonClassNames.push("button--disabled") : null;
      disabled ? iconClassNames.push("material-icons-round--disabled") : null;
      break;
    case "outline":
      disabled
        ? buttonClassNames.push("button--variant-outline-disabled")
        : null;
      disabled ? iconClassNames.push("material-icons-round--disabled") : null;
      iconClassNames.push("material-icons-round--variant");
      break;
    case "text":
      disabled ? buttonClassNames.push("button--variant-text-disabled") : null;
      disabled ? iconClassNames.push("material-icons-round--disabled") : null;
      iconClassNames.push("material-icons-round--variant");
      break;
  }

  const buttonClassName = buttonClassNames.join(" ");
  const iconClassName = iconClassNames.join(" ");

  return [buttonClassName, iconClassName];
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "outline", "text"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"])
    .isRequired,
};

Button.defaultProps = {
  label: "default",
  variant: "default",
  size: "md",
  color: "default",
};
