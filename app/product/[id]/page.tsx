import { ProductDTO } from "@/src/type/dto";
import axios from "axios";

const Page = async ({ params }: { params: { id: number } }) => {
  const ProductId = params.id;
  const fetchblog = async (ProductId: number) => {
    try {
      const res = await axios.get(`${process.env.BASE_URL}/${ProductId}`);
      return res.data;
    } catch (err) {
      console.log("error", err);
      return [];
    }
  };
  const product: ProductDTO = await fetchblog(ProductId);

  return (
    <div className="container mx-auto flex items-center justify-items-center flex-col w-full bg-white bg-opacity-80 text-center my-10 py-10">
      <h1 className="inline-block text-4xl px-1 py-2 rounded-md  mx-2  font-bold">
        {product.title}
      </h1>
      {product.images.map((image: string, index: number) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="py-3 max-w-[780px]"
        />
      ))}
    </div>
  );
};

export default Page;
