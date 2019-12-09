import React from 'react';

function DisplayResult(props)
{
    let color = {
        color: (props.answer.toLowerCase() === "balanced" ? "#00ff00" : "#e60000")
    }
    return (<div >
                <textarea style={color} className="display" defaultValue={ props.answer} disabled={true}></textarea>
            </div>);
}

export default DisplayResult;