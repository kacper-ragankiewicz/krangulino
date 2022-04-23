import React from "react";
import logo from "../../logo.svg";
import cn from "classnames";
import styles from "./Start.module.sass";
import Box from "../../components/Box";

const Start = ({className}) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Box
      className={cn(styles.App, className)}
    >
      <header className={cn(styles.header, className)} >
        <img src={logo} className={cn(styles.logo, className)} alt="logo" />
        <p>{!data ? "Server does not respons..." : data}</p>
      </header>
    </Box>
  );
}

export default Start;