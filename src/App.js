import React from 'react';
import './App.css';
import CardList from './card/Card'
import Form from './form/Form'

class App extends React.Component {

  state= {
    profiles : []
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    })
    )
  }

  render(){
  return (  
    <div className="App">
      <div className="header">"Prueba de concepto"</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
    </div>
    );
  }
}

export default App;
