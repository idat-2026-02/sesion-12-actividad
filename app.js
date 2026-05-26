// Banco de Preguntas - 20 Preguntas (Sesiones 1 a 10)
const BANCO_PREGUNTAS = [
  // SECTOR 1: Entorno y Arquitectura Web
  {
    id: 1,
    sector: 1,
    sectorName: "Entorno y Arquitectura",
    type: "multiple-choice",
    question: "¿Cuál es la función principal de la extensión Live Preview en VS Code durante el desarrollo de una página HTML?",
    options: [
      { text: "Sube automáticamente el código a un servidor de hosting en la nube.", val: "a" },
      { text: "Genera una base de datos SQL local en tiempo real.", val: "b" },
      { text: "Muestra una vista previa de la página HTML directamente en un panel interno dentro de VS Code que se actualiza en tiempo real al escribir.", val: "c" },
      { text: "Traduce el código HTML a estilos CSS.", val: "d" }
    ],
    correct: "c",
    explanation: "Live Preview es una extensión de Microsoft que muestra una vista previa en vivo e integrada de tu archivo HTML directamente dentro de una pestaña de VS Code, lo cual es excelente para laboratorios con restricciones de red."
  },
  {
    id: 2,
    sector: 1,
    sectorName: "Entorno y Arquitectura",
    type: "multiple-choice",
    question: "Si escribes la abreviatura Emmet: header>nav>ul>li*2 en tu editor de código y presionas tabulador, ¿cuál es el resultado esperado?",
    options: [
      { text: "Un menú flotante con 2 botones de navegación rápidos.", val: "a" },
      { text: "Un contenedor <header> que tiene dentro un <nav>, que a su vez tiene una lista <ul> con dos elementos <li>.", val: "b" },
      { text: "Dos listas desordenadas independientes con un enlace cada una.", val: "c" },
      { text: "Un pie de página con dos enlaces sociales en la parte inferior.", val: "d" }
    ],
    correct: "b",
    explanation: "La abreviatura 'header>nav>ul>li*2' significa crear un elemento 'header', anidar un 'nav' como hijo, luego un 'ul' como hijo de 'nav' y, finalmente, multiplicar 'li' por 2."
  },
  {
    id: 3,
    sector: 1,
    sectorName: "Entorno y Arquitectura",
    type: "code-fixer",
    question: "¿Qué elemento estructural obligatorio falta en la primera línea de este archivo para indicar que estamos utilizando el estándar HTML5 moderno?",
    code: `<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Mi Primer Sitio</title>\n</head>\n<body>\n  <h1>Hola Mundo</h1>\n</body>\n</html>`,
    options: [
      { text: "Falta la declaración '<!DOCTYPE html>' al principio del documento.", val: "a" },
      { text: "Falta cerrar la etiqueta <head> con una barra inclinada.", val: "b" },
      { text: "Falta agregar la etiqueta <meta name=\"html5\">.", val: "c" },
      { text: "Falta la etiqueta <main> rodeando todo el archivo.", val: "d" }
    ],
    correct: "a",
    explanation: "La declaración de tipo de documento '<!DOCTYPE html>' debe ir siempre en la primera línea del archivo para indicarle al navegador que procese el código bajo el estándar HTML5."
  },
  {
    id: 4,
    sector: 1,
    sectorName: "Entorno y Arquitectura",
    type: "multiple-response",
    question: "Con respecto a la arquitectura Cliente-Servidor y conceptos de planificación web, selecciona todas las afirmaciones correctas:",
    options: [
      { text: "El navegador web actúa como el Cliente, solicitando y renderizando el documento HTML.", val: "a" },
      { text: "El Servidor es la máquina remota que almacena y envía los archivos web cuando el cliente los solicita.", val: "b" },
      { text: "El Dominio (ej. www.idat.edu.pe) es el espacio de disco físico donde se guardan las fotos y archivos del sitio.", val: "c" },
      { text: "Un Sitemap (mapa de sitio) es un esquema que planifica la estructura de navegación y las páginas de nuestro sitio web.", val: "d" }
    ],
    correct: ["a", "b", "d"],
    explanation: "El Cliente (navegador) pide archivos al Servidor. El dominio es solo la dirección legible de la IP del servidor. El hosting es el espacio físico. Un sitemap ayuda a planificar la estructura de enlaces."
  },
  // SECTOR 2: Estructura Semántica HTML5
  {
    id: 5,
    sector: 2,
    sectorName: "Estructura Semántica",
    type: "multiple-choice",
    question: "¿Cuál es el beneficio principal de utilizar etiquetas semánticas de HTML5 (como <header>, <main>, <nav>) en lugar de usar solo etiquetas <div> genéricas?",
    options: [
      { text: "Hace que las imágenes se carguen al doble de velocidad en la web.", val: "a" },
      { text: "Mejora el posicionamiento SEO en buscadores y ayuda a que los lectores de pantalla (para personas con discapacidad visual) entiendan la estructura lógica.", val: "b" },
      { text: "Es un requisito obligatorio para que las hojas de estilos CSS funcionen en el sitio.", val: "c" },
      { text: "Permite que la página web sea responsive automáticamente sin usar media queries.", val: "d" }
    ],
    correct: "b",
    explanation: "La semántica de HTML5 aporta significado al contenido. Esto ayuda tanto a los buscadores (SEO) como a las herramientas de accesibilidad (lectores de pantalla) a descifrar la jerarquía de la página."
  },
  {
    id: 6,
    sector: 2,
    sectorName: "Estructura Semántica",
    type: "matching",
    question: "Asocia cada etiqueta semántica de HTML5 con su función estructural correspondiente en una página web:",
    pairs: [
      { source: "<nav>", target: "Contenedor para el bloque de enlaces principales de navegación." },
      { source: "<main>", target: "Contenedor del contenido principal y exclusivo de la página." },
      { source: "<aside>", target: "Contenedor para contenido secundario o barras laterales." },
      { source: "<footer>", target: "Contenedor para el pie de página con créditos y copyright." }
    ],
    explanation: "Cada sección estructural de un sitio tiene una etiqueta específica en HTML5, reemplazando el uso abusivo de divisiones sin significado."
  },
  {
    id: 7,
    sector: 2,
    sectorName: "Estructura Semántica",
    type: "code-fixer",
    question: "El siguiente código produce advertencias en el validador porque tiene un elemento semántico estructurado en una ubicación no permitida. Selecciona la opción que repara este código:",
    code: `<body>\n  <main>\n    <h1>Inicio</h1>\n    <footer>\n      <main>Derechos Reservados 2026</main>\n    </footer>\n  </main>\n</body>`,
    options: [
      { text: "Eliminar la etiqueta <main> interna que está dentro de <footer>, ya que solo debe haber un <main> activo por página.", val: "a" },
      { text: "Reemplazar la etiqueta <footer> por un elemento <header>.", val: "b" },
      { text: "Quitar la etiqueta <body> del documento completo.", val: "c" },
      { text: "Cambiar la etiqueta de título <h1> por una de menor jerarquía como <h6>.", val: "d" }
    ],
    correct: "a",
    explanation: "La etiqueta <main> representa el contenido central y exclusivo del documento. No puede haber más de una por página, ni estar anidada dentro de secciones secundarias como <footer> o <nav>."
  },
  {
    id: 8,
    sector: 2,
    sectorName: "Estructura Semántica",
    type: "multiple-response",
    question: "¿Cuáles de las siguientes etiquetas deben colocarse exclusivamente dentro de la cabecera (<head>) de nuestro archivo HTML?",
    options: [
      { text: "<title> para definir el título en la pestaña del navegador.", val: "a" },
      { text: "<meta charset='UTF-8'> para la codificación correcta de acentos.", val: "b" },
      { text: "<img> para mostrar el logo principal del sitio web.", val: "c" },
      { text: "<link rel='stylesheet'> para vincular los estilos CSS externos.", val: "d" }
    ],
    correct: ["a", "b", "d"],
    explanation: "El <head> contiene metadatos y vínculos de configuración (title, meta, link). Elementos visuales del cuerpo del documento como <img> deben ir dentro del <body>."
  },
  // SECTOR 3: Jerarquía y Enlaces
  {
    id: 9,
    sector: 3,
    sectorName: "Jerarquía y Enlaces",
    type: "multiple-choice",
    question: "Si queremos crear un enlace que, al hacer clic sobre él, abra la página web de Google en una pestaña totalmente nueva del navegador, ¿cuáles atributos debemos usar en la etiqueta <a>?",
    options: [
      { text: "href='google.com' y target='new'", val: "a" },
      { text: "src='https://google.com' y target='_blank'", val: "b" },
      { text: "href='https://google.com' y target='_blank'", val: "c" },
      { text: "href='#google' y target='_self'", val: "d" }
    ],
    correct: "c",
    explanation: "El atributo 'href' define la URL destino (que debe incluir el protocolo como https://). El atributo target='_blank' le indica al navegador que cargue el enlace en una pestaña nueva."
  },
  {
    id: 10,
    sector: 3,
    sectorName: "Jerarquía y Enlaces",
    type: "multiple-response",
    question: "Con respecto a los encabezados (<h1> a <h6>), selecciona las buenas prácticas y reglas de marcado correctas:",
    options: [
      { text: "Lo recomendado es tener un único <h1> por página, el cual represente el título principal.", val: "a" },
      { text: "Deben usarse de forma jerárquica y ordenada (ej. un <h2> para subtítulos y <h3> para apartados internos).", val: "b" },
      { text: "Debemos elegir la etiqueta de encabezado basándonos únicamente en qué tan grande queremos que se vea el texto.", val: "c" },
      { text: "Ayudan a los buscadores y lectores de pantalla a entender la estructura jerárquica de la información.", val: "d" }
    ],
    correct: ["a", "b", "d"],
    explanation: "Los encabezados estructuran la lectura. Se debe seguir una escala lógica (h1, h2, h3) sin saltar niveles. No deben usarse solo por diseño visual, para eso se usa CSS."
  },
  {
    id: 11,
    sector: 3,
    sectorName: "Jerarquía y Enlaces",
    type: "matching",
    question: "Empareja cada tipo de lista con su estructura o elemento correspondiente en HTML:",
    pairs: [
      { source: "Lista Desordenada", target: "Se crea con <ul> y representa ítems con viñetas básicas." },
      { source: "Lista Ordenada", target: "Se crea con <ol> y representa pasos secuenciales numerados." },
      { source: "Ítem de Lista", target: "Es el elemento <li> que va dentro de un <ul> o <ol>." },
      { source: "Lista de Descripción", target: "Se crea con <dl> e incluye términos y descripciones." }
    ],
    explanation: "Las listas desordenadas (ul) y ordenadas (ol) alojan únicamente elementos de lista (li). Las de descripción (dl) contienen dt y dd."
  },
  {
    id: 12,
    sector: 3,
    sectorName: "Jerarquía y Enlaces",
    type: "code-fixer",
    question: "El validador de código muestra un error de jerarquía porque una lista no está correctamente anidada. Identifica el error en este menú y selecciona cómo corregirlo:",
    code: `<ul>\n  <li>Productos</li>\n  <ul>\n    <li>Zapatillas</li>\n    <li>Gorras</li>\n  </ul>\n</ul>`,
    options: [
      { text: "La lista <ul> interna debe estar metida dentro del elemento <li>Productos</li> antes de cerrarlo.", val: "a" },
      { text: "Se debe cambiar la etiqueta <li> por una etiqueta de enlace <a>.", val: "b" },
      { text: "El contenedor exterior debe ser un elemento <ol> obligatoriamente.", val: "c" },
      { text: "Falta agregar la etiqueta semántica <nav> al inicio del bloque de código.", val: "d" }
    ],
    correct: "a",
    explanation: "Los únicos hijos permitidos dentro de un <ul> son los <li>. Si deseas anidar una sublista, esta debe colocarse dentro de un <li> del menú superior."
  },
  // SECTOR 4: Multimedia y Maquetación
  {
    id: 13,
    sector: 4,
    sectorName: "Multimedia y Layout",
    type: "multiple-choice",
    question: "¿Cuál es la función del atributo 'alt' en la etiqueta <img> y por qué es una buena práctica incluirlo siempre?",
    options: [
      { text: "Define el tamaño físico de la imagen en píxeles.", val: "a" },
      { text: "Convierte el formato de la imagen a uno moderno como WebP automáticamente.", val: "b" },
      { text: "Muestra un texto alternativo si la imagen no carga y ayuda a que los lectores de pantalla describan la imagen a personas no videntes.", val: "c" },
      { text: "Enlaza la imagen a otra sección interna de la página actual.", val: "d" }
    ],
    correct: "c",
    explanation: "El atributo 'alt' (texto alternativo) es fundamental para la accesibilidad y el SEO, describiendo el contenido visual cuando la imagen no está disponible o para asistentes de voz."
  },
  {
    id: 14,
    sector: 4,
    sectorName: "Multimedia y Layout",
    type: "multiple-response",
    question: "Deseas insertar un video local en tu página web. ¿Cuáles atributos nativos de la etiqueta <video> permiten que tenga controles, se reproduzca silenciado y lo haga en bucle?",
    options: [
      { text: "controls para desplegar el play, pausa y volumen.", val: "a" },
      { text: "muted para silenciar el video por defecto.", val: "b" },
      { text: "loop para reproducirlo de forma indefinida.", val: "c" },
      { text: "src='youtube.com/embed/...' para vincular videos externos.", val: "d" }
    ],
    correct: ["a", "b", "c"],
    explanation: "Los atributos 'controls', 'muted' y 'loop' son booleanos nativos de HTML5 para controlar la reproducción multimedia en el cliente sin depender de librerías."
  },
  {
    id: 15,
    sector: 4,
    sectorName: "Multimedia y Layout",
    type: "code-fixer",
    question: "Insertaste un mapa de ubicación utilizando un <iframe>, pero el validador te pide agregar un atributo para mejorar la accesibilidad de ese elemento externo. ¿Cuál es?",
    code: `<iframe src="https://maps.google.com/..." width="400" height="300"></iframe>`,
    options: [
      { text: "El atributo 'title' (ej. title='Mapa con la dirección física de la oficina principal').", val: "a" },
      { text: "El atributo 'alt' con la descripción textual del mapa.", val: "b" },
      { text: "El atributo 'controls' para poder interactuar con el mapa mediante zoom.", val: "c" },
      { text: "El atributo 'href' apuntando a la dirección física del mapa.", val: "d" }
    ],
    correct: "a",
    explanation: "Los elementos iframe cargan contenido externo en un marco independiente. Requieren un atributo 'title' descriptivo para que los lectores de pantalla informen al usuario qué se muestra allí."
  },
  {
    id: 16,
    sector: 4,
    sectorName: "Multimedia y Layout",
    type: "multiple-choice",
    question: "¿Para qué sirve principalmente la etiqueta genérica <div> en la maquetación web moderna?",
    options: [
      { text: "Para insertar imágenes y textos con estilos por defecto.", val: "a" },
      { text: "Como un contenedor neutral sin significado semántico, utilizado para agrupar elementos a los que les aplicaremos estilos con CSS.", val: "b" },
      { text: "Para crear menús de navegación dinámicos automáticamente.", val: "c" },
      { text: "Para alojar información de metadatos de configuración que solo lee el navegador.", val: "d" }
    ],
    correct: "b",
    explanation: "La etiqueta <div> no aporta semántica. Es un contenedor en bloque multipropósito utilizado para agrupar partes de la web y estructurarlas usando CSS (Grid o Flexbox)."
  },
  // SECTOR 5: Tablas y Formularios
  {
    id: 17,
    sector: 5,
    sectorName: "Tablas y Formularios",
    type: "multiple-choice",
    question: "En una tabla HTML, si deseas que una celda (<td> o <th>) se extienda horizontalmente para ocupar el espacio de 3 columnas, ¿qué atributo debes aplicar?",
    options: [
      { text: "rowspan='3'", val: "a" },
      { text: "colspan='3'", val: "b" },
      { text: "headers='3'", val: "c" },
      { text: "width='300px'", val: "d" }
    ],
    correct: "b",
    explanation: "El atributo 'colspan' (column span) expande la celda horizontalmente a lo largo de múltiples columnas. 'rowspan' expande la celda verticalmente."
  },
  {
    id: 18,
    sector: 5,
    sectorName: "Tablas y Formularios",
    type: "code-fixer",
    question: "En el siguiente código de formulario, si el usuario hace clic sobre el texto 'Correo:', el navegador no activa la caja de entrada de texto. ¿Qué cambio soluciona este problema?",
    code: `<label>Correo:</label>\n<input type="email" name="user-email">`,
    options: [
      { text: "Asignar un 'id' único al input (ej. id='correo') y añadir el atributo 'for=\"correo\"' a la etiqueta <label>.", val: "a" },
      { text: "La etiqueta <label> debe ir después del elemento <input>.", val: "b" },
      { text: "Se debe cambiar el tipo de entrada a type='text' obligatoriamente.", val: "c" },
      { text: "Encerrar todos los elementos dentro de una etiqueta de tabla <table>.", val: "d" }
    ],
    correct: "a",
    explanation: "Vincular el label con el input mediante 'for' e 'id' asocia lógicamente los elementos. Al hacer clic en el texto del label, el cursor se posicionará en el input automáticamente."
  },
  {
    id: 19,
    sector: 5,
    sectorName: "Tablas y Formularios",
    type: "multiple-response",
    question: "Queremos que en un formulario de registro el campo de 'Contraseña' sea obligatorio, oculte los caracteres con puntos mientras se escribe, y tenga al menos 8 caracteres. ¿Qué atributos del <input> debemos configurar?",
    options: [
      { text: "type='password' para ocultar los caracteres.", val: "a" },
      { text: "required para que sea obligatorio.", val: "b" },
      { text: "minlength='8' para exigir un mínimo de 8 caracteres.", val: "c" },
      { text: "placeholder='Contraseña' como requisito de seguridad.", val: "d" }
    ],
    correct: ["a", "b", "c"],
    explanation: "type='password' enmascara el texto, required valida que no se envíe vacío, y minlength='8' valida la longitud mínima en el navegador de manera nativa."
  },
  {
    id: 20,
    sector: 5,
    sectorName: "Tablas y Formularios",
    type: "matching",
    question: "Empareja cada etiqueta de formulario con su función correspondiente en HTML:",
    pairs: [
      { source: "<form>", target: "Contenedor principal con atributos action y method." },
      { source: "<select>", target: "Crea un menú desplegable con opciones." },
      { source: "<textarea>", target: "Permite ingresar textos largos de varias líneas." },
      { source: "<input>", target: "Campo de entrada de datos (texto, casilla, etc.)." }
    ],
    explanation: "Cada etiqueta del formulario tiene un rol definido. <form> gestiona el envío, mientras select, textarea e input recopilan las entradas del usuario."
  }
];

