

"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "@/app/_types/user";
import { setSession, deleteSession } from "@/app/_lib/session";

const API_URL = "http://localhost:3001";

export const login =  async (formData: FormData) => {
  console.log("formData:",formData);

  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get(
        "password"
      )}`
    );
    const user: UserType = response.data[0];
    if(!user) throw new Error("Invalid credentials");

    await setSession({name: user.name, email: user.email, id: user.id });
  } catch (error) {
    throw new Error("Failed to login");

  }
  redirect("/contact");
};

export const logout =async () => {
    await deleteSession();
  redirect("/login");
}