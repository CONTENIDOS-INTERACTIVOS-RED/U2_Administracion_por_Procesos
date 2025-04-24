export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Identificación de modelos de gestión',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Portafolio de procesos, levantamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Cómo identificar los procesos?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Levantamiento de la información. ¿Cómo identificar y definir los procesos?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Denominación de procesos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Obtención de conclusiones sobre la situación actual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Modelamiento de procesos, sistema de mejoramiento y determinación de propuestas alternativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Qué es un mapa de procesos?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sistema de mejoramiento ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Determinación de propuestas alternativas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pardo Álvarez, J. M. (2017). Gestión por procesos y riesgo operacional: (ed.). Madrid, Spain: AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53618?page=35',
    },
    {
      referencia:
        'Martinez Martinez, A. & Cegarra Navarro, J. G. (2014). Gestión por procesos de negocio: organización horizontal: (ed.). Ecobook - Editorial del Economista.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114309?page=1',
    },
    {
      referencia:
        'Baca Urbina, G. (2015). Administración integral: hacia un enfoque de procesos: (ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39374?page=10',
    },
    {
      referencia:
        'Martinez Martinez, A. & Cegarra Navarro, J. G. (2014). Gestión por procesos de negocio: organización horizontal: (ed.). Ecobook - Editorial del Economista.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114309?page=1',
    },
    {
      referencia:
        'Baca Urbina, G. (2015). Administración integral: hacia un enfoque de procesos: (ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39374?page=10',
    },
    {
      referencia:
        'Angel Maldonado, J. (2012). Gestión de procesos (o gestión por procesos): (ed.). B - EUMED.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/51718?page=112',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de Procesos',
      significado:
        'Técnica utilizada para estudiar y mejorar los procesos dentro de una organización, identificando ineficiencias y oportunidades de optimización.',
    },
    {
      termino: 'Ciclo PHVA (Planear, Hacer, Verificar, Actuar)',
      significado:
        'Metodología utilizada en la gestión de calidad basada en la mejora continua de procesos y productos, siguiendo un ciclo de planificación, ejecución, evaluación y ajuste.',
    },
    {
      termino: 'Control de Calidad',
      significado:
        'Conjunto de procedimientos y técnicas utilizadas para asegurar que un producto o servicio cumple con los estándares establecidos.',
    },
    {
      termino: 'Diagrama de Flujo',
      significado:
        'Representación gráfica de un proceso mediante símbolos estandarizados, que facilita su análisis y comprensión.',
    },
    {
      termino: 'Gestión por Procesos',
      significado:
        'Enfoque organizacional que optimiza el desempeño de una empresa mediante la identificación, análisis y mejora de sus procesos clave.',
    },
    {
      termino: 'ISO 9001:2015',
      significado:
        'Norma internacional de gestión de calidad que establece requisitos para garantizar la eficiencia y satisfacción del cliente en una organización.',
    },
    {
      termino: 'Mapa de Procesos',
      significado:
        'Herramienta visual que muestra la estructura y secuencia de los procesos dentro de una organización, facilitando su análisis y mejora.',
    },
    {
      termino:
        'Metodología SIPOC (Suppliers, Inputs, Process, Outputs, Customers)',
      significado:
        'Técnica utilizada para mapear procesos, identificando proveedores, insumos, actividades, resultados y clientes involucrados.',
    },
    {
      termino: 'Tablero de Comando Integral (Balanced Scorecard)',
      significado:
        'Herramienta de gestión estratégica que permite monitorear el desempeño de una organización mediante indicadores clave en diferentes perspectivas (financiera, clientes, procesos internos y aprendizaje).',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de rastrear el origen, evolución y destino de un producto o servicio a lo largo de su ciclo de vida, garantizando calidad y cumplimiento normativo.',
    },
  ],
}
