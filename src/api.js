import fetch from 'cross-fetch';

const GET = 'GET';
//const POST = 'POST';


/**
 * Funkce pro dotaz na api, zarizuje request, kontrolu navratoveho kodu, parse jsonu v odpovedi, vyjimku
 * v pripade ze neco nedopadne.
 * Jak se pouziva viz niz.
 */
export const restRequest = function (url, method, payload) {
    const baseUrl = 'https://litomericko-api.cz/api/v1/';
    const fetchParams = {
        method,
      //  mode: 'cors',
    };
    if (typeof payload !== 'undefined') {
        fetchParams['body'] = JSON.stringify(payload)
    }
    return fetch(baseUrl + url, fetchParams)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw response;
            }
            return response.text();
        })
        // Prazdny objekt pri prazdne odpovedi.
        .then((text) => text.length ? JSON.parse(text) : {})
        .catch(response => {
            console.log(response);
            return response.json()
                .then(error => {
                    throw error;
                });
        });
};

export const getCompanyCategories = () => {
    return restRequest('companyCategories', GET)
};

