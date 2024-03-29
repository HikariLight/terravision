import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Contact from "./components/Contact.jsx"
import "./style/global.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />,
)
