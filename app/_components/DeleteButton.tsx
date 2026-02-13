
"use client";
import { useActionState } from "react";
import { ContactType } from "../_types/contact";
import { FiTrash } from "react-icons/fi";

type DeleteButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [state, formAction, isPending] = useActionState(action, null);

  // Yeh function check karega ki delete karna hai ya nahi
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${contact.name}?`);
    
    if (!confirmed) {
      event.preventDefault(); // Agar user 'Cancel' karega toh delete stop ho jayega
    }
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={contact.id} />
      <button
        type="submit"
        disabled={isPending}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all
          ${isPending 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
            : "text-red-600 bg-red-50 hover:bg-red-100 active:scale-95 shadow-sm"
          }`}
      >
        <FiTrash size={16} className={isPending ? "animate-pulse" : ""} />
        <span>{isPending ? "Deleting..." : "Delete"}</span>
      </button>
    </form>
  );
};

export default DeleteButton;