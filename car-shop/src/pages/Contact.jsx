import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "../components/Alert";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.title = "Cars - Contact";
  }, []);

  const onSubmit = (data) => {
    setAlertMessage("Your message has been sent successfully!");
    setAlertType("success");
    setShowAlert(true);
    reset();
  };

  const onError = (errors) => {
    setAlertMessage("Please fix the errors in the form.");
    setAlertType("error");
    setShowAlert(true);
  };

  return (
    <div className="container mt-5 py-5 text-white">
      <h2 className="mb-4">Contact Us</h2>
      <p>Have questions? Get in touch with us!</p>

      <form className="mt-4" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input {...register("name")} type="text" className="form-control bg-dark text-white border-light" />
          {errors.name && <p className="text-danger mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input {...register("email")} type="email" className="form-control bg-dark text-white border-light" />
          {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea {...register("message")} className="form-control bg-dark text-white border-light" rows="4"></textarea>
          {errors.message && <p className="text-danger mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="btn ">Send</button>
      </form>

      <Alert
        message={alertMessage}
        show={showAlert}
        onClose={() => setShowAlert(false)}
        type={alertType}
      />
    </div>
  );
}
