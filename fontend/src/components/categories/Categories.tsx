import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import slugify from "../slugify/Slugify";
// import './category.css'

interface Item {
  id: number;
  name: string;
  image: string;
}

// Hàm gọi API để lấy dữ liệu danh mục
async function fetchCategories(): Promise<Item[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    const res = await axios.get(`${apiUrl}/category`);
    return res.data; // Trả về mảng Item
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
}

const Categories = async () => {
  const data = await fetchCategories();

  return (
    <div className="w-full ">
      <div className="w-full px-2 py-5">
        <h2 className="font-semibold px-5 py-2 text-[16px]">Danh mục</h2>
        <div className="w-full ">
          <div className="">
            {data?.map((item) => (
              <Link key={item.id} href={`/${slugify(item.name)}/${item.id}`}>
                <div className="flex gap-2 px-5 py-2 w-full hover:bg-slate-200 rounded-lg items-center">
                  <Image
                    src={`/logo-categories/${item.image}`} // Đảm bảo đường dẫn đúng
                    alt={item.name} // Thêm alt cho Image để cải thiện SEO
                    width={30}
                    height={30}
                  />
                  <h3 className="text-[14px]">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
