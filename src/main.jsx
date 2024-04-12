import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
} from "react-router-dom";

import './index.css';

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallBackHook } from './06-memos/CallBackHook';
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre';
// import { CounterApp } from './01-useState/CounterApp';
// import { HookApp } from './HookApp';
// import "./08-useReducer/intro-reduce";

// import { TodoApp } from './08-useReducer/TodoApp';

import { MainApp } from './09-useContext/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* // <React.StrictMode> */}
    <MainApp />
  {/* // </React.StrictMode>, */}
  </BrowserRouter>
)
