import { ProductDTO } from "@/src/type/dto";
import Link from "next/link";

interface IProductprops {
  Product: ProductDTO;
}

const Simplecard = async ({ Product }: IProductprops) => {
  const discountPercentage = Math.floor(Product.discountPercentage);

  return (
    <div className="max-w-[186px]  overflow-hidden shadow-lg bg-white pb-3 relative hover:translate-y-[-5px] transition-transform duration-300 ">
      {/* <Link href={`product/${Product.id}`}> */}
      <img
        src={`${Product.thumbnail}`}
        width={186}
        className="h-[186px] relative "
      />
      <div className="absolute inset-0 flex items-start justify-start left-[86%] ">
        <h4 className="bg-yellow-200 hover:bg-yellow-800 text-red-500 font-base py-0.5 px-0.5 text-[12px]">
          {discountPercentage}%
        </h4>
      </div>
      <div className="px-2 py-1">
        <h2 className="mb-1 line-clamp-2 text-sm uppercase">{Product.title}</h2>
        <div className="flex items-center flex-row justify-between">
          <p className="mb-1 line-clamp-2 text-sm text-red-500">
            ฿{Product.price}
          </p>
          <p className="mb-1 line-clamp-2 text-xs text-slate-400">
            คลัง {Product.stock} ชิ้น
          </p>
        </div>

        {/* <Link
            href={`blog/${Product.id}`}
            className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-1 px-3 rounded "
          >
            Read More
          </Link> */}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Simplecard;
