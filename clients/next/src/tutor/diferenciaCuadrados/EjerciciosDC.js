export const Ejercicio1 = {
  itemId: 3000,
  itemTitle: "Diferencia de cuadrados",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: "0",
      expression: "9x^2-1",
      step: "Paso 1: identificar términos al cuadrado",
      result: "(3x)^2-(1)^2",
      hints: [
        {
          hintId: 0,
          hint: "Enfocarse en los valores que acompañan al cuadrado",
        },
        { hintId: 1, hint: "Un valor a ingresar es 1" },
        {
          hintId: 2,
          hint: "Los cuadrados son: (3x)² - (1)², donde los valores a ingresar son 3x y 1",
        },
      ],
      answers: [{ answer: ["3x", "1"], nextStep: "1" }],
      error:
        "No se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
      validation: "Haz encontrado los términos al cuadrado",
    },
    {
      stepId: "1",
      expression: "(3x)^2-(1)^2",
      step: "Paso 2: ingresar suma por diferencia",
      result: "(3x+1)(3x-1)",
      hints: [
        { hintId: 0, hint: "Primer paréntesis ingresar suma" },
        { hintId: 1, hint: "Segundo paréntesis ingresar resta" },
        {
          hintId: 2,
          hint: "Factorización por suma y diferencia: (3x+1)(3x-1)",
        },
      ],
      //entrada:["3x+1","3x-1"],
      answers: [{ answer: ["3x+1", "3x-1"], nextStep: null }],
      error: "suma por diferencia mal ingresado",
      validation: "Haz factorizado por diferencia de cuadradros",
    },
  ],
};

export const Ejercicio2 = {
  itemId: 3001,
  itemTitle: "Factorización por diferencia de cuadrados.",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: "0",
      expression: "x^2-y^2",
      step: "Paso 1: identificar terminos al cuadrado",
      result: "(x)^2-(y)^2",
      hints: [
        {
          hintId: 0,
          hint: "Enfocarse en los valores que acompañan al cuadrado",
        },
        {
          hintId: 1,
          hint: "Un valor a ingresar es x",
        },
        {
          hintId: 2,
          hint: "Los cuadrados son: (x)^2 - (y)^2, donde los valores a ingresar son x e y",
        },
      ],
      answers: [{ answer: ["x", "y"], nextStep: "1" }],
      error:
        "no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
      validation: "Haz encontrado los términos al cuadrado",
    },
    {
      stepId: "1",
      expression: "(x)^2-(y)^2",
      step: "Paso 2: ingresar suma por diferencia",
      result: "(x+y)(x-y)",
      hints: [
        { hintId: 0, hint: "Primer paréntesis ingresar suma" },
        { hintId: 1, hint: "Segundo paréntesis ingresar resta" },
        { hintId: 2, hint: "Factorización por suma y diferencia: (x+y)(x-y)" },
      ],
      answers: [{ answer: ["x+y", "x-y"], nextStep: null }],
      error: "suma por diferencia mal ingresado",
      validation: "Haz factorizado por diferencia de cuadradros",
    },
  ],
};

export const Ejercicio3 = {
  itemId: 3001,
  itemTitle: "Factorización por diferencia de cuadrados.",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: "0",
      expression: "4x^2y^4-16x^2y^2",
      step: "Paso 1: identificar terminos al cuadrado",

      result: "(2xy^2)^2-(4xy)^2",
      hints: [
        {
          hintId: 0,
          hint: "",
        },
        {
          hintId: 1,
          hint: "",
        },
        {
          hintId: 2,
          hint: "los cuadrados son: (2xy^2)^2 - (4xy)^2, donde los valores a ingresar son 2xy^2 e 4xy",
        },
      ],
      answers: [
        { answer: ["2xy^2", "4xy"], nextStep: "1" },
        { answer: ["2y^2x", "4xy"], nextStep: "1" },
        { answer: ["2xy^2", "4yx"], nextStep: "1" },
        { answer: ["2y^2x", "4yx"], nextStep: "1" },
      ],
      error:
        "no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
      validation: "Haz encontrado los términos al cuadrado",
    },
    {
      stepId: "1",
      expression: "(2xy^2)^2+(4xy)^2",
      step: "Paso 2: ingresar suma por diferencia",
      result: "(2xy^2+4xy)(2xy^2-4xy)",
      hints: [
        { hintId: 0, hint: "Primer paréntesis ingresar suma" },
        { hintId: 1, hint: "Segundo paréntesis ingresar resta" },
        { hintId: 2, hint: "(2xy^2+4xy)(2xy^2-4xy)" },
      ],
      answers: [{ answer: ["2xy^2+4xy", "2xy^2-4xy"], nextStep: null }],
      error: "suma por diferencia mal ingresado",
      validation: "Haz encontrado la diferencia de cuadradros",
    },
  ],
};
