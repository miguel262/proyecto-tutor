import React from "react";
import { Alert, Wrap, WrapItem, Center, Spacer, Text } from "@chakra-ui/react";
import { MathComponent } from "../../components/MathJax";

export const FCabstract = ({ ejercicio }) => {
  return (
    <>
      <Alert status="info">
        <Wrap>
          <Text w="100%" fontSize="xl">
            Resumen
          </Text>
          1)&nbsp;&nbsp;
          <WrapItem>
            <MathComponent
              tex={String.raw`${ejercicio.expression}=`}
              display={false}
            />
            <MathComponent
              tex={String.raw`(${ejercicio.answers[0].answer})${ejercicio.result}`}
              display={false}
            />
          </WrapItem>
          <Spacer></Spacer>
          <WrapItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Center>
              <MathComponent
                tex={String.raw`${ejercicio.answers[0].answer}`}
                display={false}
              />
              &nbsp;es el factor común que se repite en cada término de la
              expresión
            </Center>
          </WrapItem>
        </Wrap>
      </Alert>
    </>
  );
};

/*export const FCCabstract = ({ ejercicio, ejercicio1, ejercicio2 }) => {
  return (
    <>
      <Alert status="info">
        <Wrap>
          <Text w="100%" fontSize="xl">
            Resumen
          </Text>
          1)&nbsp;&nbsp;
          <MathComponent
            tex={String.raw`${ejercicio.expression}`}
            display={false}
          />
          =
          <MathComponent
            tex={String.raw`${ejercicio.result[0]}`}
            display={false}
          />
          {ejercicio.result.length > 1 && (
            <>
              <Spacer></Spacer>ó<Spacer></Spacer>
              <MathComponent
                tex={String.raw`${ejercicio.expression}=`}
                display={false}
              />
              <MathComponent
                tex={String.raw`${ejercicio.result[0]}`}
                display={false}
              />
            </>
          )}
          <Text w="100%"></Text>
          2)<Text w="25%"></Text>=
          <MathComponent
            tex={String.raw`${ejercicio1.result[0][0]}${ejercicio1.result[0][1]}+${ejercicio1.result[1][0]}${ejercicio1.result[1][1]}`}
            display={false}
          />
          <Text w="100%"></Text>
          3)<Text w="25%"></Text>=
          <MathComponent
            tex={String.raw`${ejercicio2.result}`}
            display={false}
          />
          <Text w="100%"></Text>
          En el paso 1, se agrupan los sumandos que contienen
          <MathComponent
            tex={String.raw`${ejercicio1.result[0][0]}`}
            display={false}
          />
          en un grupo y los que contienen
          <MathComponent
            tex={String.raw`${ejercicio1.result[1][0]}`}
            display={false}
          />
          en otro<Text w="100%"></Text>
          En el paso 2, se factoriza cada grupo por factor común, los factores
          son
          <MathComponent
            tex={String.raw`${ejercicio1.result[0][0]}`}
            display={false}
          />
          y
          <MathComponent
            tex={String.raw`${ejercicio1.result[1][0]}`}
            display={false}
          />
          <Text w="100%"></Text>
          Finalmente, el paso 3 factoriza por factor común la expresión
          resultante del paso 2, donde
          <MathComponent
            tex={String.raw`${ejercicio1.result[0][1]}`}
            display={false}
          />
          es el factor común compuesto
        </Wrap>
      </Alert>
    </>
  );
};*/

export const DCabstract = ({ step1, step2 }) => {
  return (
    <>
      <Alert status="info">
        <Wrap>
          <Text w="100%" fontSize="xl">
            Resumen
          </Text>
          1)&nbsp;&nbsp;
          <WrapItem>
            <MathComponent
              tex={String.raw`${step1.expression}=`}
              display={false}
            />
            <MathComponent tex={String.raw`${step1.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          <WrapItem>
            <Center>
              El paso 1) identifica que&nbsp;
              <MathComponent
                tex={String.raw`x_{1}=${step1.answers[0].answer[0]}`}
                display={false}
              />
              &nbsp; y&nbsp;
              <MathComponent
                tex={String.raw`x_{2}=${step1.answers[0].answer[1]}`}
                display={false}
              />
              &nbsp;son los términos al cuadrado
            </Center>
          </WrapItem>
          <Text w="100%"></Text>
          2)&nbsp;&nbsp;
          <WrapItem>
            <Text w="10%"></Text>
            <MathComponent tex={String.raw`=${step2.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          El paso 2) aplica la fórmula&nbsp;
          <MathComponent
            tex={String.raw` (x_{1}+x_{2})(x_{1}-x_{2})`}
            display={false}
          />
          &nbsp; y obtiene la factorización
        </Wrap>
      </Alert>
    </>
  );
};

