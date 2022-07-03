import styled from "styled-components";
function TextAreaEdit(props) {
  const handleInputChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <TextWrapper>
      <span
        className={`inline-text_copy inline-text_copy--${
          !props.isInputActive ? "active" : "hidden"
        }`}
      >
        {props.text}
      </span>
      <textarea
        style={{ width: "100%" }}
        value={props.text || ""}
        onChange={handleInputChange}
        maxLength={props.maxLength}
        className={`inline-text_input inline-text_input--${
          props.isInputActive ? "active" : "hidden"
        }`}
      />
    </TextWrapper>
  );
}

export default TextAreaEdit;

const TextWrapper = styled.div`
  .inline-text_copy--active,
  .inline-text_input--active {
    font: inherit;
    color: inherit;
    text-align: inherit;
    padding: 0;
    background: none;
    border: none;
    border-bottom: 1px dashed #999999;
    outline: none;
  }

  .inline-text_copy--active {
    cursor: pointer;
  }

  .inline-text_copy--hidden,
  .inline-text_input--hidden {
    display: none;
  }

  .inline-text_input--active {
    border-bottom: 1px solid #666666;
    text-align: left;
  }
`;
