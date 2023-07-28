import React from "react";
import { Contact } from "../../typings";
import { useDispatch } from "react-redux";
import { deleteContact, setCurrentModal } from "../../app/contactSlice";

interface ContactElementProps {
  contact: Contact;
}

export default function ContactElement({ contact }: ContactElementProps) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleEdit = () => {
    dispatch(setCurrentModal(contact))
  };
  return (
    <div className="bg-white rounded-lg hover:shadow p-4 duration-200 transform transition-transform hover:-translate-y-1">
      <div className="text-xl font-bold mb-2">
        {contact.firstName} {contact.lastName}
      </div>
      <div>Status: {contact.statusIsActive ? "Active" : "Inactive"}</div>
      <div className="mt-4 flex justify-end">
        <button onClick={handleEdit} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
