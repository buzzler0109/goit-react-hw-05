import { useEffect, useState } from "react";

import SearchBox from "../search_box/SearchBox";
import ContactForm from "../contact_form/ContactForm";
import ContactList from "../contact_list/ContactList";
import data from "../../data.json";

import "./App.css";

const App = () => {
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : data;
  });

  const [finder, setFinder] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(finder.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className="wrapper container form-body">
      <h1 className="form-title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={finder} onFind={setFinder} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
