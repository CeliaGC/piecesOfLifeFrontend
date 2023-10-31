import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const ImageService = {
    async getImages() {
        let response = await apiClient.get("/images");
        let allImages = response.data;
        return allImages;
    },
    async getImage(id) {
        let response = await apiClient.get("/images/"+ id);
        let image = response.data;
        return image;
    },
    async submitImage(newImage){
        return await apiClient.post("/images", newImage)
    },
    async deleteImage(id){
        axios.delete('images' + id)
    },
    async updateImage(id, updatedImage){
        return await apiClient.patch("/images/" + id, updatedImage)
    }
}

export default ImageService