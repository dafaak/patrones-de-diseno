# PATRONES DE DISENO

los patrones de diseno pueden ser creacionales, estructurales o de comportamiento.

### INTRODUCCION

#### TIPOS DE FUNCIONES

- **Funciones de primer orden:**  son funcioines que pueden ser tratadas como una variable, esta variable puede guardar
  una funcion, puede ejecutar la funcion, y puede ser enviada como parametro a otras funciones
- **Funciones de orden superior:** son funciones que pueden recibir como parametros funciones

##### FUNCIONES FELCHA (ARROW)

Se llaman asi por su forma

```ts
let division = (num1: number, num2: number) => num1 / num2;
```

#### SINGLETON

busca tener una sola instancia de una clase

#### STRATEGY

se centra en tener una clase contexto que tengo una estrategia y una accion.

#### OBSERVER

Teniendo un objeto que puede tener estados, y estos son propiedades, cuando una propiedad cambie
se va a notificar a un conjunto de observadores

#### DECORATOR

El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad
a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera
incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera.

No se puede heredar de dos clases.

envolver funcionanmiento sobre funcionamiento;