import React from "react";
import { Contact } from "../../typings";
import { useDispatch } from "react-redux";
import { deleteContact, setCurrentModal } from "../../app/contactSlice";
import { Modal } from "flowbite-react";

interface ContactElementProps {
  contact: Contact;
}

export default function ContactElement({ contact }: ContactElementProps) {
  const dispatch = useDispatch();
  const [isOpen, setOpenModal] = React.useState(false);
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleEdit = () => {
    dispatch(setCurrentModal(contact));
  };
  return (
    <div className="bg-white col-span-1 rounded-lg hover:shadow p-4 duration-200">
      <div className="flex justify-center items-center">
        <DismissableModal
          isOpen={isOpen}
          setOpenModal={setOpenModal}
          contact={contact}
        />
      </div>
      <div className="text-xl font-bold mb-2">
        {contact.firstName} {contact.lastName}
      </div>
      <div>Status: {contact.statusIsActive ? "Active" : "Inactive"}</div>
      <button
        className="mt-4 text-blue-500 hover:underline"
        onClick={() => setOpenModal(true)}
      >
        View Details
      </button>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleEdit}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
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

function DismissableModal({
  isOpen,
  setOpenModal,
  contact,
}: {
  isOpen: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  contact: Contact;
}) {
  return (
    <Modal dismissible show={isOpen} onClose={() => setOpenModal(false)}>
      <Modal.Header>Contact Details</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex justify-between">
            <div className="font-bold">First Name</div>
            <div>{contact.firstName}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Last Name</div>
            <div>{contact.lastName}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Status</div>
            <div>{contact.statusIsActive ? "Active" : "Inactive"}</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
