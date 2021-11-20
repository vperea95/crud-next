import React from "react";
import { useFieldArray } from "react-hook-form";


export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test"
  });
  console.log(append)
  return (
    <>
      <ul>
        {fields.map((item, index) => {
          
          return (
            <li key={item.id}>
              <input
                name={`test[${index}].name`}
                ref={register()}
                defaultValue={item.name}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
        >
          Agregar
        </button>

      </section>

    </>
  );
}

