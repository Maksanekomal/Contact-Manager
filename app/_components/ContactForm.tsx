
"use client";
import React, { useActionState } from "react";
import { ContactType } from "../_types/contact";

type ContactFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
}

const ContactForm = ({ action, contact }: ContactFormProps) => {
    // formAction handles the submission, isPending handles the loading state
    const [state, formAction, isPending] = useActionState(action, null);

    return (
        <form action={formAction} className="space-y-5">
            {/* 1. Hidden input for ID (Zaroori hai update karne ke liye) */}
            {contact?.id && (
                <input type="hidden" name="id" value={contact.id} />
            )}

            {/* 2. Name Input */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                <input
                    name="name"
                    type="text"
                    defaultValue={contact?.name || ""}
                    placeholder="Enter name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    required
                />
            </div>

            {/* 3. Email Input */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                <input
                    name="email"
                    type="email"
                    defaultValue={contact?.email || ""}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    required
                />
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 flex gap-3">
                <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 disabled:bg-gray-300 shadow-md shadow-blue-100"
                >
                    {isPending ? "Saving..." : contact ? "Update Contact" : "Create Contact"}
                </button>
                
                <a 
                    href="/contact" 
                    className="px-6 py-3.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all text-center"
                >
                    Cancel
                </a>
            </div>

            {/* Error Message if any */}
            {state?.error && (
                <p className="text-red-500 text-sm font-medium mt-2 text-center">{state.error}</p>
            )}
        </form>
    );
}

export default ContactForm;