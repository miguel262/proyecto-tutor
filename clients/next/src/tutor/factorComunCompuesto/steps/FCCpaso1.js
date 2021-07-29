import React, { useRef, useState } from "react";
import { MathComponent } from "../../../components/MathJax";
import Hint from "../../tools/Hint";
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

const FCCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const [estado, setEstado] = useState(null);
  //let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    //valida que la entrada es correctas
    const valida = (element) =>
      (element[0] === entrada[0] && element[1] === entrada[1]) ||
      (element[0] === entrada[1] && element[1] === entrada[0]);
    //El método some() comprueba si al menos un elemento del array
    //cumple con la condición implementada por la función proporcionada.
    if (correctas.some(valida)) {
      setPaso1Valido(
        (paso1Valido = ejercicio.answers[correctas.findIndex(valida)].nextStep)
      );
    } else {
      setEstado(
        //error cuando la entrada es incorrecta
        <Alert status="error">
          <AlertIcon />
          {ejercicio.error}
        </Alert>
      );
    }
  };

  return (
    <>
      <Wrap padding="15px 10px 10px 10px">
        <WrapItem padding="5px 0px 10px 0px">
          <Center>
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Center>
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
              w={125}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese grupo 1"
              ref={respuesta1}
              isReadOnly={paso1Valido != null}
            />
            <label>)&nbsp;+&nbsp;( </label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={125}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese grupo 2"
              ref={respuesta2}
              isReadOnly={paso1Valido != null}
            />
            <label> ) </label>
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {paso1Valido === null && (
            <>
              <Button
                colorScheme="cyan"
                variant="outline"
                onClick={comparar}
                size="sm"
              >
                Aceptar
              </Button>
              &nbsp;&nbsp;
              <Hint
                ejercicio={ejercicio.hints}
                setHintsTerminado={setHintsTerminado}
              ></Hint>
            </>
          )}
        </WrapItem>
      </Wrap>

      {paso1Valido == null && estado}
    </>
  );
};
export default FCCpaso1;
