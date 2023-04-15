import { forwardRef, useMemo } from "react";
import "./SelectGroup.css";

const SelectGroup = forwardRef(
  ({id, name, lista, ...props }, ref) => {
    const refId = useMemo(() => id ?? name, [id, name]);

    const {form} = props;

    return (
      <div className="select-box">
        <select name={refId} form={form} ref={ref}>
          {lista.map((item)=> (
                  <option key={item.nome} value={item.nome}>{item.nome}</option>
          ))}
        </select>

      </div>
    );
}
);

export default SelectGroup;