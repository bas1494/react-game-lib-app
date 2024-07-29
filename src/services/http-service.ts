import apiClient from "./api-client";

//TOOD: Add methods (generics) for POST/PUT/DELETE
class HttpService { 

    constructor() {

    }
    
    //TODO: Return promise with data instead of entire request promise
    get<T>(endPoint: string): Promise<T | T[]> {
        return apiClient.get(endPoint);
    }
}

export default new HttpService();