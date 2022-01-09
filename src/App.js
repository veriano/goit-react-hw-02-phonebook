import React, {Component} from 'react';
import s from './App.module.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: ""
  }

  formSubmitHandler = data => {
    console.log(data)
    // this.setState(prevState => {
    //   return {
    //     contacts: prevState.contacts.push(data)
    //   }
    // })
  }

  render() {
    const { contacts } = this.state;
   
  return (
      <div>
        <h1 className={s.Title}><b>Phonebook</b></h1>
        <ContactForm onSubmitHandler={this.formSubmitHandler} />
        <h2 className={s.Title}><b>Contacts</b></h2>

       <ContactList contacts={ contacts } />
      </div>
    )
  }

}
export default App;