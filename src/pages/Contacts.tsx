import React, { useState } from "react";
import NoContactBox from "../components/Contacts/NoContactBox";
import CreateContactModal from "../components/Contacts/CreateContactModal";
import { useDispatch, useSelector } from "react-redux";
import { ContactState, setCurrentModal } from "../app/contactSlice";
import { Contact } from "../typings";
import ContactElement from "../components/Contacts/ContactElement";

export default function Contacts() {
  // const [openModal, setOpenModal] = useState<string | undefined>();
  const contacts = useSelector((state: any) => state.contact.contacts);
  const dispatch = useDispatch();
  // console.log(contacts);
  return (
    <div className=" bg-gray-200 h-full flex flex-col items-center">
      <button
        onClick={() => dispatch(setCurrentModal({}))}
        className="font-bold py-2 px-4 border-black border-2 bg-gray-300"
      >
        Create Contact
      </button>
      <div className="w-[50vw]">
        <CreateContactModal />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        {contacts.length > 0 ? (
          contacts.map((contact: Contact, i: number) => (
            <ContactElement key={i} contact={contact} />
          ))
        ) : (
          <NoContactBox />
        )}
      </div>
    </div>
  );
}
