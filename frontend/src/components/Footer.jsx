import React from "react";
import Container from "./layout/Container";


function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <div style={styles.inner}>
          © 2026 TraceMall. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: "1px solid #eee",
  },

  inner: {
    textAlign: "center",
    padding: "20px 0",
    color: "#777",
    fontSize: "14px",
  },
};

export default Footer;