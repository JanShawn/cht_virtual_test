import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);
  return <>查無此頁面，3秒後重新倒轉</>;
}
