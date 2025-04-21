export const serviceFetch = async (method, url, body = null) => {
    try{
        const token = window.sessionStorage.getItem("token");

        const settings = {
            method: `${method}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(token && {'Authorization': `bearer ${token}`})
            },
            body: body
        };

        const response = await fetch(`${url}`, settings);
        if (!response.ok) { throw new Error(`something went wrong in the ${method} request.`); };
        const data = await response.json();

        return data;
    }
    catch(error) {
        throw error;
    };
};