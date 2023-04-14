import { useState } from "react";
import InputGroup from '../InputGroup';
import Button from "../Button/Button";

function AlunoFilter ({onFilter}) {
    const [filter, setFilter] = useState("");
    
    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
        console.log("Aluno filter",filter);
      };

    const handleClickFilter = () => {
        console.log("filter handleclick",filter);
        onFilter(filter);
    };

    return (
        <div className="box-filter">
            <InputGroup
                type="text"
                placeholder="Digite um nome de aluno"
                labelText="Buscar"
                value={filter}
                onChange={handleChangeFilter}
            />
            <Button onClick={handleClickFilter}>Buscar</Button>
        </div>
    )
}

export default AlunoFilter;