import React, {useState} from "react";
import { Button } from "@material-ui/core";

/*********FUNCTION TO MAKE INPUT BOX FORM**********/
function InputForm({ addTask }) { //takes in parameter from addTask function from app
    const [input, setInput] = useState({ title: "", description: "", dueDate: "",});

//when the input boxes change, it changes the input values 
const handleChange = (e) => {
    setInput({
        ...input, //what does this do again?
        [e.target.id]: e.target.input
        });
        console.log({input});
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'solid 1px lightgray',
            borderRadius: '6px',
            width: '40vw',
            padding: '2rem'
        }}>
            <input
                style={{ borderWidth: '0', backgroundColor: 'whitesmoke', width: '15vs'}}
                placeholder='Enter title'
                value = {input.title} //value of input is allocated to "task"
                onChange={ e => handleChange(e)}  //this fires handleTaskInputChange function whenever the input box changes :)
                id = 'title'
                >
            </input>
            <textarea
                style={{ borderWidth: '0', backgroundColor: 'whitesmoke', width: '15vs'}}
                placeholder='Enter description'
                value = {input.description} //value of input is allocated to "task"
                onChange={ e => handleChange(e)}  //this fires handleTaskInputChange function whenever the input box changes :)
                id = 'description'
                >
            </textarea>
            <input
                style={{ borderWidth: '0', backgroundColor: 'whitesmoke', width: '15vs'}}
                placeholder='Enter due date'
                value = {input.dueDate} //value of input is allocated to "task"
                onChange={ e => handleChange(e)}  //this fires handleTaskInputChange function whenever the input box changes :)
                id = 'dueDate'
                >
            </input> 

            <Button onClick={() => addTask(input)}>submit</button> 
        </div>
    )
}

export default InputForm;