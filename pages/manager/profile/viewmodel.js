// Create Viewmodels
function viewModelManagerProfile() {
    var self = this;
    
    self.username = ko.observable('');
    self.fullname = ko.observable('');
    self.type = ko.observable('');
    self.password = ko.observable('');
    
    self.curTemplate = ko.observable('manager-profile-template');
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model manager profile...');
        self.loadProfile();
    };

    
    self.save_suc = function(data){
        alert("Success!");
    };

    self.save_err = function(jq, st, error){
        if(jq.statusText == "OK"){
            alert("Save successful! Login again to continue.");
            self.go_startup();
        }
        else if(jq.responseJSON.error){
            var err_text = "";
            if(jq.responseJSON.error.password){
                err_text = err_text + "Password " + jq.responseJSON.error.password + ".";
            }
            if(jq.responseJSON.error.fullname){
                err_text = err_text + "Full name " + jq.responseJSON.error.fullname + ".";
            }
            if(err_text == ""){
                alert(JSON.stringify(jq.responseJSON.error));
            }
            else{
                alert(err_text);    
            
            }
        }
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    };

    self.save = function() {
        //http_get('http://www.mocky.io/v2/592d00aa110000de196df8d9', null, self.suc, self.err);
        http_put('http://awt.ifmledit.org/api/user/me', {'fullname': self.fullname(), 'password': self.password()}, "APIToken " + session.authToken, self.save_suc, self.save_err);
    };
    
    self.loadProfile = function() {
        self.username(session.username);
        self.fullname(session.fullname);
        self.type(session.type);
    };
    
    
    self.goBack = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-login-template').empty();
        ko.applyBindings(new viewModelManagerHome(), document.getElementById('main_view'));
    };

    self.go_back = function() {
        $('#manager-home-template').load('pages/manager/home/view.html', function() {
            self.goBack(); 
        });
    };
    

    self.goToStartup = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-login-template').empty();
        ko.applyBindings(new viewModelManagerStartup(), document.getElementById('main_view'));
    }

    self.go_startup = function() {
        $('#manager-startup-template').load('pages/manager/startup/view.html', function() {
            self.goToStartup(); 
        });
    };
}