// Estado del Juego
let gameState = {
  studentName: "",
  currentQuestionIndex: 0,
  scoreXP: 0,
  shield: 100,
  startTime: null,
  elapsedTimeSeconds: 0,
  timerInterval: null,
  sectorProgress: { 1: "active", 2: "locked", 3: "locked", 4: "locked", 5: "locked" },
  answersLog: [] // Registro de respuestas del alumno
};

// Inicialización de la Aplicación al Cargar
document.addEventListener("DOMContentLoaded", () => {
  renderSetupScreen();
});

// Renderizar Pantalla de Registro Inicial
function renderSetupScreen() {
  const container = document.getElementById("game-container");
  container.innerHTML = `
    <div class="setup-screen">
      <h2>INICIALIZACIÓN DE EVALUACIÓN</h2>
      <p>Bienvenido a la consola evaluativa de Desarrollo Web. Este entorno pondrá a prueba tus conocimientos en HTML5 (Sesiones 1 a 10) mediante parches de código y preguntas de nivel técnico intermedio.</p>
      
      <div class="input-cyber-group">
        <label for="student-name-input">Nombre del Estudiante</label>
        <input type="text" id="student-name-input" class="input-cyber" placeholder="Ingresa tu nombre completo" autocomplete="off">
      </div>
      
      <button class="btn-cyber" id="start-quest-btn">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"/></svg>
        Conectar Interfaz
      </button>
    </div>
  `;

  document.getElementById("start-quest-btn").addEventListener("click", startQuiz);
  
  // Soporte para tecla Enter
  document.getElementById("student-name-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") startQuiz();
  });
}

