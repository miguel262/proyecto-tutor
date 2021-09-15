import TC from "../../tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../../tutor/trinomiosCuadraticos/ejerciciosTC.json";


function IndexPage({ejercicio}) {
  return (
    <>
      <TC ejercicio={ejercicio}></TC>
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