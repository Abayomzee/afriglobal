import React from 'react';
import classes from "./Person.css"
// import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (max-width: 600px)': {
            borderTop: '3px solid red',
            width: '90%',
            margin: 'auto' 
        }
    }

    return (
        <div className="Person" style={classes.Person}>

            <p> 
                My name is {props.name} and i am a {props.sex } ---> {props.children}, Yes i am
                <span onClick={props.click}>
                You can also click this text to change the texts above
                </span>                
            </p>

            <input type="text" onChange={props.changed} value={props.name} style={props.style.persone1} />

            

        </div>
    
    )
}

// export default Radium(person);
export default person;
