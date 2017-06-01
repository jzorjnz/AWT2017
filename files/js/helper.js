var apiKey = 'bd116754-2378-4e5e-ac67-9e53c51598ab';

var session = {
    authToken: '',
    username: '',
    fullname: '',
    type: ''
};

function clear_session(){
    session = {
        authToken: '',
        username: '',
        fullname: '',
        type: ''
    }
}

function http_get(url, header, success_callback, error_callback){
    $.ajax({
        type: 'GET',   
        url: url,
        headers: {
            "Authorization": header
        },
        contentType: "application/json",
        dataType: "json",
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
        data: JSON.stringify(data), //ko.toJSON(self),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        success: success_callback,
        error: error_callback
        });
}

function http_put(url, data, header, success_callback, error_callback){
    $.ajax({
        url: url,
        type: "PUT",
        headers: {
            "Authorization": header
        },
        data: JSON.stringify(data), //ko.toJSON(self),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        success: success_callback,
        error: error_callback
        });
}
