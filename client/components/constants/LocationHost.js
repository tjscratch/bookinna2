let getHostName = function() {
    let location_host = location.host;
    let host = '';
    if (location_host !== "inna.ru"){
        host = `https://inna.ru`;
    }else
       host = `http://test.inna.ru`;
    return host
};

export { getHostName }