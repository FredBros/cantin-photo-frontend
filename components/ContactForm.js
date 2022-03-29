import { useForm, ValidationError } from "@formspree/react";
import { color } from '../styles/variables';


export default function ContactForm() {
     const [state, handleSubmit] = useForm("xknyzlak");

     if (state.succeeded) {
       return <p>Thanks for your submission!</p>;
     }

     

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <input className="f-size-p" id="email" type="email" name="email" />
        <label className="f-size-small" htmlFor="email">
          e-mail
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="input-container">
        <textarea className="f-size-p" id="message" name="message" />
        <label className="f-size-small" htmlFor="message">
          votre message
        </label>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button className="f-size-3" type="submit" disabled={state.submitting}>
        envoyer
      </button>
      <ValidationError errors={state.errors} />

      <style jsx>{`
        .form-container {
          margin: 50px auto 50px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90vw;
          max-width: 800px;
          background-color: ${color.color6};
          color: ${color.mainColor};
          padding: 10px;
          gap: 10px;
        }
        .input-container {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 600px;
        }
        input {
          width: 100%;

          height: 56px;
        }
        textarea {
          width: 100%;
          min-height: 200px;
        }
        input,
        textarea {
          padding: 20px 16px 0 10px;
          background: ${color.colorText};
          color: ${color.mainColor};
          border: none;
        }
        label {
          padding: 0 12px;
          pointer-events: none;
          position: absolute;
          top: 2px;
        }
        input:focus {
          outline: 1px solid ${color.mainColor};
        }

        button {
          padding: 20px;
          transition: transform .1s;
        }
        button:hover{
transform: scale(1.1)
        }
         @media screen and (min-width: 600px) {
          .form-container {
            padding: 40px;
            gap: 20px;
          }
        }
      `}</style>
    </form>
  );
}
