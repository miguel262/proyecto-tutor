import React, { useRef, useState } from "react";
import { MathComponent } from "../../../components/MathJax";
import { Loading } from "../../tools/Spinner";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  Wrap,
  WrapItem,
  Center,
  Spacer,
} from "@chakra-ui/react";

import { TryStep } from "./../../tools/TryStep";
import Hint from "../../tools/Hint";

const FCCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  loading,

  //hintsTerminado,
  //setHintsTerminado,
}) => {
  const respuesta = useRef(null);
  const [estado, setEstado] = useState(null);
  const [error, setError] = useState(false);
  //let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();

    //valida que la entrada es correctas
    const valida = (element) => element === entrada;
    //El método some() comprueba si al menos un elemento del array
    //cumple con la condición implementada por la función proporcionada.
    if (correctas.some(valida)) {
      //TryStep(entrada, "Factor Común", ejercicio.stepId, true);

      setEstado(
        <>
          <Alert status="success">
            <AlertIcon />
            {ejercicio.correctMsg}
          </Alert>
        </>
      );
      setPaso1Valido((paso1Valido = "Terminado"));
    } else {
      //TryStep(entrada, "Factor Común", ejercicio.stepId, false);
      setError(true);
      setEstado(
        //error cuando la entrada es incorrecta
        <Alert status="error">
          <AlertIcon />
          {ejercicio.incorrectMsg}
        </Alert>
      );
    }
  };

  return (
    <>
      <Wrap padding="15px 10px 10px 10px">
        <WrapItem padding="5px 0px 10px 0px">
          {loading && <Loading />}
          <MathComponent
            tex={String.raw`${ejercicio.expression}`}
            display={false}
          />
        </WrapItem>

        <Spacer />

        <WrapItem>
          <Center>
            <label>(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={160}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese factor común"
              ref={respuesta}
              isReadOnly={paso1Valido != null}
            />
            <label>)</label>

            {paso1Valido === null ? (
              <label>&nbsp;(?)</label>
            ) : (
              <>
                <MathComponent
                  tex={String.raw`${ejercicio.displayResult}`}
                  display={false}
                />
              </>
            )}
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {paso1Valido === null && (
            <>
              <Button
                colorScheme="cyan"
                size="sm"
                variant="outline"
                onClick={comparar}
              >
                Aceptar
              </Button>
              &nbsp;&nbsp;
              <Hint
                ejercicio={ejercicio.hints}
                //setHintsTerminado={setHintsTerminado}
                stepId={ejercicio.stepId}
                itemTitle="Factor Común"
                error={error}
                setError={setError}
              ></Hint>
            </>
          )}
        </WrapItem>
      </Wrap>

      {estado}
    </>
  );
};
export default FCCpaso1;
