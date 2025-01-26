import Title from "../title/Title"
import './payment.css'
import Image from "next/image"
const PayMentMethod:React.FC = () => {
  return (
    <div className="w-full bg-white p-5 flex flex-col">
      <Title title="Chọn phương thức thanh toán"/>
      <label className="inline-flex items-center cursor-pointer">

<input type="checkbox" className="hidden peer" />

<span className="w-5 h-5 mr-2 rounded-full border-2 border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-white transition-colors"></span>
<Image
                 className=" w-[50px]  h-[50px] "
                      src={`/logo/payos.png`}
                      alt=""
                      width={100}
                      height={100}
                    />

Thanh toán PayOs
</label>
      <label className="inline-flex items-center cursor-pointer">

  <input type="checkbox" className="hidden peer" />

  <span className="w-5 h-5 mr-2 rounded-full border-2 border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-white transition-colors"></span>
  
                    <Image
                      src={`/logo/paymoney.png`}
                      alt=""
                      width={40}
                      height={40}
                    /> Thanh toán tiền mặt
</label>


    </div>
  )
}

export default PayMentMethod
