

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteContacts, updateContacts } from "../api/contact";

// 1. Delete Action
export const deleteContactAction = async(prevState: any, formData: FormData) => {
    const id = formData.get("id") as string;
    try {
        await deleteContacts(id);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("Error deleting contact:", error);
        return { error: "failed to delete contact" };
    }
}

// 2. Update Action (Ye missing tha, ise add kiya hai)
export const updateContactAction = async (prevState: any, formData: FormData) => {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
        // API call to update database
        await updateContacts(id, { name, email });
    } catch (error) {
        console.log("Error updating contact:", error);
        return { error: "Failed to update contact" };
    }

    // Refresh the list and go back
    revalidatePath("/contact");
    redirect("/contact");
};