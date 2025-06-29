import "./App.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
// createBrowserRouter: 라우팅의 경로를 만들어주는 컴포넌트
// RouterProvider: 앱 컴포넌트에서 실제로 렌더링이 될 때 라우팅을 제공하는 함수
// Outlet:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Leadership from "./Page/Leadership/Leadership";
import Board from "./Page/Board/Board";
import Services from "./Page/Services/Services";
import Contact from "./Page/Contact/Contact";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    //기본적으로 / 로 사용자가 접속하면 Layout(직접만든 함수)가 렌더링되어 보여짐
    path: "/",
    element: <Layout />,
    //Layout의 Outlet에 아래의 자식요소들이 보여지게 됨
    children: [
      {
        index: true,// path: "/",와 동일한 역할
        element: <MainPage />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

