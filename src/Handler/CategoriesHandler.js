import CategoriesService from "../Service/CategoriesService";



export const CategoriesHandler = {

    addCategory(newCategory){


        let category = {
            "categoryName": newImage.imageName,  
        }
        return CategoriesService.submitCategory(category);
        
    },
    loadCategories(){
        return CategoriesService.getCategories();
    },
    // loadImage(id) {
    //     return ImageService.getImage(id);
    // },
    // deleteImage(id){
    //     return ImageService.deleteImage(id);
    // },
    // updateImage(id, updatedData){


    //     let updatedImageStructure = {
    //         "imageName": updatedData.imageName,
    //         "imageSource": updatedData.imageSource,
    //         "category": updatedData.category,
    //         "id":updatedData.id,
    //     }

    //     return ImageService.updateImage(id, updatedImageStructure);
    // },
    // async fetchImages() {
    //     const images = await ImageHandler.loadImages();
    //     return { images };
    // },
    // async fetchImage({ params }) {
    //     const image = await ImageHandler.loadImage(params. imageName);
    //     return { image };
    // },
}

export default CategoriesHandler