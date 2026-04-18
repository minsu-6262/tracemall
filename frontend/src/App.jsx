import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/layout/Container";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    padding: "40px 0",
  },
};

export default App;