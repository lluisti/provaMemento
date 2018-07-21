


// function concertarVisita() {
//     var libVisitas = libByName('Control visita');

//     var ficha = entry();

//     var fechaVisita = arg('Fecha visita');

//     var visita = libVisitas.create({});

//     visita.set('Fecha visita', fechaVisita);
//     visita.set('Situación', 'Visita concertada');
//     visita.link('dFichPaciente', ficha);
//     visita.link('dDietista', ficha.field('iddietista')[0]);
//     visita.link('dCentro', ficha.field('idCentro')[0]);

//     ficha.link('Visita', visita);

//     visita.recalc();
// }

// function modificarFicha0() {

//     var CAMPOS_FICHA = ['Aceptación', 'Aceptadas condiciones', 'Ver documento Protección de datos', 'Quien le recomendo el tratamiento', 'Fecha alta', 'Otros', 'Situación', 'Nombre', 'Apellidos', 'D.N.I.', 'Sexo', 'Fecha de nacimiento', 'Dirección', 'Código Postal', 'Población', 'Teléfono', 'Movil', 'Email', 'Patologías diagnosticadas', 'Otras patologías', 'Medicación Otras patologías', 'Tipo de medicación Otras patologías', 'Complementos alimenticios otras patologías', 'com Otras', 'Articular', 'Medicación Articular', 'Tipo de medicación Articular', 'Complementos alimenticios articular', 'com Articular', 'Circulatoria', 'Medicación Circulatoria', 'Tipo de medicación Circulatoria', 'Complementos alimenticios circulatoria', 'com Circulatoria', 'Cutanea', 'Medicación Cutanea', 'Tipo de medicación Cutaneo', 'Complementos alimenticios Cutanea', 'com Cutanea', 'Digestiva', 'Medicación Digestiva', 'Tipo de medicación Digestiva', 'Complementos alimenticios Digestiva', 'com Digestiva', 'Metabolica', 'Medicación Metabolica', 'Tipo de medicación Metabolica', 'Complementos alimenticios Metabolica', 'com Metabolica', 'Respiratoria', 'Medicación Respiratoria', 'Tipo de medicación Respiratoria', 'Complementos alimenticios Respiratoria', 'com Respiratoria', 'Sistema nervioso', 'Medicación Sistema Nervioso', 'Tipo de medicación Sistema Nervioso', 'Complementos alimenticios Sistema Nervioso', 'com Sistema Nervioso', 'Transtornos Psicológicos', 'Medicación Transtornos Psicológicos', 'Tipo de medicación Transtornos Psicológicos', 'Complementos alimenticios Transtornos Psicológicos', 'com Transtornos Psicológicos', 'Intervenciones Quirurjicas', 'Presión arterial', 'Mediciones Presión arterial', 'Colesterol', 'HDL', 'LDL', 'Colesterol total', 'Triglicéridos', 'Añadir Información de otros datos analíticos', 'Mostrar Analitica', 'Img analitica', 'Alergias', 'Alergias  Alimenticias', 'Alergias Medicamentosas', 'Alergias Otras', 'Intolerancias alimenticias', 'Otras Intolerancias', 'Caminar', 'Deportes', 'Deporte que practica', 'Desayuno', 'Hora desayuno', 'Mèdia mañana', 'Horario media mañana', 'Comida', 'Hora comida', 'Merienda', 'Hora merienda', 'Cena', 'Hora cena', 'Consumo de Lacteos', 'Consumo de Fruta', 'Consumo de Legumbres', 'Consumo de Pasta', 'Consumo de Arroz', 'Consumo de Verdura', 'Consumo de Ensalada', 'Consumo de Carne', 'Consumo de Pescado', 'Consumo diario de agua', 'Intentar no incluir en las dietas', 'Ansiedad', 'Tipo de Ansiedad', 'Ansiedad Otros', 'En que momento del día se producte la ansiedad', 'WC', 'WC Otros', 'Reglas', 'Reglas Otras', 'Altura', 'Visita', 'Histórico', 'iddietista', 'idCentro', 'filtro'];

//     // Librerias
//     var LIBRERIA_CENTROS = 'Centros';

//     // Campos en Ficha
//     var CAMPO_ID_PACIENTE = 'idPaciente';
//     var CAMPO_CENTRO = 'idCentro';
//     var CAMPO_VISITAS = 'Visita';
//     var CAMPO_PRESION_ARTERIAL = 'Mediciones Presión arterial';
//     var CAMPO_SITUACION = 'Situación';
//     var CAMPO_DIETISTA = 'iddietista';

//     // Campos en Visitas
//     var CAMPO_FICHA_EN_VISITA = 'dFichPaciente';

//     // Campos en Presion arterial
//     var CAMPO_FICHA_EN_PRESION_ARTERIAL = 'idFicha';

//     // Campos en Centros
//     var CAMPO_DIETISTA_EN_CENTRO = 'iddietista';
//     var CAMPO_FICHA_EN_CENTRO = 'Ficha cliente';

//     // Valores constantes
//     var SITUACION_NUEVO = 'NUEVO REGISTRO';
//     var SITUACION_DEFECTO = 'Consulta';

//     // Mensajes
//     var MSG_VUELVE_A_INTRODUCIR = 'Por favor, vuelve ha introducir el campo ';
//     var MSG_GUARDADO = 'Ficha Guardada';


//     var ficha = entry();
//     var libFichas = lib();
//     var libCentros = libByName(LIBRERIA_CENTROS);
//     var entradas = libFichas.entries();
//     if (ficha.field(CAMPO_ID_PACIENTE) == 0) {

//         //message('Grabando');

//         var fichaNueva = new Object();

//         var maxId = 0;

