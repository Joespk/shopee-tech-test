import Image from "next/image";
import logo from "@/public/shopeelogo.png";
import cartlogo from "@/public/shoppingcart.svg";
import seachicon from "@/public/seachicon.svg";
import facebook from "@/public/logo/facebook.svg";
import instragam from "@/public/logo/instragm.svg";
import line from "@/public/logo/line.svg";
import bell from "@/public/logo/bell.svg";
import question from "@/public/logo/question.svg";
import vector from "@/public/logo/vector.svg";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-t from-[#ff7337] to-[#ee4d2d] z-50 h-[120px]  top-0 flex flex-col">
      <div className="h-1 w-[1200px] mx-auto my-1 px-5 py-1">
        <nav className="m-auto flex justify-between items-center ">
          <div className="flex justify-between items-center gap-3 text-white text-sm">
            <p className="border-r-2 border-white pr-2">Seller Centre</p>
            <p className="border-r-2 border-white pr-2">เริ่มต้นขายสินค้า</p>
            <p>ดาวน์โหลด</p>
            <div className="flex justify-between gap-1 items-center border-l-2 border-white pl-2">
              <p>ติดตามเราบน</p>
              <div className="flex gap-2">
                <Image src={facebook} alt="facebook" width={20} />
                <Image src={instragam} alt="instragam" width={20} />
                <Image src={line} alt="line" width={20} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5 text-white text-sm ">
            <div className="flex gap-1">
              <Image src={bell} alt="facebook" width={20} />
              <p>การแจ้งเตือน</p>
            </div>
            <div className="flex gap-1">
              <Image src={question} alt="facebook" width={20} />
              <p>ช่วยเหลือ</p>
            </div>
            <div className="flex gap-1">
              <Image src={vector} alt="facebook" width={20} />
              <p>ไทย</p>
            </div>
            <div className="flex gap-2">
              <p className="border-r-2 border-white pr-2">สมัครใหม่</p>
              <p>เข้าสู่ระบบ</p>
            </div>
          </div>
        </nav>
      </div>
      <nav>
        <div className="w-[1200px] mx-auto flex justify-around my-2">
          <div className="flex flex-row items-center justify-between gap-16 ">
            <Image src={logo} alt="logo" width={150} />
            <div className="container flex flex-col py-3">
              <div className="p-1 shadow-md container bg-white rounded-lg flex flex-row items-center justify-between text-black ">
                <input
                  type="text"
                  placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี"
                  className="container px-2"
                />
                <button className="bg-[#ff7337] rounded-lg min-w-16 flex justify-center h-[34px] items-center px-3.5 ">
                  <Image src={seachicon} alt="search" width={16} />
                </button>
              </div>
              <div>
                <ul className="flex flex-row gap-5 items-center py-2 text-xs text-white">
                  <li>สมาชิกใหม่</li>
                  <li>เก้าอี้ 1 บาท</li>
                  <li>เคส</li>
                  <li>เสื้อครอปเท่ๆ</li>
                  <li>สายชาร์จเร็ว</li>
                  <li>ฟรีลูกค้าใหม่</li>
                  <li>หูฟัง 1 บาท</li>
                  <li>แจกฟรี</li>
                  <li>เสื้อกันหนาวมีซิป</li>
                  <li>ลูกค้าใหม่</li>
                  <li>เครื่องใช้ไฟฟ้าหม้ออบ</li>
                </ul>
              </div>
            </div>

            <Image src={cartlogo} alt="cart" width={26} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
