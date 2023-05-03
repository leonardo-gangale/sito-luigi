import classes from "./Menu.module.css";
import Link from "next/link";

export default function Menu(props) {
  return (
    <div className={classes.container} style={props.visible ? { transform: "translateX(30%)" } : { transform: "translateX(100%)" }}>
      <div className={classes.correctSize}>
        <ul className={classes.navigation}>
          <li>
            <Link className={classes.link} href={"/"} onClick={props.handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} href={"/adopt"} onClick={props.handleClick}>
              Adotta
            </Link>
          </li>
          <li>
            <Link className={classes.link} href={"/city"} onClick={props.handleClick}>
              La città
            </Link>
          </li>
          <li className={classes.contacts}>
            <div className={classes.contact}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={classes.icon}>
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
              <a href="mailto:leonardo.gangale06@gmail.com">leonardo.gangale06@gmail.com</a>
            </div>
            <div className={classes.contact}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={classes.icon}>
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>
              <a href="tel:+393913043709">+39 391 304 3709</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
