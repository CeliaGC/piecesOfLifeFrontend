import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7200/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const CategoriesService = {
    async getCategories() {
        let response = await apiClient.get("/Category/GetAllCategories");
        let allCategories = response.data;
        return allCategories;
    },
    // async getImage(id) {
    //     let response = await apiClient.get("/Image/GetImageById?id="+ id);
    //     let image = response.data;
    //     return image;
    // },
    async submitCategory(newCategory){
        return await apiClient.post("/Category/Post", newCategory)
    },
    // async deleteImage(id){
    //     axios.delete('https://localhost:7200/Image/Delete?Id=' + id)
    // },
    // async updateImage(id, updatedImage){
    //     return await apiClient.patch("/Image/Patch?=" + id, updatedImage)
    // }
}

export default CategoriesService