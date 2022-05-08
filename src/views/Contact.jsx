import SocialMedia from "../components/SocialMedia";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9nuzwct",
        "template_p98isnq",
        form.current,
        "TMD6VR2YHF1lGz_aj"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            title: 'Gracias!!',
            text: 'Mensaje enviado!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="bd-container mt-5 card shadow-lg bg-warning">
        <div className="card-body">
          <h2 className="text-center mb-4">Get In Touch!</h2>
          <p className="text-center">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
        </div>
      </div>

      <form ref={form} className="container mb-5 p-5" onSubmit={sendEmail}>
        <div className="form-group">
          <label className="form-label">Asunto</label>
          <input
            type="text"
            name="subject"
            className="form-control mb-4"
            placeholder="Asunto del mensaje"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control mb-4"
            placeholder="Ingrese su nombre completo"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Ingrese su correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control mb-4"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mensaje</label>
          <textarea
            name="message"
            className="form-control mb-4"
            rows="3"
            required
          ></textarea>
        </div>

        <input
          type="submit"
          value="Enviar Mensaje"
          className="btn btn-primary w-100"
        />
      </form>

      <SocialMedia />
    </>
  );
};

export default Contact;
