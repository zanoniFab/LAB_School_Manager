import { forwardRef } from "react";
import "./SelectGroup.css";

const SelectGroup = forwardRef(
  ({labelText, helperText, id, name, data, ...props }, ref) => {

    return (
      <div className="select-box">
        <label htmlFor={labelText}>{labelText}</label>

        <select id={id} name={name} {...props} ref={ref}>
          <option value="">selecione</option>
          {data.map((item)=> (
                  <option key={item?.id} value={parseInt((item?.id))}>{item?.nome}</option>
          ))}
        </select>
        {!!helperText && <span>{helperText}</span>}

      </div>
    );
}
);


// const SelectGroup = forwardRef(
//   ({id, name, lista, ...props }, ref) => {
//     const refId = useMemo(() => id ?? name, [id, name]);
//     const {form} = props;
//     console.log("lista",lista);
//     return (
//       <div className="select-box">
//         <select name={refId} form={form} ref={ref}>
//           {lista.map((item)=> (
//                   <option key={item.id} value={parseInt((item.id))}>{item.nome}</option>
//           ))}
//         </select>

//       </div>
//     );
// }
// );

export default SelectGroup;