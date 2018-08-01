const baseurl = "/api/juomat"
//const baseurl = "http://localhost:5159/api/juomat"
function haeLista(callback) {
    fetch(baseurl)
        .then(function (response) {
            if (!response.ok) {
                const errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "Listanhaku"
                };
                throw errviesti;
            }
            return response.json();
        })
        .then(function (lista) {
            callback(lista);
        });
}

export {haeLista};