import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-size: 1.3rem;
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

const StyledSlider = styled.div`
  border-radius: 5px;
  background: ${props => props.theme.colors.primary};
  height: 15px;
  width: 400px;
  margin-left: 30px;
  position: relative;
`;

const StyledThumb = styled.div`
  height: 31px;
  width: 31px;
  position: relative;
  border-radius: 50px;
  background: ${props => props.theme.colors.secondary};
  top: -8px;
  cursor: pointer;
`;

export default function SliderLarge() {
  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const diff = React.useRef();
  // console.log(event.clientX);
  // console.log(diff.current);
  // console.log(sliderRef.current.getBoundingClientRect().left);
  const handleMouseMove = event => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;
    const end = sliderRef.current.offset;
  };
  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };
  const handleMouseDown = event => {
    diff.current = event.clientX - thumbRef.getBoundingClientRect().left;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <Label>
      Berufserfahrung:{" "}
      <StyledSlider ref={sliderRef}>
        <StyledThumb ref={thumbRef} onMouseDown={handleMouseDown} />
      </StyledSlider>
    </Label>
  );
}
