import Content from "../components/Content";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useTokenStore from "../hooks/useToken";

function Home() {
  const navigate = useNavigate();
  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Content />
      <Sidebar />
      <Footer />
    </>
  );
}

export default Home;
