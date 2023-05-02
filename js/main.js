let monedas = 50;
      let numerosAleatorios = [];
      let apuesta = 0;
      let luckyNumber = 0;

      function lanzarDado() {
        apuesta = document.getElementById("apuesta").value;
        luckyNumber = document.getElementById("luckyNumber").valueAsNumber;
        if (apuesta < 1 || apuesta > monedas) {
          alert("La apuesta debe ser un número entre 1 y " + monedas);
          return;
        }
        let dado = Math.floor(Math.random() * 6) + 1;
        numerosAleatorios.push(dado);
        if (dado === luckyNumber) {
          monedas += (parseInt(apuesta));
          document.getElementById("resultado").innerHTML = "¡Has ganado! Ahora tienes " + monedas + " monedas.";
        } else {
          monedas -= apuesta;
          document.getElementById("resultado").innerHTML = "Lo siento, has perdido. Ahora tienes " + monedas + " monedas.";
        }
        if (monedas === 0) {
          alert("Game Over");
          imprimirNumerosAleatorios();
        }
        if (monedas > 100) {
          alert("¡Enhorabuena! Has ganado el juego!");
          imprimirNumerosAleatorios();
        }
      }

      function imprimirNumerosAleatorios() {
        document.getElementById("resultado").innerHTML +=
          "<br><br>Números aleatorios generados: " + numerosAleatorios;
      }