// Iniciar el Juego
function startQuiz() {
  const nameInput = document.getElementById("student-name-input");
  const name = nameInput.value.trim();
  
  if (!name) {
    alert("Por favor, ingresa tu nombre para iniciar la evaluación.");
    nameInput.focus();
    return;
  }
  
  gameState.studentName = name;
  gameState.startTime = new Date();
  gameState.currentQuestionIndex = 0;
  gameState.scoreXP = 0;
  gameState.shield = 100;
  gameState.sectorProgress = { 1: "active", 2: "locked", 3: "locked", 4: "locked", 5: "locked" };
  gameState.answersLog = [];
  
  // Iniciar Cronómetro
  startTimer();
  
  // Cambiar a la vista del Quiz
  renderQuizLayout();
}

// Control del Tiempo
function startTimer() {
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);
  gameState.timerInterval = setInterval(() => {
    const now = new Date();
    gameState.elapsedTimeSeconds = Math.floor((now - gameState.startTime) / 1000);
    updateStatsDisplay();
  }, 1000);
}

// Formatear Tiempo (MM:SS)
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Actualizar barra de estado superior
function updateStatsDisplay() {
  const xpVal = document.getElementById("xp-display-val");
  const rankVal = document.getElementById("rank-display-val");
  const timeVal = document.getElementById("time-display-val");
  
  if (xpVal) xpVal.textContent = `${gameState.scoreXP} XP`;
  if (rankVal) rankVal.textContent = getRankName(gameState.scoreXP);
  if (timeVal) timeVal.textContent = formatTime(gameState.elapsedTimeSeconds);
}

