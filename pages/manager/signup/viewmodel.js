// Create Viewmodels
function viewModelManagerSignup() {
    var self = this;
    
    self.username = ko.observable('testm');
    self.fullname = ko.observable('TestM');
    self.password = ko.observable('12345678');
    
    self.curTemplate = ko.observable('manager-signup-template');
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model manager signup...');
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
        alert("Signup successful. Login to continue!");
        self.go_back();
        //$('#startup-template').load('pages/startup/view.html', function() {
        //    self.swtichToStartUp();   
        //});
        
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    self.err = function(jq, st, error){
        if(error){
            if(error.toString().includes("Unexpected end of JSON input")){
                alert("Signup successful. Login to continue!");
                self.go_back();
            }
        }
        if(jq.responseJSON && jq.responseJSON.error){
            if(jq.responseJSON.error.type){
                alert(jq.responseJSON.error.type);
            }
            else if(jq.responseJSON.error.username){
                alert(jq.responseJSON.error.username);
            }
            else{
                alert(JSON.stringify(jq.responseJSON.error));
            }
        }
        else if(jq.responseJSON){
            alert('response' + JSON.stringify(jq.responseJSON));
        }
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    self.signup = function() {
        //http_get('http://www.mocky.io/v2/592d00aa110000de196df8d9', null, self.suc, self.err);
        
        http_post('http://awt.ifmledit.org/api/user', {'username': self.username(), 'fullname': self.fullname(), 'password': '' + self.password(), 'type': 'master'}, "APIKey " + apiKey, self.suc, self.err);
        //http_post('http://awt.ifmledit.org/api/user', {'username': 'testm3', 'fullname': 'TestM3', 'password': '12345678', 'type': 'master'}, "APIKey " + apiKey, self.suc, self.err);
    };

    self.goBack = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-signup-template').empty();
        ko.applyBindings(new viewModelManagerStartup(), document.getElementById('main_view'));
    }

    self.go_back = function() {
        $('#manager-startup-template').load('pages/manager/startup/view.html', function() {
            self.goBack(); 
        });
    };
}
