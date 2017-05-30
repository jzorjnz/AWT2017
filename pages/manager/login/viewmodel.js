// Create Viewmodels
function viewModelManagerLogin() {
    var self = this;
    
    self.username = ko.observable('');
    self.password = ko.observable('');
    
    self.curTemplate = ko.observable('manager-login-template');
    
    self.myPostProcessingLogic = function(elements) {
        // "elements" is an array of DOM nodes just rendered by the template
        // You can add custom post-processing logic here
        console.log('Running logic for view model manager login...');
    }

    self.suc = function(data){
        //if (result.url) {
        //    location.href = result.url;
        //}
        console.log(data);
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    self.err = function(jq, st, error){
        alert(JSON.stringify(jq.responseJSON.error) + ' ' + error);
        //var observableData = ko.mapping.fromJS(data);
        //var array = observableData();
        //self.customerList(array);
    }

    self.swtichToStartUp = function(){
        //knockout binding goes here
        //self.curTemplate('startup-template')
        
        //alert('Load was performed.');
        //var element = $('#main_view')[0]; 
        //ko.cleanNode(element);
        //ko.applyBindings(new viewModelStartup(), document.getElementById('main_view'));

        /*
        
        */
        //http_get('http://www.mocky.io/v2/592d00aa110000de196df8d9', null, self.suc, self.err);


        http_post('http://awt.ifmledit.org/api/user', {}, "APIKey " + apiKey, self.suc, self.err);

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
