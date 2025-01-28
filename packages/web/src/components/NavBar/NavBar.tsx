import { FC } from "react";

const NavBar: FC = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Notas</div>
    </nav>
  );
};

export default NavBar;

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};
