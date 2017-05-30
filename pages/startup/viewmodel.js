// Create Viewmodels
function viewModelStartup() {
    var self = this;
    
    self.curTemplate = ko.observable('startup-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model startup...');
    }

    self.switchToLogin = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        ko.applyBindings(new viewModelLogin(), document.getElementById('main_view'));
    }

    self.open_login = function() {
        $('#login-template').load('pages/login/view.html', function() {
            self.switchToLogin(); 
        });
    };

    self.open_signup = function() {
        alert('Signup.');
    };
}
