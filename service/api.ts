import Axios from "axios";

export interface Data {
  name: string;
  phone: string;
  information: Information[];
}

export interface Information {
  products: Products;
  quantity: number;
}

export interface Products {
  type: string;
  name: string;
  price: number;
  id: number;
}

const sendMessage = async (data: Data) => {
  await Axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/sms`, {
    data,
  }).catch((error) => error.response);
};
export { sendMessage };
