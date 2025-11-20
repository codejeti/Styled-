import styled from "styled-components"
const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: black;

ul {
  display: flex; // @include flex
  justify-content: center;
  align-items: center;
  gap: 20px; // $gap-size

  li {
    list-style: none;
    font-size: 13px;
    font-weight: 400;
    color: white;
  }
}
`;


export default function Header() {
  return (

    <HeaderContainer>용
    <h2>OZ코딩스쿨</h2>
    <ul>
    <li>로그인</li>
    <li>회원가입</li>
    <li>내클래스</li>
    </ul>
    </HeaderContainer>
  );
}
