/**
 * * ESTAS SON CONCEPTOS PARA AGREGAR Y ELIMINAR HORARIOS
 * * CONCEPTO 1: LA ELECCIÓN DEL TIPO DE TABLA
 * 
 * *    ESTÁ EL FORMATO DE 24 HORAS COMPLETO, EL CUAL CUENTA CON HORARIOS DE 00:00 - 00:01 A 23:00 - 00:00
 * 
 * *    OPCIÓN 1: HABRA UN MENSAJE, CON UN INPUT A SU LADO, QUE DIRÁ:
 * 
 * *        "ESCRIBE LA PRIMERA Y LA ÚLTIMA HORA DE TU TABLA HORARIA"
 * *        input (X - Y)
 * * 
 * *        |X - (X+1)|
 * *        |(X+1) - (X+2)|
 * *        |(X+2) - (X+3)|
 * *        |.............|
 * *        |(Y-3) - (Y-2)|
 * *        |(Y-2) - (Y-1)|
 * *        |(Y-1) - Y|
 * * 
 * * CONCEPTO 2: LA SELECCIÓN DEL HORARIO DE UNA SOLA FILA
 * *    
 * *    UNA FILA TENDRÁ UN BOTÓN A LA IQUIERDA QUE APUNTARÁ HACIA ABAJO
 * *    AL PRESIONARSE EL BOTÓN, SALDRÁ UN PANEL CON CUATRO OPCIONES QUE SER VERÁ ASÍ:
 * *    <↓>07:00 - 08:00
 * *         >07:00 - 07:45
 * *         >07:00 - 07:30
 * *         >07:00 - 07:15
 * *         >07:00 - (INPUT < 08:00 (por ser horario siguiente))
 * *    <↓>08:00 - 09:00
 * *
 * *    ENTONCES QUEDARÍA ASÍ SI SELECCIONAMOS, POR EJEMPLO, LA PRIMERA OPCIÓN:
 * *        <↓>07:00 - 07:45
 * *        <↓>07:45 - 08:00
 * *        <↓>08:00 - 09:00
 * *        
 * *    SI SE QUISIERA EXTENDER EL 07:45 - 08:00, QUEDARÍA ALGO ASÍ
 * *        <↓>07:00 - 07:45
 * *        <↓>07:45 - 08:00
 * *            >07:45 - 07:55
 * *            >07:45 - 07:50
 * *            >07:45 - (INPUT < 08:00 (por ser horario siguiente))
 * *        <↓>08:00 - 09:00
 * *
 * *    SI SE QUISIERA EXTENDER EL 07:45 - 07:55, QUEDARÍA SOLO EL INPUT:
 * *        <↓>07:45 - 07:55
 * *            >07:45 - (INPUT < 07:55 (por ser horario siguiente))
 * *
 * *    UNA TABLA CON TODOS LOS EJEMPLOS SERÍA:
 * *        <↓>07:00 - 07:45
 * *        <↓>07:45 - 07:50
 * *        <↓>07:50 - 07:53
 * *        <↓>07:53 - 08:00
 * *        <↓>08:00 - 09:00
 * *        <↓>09:00 - 09:30
 * *        <↓>09:30 - 10:00
 * *    
 * *    ¿QUÉ PASA SI SE QUIERE ELIMINAR UNA FILA? POR EJEMPLO:
 * *
 * *        <↓>07:00 - 07:45
 * *        <↓>07:45 - 07:50
 * *        <↓>07:50 - 07:53
 * *        <↓>07:53 - 08:00
 * *        <̶↓̶>̶0̶8̶:̶0̶0̶ ̶-̶ ̶0̶9̶:̶0̶0
 * *        <↓>09:00 - 09:30
 * *        <↓>09:30 - 10:00
 * *
 * *    EL VACÍO QUEDARÍA ASÍ:
 * *
 * *        <↓>07:53 - 08:00
 * *            ¿Se aumentaría 08:00 a 09:00?
 * *            Cuándo hay un vacío de más de una hora, aparecera un boton SUTÍL (como un circulo fino de color) para agregar una fila.
 * *            Siempre que hay un horario que NO termine en :00, el próximo horario se hará por si sólo.
 * *        <↓>09:00 - 09:30
 * *
 * *
 * *        ¿CUÁL ES EL PLAN ENTONCES?
 * *        
 * *        DEFINIR VISUALES:
 * *            Las opciones se desplegaran como una sub-fila (DIV sub-row adentro del DIV row)
 * *            ¿Como se compone el DIV sub-row?
 * *            <div class="row">
                 <div id="sub-row-0" class="sub-row">
                     <input type='button'> > </input><div id="sub-row-schedule-0_0" class"sub-row-schedule">07:00 - 07:45</div>
                     <input type='button'> > </input><div id="sub-row-schedule-0_1" class"sub-row-schedule">07:00 - 07:30</div>
                     <input type='button'> > </input><div id="sub-row-schedule-0_2" class"sub-row-schedule">07:00 - 07:15</div>
                     <input type='button'> > </input><div id="sub-row-schedule-0_3" class"sub-row-schedule">07:00 - <input type='text'></div>
                 </div>
 * *                ...............
 * *                ...............
 * *                ...............
 * *                ...............
 * *            </div>
 * *
 * *
 * *    ¿Qué pasa si se suma una fila?
 * *    REGLA 1: Todas las filas con el último ID mayor al último ID de la fila creada,
 * *             sumarán a su último ID por 1.
 * *        Ejemplo:
 * *        A id...0 | A id...0
 * *        B id...1 | B id...1
 * *        C id...2 | B.a id...2
 * *        D id...3 | C id...3
 * *                 | D id...4
 * *
 * *    ¿Qué pasa si se elimina una fila?
 * *    REGLA 2: Todas kas filas con el último ID mayor al último ID de la fila eliminada,
 * *    restarán a su último ID por uno.
 * *
 * *        A id...0 | A id...0 | A id...0
 * *        B id...1 | B id...1 | B id...1
 * *        C id...2 | C X      | C X
 * *        D id...3 | D id...3 | D id...2
 * *                 |          | 
 */