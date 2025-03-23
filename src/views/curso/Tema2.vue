<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Obtención de conclusiones sobre la situación actual'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left").mb-4 Una vez realizado el levantamiento de información y definido el portafolio de procesos, es fundamental analizar los datos obtenidos para extraer conclusiones sobre la situación actual de la organización.
      
          .bg-color-7.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El ciclo PHVA, también conocido como ciclo de mejora continua o ciclo de Deming, en honor a Edwards Deming, es una herramienta útil para gestionar de manera eficiente los procesos. Este ciclo proporciona una estructura clara para organizar el pensamiento lógico. Las siglas PHVA corresponden a Planificar, Hacer, Verificar y Actuar, aunque también es común encontrarlo en inglés bajo la forma PDCA (Plan, Do, Check, Act).
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      

      .titulo-figura.mb-2
        h5 Figura 2. 
        span Ciclo PHVA.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema2/f2.png", data-aos="zoom-in", style="max-width: 818px").mx-auto
      figcaption.mt-2.text-center.mb-4 Nota. Tomado de Pardo Álvarez, J. M. (2017).


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 El ciclo PHVA debe ser adoptado por todo el equipo de la organización como la base para una gestión efectiva. Este es uno de los mayores desafíos a superar, debido a que implica un cambio en la forma de pensar, lo cual no siempre es sencillo.
      
          .bg-color-11.p-4(data-aos="fade-left")
            p.mb-0 Un enfoque efectivo hacia los procesos, requiere que se identifiquen y gestionen correctamente, con el objetivo de obtener resultados que cumplan con las expectativas de los clientes. Por tal razón, es necesario que se determinen los procesos esenciales para el funcionamiento del negocio, gestionándolos de manera adecuada, si se busca dirigir el negocio de forma eficiente. Una vez que se ha adoptado un modelo de gestión, como el ciclo de mejora continua PHVA, y se tiene claro el concepto de proceso, se puede definir la gestión de procesos, como la aplicación del ciclo PHVA a cada uno de los procesos.
      
      h2(data-aos="fade-left").mb-4 Gestionar los procesos es aplicar el ciclo de mejora continua a los procesos

      p(data-aos="fade-left").mb-4 A continuación, se describe la importancia de aplicación del ciclo PHVA sobre el levantamiento de la información y la definición del portafolio de procesos.

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='Ciclo PHVA', style="max-width: 496px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="34%" y="75%" numero="+")
                  h5 Planear (P) – Análisis y estructuración de la información
                  p En esta fase, se organizan y analizan los datos recopilados durante el levantamiento de información y el mapeo de procesos. Se establecen los objetivos del análisis y los criterios de evaluación, utilizando herramientas como:
                  ul.lista-ul.mb-3
                    li 
                      i.lista-ul_vineta
                      | ⊕ Matrices FODA para identificar fortalezas y debilidades.
                    li 
                      i.lista-ul_vineta
                      | ⊕ Indicadores de desempeño (KPIs) para evaluar la eficiencia de los procesos.
                    li 
                      i.lista-ul_vineta
                      | ⊕ Mapas de procesos para identificar redundancias o problemas estructurales.
                  p.mt-3 #[strong Importancia.] Permite estructurar adecuadamente el diagnóstico y definir prioridades en la evaluación de la situación actual.
      
                .bg-color-white.box-shadow.p-3(x="37%" y="21%" numero="+")
                  h5 Hacer (H) – Identificación de problemas y oportunidades de mejora
                  p En esta etapa, se aplican metodologías de análisis para identificar problemas, ineficiencias y áreas de mejora en los procesos. También se pueden realizar pruebas piloto o simulaciones de cambios en los procesos, para validar su impacto antes de la implementación completa.
                  p.mt-3 #[strong Importancia.] Facilita la identificación de puntos críticos en la operación y propone soluciones prácticas.
      
                .bg-color-white.box-shadow.p-3(x="65%" y="20%" numero="+")
                  h5 Verificar (V) – Evaluación de hallazgos y validación de resultados
                  p Aquí se revisan los hallazgos obtenidos y se comparan con estándares de la industria o modelos de referencia como BPM, ISO 9001 o Lean Management. Se validan las conclusiones con los equipos involucrados, para asegurar que reflejan la realidad operativa.
                  p.mt-3 #[strong Importancia.] Garantiza que las conclusiones sean precisas y aplicables, evitando decisiones basadas en información incompleta o errónea.
      
                .bg-color-white.box-shadow.p-3(x="66%" y="76%" numero="+")
                  h5 Actuar (A) – Definición de estrategias y planes de mejora
                  p Con base en las conclusiones obtenidas, se diseñan estrategias para optimizar los procesos y se establecen planes de mejora continua. En esta etapa, se pueden proponer:
                  ul.lista-ul.mb-3
                    li 
                      i.lista-ul_vineta
                      | ⊕ Automatización de procesos para aumentar la eficiencia.
                    li 
                      i.lista-ul_vineta
                      | ⊕ Capacitación del personal para fortalecer la gestión operativa.
                    li 
                      i.lista-ul_vineta
                      | ⊕ Rediseño de procesos para eliminar redundancias y mejorar la productividad.
                  p.mt-3 #[strong Importancia.] Asegura que los hallazgos obtenidos en el análisis, se traduzcan en acciones concretas y mejoras sostenibles en la organización.
           

      p(data-aos="fade-left").mb-5 Para resaltar, el tratamiento necesario para la información recolectada en el inventario de información y en la definición del portafolio de procesos, es el siguiente:
  
      .row.align-items-start.mb-5#acordeon-2
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Análisis de la información recopilada")
              p El primer paso consiste en revisar y organizar los datos obtenidos del mapeo de procesos, clasificándolos en función de criterios como: eficiencia, efectividad, tiempos de respuesta, recursos utilizados y cumplimiento de objetivos. Algunas herramientas útiles para este análisis, incluyen:
              ul.lista-ul.mb-3
                li 
                  i.lista-ul_vineta
                  | ⊕ Matriz FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) para evaluar la situación interna y externa.
                li 
                  i.lista-ul_vineta
                  | ⊕  Diagrama de Ishikawa (Causa-Efecto) para identificar problemas raíz en los procesos.
              p Indicadores de desempeño (KPIs) para medir eficiencia, productividad y calidad de los procesos.

            .div(titulo="Identificación de problemas y oportunidades de mejora")
              p A partir del análisis anterior, se deben determinar:
              ul.lista-ul.mb-3
                li 
                  i.lista-ul_vineta
                  | ⊕ Procesos que presentan cuellos de botella o redundancias.
                li 
                  i.lista-ul_vineta
                  | ⊕ Áreas donde hay desperdicio de recursos o tiempos excesivos de ejecución.
                li 
                  i.lista-ul_vineta
                  | ⊕ Posibles riesgos operativos o incumplimientos normativos.
                li 
                  i.lista-ul_vineta
                  | ⊕ Oportunidades para la automatización o digitalización de procesos.

            .div(titulo="Comparación con mejores prácticas")
              p Es recomendable contrastar los resultados con estándares del sector o mejores prácticas en modelos de gestión reconocidos, como BPM (Business Process Management), ISO 9001 o Lean Management. Esto permite identificar brechas y definir estrategias para optimizar los procesos.

            .div(titulo="Elaboración de un Informe de diagnóstico")
              p Finalmente, se debe plasmar la información, en un documento que contemple:
              ul.lista-ul.mb-3
                li 
                  i.lista-ul_vineta
                  | ⊕ Resumen ejecutivo con los hallazgos principales.
                li 
                  i.lista-ul_vineta
                  | ⊕ Descripción de los procesos evaluados y su desempeño actual.
                li 
                  i.lista-ul_vineta
                  | ⊕ Identificación de problemas y oportunidades de mejora.
                li 
                  i.lista-ul_vineta
                  | ⊕ Recomendaciones estratégicas para la optimización de procesos.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=7897683" target="_blank" rel="noopener noreferrer") Salazar-Garcés, J. A., Mora-Sánchez, N. V., Romero-Black, W. E., & Ollague-Valarezo, J. K. (2020). Diagnóstico de la aplicación del ciclo PHVA según la ISO 9001:2015 en la empresa INCARPALM. Universidad Técnica de Machala, Ecuador.  

  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/r7KKj8O982U?si=Rz7jQClpxhZ8ja0f" target="_blank" rel="noopener noreferrer") Marcela Verde (2014, 1 de octubre) Mapa de Proceso 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
