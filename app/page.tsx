import Simplecard from "@/src/components/card/Simplecard";
import { fetchProduct } from "./action/fetchproduct";
import { ProductDTO } from "@/src/type/dto";
import Flashsellcard from "@/src/components/card/Flashsellcard";

export default async function Home() {
  const productlist = await fetchProduct();
  const products = productlist.products;

  const FlashProducts = products.filter(
    (product: ProductDTO) => product.discountPercentage >= 15
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <main>
      <section>
        <div className="container flex justify-around">
          <Slider {...settings}>
            {FlashProducts?.map((product: ProductDTO) => (
              <div key={product.id}>
                <Flashsellcard Product={product} />
              </div>
            ))}
          </Slider>
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
