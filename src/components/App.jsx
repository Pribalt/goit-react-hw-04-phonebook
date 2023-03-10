import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Title1, Title2 } from 'components/Layout.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    const exist = contacts.find(
      ({ name }) => name.toUpperCase() === newContact.name.toUpperCase()
    );

    if (exist) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  changeFilter = e => {
    //  const { name, value } = e.currentTarget;
    //   this.setState({ [name]: value });
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toUpperCase();

    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Layout>
        <GlobalStyle />
        <Title1>Phonebook</Title1>
        <ContactForm onSubmit={this.addContact} />

        <Title2>Contacts</Title2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}
