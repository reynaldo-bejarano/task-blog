import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SocialMedia = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section>
      <div className="container d-flex align-items-center justify-content-evenly mb-5">
        <a
          href="https://www.instagram.com/rbjsz24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className="size-icon " />
        </a>
        <a
          href="https://www.linkedin.com/in/reynaldo-bejarano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="size-icon" />
        </a>
        <a
          href="https://github.com/reynaldo-bejarano?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="size-icon" />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
