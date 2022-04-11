import axios from 'axios';
import { Request, Response } from 'express';

interface JsonPlaceHolderSchemaPost{
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}

const controllerAxios = async (options:object): Promise<Array<JsonPlaceHolderSchemaPost> | object> => {
    try {
        const responseData = await axios(options);
        return responseData.data;
    } catch (error) {
        return { error };
    }
}

export const postDataServer = async (req:Request, res:Response) => {
    const { userId } = req.body;
    const responseJsonPlaceHolder = await controllerAxios({method:'get', url:'https://jsonplaceholder.typicode.com/posts2'});
    res.json(responseJsonPlaceHolder);
}
