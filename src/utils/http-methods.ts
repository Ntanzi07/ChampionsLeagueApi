import { HttpResponse } from "../interfaces/httpResponseInterface"

export const ok = async (data:any): Promise<HttpResponse> => {
    return{
        statusCode: 200,
        body: data
    } 
}

export const notFounded = async (): Promise<HttpResponse> => {
    return{
        statusCode: 404,
        body: "NotFounded :("
    } 
}