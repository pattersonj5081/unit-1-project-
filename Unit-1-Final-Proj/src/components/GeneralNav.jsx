import { useNavigate } from "react-router-dom";

export default function GeneralNav({ to, label, style, type = "button" }) {
  //Reusable bbutton component for navigation!
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <button
      type={type}
      className="general-button"
      onClick={handleClick}
      style={style}
    >
      {label}
    </button>
  );
}
