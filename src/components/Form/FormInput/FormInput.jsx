import s from '../Form.module.css';
import PropTypes from 'prop-types';

export const FormInput = ({
  name,
  type,
  value,
  pattern,
  title,
  handleChange,
}) => {
  return (
    <label htmlFor={name} className={s.label}>
      {name}
      <input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        className={s.input}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};
