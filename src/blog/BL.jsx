import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hD, hI, sbL, scE } from "../store/slices/bslice";

const BL = () => {
  const { blog } = useSelector((state) => state);
  // console.log(blog);
  const { bL } = blog;
  const ds = useDispatch();
  console.log(bL);
  useEffect(() => {
    ds(
      sbL({
        bL: JSON.parse(localStorage.getItem("bl")) || [],
      })
    );
  }, []);
  function onD(id) {
    ds(
      hD({
        id: id,
      })
    );
  }

  function oB(id) {
    ds(
      scE({
        id: id.id,
      })
    );
    ds(
      hI({
        title: id.title,
        description: id.description,
      })
    );
  }

  return (
    <ul>
      {bL.length > 0 ? (
        bL.map((mb) => (
          <div
            key={mb.id}
            style={{
              border: "1px solid red",
              padding: "10px",
              marginTop: "12px",
            }}
          >
            <h3>{mb.title}</h3>
            <h3>{mb.description}</h3>
            <button style={{ marginRight: "5px" }} onClick={() => oB(mb)}>
              Edit Blog
            </button>
            <button onClick={() => onD(mb.id)}>Delete Blog</button>
          </div>
        ))
      ) : (
        <h1>No blog added ! Please add one</h1>
      )}
    </ul>
  );
};

export default BL;
