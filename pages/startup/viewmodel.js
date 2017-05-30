// Create Viewmodels
function viewModel1() {
    this.firstName = ko.observable("Syed Zeeshan");
    this.lastName = ko.observable("Akhtar");
    ko.bindingHandlers.htmlUrl = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).load(valueAccessor(), function () {
                $(element).children().each(function (index, child) {
                    ko.applyBindings(bindingContext.$data, child);
                });
            });
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        console.log('htmlUrl called');
        }
    };
}

function viewModel2() {
    this.university = ko.observable("Polimi");
    this.location = ko.observable("Como, Italy");
}

function viewModel3() {
    this.buyer = { name: 'Syed Zeeshan Akhtar', credits: 250 };
    this.seller = { name: 'Mario', credits: 200 };
    this.curTemplate = ko.observable('default-template');
    
    this.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model 3...');
        $('#person-template').load('pages/startup/person-template.html', function() {
            this.curTemplate = 'person-template';
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
    self.switchTemplates = function() {
        if(!this.templatesLoaded){
            $('#firstPopoverTemplate').load('pages/startup/template.html', function() {
                alert('Load was performed.');
                //knockout binding goes here
            });
            this.templatesLoaded = true;
        }
        self.popoverTemplate() === 'firstPopoverTemplate' 
                                    ? self.popoverTemplate('secondPopoverTemplate') 
                                    : self.popoverTemplate('firstPopoverTemplate');
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
ko.applyBindings(new viewModel1(), document.getElementById('startup_view_1'));
ko.applyBindings(new viewModel2(), document.getElementById('startup_view_2'));
ko.applyBindings(new viewModel3(), document.getElementById('startup_view_3'));
ko.applyBindings(new viewModel4(), document.getElementById('startup_view_4'));
ko.applyBindings(new viewModel5(), document.getElementById('startup_view_5'));




console.log('bindings applied!');

