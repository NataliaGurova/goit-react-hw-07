
import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../data/contacts.json'
import { nanoid } from 'nanoid'

const initialState = initialContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  selectors: {
        selectContacts: state => state,
  },
  reducers: {
    // Standart case
    addContact: {
      reducer(state, action) {
      state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    
    deleteContact: (state, action) => {
			return state.filter((contact) => contact.id !== action.payload);
		},
  }
});

export const { selectContacts } = contactsSlice.selectors;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const selectContacts = (state) => {
  //   return state.contacts;
  // };
  
  
// const slice = createSlice({
//   name: 'contacts',  // name slice
//   initialState: {
//     items: [],
//     status: null,
//     error: null,
// 	},
//   reducers: {},
//   selectors: {
//     selectContacts: state => state,
//     selectMultiple: (state, multiplier: number) => state*multiplier
// }
// })

// export const { selectContacts, selectMultiple } = slice.selectors;
