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
        alert('Login.');
    };

    self.open_signup = function() {
        alert('Signup.');
    };
}

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

function viewModel2() {
    this.university = ko.observable("Polimi");
    this.location = ko.observable("Como, Italy");
}

function viewModel3() {
    this.buyer = { name: 'Syed Zeeshan Akhtar', credits: 250 };
    this.seller = { name: 'Mario', credits: 200 };
    
    var self = this;
    self.curTemplate = ko.observable('default-template');
    
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model 3...');
        $('#person-template').load('pages/startup/person-template.html', function() {
            
            //self.curTemplate() === 'default-template' 
            //                        ? self.curTemplate('person-template') 
            //                        : self.curTemplate('default-template');

            self.curTemplate('person-template')
            alert('Load was performed.');

            //knockout binding goes here
        });
        
    }
}

function viewModel4() {
    this.people = [
         { name: 'Syed Zeeshan Akhtar', credits: 250 },
         { name: 'Mario', credits: 200 }
     ];
     this.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model 4...');
    }
}

function viewModel5() {
    this.tooltipTitle = ko.observable('Observable title');
    this.tooltipPlacement = ko.observable('left');
    this.templatesLoaded = false;

    var self = this;
    
    self.popoverTemplate = ko.observable('firstPopoverTemplate');
    
    self.loadTemplates = function() {
        if(!this.templatesLoaded){
            $('#firstPopoverTemplate').load('pages/startup/template.html', function() {
                alert('Load was performed.');
                //knockout binding goes here
            });
            this.templatesLoaded = true;
            self.switchTemplates();
        }
        else{
            self.switchTemplates();
        }
    };

    self.switchTemplates = function() {
        if(!this.templatesLoaded){
            self.loadTemplates();
        }
        else{
            self.popoverTemplate() === 'firstPopoverTemplate' 
                                    ? self.popoverTemplate('secondPopoverTemplate') 
                                    : self.popoverTemplate('firstPopoverTemplate');
        }
    };

    
    this.type = ko.observable('info');
    
    this.message = ko.observable('Alert message');

    this.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model 5...');
        $('#firstPopoverTemplate').load('template.html', function() {
            alert('Load was performed.');
            //knockout binding goes here
        });
    }
}




// Activate knockout.js
ko.applyBindings(new viewModelMain(), document.getElementById('main_view'));
            
/*
ko.applyBindings(new viewModel2(), document.getElementById('startup_view_2'));
ko.applyBindings(new viewModel3(), document.getElementById('startup_view_3'));
ko.applyBindings(new viewModel4(), document.getElementById('startup_view_4'));
ko.applyBindings(new viewModel5(), document.getElementById('startup_view_5'));
*/



console.log('bindings applied!');

