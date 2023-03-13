import Axios from "axios";
import { Data } from "../type";
const sendMessage = async (data: Data) => {
  await Axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/sms`, {
    data,
  }).catch((error) => error.response);
};
export { sendMessage };
