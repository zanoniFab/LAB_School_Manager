import { useState } from "react";
import InputGroup from '../InputGroup';
import Button from "../Button/Button";
import './AtendimentoFilter.css';
function AtendimentoFilter ({onFilter}) {
    const [filter, setFilter] = useState("");
    
    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
      };

    const handleClickFilter = () => {
    onFilter(filter);
    };

    return (
        <div className="filter-buttons">
            <InputGroup
                type="text"
                placeholder="Digite o título do atendimento"
                value={filter}
                onChange={handleChangeFilter}
            />
            <Button onClick={handleClickFilter}>Buscar</Button>
        </div>
    )
}

export default AtendimentoFilter;