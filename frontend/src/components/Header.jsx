import React from "react";
import logo from "../resource/img/logo.png";
import Container from "./layout/Container";

function Header() {
  return (
    <header style={styles.header}>
      <Container>
        <div style={styles.inner}>

          {/* 로고 */}
          <div style={styles.logoBox}>
            <img src={logo} alt="logo" style={styles.logo} />
          </div>

          {/* 메뉴 */}
          <nav style={styles.nav}>
            <a href="/login" style={styles.link}>로그인</a>
            <a href="/signup" style={styles.link}>회원가입</a>
          </nav>

        </div>
      </Container>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "90px",
    lineHeight: "50px",
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    height: "80px",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default Header;