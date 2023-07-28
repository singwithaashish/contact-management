import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { Contact } from "../../typings";
import { useDispatch, useSelector } from "react-redux";
import { addContact, setCurrentModal, updateContact } from "../../app/contactSlice";
import { setCommentRange } from "typescript";
import { uid } from "../../utils/getRandomId";

// interface CreateContactModalProps {
//   openModal: string | undefined;
//   setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

export default function CreateContactModal() {
  const defaultData = {} as Contact;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [id, setId] = useState<string>(uid());
  const currentModal = useSelector((state: any) => state.contact.currentModal);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const contact = { id: id, firstName, lastName, statusIsActive: status };
    if(editing) {
      dispatch(updateContact(contact));
      dispatch(setCurrentModal(null))
      return;
    }
    dispatch(addContact(contact));
    dispatch(setCurrentModal(null))
  };

  useEffect(() => {
    if(!currentModal) return;
    if (!currentModal.firstName) {
      setEditing(false);
      setFirstName("");
      setLastName("");
      setStatus(false);
    }
    if (currentModal.firstName && currentModal.lastName && currentModal.statusIsActive && currentModal) {
      setEditing(true);
      setId(currentModal.id);
      setFirstName(currentModal.firstName);
      setLastName(currentModal.lastName);
      setStatus(currentModal.statusIsActive);
    }
  }, [currentModal]);

  return (
    <Modal
      show={currentModal !== null}
      onClose={() => dispatch(setCurrentModal(null))}
      className="w-[50vw]"
    >
      <Modal.Header>
        {defaultData.firstName
          ? "Edit Contact Screen"
          : "Create Contact Screen"}
      </Modal.Header>
      <Modal.Body>
        <form className="border-2 border-black p-5" onSubmit={e => handleSubmit(e)}>
          <div className="flex gap-5">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 border-black p-2"
              placeholder="First Name"
            />
          </div>
          <div className="flex gap-5">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-black p-2"
              placeholder="Last Name"
            />
          </div>
          <div className="flex gap-5">
            <label htmlFor="status">Status</label>
            <div className="flex gap-2">
              <input
                type="radio"
                name="status"
                id="status"
                value="active"
                checked={status}
                onChange={(e) => setStatus(e.target.value === "active" ? true : false)}
                className="border-2 border-black p-2"
              />
              <label htmlFor="status">Active</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="status"
                id="status"
                value="inactive"
                checked={!status}
                onChange={(e) => setStatus(e.target.value === "active" ? true : false)}
                className="border-2 border-black p-2"
              />
              <label htmlFor="status">Inactive</label>
            </div>
          </div>
      <button
        // onClick={() => setOpenModal(undefined)}
        type="submit"
        className="font-bold py-2 px-4 border-black border-2 bg-gray-300"
      >
        Save Contact
      </button>
        </form>
      </Modal.Body>
      
    </Modal>
  );
}