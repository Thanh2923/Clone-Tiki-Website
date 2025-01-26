import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import QuantityCart from '@/components/quantity-cart/QuantityCart';
const Header:React.FC = () => {
  return (
     <header className="w-full bg-white flex flex-col ">
         <div className="title  flex justify-center gap-1 items-center w-full h-10 bg-green-50">
             
               <h3 className="text-[12px] text-green-500 font-semibold">Freeship đơn từ 45k, giảm nhiều hơn cùng</h3>
               <Image 
                 src="/logo/logo1.png"
                 alt="Logo"
                 width={70}
                 height={70}
                 className='w-auto h-auto'
                 
               />
            
         </div>
         <div className="w-full flex py-2 border-b-[1px] px-10 justify-between"> 
               <div className="flex  w-[10%] flex-col">
               <Image 
                 src="/logo/fdnshop.webp"
                 alt="Logo"
                 width={80}
                 height={30}
                 className='w-[50px] mb-2 h-[50px] rounded-lg'
                 
               />
               <span className="text-blue-800 font-semibold">FDN Shop</span>
               </div>
                <div className="w-[55%]  flex-col  flex search">
                    <div className="w-full border h-9 rounded-lg flex items-center ">
                        <input type="text" className="outline-none border-0 px-5 border-r-[1px] w-full" />
                        <Button variant="ghost" className="text-blue-500">Tìm kiếm</Button>
                    </div>
                    <div className='flex gap-5 mt-1 items-center '>
                    <Link href="/dashboard" className='text-gray-500 font-medium'>đồ điện tử</Link>
                    <Link href="/dashboard" className='text-gray-500 font-medium'>xe cộ</Link>
                    <Link href="/dashboard" className='text-gray-500 font-medium'>mẹ & bé</Link>
                    <Link href="/dashboard" className='text-gray-500 font-medium'>nhà cửa</Link>
                    <Link href="/dashboard" className='text-gray-500 font-medium'>sách</Link>
                    </div>
                </div>
                <div className="w-[30%] py-2 flex flex-col  menu">
                  <div className='w-full flex items-center justify-center gap-7 '>
                 <div>
                 <div className='flex gap-1 justify-center items-center'>
                 <Link href="/" className='text-gray-600  flex gap-2'>
                 <IoHomeOutline className='font-semibold text-[20px]'/>Trang chủ</Link>
                 </div>
                 </div>
                 <div className='flex gap-1 justify-center items-center'>
                 <Link href="/login" className='text-gray-600  flex gap-2'>
                 <FaRegCircleUser className='font-semibold text-[20px]' />Tài khoản</Link>
                 </div>
                 <div className='flex gap-1 relative justify-center items-center'>
               <Link href="/cart" className='text-gray-600  flex gap-2'> <BsCart3  className='text-blue-500 font-semibold text-[20px]' /></Link>
                 <QuantityCart/>
                 </div>
                  </div>
                  <div className='address mt-3 flex items-center gap-1'>
                  <FiMapPin /> Giao đến:
                  <p className='underline font-semibold text-gray-500'>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
                  </div>
                </div>
         </div>
         <div className="w-full">
  <div className="w-[90%] flex m-auto ">
    <ul className="flex w-full  items-center py-3">
      <li className="flex items-center"><a className='text-md text-blue-700 font-semibold' href="">Cam kết</a></li>
      <li className="flex items-center px-2 gap-1 border-r-2">
        <Image src="/logo/100.png" alt="Logo" width={20} height={20} className='w-auto h-auto' />
        <a href="">100% hàng thật</a>
      </li>
      <li className="flex items-center px-2 gap-1 border-r-2">
        <Image src="/logo/freeship.png" alt="Logo" width={20} height={20} className='w-auto h-auto' />
        <a href="">Freeship mọi đơn</a>
      </li>
      <li className="flex items-center px-2 gap-1 border-r-2">
        <Image src="/logo/hoantra.png" alt="Logo" width={20} height={20} className='w-auto h-auto' />
        <a href="">Hoàn trả 200% nếu hàng giả</a>
      </li>
      <li className="flex items-center px-2 gap-1 border-r-2">
        <Image src="/logo/30day.png" alt="Logo" width={20} height={20} className='w-auto h-auto' />
        <a href="">30 ngày đổi trả</a>
      </li>
      <li className="flex items-center px-2 gap-1 border-r-2">
        <Image src="/logo/giaonhanh.png" alt="Logo" width={20} height={20} className='w-auto h-auto' />
        <a href="">Giao hàng nhanh</a>
      </li>
      <li className="flex items-center px-2 gap-1">
        <Image src="/logo/giare.png" alt="Logo" width={20} height={20} className='w-auto h-auto' />
        <a href="">Giá siêu rẻ</a>
      </li>
    </ul>
  </div>
</div>

     </header>
  )
}

export default Header
