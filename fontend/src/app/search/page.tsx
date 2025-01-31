"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const Page:React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query"); // Lấy giá trị từ URL
    console.log(query)
    const [results, setResults] = useState([]);
    console.log(results)
    useEffect(() => {
        if (query) {
            fetch(`http://localhost:8080/api/product/search?searchQuery=ffhdfhdfhfdh`) // Gửi request đến API tìm kiếm
                .then(res => res.json())
                .then(data => setResults(data.products));
        }
    }, [query]);
  return (
    <div className="w-full">
        <h1>Searct</h1>
    </div>
  )
}

export default Page