// Rango del alumno según sus puntos de experiencia (XP)
function getRankName(xp) {
  if (xp < 600) return "Syntax Squire";
  if (xp < 1200) return "Semantic Squire";
  if (xp < 1600) return "DOM Explorer";
  if (xp < 2000) return "Layout Commander";
  return "Master Compiler";
}

// Renderizar la estructura general del juego (Sidebar + Pantalla de preguntas)
function renderQuizLayout() {
  const container = document.getElementById("game-container");
  container.innerHTML = `
    <div class="quest-layout">
      <!-- Sidebar de Navegación de Sectores -->
      <aside class="cyber-sidebar">
        <div class="terminal-card">
          <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--primary-neon); letter-spacing: 0.05em; text-transform: uppercase;">Sectores del Sistema</h4>
          <div class="sector-list" id="sector-sidebar-list">
            <!-- Cargado dinámicamente -->
          </div>
        </div>
        
        <div class="terminal-card" style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
          <div style="color: var(--primary-neon); margin-bottom: 5px;">ESTUDIANTE ACTIVO:</div>
          <div style="font-size: 0.9rem; color: var(--text-primary); font-weight: bold; margin-bottom: 12px;">${gameState.studentName}</div>
          <div>ESTADO: Conectado a Servidor</div>
          <div style="margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 10px;">
            <span style="color: var(--secondary-amber);">●</span> Reboot automático al fallar el sector.
          </div>
        </div>
      </aside>
      
      <!-- Panel de Juego Principal -->
      <main class="game-panel">
        <!-- Indicador de Blindaje / Shield -->
        <div class="shield-bar-container">
          <div class="shield-label">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
            ESCUDO: <span id="shield-percent-text">100%</span>
          </div>
          <div class="shield-track">
            <div class="shield-fill" id="shield-fill-bar" style="width: 100%;"></div>
          </div>
        </div>
        
        <!-- Terminal de Preguntas -->
        <div class="question-terminal" id="question-terminal-content">
          <!-- Cargado dinámicamente -->
        </div>
      </main>
    </div>
  `;
  
  renderSectorSidebar();
  renderCurrentQuestion();
  applyShieldDamage();
}

