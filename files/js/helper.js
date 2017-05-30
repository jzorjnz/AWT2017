function http_get(url, header, success_callback, error_callback){
    $.ajax({
        type: 'GET',   
        url: url,
        contentType: "application/json",
        dataType: "jsonp",
        success: success_callback,
        error: error_callback
        });
}

function http_post(url, data, header, success_callback, error_callback){
    $.ajax({
        url: url,
        type: "POST",
        data: data, //ko.toJSON(self),
        contentType: "application/json; charset=utf-8",
        async: false,
        success: success_callback,
        error: error_callback
        });
}
