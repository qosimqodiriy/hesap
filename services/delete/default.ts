import { type DeleteModel } from "./model";

export function getDeleteModel_DEFAULT(): DeleteModel { 
    const object: DeleteModel = {
        id: '',
        phone: '',
        status: '',
        confirm: '',
    }

    return object;
}