import axios from "axios"

const uploadImage = async (image) => {
    const formData = new FormData() 
    formData.append("file", image)
    formData.append("upload_preset", "mern_product") 

    try {
        const dataResponse = await axios.post(`https://api.cloudinary.com/v1_1/dkzafi9ys/image/upload`, formData )
        return dataResponse.data;
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

export default uploadImage