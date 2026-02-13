
import { getContacts } from "../api/contact";
import { getSession } from "../_lib/session";
import Link from "next/link";
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div className="p-10">
        Please{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          login
        </Link>{" "}
        to view contacts
      </div>
    );
  }

  const contacts = await getContacts(user.id);
  console.log("contact list :", contacts);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="p-10">
        Please{" "}
        <Link
          href="/contact/new"
          className="text-blue-600 hover:underline font-medium"
        >
          Add a contact
        </Link>{" "}
        to your contact list.
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Contacts</h1>

        <Link href="/contact/new">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            + New Contact
          </button>
        </Link>
      </div>

      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPage;