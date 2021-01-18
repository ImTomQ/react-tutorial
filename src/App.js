import { useState } from "react";
import List from "./components/b1/List";

const data = [
  {
    id: 0,
    title:
      "You might be wondering why we’re using a counter here instead of a more realistic example.",
  },
  {
    id: 1,
    title:
      "This is to help us focus on the API while we’re still making our first steps with Hooks.",
  },
  {
    id: 2,
    title: "As a reminder, function components in React look like this.",
  },
];

function App() {
  const [list, setList] = useState(data);

  const handleChange = (value) => () => {
    setList((items) =>
      items.map((item) =>
        item.id === value
          ? { ...item, type: item.type === "remove" ? "" : "remove" }
          : item
      )
    );
  };

  const handleRemove = (value) => () => {
    setList((items) => items.filter((item) => item.id !== value));
  };

  const handleDelete = () => {
    setList((items) => items.filter((item) => item.type !== "remove"));
  };

  //filter se tra ve [] thoa man voi dieu kien dua ra

  return (
    <div style={{ padding: "20px" }}>
      <List
        list={list}
        handleChange={handleChange}
        handleRemove={handleRemove}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
