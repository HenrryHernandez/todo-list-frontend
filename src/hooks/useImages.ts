import { useAxios } from "./useAxios";

import { IImage } from "../interfaces/Todo.interface";

export const useImages = () => {
  const axiosInstance = useAxios();

  const uploadImage = async (image: FormData) => {
    try {
      const response = await axiosInstance.post<IImage>(
        "/api/images/upload",
        image
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  return { uploadImage };
};
