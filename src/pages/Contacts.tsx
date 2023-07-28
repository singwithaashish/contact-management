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
    <div className=" bg-gray-200 h-[90vh] flex flex-col items-center pt-3 md:pt-10">
      <button
        onClick={() => dispatch(setCurrentModal({}))}
        className="font-bold py-2 px-4 border-black border-2 bg-gray-300"
      >
        Create Contact
      </button>
      <CreateContactModal />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5 w-full overflow-y-scroll">
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
