import React, {Component} from 'react';
import s from './App.module.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/Contacts';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  formSubmitHandler = data => {
    this.setState(({contacts}) => {
      return {
        contacts: [data,...contacts],
      }
    })
  }

  render() {
    const { filter } = this.state;

    const normolizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.includes(normolizedFilter))
   
  return (
      <div>
        <h1 className={s.Title}><b>Phonebook</b></h1>
        <ContactForm onSubmitHandler={this.formSubmitHandler} />
        <h2 className={s.Title}><b>Contacts</b></h2>
        <Filter value={ filter} onChange={ this.changeFilter}/>
       <ContactList contacts={ visibleContacts } />
      </div>
    )
  }

}
export default App;