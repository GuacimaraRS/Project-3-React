import api from "./config";

const getPhotosGaleryPhotographer = async () => {
  try {
    const { data } = await api.get("/imagen", {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getPhotosGaleryPhotographer };
