import React from 'react'

import "./conditional_css.css";

function ConditionCss(props) {
    let example_style = props.example_style ? 'example_todo' : '';
    return (
        <div>
            <label>
                <div className={example_style}>
                    <input type="checkbox"></input>
                    example todo
                </div>
            </label>
        </div>
    )
}

export default ConditionCss
