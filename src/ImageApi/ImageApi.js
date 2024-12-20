import axios from "axios"

export const uploadImg=async(image)=>{
    const formData=new FormData()
    formData.append('image',image)

    try{
        const {data}=await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key}`,formData)
        console.log(data)
        return data.data.display_url
    }
    catch(error){
         console.log(error.message)
    }


}