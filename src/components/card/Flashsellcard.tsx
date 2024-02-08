import { ProductDTO } from "@/src/type/dto";
import Link from "next/link";
import mall from "@/public/logo/mall.png";
import Image from "next/image";

interface IProductprops {
  Product: ProductDTO;
}

const Flashsellcard = async ({ Product }: IProductprops) => {
  const discountPercentage = Math.floor(Product.discountPercentage);

  return (
    <div className="max-w-[186px]  overflow-hidden shadow-lg bg-white pb-3 relative hover:translate-y-[-5px] transition-transform duration-300 ">
      <Link href={`product/${Product.id}`}>
        <img
          src={`${Product.thumbnail}`}
          width={186}
          className="h-[186px] relative "
        />
        <div className="absolute inset-0 flex items-center justify-center left-0 bg-red-600 h-5 w-[40px] ">
          <Image src={mall} alt="mall" width={30} />
        </div>

        <div className="absolute inset-0 flex items-start justify-center left-[80%]  ">
          <div className="bg-yellow-500 hover:bg-yellow-800 text-red-500 font-base py-1 px-1 text-[14px]   ">
            <h4 className="text-[12px] text-white">ลด</h4>
            <h4>{discountPercentage}%</h4>
          </div>
        </div>
        <div className="flex items-center flex-row justify-center py-2">
          <p className="mb-1 line-clamp-2 text-sm text-red-500">
            ฿{Product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Flashsellcard;
