import React from "react";

export default function List(props) {
  const { list, handleChange, handleRemove, handleDelete } = props;

  return (
    <div>
      {list.map((items) => {
        return (
          <div>
            <div stype={{ padding: "50px" }}>
              {items.id} - {items.title}
            </div>
            <div stype={{ padding: "10px" }}>
              <button onClick={handleRemove(items.id)}>Delete</button>
            </div>
            <div stype={{ padding: "10px" }}>
              <button onClick={handleChange(items.id)}>
                {items.type === "remove" ? "undo" : "remove"}
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}
