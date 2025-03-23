<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Portafolio de procesos, levantamiento'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/1.svg", style="max-width: 295px").mx-auto
          .col-lg
            .py-4
              p.mb-0 El portafolio de procesos es un conjunto estructurado de los procesos de una organización, categorizados, según su naturaleza y relación con la estrategia empresarial. Este portafolio permite visualizar y gestionar de manera integral, las actividades de la empresa, facilitando la identificación de mejoras y la optimización de recursos.
    
    h2(data-aos="fade-left").mb-4 ¿En qué consiste?

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Identificación y clasificación de procesos (estratégicos, claves y de soporte).
    
      .col-lg-4
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Documentación y análisis de cada proceso.
    
      .col-lg-4
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Priorización de procesos, según su impacto en la estrategia organizacional.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] ¿Cómo identificar los procesos?

    p(data-aos="fade-left").mb-5 Responder a esta pregunta es complicado, dado que la respuesta depende tanto de la terminología utilizada, como del nivel de detalle con el que se definan y describan los procesos. Para entenderlos mejor, generalmente se estructuran desde lo más general hasta lo más específico, de la siguiente manera:


    TabsC.color-acento-contenido.mb-5.tabc-1
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Mapa de procesos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Mapa de procesos
            p Representación visual que muestra la secuencia y conexión entre los diferentes procesos dentro de la organización.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Macroproceso" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Macroproceso
            p Conjunto de procesos principales dentro del mapa de procesos.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Proceso" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Proceso
            p Segmento o componente dentro de un macroproceso.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Subproceso" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Subproceso
            p Parte más específica dentro de un proceso.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Cada autor puede emplear diferentes términos para describir los procesos, lo que puede generar confusión. Por ejemplo, algunos llaman "macroprocesos" a lo que otros denominan "procesos de primer nivel"; de igual manera, lo que unos identifican como "procesos", otros lo llaman "subprocesos" o "procesos de nivel inferior". Existen diversas formas de nombrarlos, pero lo fundamental es establecer una jerarquía clara, desde los procesos más generales, hasta los más específicos. Además, es importante definir y utilizar de manera consistente, los términos elegidos, para facilitar la comprensión y mejorar la comunicación dentro de la organización.
    
        .bg-color-6.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Teniendo en cuenta lo anterior, la identificación y definición de los procesos dentro de una organización, depende de sus características particulares y de la forma en que decida estructurarlos. Esto puede variar, según la teoría o metodología que se aplique para su gestión.

        p(data-aos="fade-left") Según Pardo Álvarez, J. M. (2017), podemos visualizar los procesos con distintos niveles de detalle, de manera más amplia o específica, dependiendo del enfoque que utilicemos. 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
    
    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Este enfoque, que nos permite ir de lo general a lo particular o viceversa, se conoce comúnmente como despliegue de procesos. Por lo general, cuanto mayor es la variedad de productos y servicios de una organización, mayor será la cantidad de procesos y la necesidad de desglosarlos en diferentes niveles. En la siguiente figura, se muestra un diagrama en forma de árbol, que ilustra un despliegue de procesos genérico, iniciando desde el nivel más general, el mapa de procesos, hasta los niveles más específicos.
    
    .titulo-figura.mb-4
      h5 Figura 1. 
      span Mapa de procesos genéricos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure.bg-color-info.p-4
          img(src="@/assets/curso/tema1/f1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Pardo Álvarez, J. M. (2017). 
    

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Cuando se trata de procesos, cada persona puede percibirlos con un nivel de detalle diferente. En algunos casos, la cantidad de procesos es reducido porque se han definido en un nivel más general, como macroprocesos, y a partir de estos se desarrollan los procedimientos necesarios. En contraste, en otras situaciones, la cantidad de procesos es mayor, puesto que se han establecido con un enfoque más específico, desglosándolos en procesos o subprocesos.
    
        .bg-color-8.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La siguiente tabla muestra diferentes ejemplos de despliegue de procesos, donde se evidencia cómo pueden estructurarse en distintos niveles de detalle. Tomemos como referencia la función de gestión financiera, presente en muchas organizaciones. Si preguntamos por los procesos asociados a esta área, las respuestas pueden variar. 

        p Algunas personas identificarán un único proceso general, como la gestión financiera y contable. Otras, en cambio, reconocerán este macroproceso, pero lo desglosarán en varios procesos más específicos, como presupuesto y planificación financiera, gestión de tesorería, contabilidad y cierre financiero.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")


    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 400px").mx-auto
          .col-lg
            p.mb-0 Algunas personas identificarán un único proceso general, como la gestión financiera y contable. Otras, en cambio, reconocerán este macroproceso, pero lo desglosarán en varios procesos más específicos, como presupuesto y planificación financiera, gestión de tesorería, contabilidad y cierre financiero, control de costos y análisis financiero.
    

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Despliegue de procesos.

    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Basado en Pardo Álvarez, J. M. (2017). 
        thead
          tr
            th(style="background-color: #88BBA9;") Negocio
            th(style="background-color: #88BBA9;") Ejemplo Macroproceso
            th(style="background-color: #88BBA9;") Ejemplo Procesos
            th(style="background-color: #88BBA9;") Ejemplo Subprocesos
        tbody
          tr
            td Fábrica de plásticos
            td Fabricación.
            td
              p ⊕ Programación de la producción.
              p ⊕ Preparación de las máquinas.
              p ⊕ Inyección de piezas.
              p ⊕ Desengrase.
            td
              p Dentro del proceso de inyección de piezas, se pueden distinguir algunos subprocesos como:
              p ⊕ Inyección de piezas normales.
              p ⊕ Inyección de piezas con características especiales.
          tr
            td Restaurante
            td Atención al cliente.
            td
              p ⊕ Recepción del cliente.
              p ⊕ Preparación de platos.
              p ⊕ Atención a los clientes en el comedor.
              p ⊕ Facturación y despedida.
            td
              p Dentro del proceso de preparación de platos, se pueden distinguir algunos subprocesos como:
              p ⊕ Preparación de platos fríos.
              p ⊕ Preparación de platos calientes.
          tr
            td Departamento financiero
            td Gestión financiera y contable.
            td
              p ⊕ Presupuesto y planificación financiera.
              p ⊕ Gestión de tesorería.
              p ⊕ Contabilidad y cierre financiero.
              p ⊕ Control de costos y análisis financiero.
              
            td
              p Dentro del proceso de tesorería, se pueden distinguir algunos subprocesos como:
              p ⊕ Gestión de liquidez.
              p ⊕ Administración de pagos y cobros.
              p ⊕ Control de riesgos financieros.
    

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En muchos negocios, el desglose en macroprocesos y procesos dentro de cada macroproceso, suele ser suficiente para gestionar sus operaciones de manera eficiente. Sin embargo, en algunas organizaciones, debido a la diversidad de productos y servicios, así como a la complejidad de ciertas actividades, puede ser necesario estructurar los procesos en tres o más niveles, incorporando subprocesos adicionales para mejorar su control y ejecución.
    

    .titulo-segundo.mb-4
      h2 #[span 1.2] Levantamiento de la información. ¿Cómo identificar y definir los procesos?

    p(data-aos="fade-left").mb-5 El levantamiento de la información y la identificación de procesos son etapas fundamentales para comprender y optimizar el funcionamiento de una organización.


    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Levantamiento de la información 
            p.mb-4(data-aos="fade-right") En el PDF Levantamiento de la información, se presentan métodos y estrategias para reconocer procesos operativos, estratégicos y de apoyo, proporcionando herramientas clave para analizar actividades, detectar oportunidades de mejora y diseñar flujos de trabajo más eficientes. Este recurso es esencial para construir una gestión organizacional sólida y orientada a resultados.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Levantamiento de la información 
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/16.png', alt='')
    

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Denominación de procesos

    p(data-aos="fade-left").mb-5 El procedimiento para inventariar los procesos de una organización, incluye la tarea de darles un nombre que describa claramente su objetivo. Sin embargo, a veces este paso se omite, lo que lleva a situaciones como las siguientes:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Nombrar el proceso, según el resultado generado")
            p Por ejemplo, un proceso denominado "reservas" solo indica el producto final, pero sería más claro llamarlo gestión de reservas o tramitación de reservas.

          .div(titulo="Nombrar el proceso, según la ubicación física")
            p Un proceso llamado "recepción" en un hotel, podría ser mejor denominado recepción de clientes o entrada de clientes.

          .div(titulo="Nombrar el proceso, según el departamento donde se realiza")
            p Es común encontrar nombres como proceso de recursos humanos, pero sería más adecuado llamarlo gestión de recursos humanos o administración de personal.


    .bg-full-width.bg-color-11
      .p-4.p-md-5
        p.mb-0 Es más efectivo utilizar verbos que indiquen acción, junto con una referencia a los resultados principales del proceso. El nombre debe ser conciso, pero descriptivo de lo que realmente sucede en él. De igual manera que las personas tienen un nombre formal y uno corto, los procesos deben contar con una denominación precisa en el mapa de procesos y documentos relacionados. Usar nombres adecuados evitará confusiones, especialmente para aquellos que no están tan involucrados en la gestión de procesos, lo que podría llevar a malentendidos o duplicaciones.
    

    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://redalyc.org/articulo.oa?id=36412216" target="_blank" rel="noopener noreferrer") Pico, G. (2006). El mapa de procesos: Elemento fundamental de un sistema de gestión de calidad para empresas de servicios en Venezuela. Revista Venezolana de Análisis de Coyuntura, 12(2), 291-309. Universidad Central de Venezuela. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/EJR9gGsSIRU?si=jbNaOZpufdmaV0fe" target="_blank" rel="noopener noreferrer") PH ASESORÍA. (2020, 2 de septiembre). Implantar un sistema de gestión de procesos Business Process Magnament BPM

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/CpIRUd_CFas?si=67g2o0sfTjgrjy4a" target="_blank" rel="noopener noreferrer") INDEE (2022, 23 de marzo) Diseño de procesos

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
