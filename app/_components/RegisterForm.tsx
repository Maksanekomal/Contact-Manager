
"use client";
import React from "react";

const RegisterForm = () => {
    return (
        <form className="space-y-4">
            <input name="name" placeholder="Full Name" className="w-full p-3 border rounded-xl outline-none" required />
            <input name="email" type="email" placeholder="Email" className="w-full p-3 border rounded-xl outline-none" required />
            <input name="password" type="password" placeholder="Password" className="w-full p-3 border rounded-xl outline-none" required />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                Create Account
            </button>
        </form>
    );
};

export default RegisterForm;