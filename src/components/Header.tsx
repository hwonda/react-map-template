import { css } from '@emotion/react';

export default function Header() {

  return (
    <>
      <header css={headerStyle}>
        <a css={anchorStyle} href="./">
          <strong>제목</strong>
        </a>
      </header>
    </>
  );
}

const headerStyle = css`
  display: flex;
  align-items: center;

  height: 2rem;
  padding: 1rem;

  font-size: large;

  background-color: darkgray;
`;

const anchorStyle = css`
  color: black;
  text-decoration: none;
`;
