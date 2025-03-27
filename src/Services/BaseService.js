export const serviceFetch = async (method, url, body = null) => {
    try{
        const settings = {
            method: `${method}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        };

        const response = await fetch(`${url}`, settings)
        if (!response.ok) { throw new Error("something went wrong in the delete request."); };
        const data = await response.json();

        return data;
    }
    catch(error) {
        throw error;
    }
};