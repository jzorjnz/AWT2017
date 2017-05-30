// Create Viewmodels

function viewModelMain() {
    var self = this;
    
    self.curTemplate = ko.observable('default-template');
    
    self.switchToStartup = function(){
        //knockout binding goes here
        var element = $('#main_view')[0]; 
        ko.cleanNode(element);
        ko.applyBindings(new viewModelMainStartup(), document.getElementById('main_view'));
    }

    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model main...');
        $('#main-startup-template').load('pages/manager/startup/view.html', function() {
            self.switchToStartup();        
        });
        
      
        
    }
}


$(document).ready(function () {
// Activate knockout.js
ko.applyBindings(new viewModelMain(), document.getElementById('main_view'));


console.log('bindings applied!');

});
