import styled from "styled-components";

// .content-container 및 내부 스타일을 하나로 묶음
const ContentContainer = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5px;


img {
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
}


span {
  font-size: 12px;
  color: #d7fa00;
  border: 1px solid #d7fa00;
  padding: 4px 5px;
  border-radius: 3px;
}


div {
  font-size: 18px;
  font-weight: 600;
}


p {
  font-size: 12px;
  color: rgb(160, 160, 160);
}
`;

export default function Content({ content }) {
  return (

    <ContentContainer>
    <img src={content.img} alt={content.title} />
    <span>모집중</span>
    <div>{content.title}</div>
    <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
