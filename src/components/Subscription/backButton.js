import { useNavigate } from "react-router";
import ArrowIcon from "./img/arrow.png";
import { IconButton } from "@mui/material";

export default function BackButton() {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <IconButton onClick={handleClick}>
      <img
        src={ArrowIcon}
        className="back-button"
        alt="back"
        height="40px"
        filter="invert(100%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(109%) contrast(107%)"
      />
    </IconButton>
  );
}
