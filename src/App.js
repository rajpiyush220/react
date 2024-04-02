import logo from "./logo.svg";
import "./App.css";
import Button from "./utility/component/button";
import Row from "./utility/component/row";
import { useState } from "react";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };
  const validateValues = (inputValues) => {
    let errors = {};
    console.log("inputValues", inputValues);
    if (inputValues.sourceHost.length < 5) {
      errors.sourceHost = "Email is too short";
    }
    return errors;
  };
  const [inputFields, setInputFields] = useState({
    sourceHost: "",
    sourcePort: "",
    sourceServerName: null,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  return (
    <div className="FormContainer">
      <h2 className="Center">INFORMIX DATABASE BACKUP</h2>
      <h4 className="Header">Add Source Database Details</h4>
      <form onSubmit={handleSubmit}>
        <div className="FormRow">
          <Row
            className={"Label"}
            forLabel={"sourceHost"}
            text={"Host"}
            type={"text"}
            id={"sourceHost"}
            name={"sourceHost"}
          />
          <Row
            className={"Label"}
            forLabel={"sourcePort"}
            text={"Port"}
            type={"text"}
            id={"sourcePort"}
            name={"sourcePort"}
          />
        </div>

        <div className="FormRow">
          <Row
            className={"Label"}
            forLabel={"sourceServerName"}
            text={"Server Name"}
            type={"text"}
            id={"sourceServerName"}
            name={"sourceServerName"}
          />
          <Row
            className={"Label"}
            forLabel={"sourceDb"}
            text={"DB Name"}
            type={"text"}
            id={"sourceDb"}
            name={"sourceDb"}
          />
        </div>

        <div className="FormRow">
          <Row
            className={"Label"}
            forLabel={"sourceUserName"}
            text={"User Name"}
            type={"text"}
            id={"sourceUserName"}
            name={"sourceUserName"}
          />
          <Row
            className={"Label"}
            forLabel={"sourcePwd"}
            text={"Password"}
            type={"Password"}
            id={"sourcePwd"}
            name={"sourcePwd"}
          />
        </div>
        <Button
          id={"testConnection"}
          className={"ButtonLink Link"}
          text={"Test Connection"}
        />
        <h4 className="Header">Add Target Details</h4>
        <div className="FormRow">
          <Row
            className={"Label"}
            forLabel={"targetIp"}
            text={"Host"}
            type={"text"}
            id={"targetIp"}
            name={"targetIp"}
          />
          <Row
            className={"Label"}
            forLabel={"targetLocation"}
            text={"Path"}
            type={"text"}
            id={"targetLocation"}
            name={"targetLocation"}
          />
        </div>
        <div className="FormRow">
          <Row
            className={"Label"}
            forLabel={"targetUserName"}
            text={"User Name"}
            type={"text"}
            id={"targetUserName"}
            name={"targetUserName"}
          />
          <Row
            className={"Label"}
            forLabel={"targetPwd"}
            text={"Password"}
            type={"Password"}
            id={"targetPwd"}
            name={"targetPwd"}
          />
        </div>
        <div className="FormRow">
          <Button id="fullBackup" className="Button1" text={"Full Backup"} />
          <Button
            id="incremental"
            className="ButtonDisabled"
            text={"Incremental"}
          />
          <Button
            id="differential"
            className="ButtonDisabled"
            text={"Differential"}
          />
          <Button
            id="pitr"
            className="ButtonDisabled"
            text={"Transaction Log"}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