// Renderizar la barra lateral con el estado de cada Sector
function renderSectorSidebar() {
  const sidebar = document.getElementById("sector-sidebar-list");
  if (!sidebar) return;
  
  const sectores = [
    { id: 1, name: "Entorno y Arquitectura" },
    { id: 2, name: "Estructura Semántica" },
    { id: 3, name: "Jerarquía y Enlaces" },
    { id: 4, name: "Multimedia y Layout" },
    { id: 5, name: "Tablas y Formularios" }
  ];
  
  sidebar.innerHTML = sectores.map(sec => {
    const status = gameState.sectorProgress[sec.id];
    let statusLabel = "BLOQUEADO";
    let statusClass = "locked";
    
    if (status === "active") {
      statusLabel = "EN PROCESO";
      statusClass = "active unlocked";
    } else if (status === "completed") {
      statusLabel = "COMPLETADO";
      statusClass = "completed unlocked";
    }
    
    return `
      <div class="sector-node ${statusClass}">
        <div class="sector-meta">
          <span class="sector-tag">Sector ${sec.id}</span>
          <span class="sector-status">${statusLabel}</span>
        </div>
        <div class="sector-name">${sec.name}</div>
      </div>
    `;
  }).join("");
}

// Renderizar la pregunta activa en pantalla
function renderCurrentQuestion() {
  const terminal = document.getElementById("question-terminal-content");
  if (!terminal) return;
  
  const q = BANCO_PREGUNTAS[gameState.currentQuestionIndex];
  
  // Encabezado de la pregunta
  let html = `
    <div class="quest-header">
      <span class="quest-num">SISTEMA: PREGUNTA ${gameState.currentQuestionIndex + 1} DE ${BANCO_PREGUNTAS.length}</span>
      <span class="quest-type">${getQuestionTypeName(q.type)}</span>
    </div>
    <div class="quest-body">
      <h3>${escapeHTML(q.question).replace(/\n/g, "<br>")}</h3>
    `;
  
  // Renderizar contenido según tipo de pregunta
  if (q.type === "code-fixer" && q.code) {
    html += `
      <div class="code-box">
        <code>${escapeHTML(q.code)}</code>
      </div>
    `;
  }
  
  if (q.type === "multiple-choice" || q.type === "code-fixer") {
    html += `
      <div class="options-grid" id="question-options">
        ${q.options.map(opt => `
          <div class="option-card" data-val="${opt.val}">
            <div class="option-marker">${opt.val.toUpperCase()}</div>
            <div class="option-text">${escapeHTML(opt.text)}</div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (q.type === "multiple-response") {
    html += `
      <div class="options-grid" id="question-options">
        ${q.options.map(opt => `
          <div class="option-card" data-val="${opt.val}">
            <div class="option-marker">
              <input type="checkbox" style="display:none;" id="chk-${opt.val}">
              <span>[ ]</span>
            </div>
            <div class="option-text">${escapeHTML(opt.text)}</div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (q.type === "matching") {
    // Para emparejamiento, usaremos un sistema de select dinámico por cada opción
    // de la izquierda para emparejar con la derecha. Esto asegura una respuesta clara y responsive.
    const shuffleTargets = [...q.pairs].sort(() => Math.random() - 0.5);
    
    html += `
      <div style="margin-bottom: 24px;">
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">Selecciona para cada elemento de la izquierda la opción correspondiente de la derecha:</p>
        <div class="matching-list">
          ${q.pairs.map((p, i) => `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 12px; align-items: center;">
              <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.08); padding: 12px 15px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.9rem; color: var(--primary-neon);">
                ${escapeHTML(p.source)}
              </div>
              <div>
                <select class="input-cyber match-selector" data-source="${escapeHTML(p.source)}" style="padding: 10px 14px; font-size: 0.85rem; border-color: rgba(255,255,255,0.1);">
                  <option value="">-- Seleccionar Pareja --</option>
                  ${shuffleTargets.map((t, idx) => `
                    <option value="${escapeHTML(t.target)}">${escapeHTML(t.target)}</option>
                  `).join("")}
                </select>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  
  html += `
    </div>
    <div class="action-area">
      <div class="feedback-msg" id="question-feedback"></div>
      <button class="btn-cyber" id="submit-answer-btn">Validar Parche</button>
    </div>
  `;
  
  terminal.innerHTML = html;
  
  // Agregar Eventos Interactivos
  setupQuestionInteractivity(q);
}

// Configurar los controladores de eventos según el tipo de pregunta
function setupQuestionInteractivity(question) {
  const optionsGrid = document.getElementById("question-options");
  const submitBtn = document.getElementById("submit-answer-btn");
  
  if (question.type === "multiple-choice" || question.type === "code-fixer") {
    const cards = optionsGrid.querySelectorAll(".option-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
      });
    });
    
    submitBtn.onclick = () => validateMultipleChoice(question);
  } else if (question.type === "multiple-response") {
    const cards = optionsGrid.querySelectorAll(".option-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const checkbox = card.querySelector("input[type='checkbox']");
        const markerSpan = card.querySelector(".option-marker span");
        
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          card.classList.add("selected");
          markerSpan.textContent = "[X]";
        } else {
          card.classList.remove("selected");
          markerSpan.textContent = "[ ]";
        }
      });
    });
    
    submitBtn.onclick = () => validateMultipleResponse(question);
  } else if (question.type === "matching") {
    submitBtn.onclick = () => validateMatching(question);
  }
}

// Obtener nombre legible del tipo de pregunta
function getQuestionTypeName(type) {
  switch (type) {
    case "multiple-choice": return "Opción Múltiple";
    case "multiple-response": return "Respuesta Múltiple";
    case "code-fixer": return "Depuración de Código";
    case "matching": return "Asociación Semántica";
    default: return "Cuestionario";
  }
}

