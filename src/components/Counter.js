import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { Button } from "react-bootstrap";

function Counter() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [counterInt, setCounterInt] = useState(
    cookies.Counter ? Number(cookies.Counter) : 0
  );

  setCookie("Counter", counterInt.toString(), { path: "/" });

  const decrementHandler = () => {
    setCounterInt(counterInt - 1);
    // setCookie("Counter", counterInt.toString(), { path: "/" });
    // console.log(cookies.Counter);
  };
  const incrementHandler = () => {
    setCounterInt(counterInt + 1);
    // setCookie("Counter", counterInt, { path: "/" });
  };
  const zeroHandler = () => {
    setCounterInt(0);
  };

  return (
    <div>
      <h1>Cookie Counter</h1>
      <h4>
        This counter will persist as a cookie, even if you refresh this page or
        take a tour around the website and come back!
      </h4>
      {/* <div>{"Cookie: " + cookies.Counter}</div>
      <div>{"State: " + counterInt}</div> */}

      <div>{"Counter: " + counterInt}</div>

      <Button onClick={decrementHandler}>-</Button>
      <Button onClick={zeroHandler}>0</Button>
      <Button onClick={incrementHandler}>+</Button>
    </div>
  );
}

export default Counter;
