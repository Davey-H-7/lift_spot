import { CustomPayload } from "vite/types/hmrPayload.js";

class Request {

    async get(url:string){
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        
        return res.json ()
    }

    async post(url:string,payload:Object){
        const res = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        if (!res.ok) {
            throw new Error('Failed to post')
        }
        
        return res.json ()
    }
}

export default Request;