//         for (var i = 0; i < entradas.length; i++) {
//             var num = entradas[i].field(CAMPO_ID_PACIENTE);
//             if (num > maxId) {
//                 maxId = num;
//             }
//         }

//         fichaNueva[CAMPO_ID_PACIENTE] = maxId + 1;

//         fichaNueva = libFichas.create(fichaNueva);

//         var centro = ficha.field(CAMPO_CENTRO)[0];
//         centro.link(CAMPO_FICHA_EN_CENTRO, fichaNueva);

//         for (var i = 0; i < CAMPOS_FICHA.length; i++) {
//             var campo = CAMPOS_FICHA[i];
//             var valorCampo = ficha.field(campo);
//             if (valorCampo != null && valorCampo != []) {
//                 fichaNueva[campo] = ficha.field(campo);
//                 if (valorCampo instanceof Array && valorCampo[0] != null) {
//                     if (typeof valorCampo[0] == 'string') {
//                         fichaNueva.set(campo, valorCampo);
//                         ficha.set(campo, null);
//                     } else {
//                         for (var j = 0; j < valorCampo.length; j++) {
//                             ficha.unlink(campo, valorCampo[j]);
//                             fichaNueva.link(campo, valorCampo[j]);

//                             if (campo == CAMPO_VISITAS) {
//                                 valorCampo[j].unlink(CAMPO_FICHA_EN_VISITA, ficha);
//                                 valorCampo[j].link(CAMPO_FICHA_EN_VISITA, fichaNueva);
//                                 valorCampo[j].recalc();
//                             } else if (campo == CAMPO_PRESION_ARTERIAL) {
//                                 valorCampo[j].unlink(CAMPO_FICHA_EN_PRESION_ARTERIAL, ficha);
//                                 valorCampo[j].link(CAMPO_FICHA_EN_PRESION_ARTERIAL, fichaNueva);
//                                 valorCampo[j].recalc();
//                             }

//                         }
//                     }
//                 } else if (valorCampo instanceof Date) {
//                     if (valorCampo.getTime() >= 0) {
//                         fichaNueva.set(campo, valorCampo);
//                     } else {
//                         message(MSG_VUELVE_A_INTRODUCIR + campo);
//                     }
//                     ficha.set(campo, null);
//                 } else {
//                     fichaNueva.set(campo, valorCampo);
//                     ficha.set(campo, null);
//                 }
//             }
//         }

//         if (fichaNueva.field(CAMPO_SITUACION) == SITUACION_NUEVO) {
//             fichaNueva.set(CAMPO_SITUACION, SITUACION_DEFECTO);
//         }

//         ficha.set(CAMPO_ID_PACIENTE, 0);
//         ficha.set(CAMPO_SITUACION, SITUACION_NUEVO);
//         ficha.link(CAMPO_DIETISTA, centro.field(CAMPO_DIETISTA_EN_CENTRO)[0]);
//         ficha.link(CAMPO_CENTRO, centro);

//         fichaNueva.recalc();
//         fichaNueva.show();

//         message(MSG_GUARDADO);
//     } else {
//         if (ficha.field(CAMPO_SITUACION) == SITUACION_NUEVO) {
//             ficha.set(CAMPO_SITUACION, SITUACION_DEFECTO);
//             ficha.recalc();
//         }
//     }
// }






// function informarCentroEnFicha() {
//     var centro = entry();

//     var fichasCentro = centro.field('Ficha cliente');

//     for (var i = 0; i < fichasCentro.length; i++) {
//         var ficha = fichasCentro[i];
//         if (ficha.field('idPaciente') == 0) {
//             //ficha.set('iddietista', centro.field('iddietista'));
//             var centrosFicha = ficha.field('idCentro');
//             for (var j = 0; j < centrosFicha.length; j++) {
//                 ficha.unlink('idCentro', centrosFicha[j]);
//             }
//             ficha.link('idCentro', centro);
//         }
//     }
// }

// function crearFicha0EnCentro() {

//     var centro = entry();
//     var libFichas = libByName('Ficha');

//     var fichasCentro = centro.field('Ficha cliente');
//     var contieneFicha0 = false;

//     var fichasDietista = libFichas.linksTo(centro.field('iddietista')[0]);
//     var ficha0 = null;
//     for (var i = 0; i < fichasDietista.length; i++) {
//         if (fichasDietista[i].field('idPaciente') == 0) {
//             ficha0 = fichasDietista[i];
//         }
//     }

//     if (ficha0 != null) {
//         for (var i = 0; i < fichasCentro.length && !contieneFicha0; i++) {
//             var ficha = fichasCentro[i];
//             if (ficha.field('idPaciente') == 0) {

//                 if (ficha.id == ficha0.id) {
//                     contieneFicha0 = true;
//                     message('Contiene');
//                 } else {
//                     centro.unlink('Ficha cliente', ficha);
//                 }
//             }
//         }
//     }

//     if (!contieneFicha0) {
//         message('No contiene');


//         if (ficha0 == null) {
//             var tmpFicha0 = {};

//             tmpFicha0['idPaciente'] = 0;
//             //tmpFicha0['Nombre'] = 'AÑADIR NUEVO REGISTRO';
//             tmpFicha0['Situación'] = 'NUEVO REGISTRO';

//             ficha0 = libFichas.create(tmpFicha0);

//             ficha0.link('iddietista', centro.field('iddietista')[0]);


//         }

//         var centrosFicha = ficha0.field('idCentro');
//         for (var j = 0; j < centrosFicha.length; j++) {
//             ficha0.unlink('idCentro', centrosFicha[j]);
//         }
//         ficha0.link('idCentro', centro);
//         ficha0.recalc();

//         centro.link('Ficha cliente', ficha0);
//         centro.recalc();
//     }

// }