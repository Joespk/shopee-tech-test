import Simplecard from "@/src/components/card/Simplecard";
import { fetchProduct } from "./action/fetchproduct";
import { ProductDTO } from "@/src/type/dto";
import React from "react";
import Flashsellcard from "@/src/components/card/Flashsellcard";
import Image from "next/image";
import flashsell from "@/public/flashselltime.png";

export default async function Home() {
  const productlist = await fetchProduct();
  const products = productlist.products;

  const FlashProducts = products.filter(
    (product: ProductDTO) => product.discountPercentage >= 15
  );

  return (
    <main>
      <section>
        <div className="container flex flex-col items-center mx-auto py-8 md:py-24 relative">
          <Image
            src={flashsell}
            alt="flashsell"
            width={150}
            className="absolute top-14 left-[12.5%]"
          />
          <div className="grid grid-cols-6 gap-2 mt-3 justify-around">
            {FlashProducts?.slice(0, 6).map((product: ProductDTO) => (
              <Flashsellcard key={product.id} Product={product} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container flex justify-around">
          <div className="grid grid-cols-6 gap-2 mt-3">
            {products?.map((product: ProductDTO) => (
              <Simplecard key={product.id} Product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
