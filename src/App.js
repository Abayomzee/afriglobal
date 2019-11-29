// import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import './Person/Person.css';
import Person from './Person/Person';

// function App() {

//   return (
//     <div className="App">

//       <h1> Hi, I am a React App </h1>   
//       <Person name="Okegbenro" sex="Male"> Are you sure ? </Person> 
        
//     </div>
//   );
// }

class App extends Component {

  state = {
    persons: [
      {id: "asdf1", name: "Abayomzee", age: "32"},
      {id: "asdf2", name: "Olanrewaju", age: "12"},
      {id: "asdf3", name: "Akanji", age: "62"},
      {id: "asdf4", name: "Shade", age: "98"}
    ],

    isComponentVisible: false
  }

  setNameHandler = (setName) => {
    this.setState({
      persons: [
        {name: setName, age: "32"},
        {name: setName, age: "12"}  
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: "32"},
        {name: "Balikis", age: "12"}  
      ]
    })
  }

  changeNameFunction = (event, id) => {

    const getInputIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const getIndexData = {...this.state.persons[getInputIndex]};
    
    getIndexData.name = event.target.value;

    const getStateData = [...this.state.persons];
    getStateData[getInputIndex] = getIndexData;

    this.setState({persons: getStateData});

  }

  showComponentsHandler = () => {
    
      const visible = this.state.isComponentVisible;
      this.setState({isComponentVisible: !visible});

  }

  deletePersonHandler = (compIndex) => {
    // const personn = this.state.persons.slice();
    const personn = [...this.state.persons];

    personn.splice(compIndex,1);
    this.setState({persons: personn})
  }


  render() {

    const style = {
      persone1: {
        padding: '10px',
        textTransformation: 'uppercase',
        color: 'red'
      },

      persone2: {
        padding: '10px',
        textTransformation: 'uppercase',
        color: 'blue'
      },

      button: {
        border: 'none',
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        padding: '10px 35px',
        borderRadius: '7px',
        transition: '.5s',
        ':hover': {
          backgroundColor: 'grey'
        },
        ':focus': {
          outline: 'none'
        }
      }
    }

    let persons = null;

    if(this.state.isComponentVisible) {

      persons = (
        <div>

          {this.state.persons.map((person, compIndex) => {

            // return <Person style={style} click={this.setNameHandler.bind(this, 'Musa')} change={this.changeNameHandler} name={person.name} sex={person.age} />

            return <Person 
            style={style} 
            click={() => this.deletePersonHandler(compIndex)} 
            // change={this.changeNameHandler} 
            name={person.name} 
            sex={person.age} 
            key={person.id}
            changed={(event) => this.changeNameFunction(event, person.id)} />


          })}

        </div>
      )     

      style.button.backgroundColor = "red";
      style.button[':hover'] = {
        backgroundColor: 'brown'
      }

      

    }

    const classes = [];
    if(this.state.persons.length <= 3) {
      classes.push("yellow");
    }

    if(this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
      <div className="App">
  
        <h1> Hi, I am a React App </h1> 
        <span className={classes.join(' ')}> This is really cool </span>
        <br/><br/><br/>  
        <button onClick={this.showComponentsHandler} style={style.button} key='btnn'> Show Component </button>
        <button onClick={() => this.setNameHandler('Messi')} style={style.button} key='btnnn'> Click to change name </button>
        {persons}        
      
        
      </div>
      </StyleRoot>

    );

    }

  
}

export default Radium(App);
