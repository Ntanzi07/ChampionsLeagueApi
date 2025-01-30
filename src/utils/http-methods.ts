import { HttpResponseInterface } from "../interfaces/http_Response_Interface"

export const ok = async (data:any): Promise<HttpResponseInterface> => {
    return{
        statusCode: 200,
        body: data
    } 
}

export const notFounded = async (): Promise<HttpResponseInterface> => {
    return{
        statusCode: 404,
        body: "NotFounded :("
    } 
}