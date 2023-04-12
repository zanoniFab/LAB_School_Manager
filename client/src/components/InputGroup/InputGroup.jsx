import { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import "./InputGroup.css";

const InputGroup = forwardRef(
  ({ id, labelText, helperText, ...props }, ref) => {
    const refId = useMemo(() => id ?? labelText, [id, labelText]);

    return (
      <div className="container box-input-group">
        {labelText && (
          <label htmlFor={refId} className="label">
            {labelText}
          </label>
        )}

        <input id={refId} className="input" ref={ref} {...props} /> 

        {!!helperText && <span className="error">{helperText}</span>}
      </div>
    );
  },
);

InputGroup.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  helperText: PropTypes.string,
};

InputGroup.displayName = "InputGroup";

export default InputGroup;