import FC from "../../tutor/factorComun/FactorComun";
//import { Ejercicio1 } from "../../tutor/factorComun/EjerciciosFC";
import data from "../../tutor/factorComun/ejercicioFC.json";

function IndexPage({ejercicio}) {
  return (
    <>
      <FC ejercicio={ejercicio}></FC>
    </>
  );
}
export async function getServerSideProps() {
  //const fs = require('fs');
  //const exercise = data[0]
  return {
    props: {ejercicio:data[0]}, // will be passed to the page component as props
  }
}

export default IndexPage;