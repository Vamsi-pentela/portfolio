import React, { useState } from 'react';
import './Connect.css';

const Connect = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "55d68abd-b43b-4829-858c-f3adde29941c"); // ✅ Replace with your real key from Web3Forms
    // 🔒 TIP: Secure your access key by enabling domain protection at https://web3forms.com/dashboard

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage("Message sent successfully!");
        event.target.reset();
        setTimeout(() => setSuccessMessage(""), 4000); // Auto-hide message
      } else {
        alert("Something went wrong! Please try again later.");
      }
    } catch (error) {
      alert("Submission failed. Please check your connection or try again later.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {successMessage && (
        <div className="top-notification">
          {successMessage}
        </div>
      )}

      <section className="connect-section" id="contact">
        <div className="container connect-container">
          <h2 className="connect-heading">
            Get in <span className="highlight-connect">touch</span>
          </h2>

          <div className="connect-content">
            <div className="connect-left">
              <h3 className="connect-subheading">
                Let's <span className="highlighted">talk</span>
              </h3>
              <p className="connect-text">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
              </p>

              <div className="connect-info">
                <p><i className="bi bi-envelope-fill connect-icon"></i> vamsipentela14@gmail.com</p>
                <p><i className="bi bi-telephone-fill connect-icon"></i> +91 9652170506</p>
                <p><i className="bi bi-geo-alt-fill connect-icon"></i> Martur, Andhra Pradesh</p>
              </div>
            </div>

            <form className="connect-form" onSubmit={onSubmit}>
              <input type="text" name="name" placeholder="Enter your name" required />
              <input type="email" name="email" placeholder="Enter your email" required />
              <textarea name="message" placeholder="Enter your message" rows="10" required></textarea>
              <div className="submit-btn-container">
                <button type="submit" className="submit-btn">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
