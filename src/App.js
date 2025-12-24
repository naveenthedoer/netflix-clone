import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import appStore from "./utils/store/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
