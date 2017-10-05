const http = (url, options) => {
    return fetch(url, options)
        .then(x => x.json())
}

export default http;