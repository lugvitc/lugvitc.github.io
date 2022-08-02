export async function get_csrf() {
    return fetch('http://127.0.0.1:5000/get_csrf', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (!document.getElementById("csrf_token_meta_tag")) {
                let meta = document.createElement("meta");
                meta.setAttribute("id", "csrf_token_meta_tag");
                meta.setAttribute("csrfToken", data["xcsrf"]);
                document.getElementsByTagName('head')[0].appendChild(meta);
            } else {
                document.getElementById("csrf_token_meta_tag").setAttribute("csrfToken", data["xcsrf"]);
            }
        })
}

/**
 * The method in params should be POST.
 * 
 * @param url url to submit the post request
 * @param params Javascript object of parameters 
 * e.g. 
 *  {"method":"POST",
 *      "headers":{
 *          "Content-Type":'application/json'
 *      }
 *  }
 * 
 * @param jsonData JSON to submit. It will be in body parameter in fetch.
 */
export async function post(url, params, jsonData) {
    await get_csrf();
    jsonData["csrf_token"] = document.getElementById("csrf_token_meta_tag").getAttribute("csrfToken");
    params["body"] = JSON.stringify(jsonData);
    if (params["headers"]) {
        params["headers"]['X-CSRF-TOKEN'] = document.getElementById("csrf_token_meta_tag").getAttribute("csrfToken")
    } else {
        params["headers"] = { 'X-CSRF-TOKEN': document.getElementById("csrf_token_meta_tag").getAttribute("csrfToken") }
    }
    fetch(url, params);
}