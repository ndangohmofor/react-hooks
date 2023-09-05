import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import ComponentC from "./components/ComponentC";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer />
      <HookCounterOne />
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching />
      <UserContext.Provider value={"Mofor"}>
        <ChannelContext.Provider value={"CXO"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      <CounterTwo /> */}
      <CounterThree />
    </div>
  );
}

export default App;
