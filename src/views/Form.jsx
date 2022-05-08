import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const Form = ({ addData }) => {
  const initialState = {
    task: "",
    date: "",
    time: "",
    important: false,
  };

  const [data, setData] = useState(initialState);
  const { task, date, time, important } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Rellene la tarea a realizar",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    if (!task.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Seleccione una fecha",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    if (!date.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Seleccione una hora",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    addData({
      task,
      date,
      time,
      important,
      id: uuidv4(),
    });

    setData(initialState)
  };

  const handleChange = (e) => {
    let { name, type, checked, value } = e.target;
    setData((old) => {
      return { ...old, [name]: type === "checkbox" ? checked : value };
    });
  };

  return (
    <section className="container my-5 card shadow-lg">
      <form className="card-body" onSubmit={handleSubmit}>
        <label className="form-label">Tarea</label>
        <input
          type="text"
          name="task"
          className="form-control mb-3"
          placeholder="Ingrese la Tarea que deseas realizar"
          value={task}
          onChange={handleChange}
        />

        <label className="form-label">Fecha</label>
        <input
          type="date"
          name="date"
          className="form-control mb-3"
          placeholder="Ingrese la fecha de la tarea"
          value={date}
          onChange={handleChange}
        />

        <label className="form-label">Hora</label>
        <input
          type="time"
          name="time"
          className="form-control mb-3"
          placeholder="Ingrese la Hora de la tarea"
          value={time}
          onChange={handleChange}
        />

        <label className="me-3 mb-3">Importante</label>
        <input
          type="checkbox"
          className="mb-3"
          name="important"
          checked={important}
          onChange={handleChange}
        />

        <input
          type="submit"
          value="Agregar Tarea"
          className="btn btn-warning w-100"
        />
      </form>
    </section>
  );
};

export default Form;
