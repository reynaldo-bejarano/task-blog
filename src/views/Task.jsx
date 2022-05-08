import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

const Task = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setData(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const addData = (item) => {
    setData((old) => [...old, item]);
  };

  const updateData = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, important: !item.important } : { item }
      )
    );
  };

  const deleteData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Form addData={addData} />
      <List data={data} updateData={updateData} deleteData={deleteData} />
    </div>
  );
};

export default Task;