// Validar Pregunta de Opción Múltiple o Code Fixer
function validateMultipleChoice(q) {
  const selectedCard = document.querySelector("#question-options .option-card.selected");
  if (!selectedCard) {
    alert("Por favor, selecciona una opción antes de continuar.");
    return;
  }
  
  const val = selectedCard.getAttribute("data-val");
  const isCorrect = (val === q.correct);
  
  processAnswerResult(isCorrect, val, q.correct, q.explanation);
}

// Validar Pregunta de Respuesta Múltiple
function validateMultipleResponse(q) {
  const selectedCards = document.querySelectorAll("#question-options .option-card.selected");
  if (selectedCards.length === 0) {
    alert("Por favor, selecciona al menos una opción.");
    return;
  }
  
  const userAnswers = Array.from(selectedCards).map(card => card.getAttribute("data-val")).sort();
  const correctAnswers = [...q.correct].sort();
  
  // Verificar si coinciden exactamente
  const isCorrect = (userAnswers.length === correctAnswers.length) && 
                    userAnswers.every((val, index) => val === correctAnswers[index]);
  
  // Marcar visualmente
  const cards = document.querySelectorAll("#question-options .option-card");
  cards.forEach(card => {
    const val = card.getAttribute("data-val");
    if (correctAnswers.includes(val)) {
      card.classList.add("correct");
    } else if (card.classList.contains("selected")) {
      card.classList.add("incorrect");
    }
  });
  
  processAnswerResult(isCorrect, userAnswers, correctAnswers, q.explanation);
}

// Validar Pregunta de Emparejamiento
function validateMatching(q) {
  const selectors = document.querySelectorAll(".match-selector");
  let allAnswered = true;
  let matchesCount = 0;
  
  selectors.forEach(sel => {
    if (!sel.value) allAnswered = false;
  });
  
  if (!allAnswered) {
    alert("Por favor, empareja todos los conceptos antes de validar.");
    return;
  }
  
  const userPairs = [];
  let isCorrect = true;
  
  selectors.forEach(sel => {
    const src = sel.getAttribute("data-source");
    const targetVal = sel.value;
    
    // Buscar la pareja correcta original en el banco de datos
    const correctPair = q.pairs.find(p => p.source === src);
    userPairs.push({ source: src, selectedTarget: targetVal, correctTarget: correctPair.target });
    
    if (correctPair.target !== targetVal) {
      isCorrect = false;
      sel.style.borderColor = "var(--error-neon)";
      sel.style.boxShadow = "var(--shadow-error)";
    } else {
      sel.style.borderColor = "#10b981";
      sel.style.boxShadow = "0 0 10px rgba(16, 185, 129, 0.2)";
    }
  });
  
  processAnswerResult(isCorrect, userPairs, q.pairs, q.explanation);
}

// Procesar el Resultado de la Respuesta (Correcta / Incorrecta)
function processAnswerResult(isCorrect, userAnswer, correctAnswer, explanation) {
  const feedback = document.getElementById("question-feedback");
  const submitBtn = document.getElementById("submit-answer-btn");
  
  // Desactivar el botón para evitar doble clic
  submitBtn.disabled = true;
  
  // Guardar log
  gameState.answersLog.push({
    questionIndex: gameState.currentQuestionIndex,
    questionText: BANCO_PREGUNTAS[gameState.currentQuestionIndex].question,
    userAnswer: userAnswer,
    correctAnswer: correctAnswer,
    isCorrect: isCorrect
  });
  
  if (isCorrect) {
    gameState.scoreXP += 100;
    feedback.innerHTML = `<span class="feedback-msg correct">✓ COMPILACIÓN CORRECTA (+100 XP)</span>`;
    
    // Mostrar explicación resumida en la tarjeta
    showExplanationCard(explanation, true);
  } else {
    // Daño al escudo
    gameState.shield -= 20;
    if (gameState.shield < 0) gameState.shield = 0;
    
    // Animación de sacudida y daño en barra
    applyShieldDamage();
    
    feedback.innerHTML = `<span class="feedback-msg incorrect">✗ ANOMALÍA DETECTADA (-20% ESCUDO)</span>`;
    
    showExplanationCard(explanation, false);
  }
}

// Aplicar daño visual en la interfaz del escudo
function applyShieldDamage() {
  const bar = document.getElementById("shield-fill-bar");
  const text = document.getElementById("shield-percent-text");
  
  if (bar) {
    bar.style.width = `${gameState.shield}%`;
    if (gameState.shield <= 40) {
      bar.style.background = "var(--error-neon)";
    }
  }
  if (text) text.textContent = `${gameState.shield}%`;
  
  // Animación de vibración de la terminal
  const terminal = document.getElementById("question-terminal-content");
  if (terminal) {
    terminal.style.animation = "shake 0.3s ease-in-out";
    setTimeout(() => {
      terminal.style.animation = "";
    }, 300);
  }
}

// Mostrar Explicación e Interfaz de Continuación
function showExplanationCard(explanation, isCorrect) {
  const terminal = document.getElementById("question-terminal-content");
  
  // Crear una tarjeta de explicación flotante o debajo
  const expDiv = document.createElement("div");
  expDiv.style.marginTop = "20px";
  expDiv.style.padding = "15px";
  expDiv.style.borderRadius = "var(--radius-md)";
  expDiv.style.background = "rgba(0, 0, 0, 0.4)";
  expDiv.style.borderLeft = isCorrect ? "4px solid #10b981" : "4px solid var(--error-neon)";
  expDiv.style.fontSize = "0.9rem";
  expDiv.style.lineHeight = "1.5";
  expDiv.innerHTML = `
    <strong style="color: ${isCorrect ? '#10b981' : 'var(--error-neon)'}; font-family: var(--font-mono);">
      [DIAGNÓSTICO DEL COMPILADOR]
    </strong><br>
    <span style="color: var(--text-primary);">${explanation}</span>
  `;
  
  // Insertar antes del action-area
  const actionArea = terminal.querySelector(".action-area");
  terminal.insertBefore(expDiv, actionArea);
  
  // Cambiar botón a 'Siguiente Pregunta'
  const submitBtn = document.getElementById("submit-answer-btn");
  submitBtn.disabled = false;
  submitBtn.textContent = "Continuar";
  
  submitBtn.onclick = () => {
    // Verificar si el escudo llegó a 0
    if (gameState.shield <= 0) {
      handleRebootSector();
    } else {
      advanceQuiz();
    }
  };
}

