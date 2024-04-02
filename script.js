const confirmar = confirm("Desea jugar al Cachipun?")
if ( !confirmar ) {
    alert('Bueno, sera en otra ocasión...');
} else {
    alert(`
    Gracias por participar, las reglas son las siguientes:\n
    * Se debe elegir la cantidad de partidas que desea jugar.\n
    * El ganador sera el que gane la mayor cantidad de partidas.\n
    * Las siguientes condiciones indican quien gana una partida
    ${"  "}● Tijera le gana a papel\n
    ${"  "}● Papel le gana a piedra\n
    ${"  "}● Piedra le gana a tijera\n
    ${"  "}● Si ambos jugadores eligen la misma opción es un empate\n
    * Se debe escojer una opcion valida entre 1 y 3.\n
    ${"  "}1) Piedra\n
    ${"  "}2) Papel\n
    ${"  "}3) Tijera\n
    `)

    let cantidadPartidas;
    let resultados = {
        "humano": 0,
        "maquina": 0,
        "empates": 0
    };

    const condicionarCantidadValida = cantidadPartidas => {
        // Si no es un número
        if (isNaN(cantidadPartidas)) {
          alert("Introduzca un número válido.");
          return false;
        }

        // Si el número es menor o igual a 0
        if (!Number.isInteger(+cantidadPartidas) || cantidadPartidas <= 0) {
          alert("La cantidad debe ser un número entero mayor a 0.");
          return false;
        }

        return true;
    };

    const condicionarOpcionValida = opcion => {
        if ( ![ 1, 2, 3 ].includes(+opcion) ) {
            alert("Recuerde la opcion debe ser 1, 2 o 3");
            return false;
        }
        return true;
    }

    const mostrarResultado = eleccion => {
        const eleccionAdaptada = eleccion - 1;
        const eleccionMaquina = Math.floor(Math.random() * 3);
        const opciones = [ "Piedra", "Papel", "Tijera" ]
        // MAQUINA =  0 piedra, 1 papel, 2 tijera
        if ( +eleccionAdaptada === eleccionMaquina ) {
            alert(`
                Elecciones:\n
                ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                ES UN EMPATE!!!
            `)
            resultados.empates++
            return;
        }

        if ( +eleccionAdaptada === 0 ) {
            if ( eleccionMaquina === 1 ) {
                alert(`
                    Elecciones:\n
                        ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                        ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                        LA MAQUINA HA GANADO!!!
                `)
                resultados.maquina++
                return;
            }
            alert(`
                Elecciones:\n
                    ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                    ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                    TU HAS GANADO FELICIDADES!!!
            `)
            resultados.humano++
            return;
        }

        if ( +eleccionAdaptada === 1 ) {
            if ( eleccionMaquina === 2 ) {
                alert(`
                    Elecciones:\n
                        ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                        ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                        LA MAQUINA HA GANADO!!!
                `)
                resultados.maquina++
                return;
            }
            alert(`
                Elecciones:\n
                    ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                    ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                    TU HAS GANADO FELICIDADES!!!
            `)
            resultados.humano++
            return;
        
        }

        if ( +eleccionAdaptada === 2 ) {
            if ( eleccionMaquina === 0 ) {
                alert(`
                    Elecciones:\n
                        ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                        ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                        LA MAQUINA HA GANADO!!!
                `)
                resultados.maquina++
                return;
            }
            alert(`
                Elecciones:\n
                    ${"   "}* Maquina = ${opciones[eleccionMaquina]}\n
                    ${"   "}* Tuya = ${opciones[eleccionAdaptada]}\n\n
                    TU HAS GANADO FELICIDADES!!!
            `)
            resultados.humano++
            return;
        
        }
    }


    do {
        cantidadPartidas = prompt("Cuantas veces desea repetir el juego?")
    } while (!condicionarCantidadValida(cantidadPartidas));

    for ( let i = 0; i < cantidadPartidas; i++ ) {
        let opcionEscojida;
        do {
            opcionEscojida = prompt(`---- PARTIDA ${i+1} ----\n\n Ingrese el numero de la opcion: \n1) piedra\n2) papel\n3) Tijera`)
        } while ( !condicionarOpcionValida(opcionEscojida)  ) 
        mostrarResultado(opcionEscojida)
    }


    if ( resultados.humano > resultados.maquina ) {

        if ( resultados.humano > resultados.empates ) {
            alert(`####### Resultados del juego #####\n\n
                * Humano = ${resultados.humano}\n
                * Maquina = ${resultados.maquina}\n
                * Empates = ${resultados.empates}\n\n
                
                FELICIDADES HAS GANADO!!!
                
            `)
        } else {
            alert(`####### Resultados del juego #####\n\n
                * Humano = ${resultados.humano}\n
                * Maquina = ${resultados.maquina}\n
                * Empates = ${resultados.empates}\n\n
                
                SE HA GENERADO UN EMPATE!!!
                
            `)
        }

    } else {
        if ( resultados.maquina > resultados.empates ) {
            alert(`####### Resultados del juego #####\n\n
                * Humano = ${resultados.humano}\n
                * Maquina = ${resultados.maquina}\n
                * Empates = ${resultados.empates}\n\n
                
                AH GANADO LA MAQUINA!!!
                
            `)
        } else {
            alert(`####### Resultados del juego #####\n\n
                * Humano = ${resultados.humano}\n
                * Maquina = ${resultados.maquina}\n
                * Empates = ${resultados.empates}\n\n
                
                SE HA GENERADO UN EMPATE!!!
                
            `)
        }
    }
}
