import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pag.css";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Recquery = () => {
  const navigate = useNavigate();

  const dateandtime = moment().format("MMMM Do YYYY, h:mm:ss a");
 const [img, setImg] = useState('')
  const [input, setInput] = useState({
    category: "",
    voiceLanguage: "",
    queTitle: "",
    quDescription: "",
    startTime: "",
    endTime: "",
    attachment: "",
    subcategory: "",
    date: dateandtime
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInput((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleimage = (e) => {
    setImg(e.target.files[0].name);
  };
  console.log(input.attachment);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://capstone-ba.onrender.com/userr",
        input
      );
    } catch (err) {
      console.log("there is an error");
    }
    setInput("");
    navigate("/home");
  };

  const file = [
    {
      id: "Zen-classDoubt",
      one: "Task",
      two: "Webcode",
      three: "Classtopic",
      four: "Webkata",
      five: "Codekata",
      six: "Assessment",
    },
    {
      id: "Placement Related",
      one: "Company-info",
      two: "CompletionCertification",
      three: "Portfolio",
    },
    {
      id: "Coordination related",
      one: "SessionTiming",
      two: "SessionjoiningLink",
      three: "session Feedback",
      four: "Completion Certification",
      five: "Portfolio",
    },
    {
      id: "Pre-bootcamp",
      one: "session",
      two: "Payment",
      three: "Codekata",
      four: "Webkata",
      five: "Task",
      six: "others",
    },
  ];

  return (
    <div className="main">
      <div className="top-div">
        <div style={{ margin: "10px" }}>
          <Link to="/home" className="btn btn-primary btn-icon-split">
            <span className="text">Back</span>
          </Link>
          <div className="title1">Create Query</div>
        </div>
      </div>
      <div className="sub-main">
        <h4 className="title">Topic</h4>
        <div>
          <div>
            <h4 className="sub-title">Category</h4>
            <div className="drop">
              <select
                className="select-box"
                required
                name="category"
                onChange={handlechange}
              >
                <option value="">select category</option>
                <option value="Zen-classDoubt">Zen-classDoubt</option>
                <option value="Placement Related">Placement Related</option>
                <option value="Coordination related">
                  Coordination related
                </option>
                <option value="Pre-bootcamp">Pre-bootcamp</option>
              </select>
            </div>
          </div>
          {file.map((data,index) =>
            data.id === input.category ? (
              <div  key={index}>
                <h4 className="sub-title">Sub-Category</h4>
                <div className="drop">
                  <select
                    className="select-box"
                    required
                    name="subcategory"
                    onChange={handlechange}
                  >
                    <option value="">select category</option>
                    <option value={data.one}>{data.one}</option>
                    <option value={data.two}>{data.two}</option>
                    <option value={data.three}>{data.three}</option>
                    <option value={data.four}>{data.four}</option>
                    <option value={data.five}>{data.five}</option>
                    <option value={data.six}>{data.six}</option>
                  </select>
                </div>
              </div>
            ) : (
              <React.Fragment key={index}></React.Fragment>
            )
          )}
        </div>
        <div >
          <h4 className="sub-title">Voice Language</h4>
          <div className="drop">
            <select
              className="select-box"
              required
              name="voiceLanguage"
              value={input.voiceLanguage}
              onChange={handlechange}
            >
              <option value="">select language</option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <hr />
        <h4 className="title">Details</h4>
        <div>
          <h4 className="sub-title">Query Title</h4>
          <input
            className="drop"
            required
            name="queTitle"
            placeholder="Enter query title"
            onChange={handlechange}
          />
        </div>
        <div>
          <h4 className="sub-title">Query Description</h4>
          <input
            className="drop"
            required
            name="quDescription"
            placeholder="Enter Description"
            onChange={handlechange}
          />
        </div>
        <hr />

        <h4 className="title">Your available time?</h4>
        <div>
          <h4 className="sub-title">From</h4>
          <input
            className="drop"
            name="startTime"
            type="time"
            required
            max="19:00"
            onChange={handlechange}
          />
        </div>
        <div>
          <h4 className="sub-title">To</h4>
          <input
            className="drop"
            name="endTime"
            type="time"
            required
            max="19:00"
            onChange={handlechange}
          />
        </div>
        <hr />
        <div>
          <h4 className="title">Attachment</h4>
          <div class="d-flex">
            <div className="attachments__body">
              <input
                type="file"
                className="add__attachment"
                name="attachment"
                onChange={handleimage}
              ></input>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/">
            <button
              type="reset"
              className="btn cancel-btn"
              style={{
                color: "#375dce",
                borderColor: "#375dce",
                padding: "3px 24px",
                margin: "5px",
              }}
            >
              Cancel
            </button>
          </Link>
          <div className="lastBtns">
            <button
              type="submit"
              class="btn submit-btn"
              disabled=""
              onClick={handleSubmit}
              style={{
                backgroundColor: "#375dce",
                color: "white",
                padding: "3px 24px",
                margin: "5px",
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <div>{img}</div>
    </div>
  );
};

export default Recquery;
