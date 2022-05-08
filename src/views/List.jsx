import React from "react";

const List = ({ data, updateData, deleteData }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="container card my-5 shadow-sm">
          <div className="card-body">
            <p>
              Tarea: {item.task}{" "}
              <span className="badge text-dark">
                {item.important ? "(Importante)" : null}
              </span>
            </p>
            <p>Fecha: {item.date}</p>
            <p>Hora: {item.time}</p>

            <button
              className="btn btn-danger me-2"
              onClick={() => deleteData(item.id)}
            >
              Eliminar
            </button>

            <button
              className="btn btn-warning"
              onClick={() => updateData(item.id)}
            >
              {item.important ? "No Importante" : "Importante"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
