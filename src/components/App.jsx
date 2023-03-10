import { useState, useEffect } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Title1, Title2 } from 'components/Layout.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');

    return contacts ? JSON.parse(contacts) : [];
  });
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const exist = contacts.find(
      contact => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );

    if (exist) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toUpperCase();

    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <Layout>
      <GlobalStyle />
      <Title1>Phonebook</Title1>
      <ContactForm onSubmit={addContact} />

      <Title2>Contacts</Title2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Layout>
  );
};