// Manejar el sobrecalentamiento y reinicio del sector
function handleRebootSector() {
  const terminal = document.getElementById("question-terminal-content");
  const q = BANCO_PREGUNTAS[gameState.currentQuestionIndex];
  const activeSector = q.sector;
  
  // Penalización leve de XP
  const xpLost = Math.min(gameState.scoreXP, 100);
  gameState.scoreXP -= xpLost;
  
  // Restaurar escudo
  gameState.shield = 100;
  
  // Buscar el índice de la primera pregunta del sector activo
  const firstIndexInSector = BANCO_PREGUNTAS.findIndex(question => question.sector === activeSector);
  gameState.currentQuestionIndex = firstIndexInSector;
  
  // Filtrar logs de respuestas borrando las del sector que falló
  gameState.answersLog = gameState.answersLog.filter(log => BANCO_PREGUNTAS[log.questionIndex].sector !== activeSector);
  
  // Mensaje en terminal
  terminal.innerHTML = `
    <div style="text-align: center; padding: 40px 20px; animation: slideUp 0.4s;">
      <div style="font-size: 3rem; color: var(--error-neon); margin-bottom: 20px; animation: pulseGlow 1.5s infinite;">⚠️</div>
      <h2 style="font-family: var(--font-mono); color: var(--error-neon); margin-bottom: 15px; text-shadow: 0 0 10px var(--error-neon-glow);">SISTEMA SOBRECALENTADO</h2>
      <p style="color: var(--text-muted); line-height: 1.6; max-width: 500px; margin: 0 auto 30px;">
        Tu escudo de protección ha caído al 0% debido a incompatibilidades críticas en el Sector ${activeSector} (${q.sectorName}). El sistema debe reiniciarse para evitar pérdida de datos estructurales.
      </p>
      <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--secondary-amber); margin-bottom: 30px;">
        PENALIZACIÓN APLICADA: -${xpLost} XP | ESCUDOS REESTABLECIDOS A 100%
      </div>
      <button class="btn-cyber" id="reboot-action-btn">Reconfigurar Sector ${activeSector}</button>
    </div>
  `;
  
  document.getElementById("reboot-action-btn").onclick = () => {
    updateStatsDisplay();
    renderQuizLayout();
  };
}

// Avanzar al siguiente paso del cuestionario
function advanceQuiz() {
  const currentQ = BANCO_PREGUNTAS[gameState.currentQuestionIndex];
  const currentSector = currentQ.sector;
  
  // Determinar si es la última pregunta del cuestionario completo
  if (gameState.currentQuestionIndex >= BANCO_PREGUNTAS.length - 1) {
    // Completar el último sector y finalizar
    gameState.sectorProgress[currentSector] = "completed";
    finishEvaluation();
    return;
  }
  
  // Avanzar índice
  gameState.currentQuestionIndex++;
  const nextQ = BANCO_PREGUNTAS[gameState.currentQuestionIndex];
  const nextSector = nextQ.sector;
  
  // Si cambia de sector, marcar el actual como completado y el siguiente como activo
  if (nextSector !== currentSector) {
    gameState.sectorProgress[currentSector] = "completed";
    gameState.sectorProgress[nextSector] = "active";
    
    // Pantalla intermedia de transición de Sector
    showSectorTransition(currentSector, nextSector);
  } else {
    // Actualizar estadísticas e ir a la siguiente pregunta directa
    updateStatsDisplay();
    renderCurrentQuestion();
  }
}

// Mostrar pantalla de transición al superar un sector
function showSectorTransition(completedSec, nextSec) {
  const terminal = document.getElementById("question-terminal-content");
  
  const sectors = [
    "",
    "Entorno y Arquitectura",
    "Estructura Semántica",
    "Jerarquía y Enlaces",
    "Multimedia y Layout",
    "Tablas y Formularios"
  ];
  
  terminal.innerHTML = `
    <div style="text-align: center; padding: 40px 20px; animation: slideUp 0.4s;">
      <div style="font-size: 3rem; color: var(--secondary-amber); margin-bottom: 20px; text-shadow: 0 0 15px rgba(255, 184, 0, 0.4);">✦</div>
      <h2 style="font-family: var(--font-mono); color: var(--primary-neon); margin-bottom: 15px; text-shadow: 0 0 10px var(--primary-neon-glow);">SECTOR ${completedSec} COMPILADO</h2>
      <p style="color: var(--text-muted); line-height: 1.6; max-width: 500px; margin: 0 auto 30px;">
        Has solucionado con éxito las inconsistencias del <strong>Sector ${completedSec}: ${sectors[completedSec]}</strong>.<br>
        El compilador está listo para habilitar el acceso al siguiente nodo.
      </p>
      <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--secondary-amber); margin-bottom: 30px;">
        Sector Siguiente: Sector ${nextSec} - ${sectors[nextSec]}
      </div>
      <button class="btn-cyber" id="next-sector-btn">Acceder al Sector ${nextSec}</button>
    </div>
  `;
  
  document.getElementById("next-sector-btn").onclick = () => {
    updateStatsDisplay();
    renderQuizLayout();
  };
}

