import React from "react";
import ComI from "./ComI";

const Forms = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
const ComF = ({ fc = [], buttonText, fd, onSubmit, sfd }) => {
  function rf(fk) {
    let element = null;

    switch (fk.componentType) {
      case Forms.INPUT:
        element = (
          <ComI
            type={fk.type}
            placeholder={fk.placeholder}
            value={fd[fk.name]}
            name={fk.name}
            onChange={(e) =>
              sfd({
                ...fd,
                [fk.name]: e.target.value,
              })
            }
          ></ComI>
        );
        break;

      default:
        element = (
          <ComI
            type={fk.type}
            placeholder={fk.placeholder}
            value={gfd[fk.name]}
            name={fk.name}
            onChange={(e) =>
              sfd({
                ...fd,
                [fk.name]: e.target.value,
              })
            }
          ></ComI>
        );
        break;
    }
    return element;
  }
  return (
    <form action="" onSubmit={onSubmit}>
      {fc.map((sc) => {
        return rf(sc);
      })}

      <button className="mt-8">{buttonText || "Submit"}</button>
    </form>
  );
};

export default ComF;
