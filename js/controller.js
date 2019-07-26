angular.module('AnalizadorLexico', [])
    .controller('Controller', function($scope, $http) {
        var app = this;
        app.textString = "";
        app.listResult;
        app.verifySintaxis = function() {
            app.listResult = [];
            console.log(split(app.textString));
            var listSplit = split(app.textString);
            for (let i = 0; i < listSplit.length; i++) {
                // console.log(variable.test(app.textString)); // esta linea retorna boolean si cumple la ER
                if (For.test(listSplit[i]) == true || While.test(listSplit[i]) == true) {
                    app.listResult.push("ciclo creado");
                } else if (string.test(listSplit[i]) == true || number.test(listSplit[i]) == true || character.test(listSplit[i]) == true) {
                    app.listResult.push("variable creada");
                } else {
                    app.listResult.push("error en la linea " + (i + 1));
                }
            }


            /*
                        for (let i = 0; i < listSplit.length; i++) {
                            if (WordRerserve[listSplit[i]] !== undefined) {
                                app.listResult.push(WordRerserve[listSplit[i]] + " : Es una palabra reserveda");
                            } else if (Operator[listSplit[i]] !== undefined) {
                                app.listResult.push(listSplit[i] + "  " + Operator[listSplit[i]]);
                            } else {
                                app.listResult.push(listSplit[i] + " : Identificador");
                            }
                        }*/
        }

        function split(words) {
            // console.log(words);
            //   var text = words.replace(/[\s]+/g, " ").trim();
            //  console.log(text);

            var wordSplit = words.split('\n');
            return wordSplit;
        }

        function cutword(listSplit) {
            var array
            for (let i = 0; i < listSplit.length; i++) {}

        }
    });