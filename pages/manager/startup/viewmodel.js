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
        ko.applyBindings(new viewModelManagerLogin(), document.getElementById('main_view'));
    }

    self.open_login = function() {
        $('#manager-login-template').load('pages/manager/login/view.html', function() {
            self.switchToLogin(); 
        });
    };

    self.open_signup = function() {
        alert('Signup.');
    };
}
