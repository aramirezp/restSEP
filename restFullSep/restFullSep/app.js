(function () {
    'use strict';
    angular.module('vsAngular', []).controller("Controlador1", function ($scope, $log) {

        $scope.listaProyectos = [
           { nombre: "A", lenguaje: "Visual C#", tipo: "Web", horas: 1000 },
           { nombre: "B", lenguaje: "Visual Basic", tipo: "Mobile", horas: 250 },
           { nombre: "C", lenguaje: "TypeScript", tipo: "Web", horas: 2000 }];

        $scope.verDetalle = function (proyecto) {
            
            $scope.proyectoDetalle = proyecto;
            $log.log(proyecto);
            
        }

    })
})
();