"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const DoctorSearch = () => {
    const [searchInp, setSearchInp] = useState("");
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    const handleSearch = () => {
       const params = new URLSearchParams(searchParams)
       if(searchInp){
        params.set("search",searchInp)
       } else{
        params.delete("search")
       }
         
       router.push(`${pathName}?${params.toString()}`)
       
    }

    return (
        <div className="mt-6 flex justify-center">
            <div className="relative w-full md:w-1/2">

                {/* Input */}
                <input
                    type="text"
                    value={searchInp}
                    onChange={(e) => setSearchInp(e.target.value)}
                    placeholder="Search doctors by name or specialty..."
                    className="w-full px-4 py-3 pr-24 rounded-xl border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
                    focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />

                {/* Button inside input */}
                <button
                
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 
                    bg-emerald-600 hover:bg-emerald-700 
                    text-white px-4 py-2 rounded-lg text-sm"
                >
                    <FaSearch />
                </button>

            </div>
        </div>
    );
};

export default DoctorSearch;