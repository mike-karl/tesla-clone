import React from 'react'

type Props = {
    entry: IntersectionObserverEntry | undefined,
}

const Footer = ({entry}: Props) => {
  return (
    <footer style={{opacity: `calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`}}>
      <nav>
        <ul>
          <li>
            <a href="">
              <span>Tesla</span>
            </a>
          </li>
          <li>
            <a href="">Privacy & Legal</a>
          </li>
          <li>
            <a href="">Vehical Recalls</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Engage</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer