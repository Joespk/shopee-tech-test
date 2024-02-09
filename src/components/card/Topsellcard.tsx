import { ProductDTO } from "@/src/type/dto";
import Link from "next/link";
import top from "@/public/logo/top.png";
import Image from "next/image";

interface IProductprops {
  Product: ProductDTO;
}

const Topsellcard = async ({ Product }: IProductprops) => {
  const discountPercentage = Math.floor(Product.discountPercentage);

  return (
    <div className="max-w-[186px]  overflow-hidden shadow-lg bg-white pb-3 relative hover:translate-y-[-5px] transition-transform duration-300 ">
      <Link href={`product/${Product.id}`}>
        <img
          src={`${Product.thumbnail}`}
          width={186}
          className="h-[186px] relative "
        />
        <div className="absolute inset-0 flex items-center justify-center left-0 bg-orange-500 h-5 w-[40px] ">
          <Image src={top} alt="mall" width={30} />
        </div>
        <div className="flex items-center flex-row justify-center py-2 bg-gray-400  w-full self-center opacity-60 ">
          <p className="mb-1 line-clamp-2 text-sm text-white ">
            มีStockต่อเดือนของอยู่ {Product.stock}
          </p>
        </div>
        <h1 className="text-xl text-gray-700 uppercase font-semibold my-3 mx-2">
          {Product.brand}
        </h1>
      </Link>
    </div>
  );
};

export default Topsellcard;
