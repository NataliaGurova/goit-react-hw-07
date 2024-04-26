
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts } from './redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  
   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {items.length > 0 && <ContactList items={items} />}
    </div>
  )
}

export default App;

