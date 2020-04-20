import React from "react";
import Header from "./components/Header";

function App() {
  const styles = {
    container: "container xl mx-auto",
  };

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default App;
