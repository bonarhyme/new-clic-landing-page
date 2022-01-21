import React from "react";

const MyCard = ({ Logo, email, text, link, linkText, btn, big }) => {
  return (
    <article className={`my-card ${btn ? "bg-pink" : "green"} ${big && "big"}`}>
      <Logo size={75} color={!btn ? "white" : undefined} />
      <address className={`${!btn && "white"}`}>{email}</address>
      <p>
        <b className={`${!btn && "white"}`}>{text}</b>
      </p>
      <a href={link} className={btn ? "card-btn" : "card-a"}>
        {linkText}
      </a>
    </article>
  );
};

export default MyCard;
