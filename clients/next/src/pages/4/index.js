import DSC from "../../tutor/diferenciaSumaCubos/DiferenciaSumaCubos";
import data from "../../tutor/diferenciaSumaCubos/ejerciciosDSC.json";

function IndexPage({ejercicio}) {
  return (
    <>
      <DSC ejercicio={ejercicio}></DSC>
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