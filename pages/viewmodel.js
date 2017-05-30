// Create Viewmodels

function viewModelMain() {
    var self = this;
    
    self.curTemplate = ko.observable('default-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model main...');
        $('#startup-template').load('pages/startup/view.html', function() {
            //knockout binding goes here
            self.curTemplate('startup-template')
            alert('Load was performed.');
            var element = $('#main_view')[0]; 
            ko.cleanNode(element);
            ko.applyBindings(new viewModelStartup(), document.getElementById('startup_view'));
            console.log('applying bindings...')
     });
       
        
    }
}

// Activate knockout.js
ko.applyBindings(new viewModelMain(), document.getElementById('main_view'));


console.log('bindings applied!');

