// import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
// import mail from "../../assets/lottie/contact.json";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const notif = () => {
    toast.success(
      <div>
        <p>Message envoyé</p>
      </div>,
      {
        position: "top-right",
        type: "success",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  return (
    <div className="containerContactForm">
      {/* <Player autoplay loop src={mail} className="contactLottie" /> */}
      {/* <form onSubmit={notif}> */}
      <form>
        <div className="input_contact">
          <h1>Contact</h1>
        </div>
        <div>
          <input type="text" name="name" placeholder="Your name..." />
        </div>
        <div>
          <input
            type="Your email"
            name="user_email"
            placeholder="exemple@gmail.com"
            required
          />
        </div>
        <div>
          <textarea name="message" placeholder="Message..." />
        </div>
      </form>
      <button
        type="submit"
        className="buttonSubmit"
        value="Send"
        onClick={() => {
          notif();
        }}
      >
        Envoyer
      </button>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
