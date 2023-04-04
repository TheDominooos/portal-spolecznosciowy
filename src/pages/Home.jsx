import Content from "../components/Content";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
  });

  return (
    <>
      <Content />
      <Sidebar />
      <Footer />
    </>
  );
}

export default Home;
