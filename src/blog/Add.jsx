import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hb, hI, hT, scE } from "../store/slices/bslice";

const Add = () => {
  const state = useSelector((state) => state);
  const { blog } = state;
  console.log(blog);
  console.log(blog.cE);
  const { cE } = blog;

  // console.log(blog);
  const ds = useDispatch();
  function hc(event) {
    ds(
      hI({
        [event.target.name]: event.target.value,
      })
    );
  }
  function hs(event) {
    event.preventDefault();
    if (cE !== null) {
      ds(hb());
      ds(
        hI({
          description: "",
          title: "",
        })
      );
      ds(
        scE({
          id: null,
        })
      );
    } else {
      ds(hT());
    }
  }

  return (
    <div>
      <form onSubmit={hs}>
        <div>
          <label htmlFor="Enter your Blog Title"> </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            id="title"
            onChange={hc}
            value={blog.fd.title}
          />
        </div>
        <div>
          <label htmlFor="Enter your Blog Description"> </label>
          <input
            type="text"
            name="description"
            placeholder="Enter The Description"
            id="description"
            onChange={hc}
            value={blog.fd.description}
          />
        </div>
        <button type="submit">{cE ? "Edit Blog" : "Add New Blog"}</button>
      </form>
    </div>
  );
};

export default Add;
