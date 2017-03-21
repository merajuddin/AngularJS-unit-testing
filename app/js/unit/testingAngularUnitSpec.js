describe('Testing AngularJs Test Suit', function(){
    describe('Testing AngularJS Controller', function(){
        it('Should initialize the title in the scope', function(){
            module('testingAngularApp');
            
            var scope = {};
            var ctrl;
            
            inject(function($controller){
                ctrl = $controller('testingAngularCtrl', {$scope:scope});
            });
            
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJS Application");
        });
    };) 
};)