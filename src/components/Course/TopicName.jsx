import styled from "styled-components";

const TopicName = styled.div`
  display: flex;
  font-size: 1.25rem;
  img {
    margin: 2px;
  }
  color: #404040;
  ${(props) => (props.selected ? "color: #00bcd4; font-weight: bold" : "")}
  ${(props) => (props.closed ? "color:#FE5252; font-weight: bold" : "")}
`;

function TopicNameWrapper(props) {
  return (
    <TopicName {...props}>
      <img src={`/images/icons/${props.iconType}.svg`} alt='' />
      <span>{props.topicName}</span>
    </TopicName>
  );
}

export default TopicNameWrapper;
