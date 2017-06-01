// Create Viewmodels
function viewModelMainStartup() {
    var self = this;
    
    self.curTemplate = ko.observable('main-startup-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model main startup...');
    }

    self.switchToManager = function(){
        //knockout binding goes here
        //self.curTemplate('login-template')
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        //$('#main-startup-template').empty();
        ko.applyBindings(new viewModelManagerStartup(), document.getElementById('main_view'));
    }

    self.open_manager = function() {
        $('#manager-startup-template').load('pages/manager/startup/view.html', function() {
            self.switchToManager(); 
        });
    };

    self.open_worker = function() {
        alert('worker.');
    };
}
