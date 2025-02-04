import { HttpResponseInterface } from "../interfaces/http_Response_Interface";
import * as status from "./http-methods";

export const validateDataResponse = async (data: any): Promise<HttpResponseInterface> => {
    return data ? status.ok(data) : status.notFounded();
}

export const validateDataRequest = async (data: any): Promise<HttpResponseInterface> => {
    return Object.keys(data).length !== 0 ? status.created() : status.badRequest();
}