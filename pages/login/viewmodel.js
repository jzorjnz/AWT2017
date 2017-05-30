// Create Viewmodels
function viewModelLogin() {
    var self = this;
    
    self.username = ko.observable('');
    self.password = ko.observable('');
    
    self.curTemplate = ko.observable('login-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model login...');
    }

    self.swtichToStartUp = function(){
        //knockout binding goes here
        //self.curTemplate('startup-template')
        alert('Load was performed.');
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        ko.applyBindings(new viewModelStartup(), document.getElementById('main_view'));
    }

    self.open_login = function() {
        $('#startup-template').load('pages/startup/view.html', function() {
            self.swtichToStartUp();   
        });
    };

    self.open_signup = function() {
        alert('Signup.');
    };
}
