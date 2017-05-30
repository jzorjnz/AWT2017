// Create Viewmodels
function viewModelStartup() {
    var self = this;
    
    self.curTemplate = ko.observable('startup-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model startup...');
    }

    self.open_login = function() {
        $('#login-template').load('pages/login/view.html', function() {
            //knockout binding goes here
            self.curTemplate('login-template')
            alert('Load was performed.');
            var element = $('#main_view')[0]; 
            ko.cleanNode(element);
            ko.applyBindings(new viewModelLogin(), document.getElementById('main_view'));
            console.log('applying bindings...')
        
        });
        
    };

    self.open_signup = function() {
        alert('Signup.');
    };
}
