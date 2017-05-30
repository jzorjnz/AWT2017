var curToken = '';
var apiKey = 'bd116754-2378-4e5e-ac67-9e53c51598ab';

function http_get(url, header, success_callback, error_callback){
    $.ajax({
        type: 'GET',   
        url: url,
        headers: {
            "Authorization": header
        },
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
        headers: {
            "Authorization": header
        },
        data: data, //ko.toJSON(self),
        contentType: "application/json; charset=utf-8",
        async: false,
        success: success_callback,
        error: error_callback
        });
}
