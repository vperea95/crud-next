import React from "react";
import { useFieldArray } from "react-hook-form";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;
console.log(fields)
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
          append
        </button>

      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}

