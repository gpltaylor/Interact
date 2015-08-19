angular.module('RxApp.RxJS')
    .controller('editorCtrl', ['$scope', '$location', '$templateRequest', 'PodService', function ($scope, $location, $templateRequest, PodService) {
        // Load the Editor if one is found
        $scope.scriptResults = [];

        //Load Editor
        if ($('#editor').length !== 0) {
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/twilight");
            editor.getSession().setMode("ace/mode/javascript");
        }

        // Get the Pod for this given location
        Rx.Observable.fromArray(PodService.pods)
            .filter(function (pod) {
                return pod.location == $location.url();
            }).forEach(function (pod) {
                $scope.pod = pod;
                loadContentIntoEditor('app' + pod.location + '.js');
            });

        function loadContentIntoEditor(url) {
            $templateRequest(url).then(function (template) {
                editor.setValue(template);
                editor.clearSelection();
            });
        };

        console.log = function (data) {
            $scope.$apply(function () {
                $scope.scriptResults.push(data);
            });
        };

        $scope.runScript = function () {
            // Evil but fits a purpose here.
            try {
                eval(editor.getValue());
            } catch (ex) {
                console.log(ex);
            }
        };

        $scope.clearResults = function () {
            $scope.scriptResults = [];
        }

    }]);