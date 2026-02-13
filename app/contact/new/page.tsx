
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createContact } from "../../api/contact";
import { getSession } from "../../_lib/session";

const NewContactPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = await getSession();
    if (!user) return;

    await createContact({
      name,
      email,
      userId: user.id,   // 🔥 VERY IMPORTANT
    });

    router.push("/contact");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Add New Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default NewContactPage;