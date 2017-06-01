// Create Viewmodels
function viewModelManagerLogin() {
    var self = this;
    
    self.username = ko.observable('testm');
    self.password = ko.observable('12345678');
    self.curTemplate = ko.observable('manager-login-template');
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model manager login...');
    }

    self.swtichToStartUp = function(){
        //knockout binding goes here
        //self.curTemplate('startup-template')
        
        //alert('Load was performed.');
        //var element = $('#main_view')[0]; 
        //ko.cleanNode(element);
        //ko.applyBindings(new viewModelStartup(), document.getElementById('main_view'));

        /*
        
        */
    }
    
    self.suc = function(data){
        //if (result.url) {
        //    location.href = result.url;
        //}
        console.log(data);
        if(data.token){
            session.authToken = data.token;
            session.username = self.username();
            self.open_home();
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
        if(jq.responseJSON && jq.responseJSON.error){
            alert(JSON.stringify(jq.responseJSON.error));
        }
        else{
            alert("jq: " + JSON.stringify(jq));
            
        }
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    
    self.login = function() {
        //http_get('http://www.mocky.io/v2/592d00aa110000de196df8d9', null, self.suc, self.err);
        http_post('http://awt.ifmledit.org/api/auth', {'username': '' + self.username(), 'password': '' + self.password()}, "APIKey " + apiKey, self.suc, self.err);
    };
    
    self.goBack = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-login-template').empty();
        ko.applyBindings(new viewModelManagerStartup(), document.getElementById('main_view'));
    }

    self.go_back = function() {
        $('#manager-startup-template').load('pages/manager/startup/view.html', function() {
            self.goBack(); 
        });
    };

    self.gotoHome = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-login-template').empty();
        ko.applyBindings(new viewModelManagerHome(), document.getElementById('main_view'));
    }

    self.open_home = function() {
        $('#manager-home-template').load('pages/manager/home/view.html', function() {
            self.gotoHome(); 
        });
    };
}
