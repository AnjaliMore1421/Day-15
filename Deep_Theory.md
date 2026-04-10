# 1) React Context API (Important Points)

##  Context API -
- Context API is a **built-in React feature**.
- It is used to **share data globally** between components.
- Helps avoid **prop drilling** (passing props through many levels).

## Main Parts of Context API
- **createContext()** → Creates a context object.
- **Provider** → Provides data to all child components.
- **Consumer** → Receives and uses the data.
- **useContext()** → Modern and easy way to access context in functional components.

## Provider
- Wraps the components that need shared data.
- Uses the `value` prop to pass data.

### Example
```jsx
<MyContext.Provider value={data}>
  <App />
</MyContext.Provider>
```

## Consumer
- Used to access data from context.
- Mostly used in older code.

### Example
```jsx
<MyContext.Consumer>
  {(value) => <h1>{value}</h1>}
</MyContext.Consumer>
```

##  Use of Context API :
- Used for **theme, user login data, and language settings**.
- Makes code **clean and reusable**.
- Easy state sharing across components.

## Key Advantages
- Improves code readability.
- Reduces unnecessary prop passing.
- Makes component communication easier.

  # 2)Prop Drilling – Problem & Solution

##  Prop Drilling -
Prop drilling means **passing data from a parent component to a deeply nested child component through multiple intermediate components**, even when those intermediate components do not need the data.

## Problem
- Makes code lengthy and hard to manage.
- Intermediate components receive unnecessary props.
- Reduces code readability.
- Difficult to maintain in large applications.

## Example of Problem
```jsx
function App() {
  const user = "Anjali";

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello {user}</h1>;
}
```

Here, `user` is passed through `Parent` and `Child` even though only `GrandChild` uses it.

## Solution
Use **React Context API** to share data directly with the required component without passing props through every level.

## Example Solution using Context API
```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Anjali">
      <GrandChild />
    </UserContext.Provider>
  );
}

function GrandChild() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}
```

# 3) React Reducer Pattern

##  Reducer Pattern
The **Reducer pattern** is a way to manage state in React using the `useReducer()` hook.

It is useful when:
- State logic is **complex**
- Multiple state values depend on each other
- Many actions update the same state

It works similar to **Redux**.

## Syntax
```jsx
// state = current state
// dispatch = function to trigger actions
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state` → current state value  
- `dispatch` → function used to send actions  
- `reducer` → function that decides how state changes  
- `initialState` → starting value of state  

## Reducer Function
A reducer function takes **current state** and **action** as parameters and returns a **new updated state**.

```jsx
// Reducer function handles state updates
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // Increase count by 1
      return { count: state.count + 1 };

    case "decrement":
      // Decrease count by 1
      return { count: state.count - 1 };

    default:
      // Return current state if action not matched
      return state;
  }
}
```

## Example
```jsx
import React, { useReducer } from "react";

// Initial state object
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // Increase count
      return { count: state.count + 1 };

    case "decrement":
      // Decrease count
      return { count: state.count - 1 };

    default:
      // Return same state
      return state;
  }
}

function Counter() {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Display current count */}
      <h1>{state.count}</h1>

      {/* Increment button */}
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      {/* Decrement button */}
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
}
```

## Key Advantage
Reducer pattern keeps all state logic in one place, making code easy to read and maintain.

# 4) Global State Design

##  Global State -
**Global state** means data that needs to be accessed by multiple components across the application.

Instead of passing data through props from parent to child, global state allows components to access shared data directly.

##  Use of Global State
- Avoids **prop drilling**
- Makes data sharing easy
- Keeps code clean and organized
- Useful for app-wide data

## Common Examples
- User login information
- Theme (light / dark mode)
- Language settings
- Cart items in shopping apps
- Notifications

## How to Design Global State
Global state is usually created using:
- **Context API**
- **useReducer**
- **Redux** (for large apps)

## Basic Flow
```text
Global State Store
       ↓
   Provider
       ↓
All Child Components
       ↓
Access using useContext / dispatch
```

## Example using Context API
```jsx
import React, { createContext, useContext, useState } from "react";

// Create global context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Anjali");

  return (
    // Provide global state
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  // Access global state
  const { user } = useContext(UserContext);

  return <h1>Welcome {user}</h1>;
}
```

## Key Advantage
Global state design makes the application **scalable, reusable, and easy to maintain**.

# 5) Combining Context + Reducer for Scalability

Combining **Context API + useReducer** means using Context to **share state globally** and use Reducer to **manage complex state logic**.

This approach is highly scalable for medium to large React applications.

## Why Use Both Together
- **Context API** → Shares data globally across components
- **Reducer** → Handles state updates in one place
- Avoids **prop drilling**
- Makes code **clean and maintainable**
- Better for **scalable applications**

## Flow
```text
Component → dispatch(action) → reducer → updated state → Context Provider → all components
```

## Example Structure
```text
src/
│
├── context/
│   ├── AppContext.js
│   ├── AppReducer.js
│   └── AppProvider.js
│
└── components/
    └── Profile.jsx
```

## Step 1: Create Context
```jsx
import { createContext } from "react";

// Create context
export const AppContext = createContext();
```

## Step 2: Create Reducer
```jsx
// Initial state
export const initialState = {
  user: "",
  count: 0
};

// Reducer function
export function AppReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      // Update user
      return { ...state, user: action.payload };

    case "INCREMENT":
      // Increase count
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
}
```

## Step 3: Create Provider
```jsx
import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import { AppReducer, initialState } from "./AppReducer";

// Provider component
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
```

## Step 4: Use in Component
```jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Profile() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      {/* Display user */}
      <h1>{state.user}</h1>

      {/* Display count */}
      <h2>{state.count}</h2>

      {/* Update state */}
      <button
        onClick={() =>
          dispatch({ type: "SET_USER", payload: "Anjali" })
        }
      >
        Set User
      </button>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
    </div>
  );
}
```

## Why It Is Scalable
- State logic stays inside reducer
- Global access through Context
- Easy to add new actions
- Cleaner folder structure
- Reusable in large projects