// Finalizar la Evaluación y Renderizar el Reporte Diagnóstico
function finishEvaluation() {
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);
  
  const container = document.getElementById("game-container");
  
  // Calcular métricas
  const totalCorrect = gameState.answersLog.filter(l => l.isCorrect).length;
  const accuracy = Math.round((totalCorrect / BANCO_PREGUNTAS.length) * 100);
  const finalRank = getRankName(gameState.scoreXP);
  
  // Generar firma digital docente
  const secureCode = generateSecureHash(gameState.studentName, gameState.scoreXP, accuracy, gameState.elapsedTimeSeconds);
  
  let html = `
    <div class="report-screen">
      <div class="report-header">
        <h2>REPORTE DIAGNÓSTICO FINAL</h2>
        <p style="color: var(--text-muted); margin-top: 5px;">Evaluación Semántica de Código HTML5 terminada con éxito</p>
      </div>
      
      <div class="badge-showcase">
        <div class="badge-icon">${getBadgeIcon(finalRank)}</div>
        <div class="badge-rank">${finalRank}</div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">Rango asignado al estudiante: ${gameState.studentName}</p>
      </div>
      
      <div class="stats-grid">
        <div class="stat-terminal">
          <span class="stat-label">PUNTAJE XP</span>
          <span class="stat-val">${gameState.scoreXP}</span>
        </div>
        <div class="stat-terminal">
          <span class="stat-label">PRECISIÓN</span>
          <span class="stat-val amber">${accuracy}% (${totalCorrect}/${BANCO_PREGUNTAS.length})</span>
        </div>
        <div class="stat-terminal">
          <span class="stat-label">TIEMPO EMPLEADO</span>
          <span class="stat-val">${formatTime(gameState.elapsedTimeSeconds)}</span>
        </div>
      </div>
      
      <h3 style="font-family: var(--font-mono); font-size: 1rem; color: var(--primary-neon); margin-bottom: 12px; text-transform: uppercase;">Rendimiento por Sector</h3>
      <div class="sec-summary-list">
        ${getSectorSummaryHTML()}
      </div>
      
      <div class="verification-card">
        <div class="verification-title">Firma de Verificación para el Docente</div>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 8px;">Comparte el siguiente código o exporta el JSON de rendimiento con tu docente para validar la nota:</p>
        <div class="verification-code" id="verification-hash-val">${secureCode}</div>
      </div>
      
      <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
        <button class="btn-cyber" id="copy-hash-btn">
          Copiar Firma
        </button>
        <button class="btn-cyber btn-secundario" id="download-json-btn">
          Exportar JSON
        </button>
        <button class="btn-cyber btn-secundario" id="restart-eval-btn">
          Nueva Evaluación
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Agregar eventos a botones del reporte
  document.getElementById("copy-hash-btn").onclick = () => {
    navigator.clipboard.writeText(secureCode)
      .then(() => alert("¡Código de verificación copiado al portapapeles!"))
      .catch(() => alert("Error al copiar. Selecciona el código manualmente."));
  };
  
  document.getElementById("download-json-btn").onclick = () => {
    downloadDiagnosticJSON(accuracy);
  };
  
  document.getElementById("restart-eval-btn").onclick = () => {
    if (confirm("¿Estás seguro de que deseas reiniciar la prueba? Esto borrará el progreso actual.")) {
      renderSetupScreen();
    }
  };
}

// Obtener icono/emoji del Rango
function getBadgeIcon(rank) {
  switch (rank) {
    case "Syntax Squire": return "⚔️";
    case "Semantic Squire": return "🛡️";
    case "DOM Explorer": return "🧭";
    case "Layout Commander": return "🎖️";
    case "Master Compiler": return "👑";
    default: return "👾";
  }
}

// Generar HTML del rendimiento del alumno por cada sector
function getSectorSummaryHTML() {
  const summary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
  // Contabilizar respuestas correctas por sector
  gameState.answersLog.forEach(log => {
    const q = BANCO_PREGUNTAS[log.questionIndex];
    if (log.isCorrect) {
      summary[q.sector]++;
    }
  });
  
  const sectors = [
    { id: 1, name: "Entorno y Arquitectura (Sesiones 1-2)" },
    { id: 2, name: "Estructura Semántica (Sesiones 3-4)" },
    { id: 3, name: "Jerarquía y Enlaces (Sesiones 5-6)" },
    { id: 4, name: "Multimedia y Layout (Sesiones 7-9)" },
    { id: 5, name: "Tablas y Formularios (Sesión 10)" }
  ];
  
  return sectors.map(sec => {
    const correctCount = summary[sec.id];
    let evalClass = "failed";
    
    if (correctCount >= 3) {
      evalClass = "excellent";
    } else if (correctCount >= 2) {
      evalClass = "warning";
    }
    
    return `
      <div class="sec-summary-row">
        <span class="sec-summary-name">${sec.name}</span>
        <span class="sec-summary-score ${evalClass}">${correctCount} / 4 correctas</span>
      </div>
    `;
  }).join("");
}

// Generar Firma Encriptada Docente (Simulando hash criptográfico ligero)
function generateSecureHash(name, score, accuracy, time) {
  const rawString = `${name}|${score}|${accuracy}%|${time}s|IDAT-HTML5`;
  // Codificación Base64 simple combinada con rotación
  const base64 = btoa(unescape(encodeURIComponent(rawString)));
  return `VERIFIED-${base64.substring(0, 10)}-${base64.substring(10, 20).split("").reverse().join("")}-${base64.substring(20)}`;
}

// Descargar archivo de reporte JSON
function downloadDiagnosticJSON(accuracy) {
  const diagnosticData = {
    institucion: "IDAT 2026",
    curso: "Desarrollo Web: HTML",
    fecha: new Date().toLocaleString(),
    estudiante: gameState.studentName,
    XP_obtenidos: gameState.scoreXP,
    precision: `${accuracy}%`,
    tiempo_segundos: gameState.elapsedTimeSeconds,
    rango: getRankName(gameState.scoreXP),
    registro_respuestas: gameState.answersLog.map(log => ({
      pregunta: log.questionIndex + 1,
      correcta: log.isCorrect
    }))
  };
  
  const blob = new Blob([JSON.stringify(diagnosticData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `reporte_html_${gameState.studentName.toLowerCase().replace(/\s+/g, "_")}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Escapar etiquetas HTML para evitar renderizado no deseado en texto
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
