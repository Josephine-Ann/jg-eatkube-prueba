# Debe ser un único componente con estilos responsive que se adapte a los tamaños de pantalla (no hacer dos componentes distintos uno para cada tamaño de pantalla)

El componente se hizo según las instrucciones, en lugar de crear dos componentes (tener el DOM más pequeño tiene ventajas en cuanto a la optimización.)

The component was done according to the instructions, instead of creating two components (having a smaller DOM has optimisation-related advantages)

## El componente debe contener dos botones en la parte superior, estando solo uno de ellos activo al mismo tiempo. 

Dos botones se crearon, a hacer clic en uno los dos se cambian para que siempre uno esté activo y el otro no. 
Two buttons were created, when one is clicked the two change so that one is always active and the other is not.

## Al cargar el componente por primera vez, debe aparecer un mensaje en consola que indique "Componente cargado correctamente", este mensaje debe aparecer una única vez al cargar el componente y no debe volver a aparecer en ningún momento.

He tenido que usar un custom hook para lograr esto. 

I have had to use a custom hook to achieve this. 

## Al ingresar texto en el input, si en algún momento el texto contiene la letra "a", el fondo de la caja debe cambiar a color verde, si se elimina la letra, debe volver a su color original.

Se hizo, con un verde muy sútil para que no se vea muy diferente/no destaca demasiado.
 
This has been done, with a subtle green that doesn't stand out too much as being different. 

## Al hacer click en el botón de "Enviar" debe aparecer por consola el texto introducido en el input.

Se hizo. This has been done. 

### npm start

El script para ponerla en marcha. 
Script to run the app. 

### TailWind

Usé clases de utilidad, con TailWind.
I used utility classes, with TailWind. 




