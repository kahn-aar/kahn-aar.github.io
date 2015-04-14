/**
 * Created by Nicolas on 14/04/2015.
 */

angular.module('project')
    .value('fbURL', 'https://torrid-torch-6299.firebaseIO.com/')
    .service('fbRef', function(fbURL) {
        return new Firebase(fbURL)
    })
    .service('fbObject', function($firebaseObject, $firebaseArray, fbRef) {

        return {
            getFbObject : function(path) {
                return new $firebaseObject(fbRef.child(path));
            },
            getFbArray : function(path) {
                return new $firebaseArray(fbRef.child(path));
            }
        }
    });