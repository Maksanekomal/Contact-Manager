
import Image from "next/image";

// Added metadata for SEO - This goes OUTSIDE the function
export const metadata = {
  title: "Home | Contact Manager",
  description: "Manage your contacts easily and efficiently.",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-5 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* 1. Wrapped the loose text in a span or removed it for a cleaner look */}
      <span className="text-sm uppercase tracking-widest text-blue-500">Dashboard</span>

      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
        {/* Fixed the typo 'esaily' to 'easily' */}
        <p className="mt-2 text-lg text-gray-600">
          Manage your contacts easily and efficiently
        </p>
        
        <div className="mt-6 flex justify-center">
          <div className="relative w-[300px] h-[300px]">
  <Image
    src="/contact.jpg"
    alt="Contact manager illustration"
    fill
    className="object-contain rounded-lg shadow-lg"
    priority
  />
</div>
        </div>
      </div>

      <div className="text-center border-t pt-8">
        <p className="text-lg text-gray-600">Ready to get organized?</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Start managing today!
        </button>
      </div>
      
    </div>
  );
}