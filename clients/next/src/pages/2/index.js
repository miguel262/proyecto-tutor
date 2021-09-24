import FCC from "../../tutor/factorComunCompuesto/FactorComunCompuesto";
import data from "../../tutor/factorComunCompuesto/ejerciciosFCC.json";



function IndexPage({ejercicio}) {
  return (
    <>
      <FCC ejercicio={ejercicio}></FCC>
    </>
  );
}
export async function getServerSideProps() {
  //const fs = require('fs');
  //const exercise = data[0]
  return {
    props: {ejercicio:data[1]}, // will be passed to the page component as props
  }
}

export default IndexPage;