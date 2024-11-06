import axios from "axios";

export const AxiosService = async (url: string) => {
  const _url = encodeURI(url);
  try {
    const response = await axios.get(_url);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};
