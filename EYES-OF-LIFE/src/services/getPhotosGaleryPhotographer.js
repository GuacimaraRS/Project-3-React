import api from "./config";

const getPhotosGaleryPhotographer = async () => {
  try {
    const { data } = await api.get("/imagen");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getPhotosGaleryPhotographer };
