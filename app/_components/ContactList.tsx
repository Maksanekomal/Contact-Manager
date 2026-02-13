
import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div 
          key={contact.id} 
          className="group border border-gray-200 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {contact.name}
              </h2>
              <p className="text-gray-500 text-sm font-medium">{contact.email}</p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* --- EDIT BUTTON UI --- */}
              <Link 
                href={`/contact/${contact.id}/edit`} 
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-sm"
              >
                <FiEdit size={18} />
                <span>Edit</span>
              </Link>

              {/* --- DELETE BUTTON UI --- */}
              {/* Note: Delete button ka internal style DeleteButton.tsx me change hoga */}
              <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>   
      ))}
    </div>
  );
};

export default ContactList;