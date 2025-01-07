import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ label, onClick, disabled, style }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '0.5rem',
        backgroundColor: disabled ? '#086FF4': '#6460FF',
        width:'100%',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      {label}
    </button>
  );
};


// Add PropTypes validation
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
  };
export default Button;