export const DSCabstract = ({ step1, step2, sign }) => {
  return (
    <>
      <Alert status="info">
        <Wrap>
          <Text w="100%" fontSize="xl">
            Resumen
          </Text>
          1)&nbsp;&nbsp;
          <WrapItem>
            <MathComponent
              tex={String.raw`${step1.expression}=`}
              display={false}
            />
            <MathComponent tex={String.raw`${step1.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          <WrapItem>
            <Center>
              El paso 1) identifica que los términos al cubo son &nbsp;
              <MathComponent
                tex={String.raw`x_{1}=${step1.answers[0].answer[0]}`}
                display={false}
              />
              &nbsp; y&nbsp;
              <MathComponent
                tex={String.raw`x_{2}=${step1.answers[0].answer[1]}`}
                display={false}
              />
            </Center>
          </WrapItem>
          <Text w="100%"></Text>
          2)&nbsp;&nbsp;
          <WrapItem>
            <Text w="10%"></Text>
            <MathComponent tex={String.raw`=${step2.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          El paso 2) aplica la fórmula&nbsp;
          {sign === "-" ? (
            <MathComponent
              tex={String.raw`(x_{1}-x_{2})(x_{1}^2+x_{1}x_{2}+x_{2}^2)`}
              display={false}
            />
          ) : (
            <MathComponent
              tex={String.raw`(x_{1}+x_{2})(x_{1}^2-x_{1}x_{2}+x_{2}^2)`}
              display={false}
            />
          )}
          &nbsp; y se obtiene la factorización
        </Wrap>
      </Alert>
    </>
  );
};

export const TCabstract = ({ step1, step2, step3, step4, step5, step6 }) => {
  return (
    <>
      <Alert status="info">
        <Wrap>
          <Text w="100%" fontSize="xl">
            Resumen
          </Text>
          1)&nbsp;&nbsp;
          <WrapItem>
            <Center>
              <MathComponent
                tex={String.raw`${step1.expression}`}
                display={false}
              />
              &nbsp;=&#62;&nbsp;
              <MathComponent
                tex={String.raw`${step1.result}`}
                display={false}
              />
            </Center>
          </WrapItem>
          <Spacer></Spacer>
          <WrapItem>
            <Center>
              El resultado final queda de la forma&nbsp;&nbsp;
              <MathComponent
                tex={String.raw`a(x-x_{1})(x-x_{2})`}
                display={false}
              />
            </Center>
          </WrapItem>
          <Text w="100%"></Text>
          2)&nbsp;&nbsp;
          <WrapItem>
            <Text w="10%"></Text>
            <MathComponent tex={String.raw`${step2.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          El paso 2) identifica los valores a b y c para aplicar fórmula de
          discriminante.
          <Text w="100%"></Text>
          3)&nbsp;&nbsp;
          <WrapItem>
            <Text w="10%"></Text>
            <MathComponent tex={String.raw`${step3.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          El paso 3) calcula el discriminante reemplazando los valores del paso
          2) en la fórmula Δ=b²-4ac.
          <Text w="100%"></Text>
          4)&nbsp;&nbsp;
          {step4.result}
          <Text w="100%"></Text>
          5)&nbsp;&nbsp;
          <WrapItem>
            <Text w="10%"></Text>
            <MathComponent tex={String.raw`${step5.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          El paso 5) calcula las soluciones de las raices aplicando la fórmula
          <MathComponent
            tex={String.raw`x_{i}=\frac{-b±\sqrt{Δ}}{2a}`}
            display={false}
          />
          <Text w="100%"></Text>
          6)&nbsp;&nbsp;
          <WrapItem>
            <Text w="10%"></Text>
            <MathComponent tex={String.raw`${step6.result}`} display={false} />
          </WrapItem>
          <Spacer></Spacer>
          El resultado final utilizando la fórmula del comienzo&nbsp;&nbsp;
          <MathComponent
            tex={String.raw`a(x-x_{1})(x-x_{2})`}
            display={false}
          />
        </Wrap>
      </Alert>
    </>
  );
};
