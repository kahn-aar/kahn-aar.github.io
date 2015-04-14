/**
 * Created by Nicolas on 13/04/2015.
 */

sitePersoApp.directive('bindModel',function($compile){
    return{
        compile:function(tEl){
            tEl[0].removeAttribute('bind-model');
            return function(scope, iEl, iAtr){
                iEl[0].setAttribute('ng-model',"element." + scope.$eval(iAtr.bindModel));
                $compile(iEl[0])(scope);
            }
        }
    }
});