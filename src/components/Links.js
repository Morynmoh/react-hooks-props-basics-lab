import React from 'react';

function Links (props) {
    return (
        <div>
            <h3><a href={props.links1}>GitHub</a></h3>
            <h3><a href={props.links2}>LinkedIn</a></h3>
        </div>
    )
}

export default Links;