import { useState } from "react";

const Button = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <div className="columnleft">
        <button
          className="button1"
          style={{
            backgroundColor: switch1 ? "#5C48D3" : "white",
            color: switch1 ? "white" : "#5C48D3",
          }}
          onClick={() => {
            setSwitch1(true);
          }}
        >
          ON
        </button>

        <button
          className="button3"
          style={{
            backgroundColor: switch2 ? "#5C48D3" : "white",
            color: switch2 ? "white" : "#5C48D3",
          }}
          onClick={() => {
            setSwitch2(true);
          }}
        >
          ON
        </button>

        <button
          className="button5"
          style={{
            backgroundColor: switch3 ? "#5C48D3" : "white",
            color: switch3 ? "white" : "#5C48D3",
          }}
          onClick={() => {
            setSwitch3(true);
          }}
        >
          ON
        </button>
      </div>

      <div className="columnright">
        <button
          className="button2"
          style={{
            backgroundColor: switch1 ? "white" : "#5C48D3",
            color: switch1 ? "#5C48D3" : "white",
          }}
          onClick={() => {
            setSwitch1(false);
          }}
        >
          OFF
        </button>

        <button
          className="button4"
          style={{
            backgroundColor: switch2 ? "white" : "#5C48D3",
            color: switch2 ? "#5C48D3" : "white",
          }}
          onClick={() => {
            setSwitch2(false);
          }}
        >
          OFF
        </button>

        <button
          className="button6"
          style={{
            backgroundColor: switch3 ? "white" : "#5C48D3",
            color: switch3 ? "#5C48D3" : "white",
          }}
          onClick={() => {
            setSwitch3(false);
          }}
        >
          OFF
        </button>
      </div>

      <div className="noway">
        <button
          className="nowaybutton"
          style={{
            backgroundColor:
              switch1 && switch2 && switch3 ? "#46AC4A" : "#D34848",
          }}
        >
          "{switch1 && switch2 && switch3 ? "Go!" : "No way!"}
        </button>

        <button
          className="reset"
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          resetOff
        </button>
      </div>
    </>
  );
};

export default Button;
