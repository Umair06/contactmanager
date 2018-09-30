import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  type,
  error
}) => {
  return (
    <div>

      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={className('form-control form-control-lg', {
          'is-invalid': error
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <div className='invalid-feedback'>{error}</div>}

    </div>
  )
}

TextInputGroup.defaultProps = {
  type: 'text'
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string
}

export default TextInputGroup
