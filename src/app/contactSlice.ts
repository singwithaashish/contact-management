import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../typings";

export interface ContactState {
  contacts: Contact[];
  currentModal: {} | null;
  editingContact: Contact | null;
}

const initialState: ContactState = {
  contacts: [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      statusIsActive: true,
    },
  ],
  currentModal: null,
  editingContact: null,
};

export const ContactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts[index] = action.payload;
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setCurrentModal: (state, action: PayloadAction<Contact | {} | null>) => {
      state.currentModal = action.payload;
    },
    setEditingContact: (state, action: PayloadAction<Contact | null>) => {
        state.editingContact = action.payload;
        }
  },
});

// Action creators are generated for each case reducer function
export const { addContact, updateContact, deleteContact, setCurrentModal, setEditingContact } =
  ContactSlice.actions;

export default ContactSlice.reducer;
