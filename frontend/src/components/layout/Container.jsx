const Container = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
};

export default Container;