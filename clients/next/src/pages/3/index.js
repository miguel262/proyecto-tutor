import DC from "../../tutor/diferenciaCuadrados/DiferenciaCuadrados";
import data from "../../tutor/diferenciaCuadrados/ejerciciosDC.json";


function IndexPage({ejercicio}) {
  return (
    <>
      <DC ejercicio={ejercicio}></DC>
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