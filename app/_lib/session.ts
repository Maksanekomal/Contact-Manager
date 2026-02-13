
"use server";

import { cookies } from "next/headers";
import { UserType } from "@/app/_types/user";

/* =========================
   SET SESSION
========================= */

export const setSession = async (user: UserType) => {
    (await cookies()).set("session", JSON.stringify(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 *7,
        path: "/",
    });
}
/* =========================
   GET SESSION
========================= */

export const getSession = async (): Promise<UserType | null> => {
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;
    const user = JSON.parse(session) as UserType;
    return user;
};

//delete session

export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}
