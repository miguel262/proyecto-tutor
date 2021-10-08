import React,{useState, useEffect} from 'react'
import { Select } from "@chakra-ui/react"

export const SelectStep = ({steps, correct, setSelect}) => {
    //elimina duplicados en caso especial FCC 
    const newSteps= [...new Set(steps)];
    //se duplica la variable para no modificar la anterior y se desordena
    const [newSteps2, setNewSteps2] = useState(newSteps)
    useEffect(() => {
        setNewSteps2(newSteps2.sort(function(){return Math.random()-0.5}));
    }, []);
    
    const resp = (e) =>{ e==correct&&setSelect(false)}

    return (
        <div>
            <Select variant="filled" placeholder="Seleccionar paso" size="sm" onChange={(e)=> resp(e.target.value)}>
                {newSteps2.map((step)=><option key={step} value={newSteps.indexOf(step)}>{""+step}</option>)}
            </Select>
        </div>
    )
}
