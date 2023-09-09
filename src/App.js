import React, { useReducer, useContext } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import ComponentC from "./components/ComponentC";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
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
import DataFetching1 from "./components/DataFetching1";
import DataFetching2 from "./components/DataFetching2";
import ParentComponent from "./components/ParentComponent";
import Count from "./components/Count";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import UserForm from "./components/UserForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <ClassCounterOne />
      <ClassMouse />
      <HookMouse />
      <MouseContainer />
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
      <CounterTwo />
      <CounterThree /> */}
        {/* Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        {/* <DataFetching1 /> */}
        {/* <DataFetching2 /> */}
        {/* <ParentComponent /> */}
        {/* <Counter /> */}
        {/* <FocusInput /> */}
        {/* <ClassTimer />
        <HookTimer />
        <DocTitleOne />
        <DocTitleTwo /> */}
        <UserForm />
        <Counter1 />
        <Counter2 />
      </div>
    </CountContext.Provider>
  );
}

export default App;
