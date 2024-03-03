import axios from 'axios';
import { DeleteModel } from "./model"


export async function deleteProfile_API(): Promise<[any, null] | [null, DeleteModel]> {    
    try {
        const response = <any>  await axios.get(`https://2clicks.pythonanywhere.com/api/news/`)

        return [null, response]
    } catch (error) {
        return [error, null]
    }
}