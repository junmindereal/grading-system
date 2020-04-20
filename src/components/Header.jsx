import React from "react";
import logo from "../assets/logo.svg";

function Header(props) {
  const styles = {
    header: `flex`,
    headerLeft: `flex
      w-3/12
      p-6
      border-r
      border-gray-300`,
    headerRight: `flex
      items-center
      container
      border-b
      border-gray-300`,
    logo: `w-16`,
    addStudent: `ml-auto
      px-4
      py-3
      border-2
      border-green-400
      rounded-md
      font-semibold
      text-xl
      text-green-700
      hover:bg-green-400
      hover:text-white`,
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src={logo} alt="Seventy Five Logo" />
      </div>
      <div className={styles.headerRight}>
        <button className={styles.addStudent}>Add Student</button>
      </div>
    </div>
  );
}

export default Header;
