import styled from "styled-components";

const contents = [
  "상호명: Twitch Interactive",
  "대표자: Emmett Sheat",
  "CEO 주소: 350 Bush Street, 2nd Floor, San Francisco, California 94194, USA",
  "070-8984-5697",
  "호스팅 서비스 제공자: Amazon Web Services, Inc.",
];

export function Footer() {
  return (
    <StyledFooter>
      {contents.map((txt, idx) => (
        <Line key={idx}>{txt}</Line>
      ))}
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  text-align: center;
`;

const Line = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;

  color: #a5a7b5;
`;
