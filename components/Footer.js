import React from "react";
import cls from "classnames"
import Link from "next/link";
import { color } from "../styles/variables";


const Footer = () => {
  return (
    <footer>
      <ul className={cls("f-size-p", "nav-items")}>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>Gallerie</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Tarifs</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>À propos</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <p className="footer-text">@paranoïac gekko</p>

      <style jsx>{`
        footer {
          margin-top: 40px;
        }
        .nav-items {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 5px;
        }
        a:hover {
          filter: brightness(2);
        }
        .footer-text {
          font-size: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
