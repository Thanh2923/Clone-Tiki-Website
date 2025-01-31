"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react"

const SearchHeader = () => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const handleSearch = () => {
        if (search.trim()) { // Kiểm tra không để trống
            router.push(`/search?query=${encodeURIComponent(search)}`);
        }
    }

    return (
        <div className="w-full border h-9 rounded-lg flex items-center">
            <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                className="outline-none border-0 px-5 border-r-[1px] w-full" 
                placeholder="Nhập từ khóa tìm kiếm..."
            />
            <Button variant="ghost" onClick={handleSearch} className="text-blue-500">Tìm kiếm</Button>
        </div>
    )
}

export default SearchHeader;
