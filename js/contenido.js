/* =====================================================================
   CONTENIDO DEL SITIO
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar tu sitio.
   - Cambia los textos entre comillas.
   - Para agregar un proyecto, copia un bloque { ... } dentro de "proyectos"
     y pégalo separado por una coma.
   - Las imágenes van en la carpeta /img (ej: "img/proyectos/mi-proyecto.jpg").
     Si dejas "imagen" vacío, se mostrará un recuadro con las iniciales.
   Guarda el archivo y recarga el navegador (F5) para ver los cambios.
   ===================================================================== */

window.CONTENIDO = {

  perfil: {
    nombre: "Yuri Josué Hernández",
    titulo: "Técnico en Soporte IT · Estudiante de Ingeniería en Sistemas",
    lema: "Mantengo la tecnología de las empresas funcionando: soporte, infraestructura, inventario de equipos y datos al servicio del negocio.",
    ubicacion: "Guatemala",
    foto: "img/perfil.jpg",
    cv: "cv/CV-Yuri-Hernandez.pdf",
  },

  sobreMi: [
    "Soy técnico en Informática y estudiante de Ingeniería en Sistemas de la Información en la Universidad Mariano Gálvez. Desde 2018 he estado a cargo del área de informática en distintas empresas y hoy formo parte del Departamento de IT de DIVECO, S.A.",
    "Me encargo del mantenimiento preventivo y correctivo de equipos de cómputo, del control del inventario a nivel regional y del soporte a usuarios, tanto en la planta central como de forma remota en otros países.",
    "Me considero una persona honesta, confiable y respetuosa. Me gusta resolver problemas, ayudar a los demás y trabajar en equipo hacia un mismo objetivo."
  ],

  // Cifras que aparecen bajo los botones de la portada
  heroCifras: [
    { valor: "2018", etiqueta: "En tecnología desde" },
    { valor: "3",    etiqueta: "Empresas atendidas" },
    { valor: "2",    etiqueta: "Sistemas propios" },
  ],

  cifras: [
    { valor: "2018", etiqueta: "Trabajando en tecnología desde" },
    { valor: "3",    etiqueta: "Empresas atendidas como responsable de IT" },
    { valor: "9.º",  etiqueta: "Semestre de Ingeniería en Sistemas" },
  ],

  experiencia: [
    {
      puesto: "Técnico en Soporte IT",
      empresa: "DIVECO, S.A.",
      periodo: "Feb 2024 — Actualidad",
      descripcion: "Soporte técnico y gestión de equipos para la planta central y otros países de la región.",
      logros: [
        "Mantenimiento preventivo y correctivo de equipos de cómputo.",
        "Soporte técnico presencial y remoto a usuarios.",
        "Control de inventario de equipos de cómputo, celulares y periféricos a nivel regional.",
        "Instalación y configuración de conexión a mandantes de SAP; generación de órdenes de compra en SAP.",
        "Instalación de Windows y herramientas de Office; revisión de salas de reuniones.",
      ]
    },
    {
      puesto: "Ejecutivo en Informática",
      empresa: "APS Corredores de Seguros, S.A.",
      periodo: "Abr 2022 — Oct 2023",
      descripcion: "Responsable de soporte, reportería y apoyo digital a las áreas de la empresa.",
      logros: [
        "Mantenimiento de equipos y soporte técnico al personal.",
        "Tableros y reportes en Looker Studio: asistencia del personal, control de tareas, ingresos y cobros del mes.",
        "Campañas de marketing por correo electrónico y Facebook; diseño de publicaciones para redes sociales.",
        "Apoyo a las áreas de cobros y operaciones.",
      ]
    },
    {
      puesto: "Técnico en Informática",
      empresa: "ECA Electricidad, S.A.",
      periodo: "Jul 2018 — May 2021",
      descripcion: "Encargado del área de informática de la empresa.",
      logros: [
        "Instalación de cableado estructurado, puntos de red y telefonía.",
        "Administración de la página web y diseños para redes sociales.",
        "Mantenimiento de equipos, soporte técnico e instalación de Windows y Office.",
        "Control de equipo telefónico corporativo y del registro de entradas y salidas del personal.",
      ]
    },
  ],

  educacion: [
    { titulo: "Ingeniería en Sistemas de la Información", institucion: "Universidad Mariano Gálvez de Guatemala", periodo: "9.º semestre" },
    { titulo: "Bachiller en Ciencias y Letras", institucion: "Colegio Brown's", periodo: "2008 — 2009" },
  ],

  certificaciones: [
    "Programa Oracle Next Education (ONE) — Back End, Oracle + Alura Latam (2023)",
    "Aprende Claude desde cero — NETZUN (2026)",
    "Conceptos básicos de redes — Cisco Networking Academy (en curso)",
    "Introducción a Ciberseguridad — Cisco Networking Academy (en curso)",
    "Introducción a la nube 101 — AWS Educate (en curso)",
    "Introducción a la consola de administración de AWS — AWS Educate",
  ],

  habilidades: [
    { categoria: "Soporte e infraestructura", items: ["Soporte técnico", "Soporte remoto", "Mantenimiento de equipos", "Windows", "Microsoft Office", "Cableado estructurado", "Redes y telefonía"] },
    { categoria: "Gestión y sistemas",        items: ["SAP (órdenes de compra)", "Conexión a mandantes SAP", "Inventario de equipos", "Looker Studio"] },
    { categoria: "Desarrollo",                items: ["React", "Next.js", "TypeScript / JavaScript", "Supabase / PostgreSQL", "MySQL / Prisma", "PowerShell", "Java (intermedio)", "C++ (intermedio)"] },
    { categoria: "Automatización e IA",       items: ["Google Gemini API", "Power Automate", "Microsoft Teams", "Freshservice API", "GitHub Actions", "Vercel"] },
    { categoria: "Marketing digital",         items: ["Diseño para redes sociales", "Email marketing", "Campañas en Facebook"] },
    { categoria: "Idiomas",                   items: ["Español (nativo)", "Inglés (básico)"] },
  ],

  // "categoria" se usa para los filtros del portafolio.
  // Agrega fotos o capturas en img/proyectos/ y pon la ruta en "imagen".
  // "destacado: true" muestra el proyecto en grande, ocupando todo el ancho.
  // "puntos" es una lista opcional de características o logros.
  proyectos: [
    {
      titulo: "Sistema de Inventario y Control de Personal (UTS)",
      categoria: "Desarrollo",
      destacado: true,
      descripcion: "Aplicación web que desarrollé para la Unidad de Tecnología de Grupo Diveco. Reúne en un solo lugar el inventario de equipos de cómputo, líneas móviles, impresoras, servidores y suministros, vinculado a cada empleado, y digitaliza las cartas de responsabilidad con firma electrónica.",
      puntos: [
        "Gestiona más de 500 equipos en Guatemala, El Salvador, Nicaragua y Costa Rica, con permisos por rol y por país.",
        "Cartas de responsabilidad con código correlativo y firma a distancia (por correo o con QR desde el celular) o en persona, con el PDF archivado.",
        "Agentes de monitoreo propios para Windows (desplegado por GPO) y macOS, más sincronización nocturna automática con Freshservice.",
        "Módulos de RRHH (solicitud y baja de equipo con ticket automático), visitas técnicas, bodega, depreciación y reportes en Excel.",
        "Integración con Power Automate y Microsoft Teams; app instalable (PWA) con despliegue automático desde GitHub.",
      ],
      imagen: "img/proyectos/inventario-uts.jpg",
      tecnologias: ["React", "Vite", "Supabase (PostgreSQL)", "Vercel Serverless", "PowerShell", "Power Automate", "Freshservice API", "GitHub Actions"],
      enlace: "",
    },
    {
      titulo: "XILO — Asistente virtual con inteligencia artificial",
      categoria: "Inteligencia artificial",
      destacado: true,
      descripcion: "Asistente personal que diseñé y desarrollé para organizar mi trabajo diario de soporte. Conversa en lenguaje natural, convierte notas informales en tareas con fecha y prioridad, y aprende mis preferencias con el uso.",
      puntos: [
        "Usa Google Gemini para extraer tareas, horarios y prioridades de mensajes en texto libre, y genera documentos Word, Excel y PDF desde el chat.",
        "Junta en un solo panel los tickets de Freshservice, los correos de Outlook y los chats de Teams (vía Power Automate).",
        "Rutina proactiva: resumen de la mañana, alertas antes de que venza el SLA de un ticket y cierre del día.",
        "Monitorea los servicios críticos de infraestructura (ping y puertos) y mide el rendimiento en la atención de tickets.",
        "Burbuja de escritorio en Windows, siempre visible, con avisos y acceso rápido al chat.",
      ],
      imagen: "img/proyectos/xilo.jpg",
      tecnologias: ["Next.js", "React", "TypeScript", "Google Gemini", "Prisma", "MySQL", "PowerShell", "Power Automate"],
      enlace: "",
    },
    {
      titulo: "Conexión de usuarios a SAP",
      categoria: "Gestión de IT",
      descripcion: "Instalación y configuración de la conexión a los mandantes de SAP para usuarios de la empresa, más la generación de órdenes de compra.",
      imagen: "",
      tecnologias: ["SAP", "Soporte"],
      enlace: "",
    },
    {
      titulo: "Tableros de reportería en Looker Studio",
      categoria: "Datos",
      descripcion: "Tableros para APS Corredores de Seguros con asistencia del personal, control de tareas, ingresos y cobros del mes.",
      imagen: "",
      tecnologias: ["Looker Studio", "Google Sheets"],
      enlace: "",
    },
    {
      titulo: "Cableado estructurado y telefonía",
      categoria: "Infraestructura",
      descripcion: "Instalación de cableado estructurado, puntos de red y telefonía en ECA Electricidad.",
      imagen: "",
      tecnologias: ["Cableado estructurado", "Redes", "Telefonía"],
      enlace: "",
    },
    {
      titulo: "Sitio web y redes sociales corporativas",
      categoria: "Web y marketing",
      descripcion: "Administración de la página web de ECA Electricidad, diseño de publicaciones para redes sociales y campañas por correo y Facebook en APS.",
      imagen: "",
      tecnologias: ["Web", "Diseño gráfico", "Email marketing"],
      enlace: "",
    },
    {
      titulo: "Formación Back End — Oracle Next Education",
      categoria: "Desarrollo",
      descripcion: "Programa de formación como desarrollador Back End. Aquí puedes enlazar los proyectos y retos que vayas completando.",
      imagen: "",
      tecnologias: ["Java", "Back End"],
      enlace: "",              // ej: enlace a tu GitHub
    },
  ],

  // CERTIFICADOS — agrega un bloque por cada certificado.
  //   imagen:     foto/captura del diploma (ej. "certificados/oracle-one.jpg"). Opcional.
  //   archivo:    PDF del certificado (ej. "certificados/oracle-one.pdf"). Opcional.
  //   credencial: enlace para verificar en línea (Credly, Coursera, etc.). Opcional.
  //   estado:     "En curso" para mostrar la etiqueta; deja "" si ya lo terminaste.
  certificados: [
    {
      titulo: "Programa Oracle Next Education (ONE) — Back End",
      institucion: "Oracle + Alura Latam",
      fecha: "Concluido el 4 de octubre de 2023",
      detalle: "6 formaciones · 331 horas de formación",
      estado: "",
      imagen: "certificados/oracle-one-alura.jpg",
      archivo: "certificados/Yuri Josué Hernández Barahona - Programa -.pdf",
      credencial: "",
    },
    {
      titulo: "Aprende Claude desde cero",
      institucion: "NETZUN",
      fecha: "27 de septiembre de 2026",
      detalle: "Charla online · Código de verificación FF1F4FA0",
      estado: "",
      imagen: "certificados/netzun-aprende-claude.jpg",
      archivo: "certificados/YURI_JOSUE_HERNANDEZ_FF1F4FA0.pdf",
      credencial: "",
    },
    {
      titulo: "Introducción a la consola de administración de AWS",
      institucion: "AWS Educate · Amazon Web Services",
      fecha: "Curso completado al 100 %",
      detalle: "Computación en la nube · Fundamentos · 1 hora",
      estado: "",
      imagen: "",
      archivo: "",
      credencial: "",
    },
    {
      titulo: "Conceptos básicos de redes",
      institucion: "Cisco Networking Academy",
      fecha: "Curso a mi propio ritmo",
      detalle: "Trayectoria: Técnico en Redes · Nivel principiante",
      estado: "En curso",
      imagen: "",
      archivo: "",
      credencial: "",
    },
    {
      titulo: "Introducción a Ciberseguridad",
      institucion: "Cisco Networking Academy",
      fecha: "Curso a mi propio ritmo",
      detalle: "Ciberseguridad · Nivel principiante",
      estado: "En curso",
      imagen: "",
      archivo: "",
      credencial: "",
    },
    {
      titulo: "Introducción a la nube 101",
      institucion: "AWS Educate · Amazon Web Services",
      fecha: "Curso a mi propio ritmo",
      detalle: "Computación en la nube · Fundamentos · 3 horas",
      estado: "En curso",
      imagen: "",
      archivo: "",
      credencial: "",
    },
  ],

  contacto: {
    email: "yurijosue20@gmail.com",
    telefono: "+502 3025 7267",
    whatsapp: "50230257267",   // solo números, con código de país; abre un chat de WhatsApp al hacer clic
    whatsappMensaje: "Hola Yuri, vi tu portafolio en yurihernandez.site y me gustaría contactarte.",
    // Formulario: pega aquí el ID de tu formulario de Formspree (ej. "xyzabcde").
    // Mientras esté vacío, el formulario abre la aplicación de correo del visitante.
    formspree: "maeqolkd",
    linkedin: "https://www.linkedin.com/in/yuri-josue-hernandez/",
    github: "https://github.com/Yurher15",
  },
};
