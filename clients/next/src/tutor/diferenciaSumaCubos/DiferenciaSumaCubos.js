import React, { useState, useEffect } from "react";
//import { Ejercicio1 } from "./EjerciciosDSC";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { DSCpaso1 } from "./steps/DSCpaso1";
import { DSCpaso2 } from "./steps/DSCpaso2";
import { DSCsummary } from "../tools/Summary";
import { Loading } from "../tools/Spinner";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Alert,
  Wrap,
  Center,
} from "@chakra-ui/react";

//react functional component
const DSC = ({ejercicio}) => {
  //const ejemplo = Ejercicio1;
  //const ejercicio = Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);
  const [index, setIndex] = useState([1, 0]);

  useEffect(() => {
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  const [loading, setLoading] = useState(true);
  const change = () => setLoading(false);

  return (
    <>
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      {ejercicio.text}
      <Wrap justify="center">
        {loading && <Loading />}
        <MathComponent
          tex={ejercicio.steps[0].expression}
          display={true}
          onSuccess={change}
        />
      </Wrap>

      <Accordion allowToggle allowMultiple index={index} style={{ padding: 0 }}>
        <AccordionItem isFocusable={false}>
          <Alert colorScheme={paso1Valido == null ? "blue" : "green"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 0)) {
                  setIndex(index.filter((e) => e !== 0));
                } else {
                  setIndex(index.concat(0));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                <Wrap>
                  <Center>
                    {ejercicio.steps[0].stepTitle}&nbsp;&nbsp;
                    <MathComponent tex={String.raw`x_{1}`} display={false} />
                    &nbsp; y&nbsp;&nbsp;
                    <MathComponent tex={String.raw`x_{2}`} display={false} />
                    &nbsp;&nbsp;
                    {paso1Valido != null && "    ✔ "}
                  </Center>
                </Wrap>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            <DSCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              signo={ejercicio.sign}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
              loading={loading}
            ></DSCpaso1>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert
            colorScheme={
              paso2Valido == null
                ? paso1Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 1)) {
                  setIndex(index.filter((e) => e !== 1));
                } else {
                  setIndex(index.concat(1));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                <Wrap>
                  <Center>
                    {ejercicio.steps[1].stepTitle}
                    &nbsp;&nbsp;
                    {ejercicio.sign === "-" ? (
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
                    &nbsp;&nbsp;
                    {paso2Valido != null && "    ✔ "}
                  </Center>
                </Wrap>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso1Valido != null && (
              <DSCpaso2
                ejercicio={ejercicio.steps[paso1Valido]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></DSCpaso2>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {paso2Valido != null && (
              <DSCsummary
                step1={ejercicio.steps[0]}
                step2={ejercicio.steps[1]}
                sign={ejercicio.sign}
              />
            )}
    </>
  );
};

export default DSC;
