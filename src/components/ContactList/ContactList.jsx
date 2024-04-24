
import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
// import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"
import { selectContacts } from "../../redux/contactsSlice"

const ContactList = () => { 
  
  const contacts = useSelector(selectContacts)
  const filterName = useSelector(selectNameFilter)

  const compareName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {compareName.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  )
}

export default ContactList;