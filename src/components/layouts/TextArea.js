import React from 'react'
import { func, string } from 'prop-types'

const TextArea = ({
    label,
    name,
    changeEvent,
    placeholder,
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
                        <textarea
                            name={name}
                            onChange={changeEvent}
                            className="textarea" 
                            placeholder={placeholder}
                            value={value}
                        >
                        </textarea>
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
TextArea.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    changeEvent: func,
    placeholder: string,
    value: string
}
export default TextArea