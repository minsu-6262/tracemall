import Container from "../components/layout/Container";


function Main() {
  return (
    <main style={styles.main}>
      <Container>

        <section style={styles.hero}>
          <div style={styles.left}>
            <h1 style={styles.title}>
              AI 기반 거래 분석 플랫폼
            </h1>

            <p style={styles.desc}>
              거래 데이터를 분석하고 더 나은 결정을 하세요
            </p>

            <div style={styles.actions}>
              <button style={styles.primaryBtn}>시작하기</button>
              <button style={styles.secondaryBtn}>서비스 알아보기</button>
            </div>
          </div>

          <div style={styles.right}>
  {/* <img src={heroImg} alt="hero" style={styles.image} /> */}
          </div>
        </section>

      </Container>
    </main>
  );
}

const styles = {
  main: {
    flex: 1,
    padding: "60px 0",
  },

  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    textAlign: "right",
  },

  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  desc: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  },

  actions: {
    display: "flex",
    gap: "12px",
  },

  primaryBtn: {
    padding: "12px 20px",
    backgroundColor: "#2f6fed",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  secondaryBtn: {
    padding: "12px 20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    maxWidth: "400px",
  },
};

export default Main;