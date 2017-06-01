// Create Viewmodels
function viewModelManagerStartup() {
    var self = this;
    
    self.curTemplate = ko.observable('manager-startup-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model manager startup...');
    }

    self.switchToLogin = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-startup-template').empty();
        ko.applyBindings(new viewModelManagerLogin(), document.getElementById('main_view'));
    }

    self.switchToSignup = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-startup-template').empty();
        ko.applyBindings(new viewModelManagerSignup(), document.getElementById('main_view'));
    }

    self.open_login = function() {
        $('#manager-login-template').load('pages/manager/login/view.html', function() {
            self.switchToLogin(); 
        });
    };

    self.open_signup = function() {
        $('#manager-signup-template').load('pages/manager/signup/view.html', function() {
            self.switchToSignup(); 
        });
    };

    self.goBack = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#manager-startup-template').empty();
        ko.applyBindings(new viewModelMainStartup(), document.getElementById('main_view'));
    }

    self.go_back = function() {
        $('#main-startup-template').load('pages/main/startup/view.html', function() {
            self.goBack(); 
        });
    };
}
