export const serviceFetch = async ( method, url, body = null ) => {
    try{
        const accessToken = window.sessionStorage.getItem("accessToken");

        const settings = {
            method: `${method}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(accessToken && {'Authorization': `bearer ${accessToken}`})
            },
            body: body
        };

        const response = await fetch(`${url}`, settings);

        if (response.status === 401){
            if (await serviceRefreshToken()){
                return await serviceFetch(method, url, body);
            }
        }

        if (!response.ok) { throw new Error(`something went wrong in the ${method} request.`); };
        const data = await response.json();

        return data;
    }
    catch(error) {
        throw error;
    };
};

export const serviceRefreshToken = async () => {
    try{
        const expirationDate = window.sessionStorage.getItem("expirationDate");
        if (new Date(expirationDate).getTime() <= Date.now()) {
            return false;
        }

        const settings = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userId": JSON.parse(window.sessionStorage.getItem("user")).userId,
                "accessToken" : window.sessionStorage.getItem("accessToken"),
                "refreshToken": window.sessionStorage.getItem("refreshToken")
            })
        };

        const response = await fetch("http://localhost:5293/User/refresh", settings);
        if (!response.ok) { throw new Error(`something broke`); };
        const data = await response.json();

        window.sessionStorage.setItem("accessToken", data.accessToken);

        return true;
    }
    catch(error){
        return false;
    }
}