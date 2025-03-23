<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Modelamiento de procesos, sistema de mejoramiento y determinación de propuestas alternativas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
        .col-lg-7      
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            p.mb-0 Después de identificar y seleccionar los procesos, es necesario representar esta estructura de forma que se facilite la identificación y la comprensión de las relaciones entre ellos; es decir, modelar el o los procesos; esta es una técnica utilizada para representar gráficamente la estructura y la secuencia de actividades dentro de una organización. Su objetivo principal es el de visualizar, analizar y optimizar los procesos, para mejorar la eficiencia y la productividad.

          p(data-aos="fade-left").mb-4 Una forma efectiva de hacerlo es mediante un mapa de procesos. Este mapa es una representación visual que facilita la comprensión de todos los procesos dentro de una empresa y cómo se interrelacionan entre sí. Proporciona una visión general de la organización. No es necesario detallar cada tarea individualmente, pero sí es importante describir los principales grupos de actividades que engloban dichas tareas.
      
  
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] ¿Qué es un mapa de procesos?

      p(data-aos="fade-left").mb-4 Un mapa de procesos es una representación visual de los procesos dentro de una organización, mostrando la interrelación entre ellos y cómo contribuyen a la creación de valor. Se utiliza para comprender, analizar y mejorar la gestión de procesos dentro de una empresa o institución.

      .titulo-figura.mb-4
        h5 Figura 3. 
        span Mapa de procesos.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f3.png", data-aos="zoom-in", style="max-width: 740px").mx-auto
      figcaption.mt-2.text-center.mb-4 Nota. Tomado de https://images.app.goo.gl/CmvsF6hswZqVoCjY9 Creative Commons
      

      p(data-aos="fade-left").mb-4 El uso de un mapa de procesos es importante porque permite:


      .bg-full-width-2.bg-fondo-3
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-1.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Identificar los procesos claves y su secuencia.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Mejorar la eficiencia organizacional al reducir redundancias y optimizar recursos.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Facilitar la comunicación y el entendimiento de los procesos, dentro de la organización.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Servir como base para la automatización y digitalización de procesos.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Ayudar en la toma de decisiones estratégicas al proporcionar una visión clara de las operaciones.

      
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/2.png', alt='')
      

      h2(data-aos="flip-up") ¿Cómo se construye un mapa de procesos?

      p(data-aos="fade-left").mb-4 El diseño de un mapa de procesos, requiere seguir una metodología estructurada:

      .bg-full-width.bg-fondo-slider.mb-5#slide-1
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-1.png", alt="Identificación de procesos")
              .col-lg-7.order-lg-1
                h5 Identificación de procesos
                p Se deben clasificar los procesos en:
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Procesos estratégicos: relacionados con la dirección y gestión de la organización.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Procesos claves u operativos: aquellos que generan valor directo para el cliente.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Procesos de soporte: aquellos que brindan apoyo a los procesos claves.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-2.png", alt="Definición de límites y alcance")
              .col-lg-7.order-lg-1
                h5 Definición de límites y alcance
                p Determinar dónde inicia y dónde termina cada proceso, así como los responsables y los recursos involucrados.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-3.png", alt="Representación visual")
              .col-lg-7.order-lg-1
                h5 Representación visual
                p Utilizar diagramas de flujo o modelos estandarizados como BPMN (Business Process Model and Notation), SIPOC (Supplier, Input, Process, Output, Customer) o el modelo de la ISO 9001.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-4.png", alt="Validación y mejora")
              .col-lg-7.order-lg-1
                h5 Validación y mejora
                p Revisar el mapa con los involucrados y optimizarlo, según los hallazgos.
      

      h2(data-aos="flip-up") Aspectos a incluir en un mapa de procesos

      .row.justify-content-center.mb-5
        .col-lg-10
          .bg-color-6.mb-5
            .px-4.px-md-5
              .row.justify-content-center.align-items-center

                .col-lg-7
                  p.mb-4 Los aspectos que se deben incluir son:
                  ul.lista-ul--color
                    li.mb-1
                      i.fas.fa-arrow-circle-right
                      | Entradas y salidas de cada proceso.
                    li.mb-1
                      i.fas.fa-arrow-circle-right
                      | Interrelación entre procesos.
                    li.mb-1
                      i.fas.fa-arrow-circle-right
                      | Indicadores de desempeño, para evaluar su eficacia.
                    li.mb-1
                      i.fas.fa-arrow-circle-right
                      | Roles y responsabilidades dentro del proceso.
                    li.mb-1
                      i.fas.fa-arrow-circle-right
                      | Recursos necesarios para su ejecución.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema3/3.svg", alt="" style="max-width: 295px;").mx-auto.mb-4.mb-lg-0


      h2 Modelos de mapas de procesos

      p.mb-4 Algunos de los modelos más utilizados son:

      .row.mb-5
        .col-lg-7
          h3.mb-4 a) Modelo de la ISO 9001: basado en la mejora continua
      
          p(data-aos="fade-left") Al estructurar un mapa de procesos conforme a la norma ISO 9001, se pretende plasmar visualmente el funcionamiento de la organización, y garantizar que sus procesos se ajusten a los criterios de calidad exigidos por esta norma internacional.

          p(data-aos="fade-left") Estos mapas de procesos, diseñados bajo el enfoque de ISO 9001, se caracterizan por priorizar la optimización de recursos, la identificación y control de riesgos, así como la implementación de acciones para una mejora constante.
      
          .bg-color-5.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/4b.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La norma ISO 9001 se basa en la gestión por procesos, lo que significa que la calidad no se controla solo en productos o servicios finales, sino en todas las fases de su desarrollo.
      
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      

      p.mb-4 El modelo de procesos en la ISO 9001 se basa en el Ciclo PHVA (Planear-Hacer-Verificar-Actuar), también conocido como el Ciclo de Deming, que garantiza la mejora continua.



      .row.justify-content-center.mb-5
        .col-lg-10
          .bg-color-6
            .px-4.px-md-5
              .row.justify-content-center.align-items-center
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema3/5.svg", alt="" style="max-width: 295px;").mx-auto.mb-4.mb-lg-0
                .col-lg-7
                  .pt-4
                    p.mb-4 Este enfoque implica:
                    ul.lista-ul--color
                      li.mb-0
                        i.fas.fa-arrow-circle-right
                        | Identificación de procesos dentro del sistema de gestión de la calidad (SGC).
                      li.mb-0
                        i.fas.fa-arrow-circle-right
                        | Interacción y secuencia de procesos, incluyendo entradas y salidas.
                      li.mb-0
                        i.fas.fa-arrow-circle-right
                        | Gestión y control de los procesos con base en riesgos y oportunidades.
                      li.mb-0
                        i.fas.fa-arrow-circle-right
                        | Monitoreo, medición y mejora continua de los procesos.


      h3(data-aos="flip-up") Clasificación de los procesos, según la ISO 9001

      p(data-aos="fade-left").mb-4 En el contexto de la norma ISO 9001, los procesos se dividen en tres categorías principales:

      .bg-full-width-2.bg-fondo-4.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-1.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Procesos estratégicos
                  p.mb-0 Comprenden las actividades relacionadas con la planificación y administración de la organización, siendo esenciales para promover la mejora continua.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Procesos operativos
                  p.mb-0 Se vinculan directamente con la producción de bienes o la prestación de servicios, con el objetivo principal de cumplir con las expectativas del cliente.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Procesos de soporte o gestión
                  p.mb-0 Brindan apoyo a los procesos estratégicos y operativos, incluyendo tareas como la administración de la información, la capacitación del personal y el mantenimiento de los recursos e instalaciones.
      

      h3(data-aos="flip-up") Elaboración del mapa de procesos según la ISO 9001

      p(data-aos="fade-left").mb-4 Aunque puede parecer un procedimiento complejo, diseñar e implementar un mapa de procesos alineado con la norma ISO 9001, es un proceso accesible si se siguen los pasos adecuados:

      .row.align-items-center.mb-5
        .col-lg-7.order-2.order-lg-2      
          LineaTiempoD.color-primario(data-aos="fade-right")
            p(numero="1" titulo="Definir el punto de partida") 
              | Es fundamental identificar a los participantes, los objetivos organizacionales y las necesidades de los usuarios.

            p(numero="2" titulo="Seleccionar los procesos") 
              | Se deben determinar aquellos procesos esenciales para el funcionamiento y desarrollo de la organización.

            p(numero="3" titulo="Incluir procesos estratégicos y de apoyo") 
              | Es necesario identificar las actividades que proporcionan soporte y aquellas que contribuyen a una gestión eficiente.

            p(numero="4" titulo="Especificar las tareas de cada proceso") 
              | Se deben describir las actividades, su jerarquía y el orden en que deben ejecutarse.

            p(numero="5" titulo="Representar los procesos en el mapa") 
              | La información debe organizarse de manera estructurada, diferenciando los procesos estratégicos, operativos y de apoyo para lograr una representación clara y comprensible.
        .col-lg-5.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      


      .titulo-figura.mb-4
        h5 Figura 4. 
        span Ejemplo mapa de procesos, según norma ISO 9001.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f4.png", data-aos="zoom-in", style="max-width: 1166px").mx-auto
      figcaption.mt-2.text-center.mb-4 Nota. Tomado y adaptado de https://www.unifikas.com/es/noticias/mapa-de-procesos-iso-9001-que-es-y-como-crearlo 
      

      h3(data-aos="flip-up") b) Modelo SIPOC

      p(data-aos="fade-left").mb-4 El modelo SIPOC es una herramienta clave en la gestión de procesos que permite describir y analizar de manera visual y sencilla el flujo de trabajo dentro de una organización.

      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h4.mb-4(data-aos="flip-up") Modelo SIPOC 
              p.mb-4(data-aos="fade-right") En el PDF Modelo SIPOC, se detalla cómo identificar proveedores, entradas, procesos, salidas y clientes, facilitando la comprensión de las relaciones causa-efecto y el alcance de los procesos. Este recurso es fundamental para proyectos de mejora continua, gestión de calidad y optimización de procesos, proporcionando un marco estructurado para identificar oportunidades de mejora y alinear equipos de trabajo.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Modelo SIPOC 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/anexo-1.png', alt='')
      

      h3(data-aos="flip-up") c) Modelo BPMN: estandarizado para automatización de procesos de negocio

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left") El BPMN (Business Process Model and Notation) es un estándar gráfico ampliamente utilizado para modelar procesos de negocio, facilitando su documentación, análisis y automatización. Su principal objetivo es mejorar la comprensión y comunicación entre las diferentes áreas de una organización, incluidos analistas de negocio, desarrolladores y responsables de TI.
      
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/7b.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 BPMN es un lenguaje de modelado gráfico desarrollado por la Object Management Group (OMG) para representar procesos de negocio, de manera estándar. Permite definir procesos de manera visual y estructurada, facilitando su análisis y automatización, mediante sistemas BPM (Business Process Management).

          p(data-aos="fade-left").mb-4 Características principales:

          ul.lista-ul--color.color-dark.mb-4
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Es un estándar universalmente aceptado.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Se enfoca en la automatización y optimización de procesos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Usa diagramas de flujo intuitivos, para representar procesos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Permite modelar procesos simples y complejos.
          
          
      h3(data-aos="flip-up") ¿Para qué se usa BPMN?

      p(data-aos="fade-left").mb-4 El modelo BPMN es clave en la gestión y automatización de procesos de negocio porque:

      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-8
              p(data-aos="fade-left") Texto introductorio
      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-1-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Facilita
                  p.text-center La identificación de mejoras en los procesos.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-2-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Proporciona
                  p.text-center Una base sólida para la automatización con software BPM.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-3-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Mejora
                  p.text-center La eficiencia y reducción de costos al eliminar tareas redundantes.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-4-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Permite
                  p.text-center La integración entre usuarios de negocio y desarrolladores de TI.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icono-5-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Favorece
                  p.text-center La agilidad empresarial al adaptar procesos a cambios.

      
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/8.png', alt='')
      

      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/9.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-7
              p(data-aos="fade-left")  Ejemplo de aplicaciones del BPMN:
              ul.lista-ul--color
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Automatización de procesos en sistemas ERP y CRM.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Modelado de flujos de aprobación en empresas.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Optimización de la gestión de servicios al cliente.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Coordinación de tareas en workflows de manufactura o logística.
      

      .titulo-figura.mb-3
        h5 Figura 5. 
        span Modelo BPMN.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f5.png", data-aos="zoom-in", style="max-width: 1166px").mx-auto
      figcaption.mt-2.text-center.mb-4 Nota. Tomado de https://commons.wikimedia.org/wiki/File:Judicium_Divinum_in_BMPN_2.0.png  Creative Commons
      

      h3(data-aos="flip-up") d) Diagramas de flujo

      p(data-aos="fade-left").mb-4 Los diagramas de flujo son herramientas visuales esenciales para representar procesos, algoritmos o sistemas de manera clara y estructurada.

      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Diagramas de flujo 
              p.mb-4(data-aos="fade-right") En el PDF Diagramas de flujo, se abordan sus principales elementos, símbolos y tipos, así como su aplicación en áreas como la gestión empresarial, la programación y la optimización de procesos. Este recurso ofrece una guía práctica para crear diagramas efectivos, facilitando la comunicación, la identificación de problemas y la mejora continua en diversos contextos.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Diagramas de flujo 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/anexo-2.png', alt='')


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Sistema de mejoramiento 

      p(data-aos="fade-left").mb-4 Los sistemas de mejoramiento de la gestión por procesos, son enfoques estructurados y metodologías que buscan optimizar el desempeño organizacional mediante la identificación, análisis y mejora continua de los procesos claves. Su objetivo es garantizar eficiencia, calidad y alineación con los objetivos estratégicos de la organización.

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-8.p-4(data-aos="fade-left").mb-4
            p.mb-0 El desarrollo de una cultura de mejora continua, permite a las organizaciones incrementar su productividad y fortalecer su competitividad dentro del mercado en el que operan. Además, es fundamental que evalúen constantemente sus procesos con el fin de detectar posibles fallas y aplicar mejoras o correcciones cuando sea necesario. Como consecuencia de esta estrategia, las empresas pueden expandirse y, en algunos casos, posicionarse como referentes dentro de su sector.

          p(data-aos="fade-left") Estos sistemas se basan en principios como la gestión por procesos, la medición del desempeño y la cultura de mejora continua. Algunos de los enfoques más utilizados incluyen:
      
      
      .titulo-figura.mb-4
        h5 Figura 6. 
        span Sistemas de mejoramiento.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f6.png", data-aos="zoom-in", style="max-width: 619px").mx-auto
      figcaption.mt-2.text-center.mb-4 Nota. Basado en Angel Maldonado, J. (2012). 
      

      p(data-aos="fade-left").mb-4 A continuación, ampliemos la información sobre cada uno de ellos:


      .row.align-items-start.mb-5#acordeon-3
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Ciclo de mejora continua (PDCA o Deming)")
              p #[strong Plan (Planear).] Identificación de problemas y planificación de mejoras.
              p #[strong Do (Hacer).] Implementación de las mejoras en un entorno controlado.
              p #[strong Check (Verificar).] Evaluación de los resultados obtenidos.
              p #[strong Act (Actuar).] Ajuste y estandarización de mejoras exitosas.

            .div(titulo="Gestión de la Calidad Total (Total Quality Management - TQM)")
              p Es un enfoque integral que busca mejorar de manera continua todos los procesos dentro de una organización, con el objetivo de satisfacer las necesidades del cliente y optimizar la eficiencia operativa. Se basa en principios como la orientación al cliente, el liderazgo comprometido, la participación de todos los empleados y la toma de decisiones basada en datos. Utiliza herramientas como el control estadístico de calidad, que permite analizar la variabilidad en los procesos; el benchmarking, para identificar y adoptar mejores prácticas de otras organizaciones; y los círculos de calidad, donde grupos de trabajo colaboran en la identificación y resolución de problemas dentro de sus áreas.

            .div(titulo="Seis Sigma (6 σ) o Six Sigma")
              p Es una metodología basada en el análisis de datos para reducir la variabilidad y los defectos en los procesos, con el objetivo de alcanzar niveles de calidad cercanos a la perfección. Se fundamenta en la estrategia DMAIC (Definir, Medir, Analizar, Mejorar y Controlar) para optimizar procesos existentes y en DMADV (Definir, Medir, Analizar, Diseñar y Verificar), cuando se requiere desarrollar procesos nuevos. Seis Sigma emplea herramientas estadísticas avanzadas, como el análisis de causa raíz y diagramas de Pareto, además de fomentar una cultura de mejora estructurada a través de la formación de expertos con distintos niveles de certificación (Green Belt, Black Belt y Master Black Belt).

            .div(titulo="Lean Management")
              p Es un enfoque de gestión que busca maximizar el valor para el cliente eliminando desperdicios y optimizando la eficiencia operativa. Se basa en la identificación y reducción de actividades que no agregan valor dentro de los procesos, utilizando herramientas como Kaizen (mejora continua mediante pequeñas acciones diarias), 5S (metodología de organización del espacio de trabajo), Kanban (sistema visual para gestionar el flujo de trabajo) y Value Stream Mapping (VSM), que permite mapear y analizar procesos para identificar oportunidades de mejora. Lean Management es ampliamente aplicado en manufactura y servicios, ayudando a reducir costos, mejorar la calidad y aumentar la agilidad organizacional.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/11.png", alt="").mb-4.mb-lg-0


      .row.align-items-start.mb-5#acordeon-4
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/12.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="ISO 9001")
              p Junto con otras normas de gestión, establecen lineamientos para la estandarización, control y mejora de los procesos organizacionales. La norma ISO 9001, en particular, se centra en la gestión de la calidad, estableciendo requisitos para la documentación, auditoría y mejora continua de los procesos. Su implementación permite a las organizaciones garantizar la conformidad con estándares internacionales, mejorar la satisfacción del cliente y fortalecer la cultura de calidad. Además de ISO 9001, existen otras normas como ISO 14001 (gestión ambiental), ISO 45001 (seguridad y salud en el trabajo) e ISO 27001 (seguridad de la información), que complementan la gestión empresarial con un enfoque integral.
      
            .div(titulo="<em>Benchmarking</em>")
              p Es una herramienta de mejoramiento que consiste en la comparación de los procesos propios con los de organizaciones líderes en el mercado, con el fin de identificar mejores prácticas y adaptarlas a la propia realidad. Puede realizarse en diferentes niveles: interno (comparación entre áreas dentro de la misma organización), competitivo (comparación con competidores directos), funcional (comparación con organizaciones de distintos sectores, pero con procesos similares) o genérico (identificación de prácticas innovadoras en cualquier industria). Benchmarking permite obtener referencias de desempeño, detectar oportunidades de mejora y fomentar la innovación a partir del aprendizaje de otros.
      
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Determinación de propuestas alternativas


      p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a ver el siguiente video:


      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/BD1MvDVos9w?si=6Seiq2btbH7-O3gB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=2190071" target="_blank" rel="noopener noreferrer") Pires, A. M., & Machado, V. C. (2005). Gestión por procesos en el diseño de las organizaciones. Dialnet. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/EJR9gGsSIRU?si=0EOsCbIIjiRycIGv" target="_blank" rel="noopener noreferrer") PH ASESORÍA (2020, 2 de septiembre) Implantar un sistema de gestión de procesos Business Process Magnament BPM
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal propósito de modelar un proceso dentro de una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Facilitar la identificación y comprensión de la estructura y secuencia de actividades.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Automatizar todos los procesos sin necesidad de supervisión.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Sustituir completamente la toma de decisiones humanas en la gestión organizacional.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Eliminar la necesidad de documentación en la empresa.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según la norma ISO 9001, los procesos dentro de una organización se dividen en tres categorías principales. ¿Cuál de las siguientes NO es una de ellas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Procesos estratégicos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Procesos claves u operativos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Procesos de soporte',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Procesos improvisados',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué herramienta se utiliza para representar gráficamente los proveedores, insumos, actividades, productos y clientes en un proceso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modelo SIPOC',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Diagrama de flujo de datos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Cuadro de mando integral',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Método de Pareto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes modelos de mapeo de procesos está basado en la mejora continua y en el ciclo PHVA?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modelo BPMN',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Modelo de la ISO 9001',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Modelo SIPOC',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Diagrama de flujo de programación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué modelo de representación de procesos está diseñado para la automatización de flujos de trabajo y procesos de negocio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modelo SIPOC',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Diagrama de flujo de datos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Modelo BPMN',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Diagrama Ishikawa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
