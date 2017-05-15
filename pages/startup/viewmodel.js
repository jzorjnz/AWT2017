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
    this.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model 3...');
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

// Activate knockout.js
ko.applyBindings(new viewModel1(), document.getElementById('startup_view_1'));
ko.applyBindings(new viewModel2(), document.getElementById('startup_view_2'));
ko.applyBindings(new viewModel3(), document.getElementById('startup_view_3'));
ko.applyBindings(new viewModel4(), document.getElementById('startup_view_4'));




console.log('bindings applied!');

