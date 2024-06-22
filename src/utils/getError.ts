import { TErrorMessage } from "../types/all";




const getError = (error: TErrorMessage) => {
    let message;
    error instanceof Error ? message = error.message : message = String(error)
    return message;
}

export default getError;