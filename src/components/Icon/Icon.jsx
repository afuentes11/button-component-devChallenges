import PropTypes from "prop-types";
import "./Icon.css";

export function Icon({ children, additionalClaseName }) {
  const className = `material-icons-round ${additionalClaseName}`;
  return <span className={className}>{children}</span>;
}

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  additionalClaseName: PropTypes.string,
};
