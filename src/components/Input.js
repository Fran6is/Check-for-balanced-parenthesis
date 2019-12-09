import React from 'react';


function Input (props)
{
    return (
        <form className="form" onSubmit={props.handleExpression}>
            <input className="form__input" name="exp" type="text" placeholder={"Exp: " + props.value}></input>
            <button className="button" type="submit">Check</button>
        </form>
    );
}
Input.defaultProps = {
    value: "{{check this expression}} "
}

export default Input;