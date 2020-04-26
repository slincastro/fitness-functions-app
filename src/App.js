import React from 'react';
import './App.css';
import CardList from './card/Card'
import Form from './form/Form'


const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

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
