import axios from 'axios';


export const getGifts = async (category) => {

    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=8&api_key=abLiJHFX1S604eSPQf3ibumBTg42efi6`;
        const response = await axios.get(url);
        const { data } = response.data

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.fixed_height_downsampled.url,
                audio: img.images?.preview.mp4
            }

        })
        return gifs;
    } catch (error) {
        console.log(error)
    }

}

