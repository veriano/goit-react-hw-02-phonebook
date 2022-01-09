import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ElementContactList from '../ElementContactList';
import s from './Contacts.module.css';


function Contacts ({ contacts }) {
    return (
     <>
        <ul className={s.list}>
        {contacts.map(contact => (
        <ElementContactList key={uuidv4()}
        id={uuidv4 }
        name={contact.name}
        number={contact.number}
          /> 
        ))}
       </ul>
    </> 
    )
}

Contacts.propTypes = {
    contacts: PropTypes.array,
}
export default Contacts;