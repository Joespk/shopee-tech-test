import Link from "next/link";
import Image from "next/image";
import logo from "@/public/shopeelogo.png";
import cartlogo from "@/public/shoppingcart.svg";
import seachicon from "@/public/seachicon.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-t from-[#ff7337] to-[#ee4d2d] z-50 h-20">
      <div className="w-[1200px] mx-auto">
        <div className="flex flex-row items-center justify-between gap-16 ">
          <Image src={logo} alt="logo" width={150} />
          <div className="container flex flex-col">
            <div className="p-1 shadow-md container bg-white rounded-lg flex flex-row items-center justify-between text-black ">
              <input
                type="text"
                placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี"
                className="container px-2"
              />
              <button className="bg-[#ff7337] rounded-lg min-w-16 flex justify-center h-[34px] items-center px-3.5">
                <Image src={seachicon} alt="search" width={16} />
              </button>
            </div>
            <div></div>
          </div>

          <Image src={cartlogo} alt="cart" width={26} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
