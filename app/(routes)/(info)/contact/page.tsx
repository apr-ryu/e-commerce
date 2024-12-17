import React from "react";
import "./contact.scss";

export default function ContactPage() {
  return (
    <div id="contact">
      <p className="article-title">INFO</p>
      <p className="article-subtitle">CONTACT</p>
      <div className="article-contents">
        <p className="article-contents-paragraph">
          Hi there, we are always here to help! Leave us a message if you have
          any questions. <br /> You can also email us at {""}
          <u>info@mogutable.com</u>, give us a call at <u>(929) 426-6185</u> or
          visit us at
          <u>130 Grand St, Brooklyn, NY 11249</u>.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19555.429110511115!2d-73.99561838537704!3d40.71799036101894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595ada52da85%3A0xcd880c7e6b8f9c25!2sMogutable!5e0!3m2!1sen!2sus!4v1731630166590!5m2!1sen!2sus"
          width="600"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
