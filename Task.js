import React from "react";
import { Checkbox } from "@material-ui/core";

function Task({ title, description, dueDate}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderBottom: 'solid 1px lightgray',
            width: '40vw',
        }}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{dueDate}</h3>
            <Checkbox   
                type="checkbox"
            />
        </div>
    );
}

export default Task; 