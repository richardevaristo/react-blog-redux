import React from 'react'
import { func, string,bool } from 'prop-types'

const TextInput = ({
    label,
    type,
    name,
    changeEvent,
    placeholder,
    readOnly,
    value
}) => {
  return (
    <React.Fragment>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label htmlFor={name} className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input 
                            type         = {type}
                            name         = {name}
                            className    = "input"
                            placeholder  = {placeholder}
                            readOnly     = {readOnly}
                            onChange     = {changeEvent}
                            value        = {value}
                            autoComplete = "off"
                        />
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

TextInput.defaultProps = {
    type: 'text'
}

TextInput.propTypes = {
    label: string,
    type: string.isRequired,
    name: string.isRequired,
    changeEvent: func,
    placeholder: string.isRequired,
    readOnly: bool,
    value: string.isRequired
}

export default TextInput