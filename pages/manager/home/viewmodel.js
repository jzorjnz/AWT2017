// Create Viewmodels
function viewModelManagerHome() {
    var self = this;
    
    self.username = ko.observable('');
    self.fullname = ko.observable('');
    self.type = ko.observable('');
    

    self.curTemplate = ko.observable('manager-home-template');
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model manager home...');
        self.loadProfile();
    }

    self.load_suc = function(data){
        //if (result.url) {
        //    location.href = result.url;
        //}
        if(data){
            if(data.username){
                session.username = data.username;
                self.username(data.username);
            }
            if(data.fullname){
                session.fullname = data.fullname;
                self.fullname(data.fullname);
            }
            if(data.type){
                session.type = data.type;
                self.type(data.type);
            }
            else{
                alert('data: ' + JSON.stringify(data));
            }
        }
        
        //$('#startup-template').load('pages/startup/view.html', function() {
        //    self.swtichToStartUp();   
        //});

        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    };

    self.load_err = function(jq, st, error){
        if(jq.responseJSON && jq.responseJSON.error){
            alert('error: ' + JSON.stringify(jq.responseJSON.error) + ' ' + error);
        }
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    };

    self.loadProfile = function() {
        //http_get('http://www.mocky.io/v2/592d00aa110000de196df8d9', null, self.suc, self.err);
        http_get('http://awt.ifmledit.org/api/user/me', "APIToken " + session.authToken, self.load_suc, self.load_err);
    };
    
    
    
    
    self.suc = function(data){
        //if (result.url) {
        //    location.href = result.url;
        //}
        console.log(data);
        if(data.token){
            authToken = data.token;
            alert('Login successful!');
        }
        else{
            alert(JSON.stringify(data));
        }
        //$('#startup-template').load('pages/startup/view.html', function() {
        //    self.swtichToStartUp();   
        //});

        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    self.err = function(jq, st, error){
        alert(JSON.stringify(jq.responseJSON.error) + ' ' + error);
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    
    self.login = function() {
        //http_get('http://www.mocky.io/v2/592d00aa110000de196df8d9', null, self.suc, self.err);
        http_post('http://awt.ifmledit.org/api/auth', {'username': '' + self.username, 'password': '' + self.password}, "APIKey " + apiKey, self.suc, self.err);
    };
    
    self.logOut = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        clear_session();
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-login-template').empty();
        ko.applyBindings(new viewModelManagerStartup(), document.getElementById('main_view'));
    }

    self.logout = function() {
        $('#manager-startup-template').load('pages/manager/startup/view.html', function() {
            self.logOut(); 
        });
    };

    self.gotoProfile = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-login-template').empty();
        ko.applyBindings(new viewModelManagerProfile(), document.getElementById('main_view'));
    }

    self.open_profile = function() {
        $('#manager-profile-template').load('pages/manager/profile/view.html', function() {
            self.gotoProfile(); 
        });
    };
}
