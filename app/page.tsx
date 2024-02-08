import Simplecard from "@/src/components/card/Simplecard";
import { fetchProduct } from "./action/fetchproduct";
import { ProductDTO } from "@/src/type/dto";

export default async function Home() {
  const productlist = await fetchProduct();
  const products = productlist.products;

  return (
    <main>
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
