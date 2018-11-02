import React from "react";
import "./Form.css";

const Form = () => (
    <div>
<div className="field">
  <label className="label">Chore</label>
  <div className="control">
    <input className="input is-info" type="text" placeholder="Enter your chore">
  </input>
</div>
</div>

<div className="field">
<label className="label">Priority</label>
  <div className="control">
    <div className="select is-info">
      <select>
        <option>High</option>
        <option>Medium</option>
        <option>Normal</option>
      </select>
    </div>
  </div>
</div>

        <div className="field">
  <label className="label">Description</label>
  <div className="control">
    <input className="input is-info" type="text" placeholder="Enter a brief description of your chore">
  </input>
</div>
</div>

  <label className="label">Deadline</label>
  <div className="control">
    <input className="input is-info" type="text">
  </input>
</div>
<br></br>
<div class="buttons">
  <span class="button is-link">Save chore</span>
  </div>
  </div>
);

export default Form;