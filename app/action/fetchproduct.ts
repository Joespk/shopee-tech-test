import { ProductDTO } from "@/src/type/dto";
import axios from "axios";

export const fetchProduct = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}`);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { products: ProductDTO[] } = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it further if needed
  }
};
