import ImageService from "../Service/ImageService";



export const ImageHandler = {

    addImage(newImage){


        let image = {
            "imageName": newImage.imageName,  
            "category": newImage.category,
            "imageSource": newImage.imageSource,
        }
        return ImageService.submitImage(image);
        
    },
    loadImages(){
        return ImageService.getImages();
    },
    loadImage(id) {
        return ImageService.getImage(id);
    },
    deleteImage(id){
        return ImageService.deleteImage(id);
    },
    updateImage(id, updatedData){


        let updatedImageStructure = {
            "imageName": updatedData.imageName,
            "imageSource": updatedData.imageSource,
            "category": updatedData.category,
            "id":updatedData.id,
        }

        return ImageService.updateImage(id, updatedImageStructure);
    },
    async fetchImages() {
        const images = await ImageHandler.loadImages();
        return { images };
    },
    async fetchImage({ params }) {
        const image = await ImageHandler.loadImage(params. imageName);
        return { image };
    },
}

export default ImageHandler