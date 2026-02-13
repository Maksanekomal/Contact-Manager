
import ContactForm from "@/app/_components/ContactForm";
import { getContactsById } from "@/app/api/contact";
import { updateContactAction } from "@/app/actions/contact"; 

const EditContactPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const contact = await getContactsById(id);

    if (!contact) {
        return <div className="p-10 text-center font-bold">Contact not found!</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 border-gray-100">
                <h1 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    Edit Contact
                </h1>
                <ContactForm action={updateContactAction} contact={contact} />
            </div>
        </div>
    );
};

export default EditContactPage;