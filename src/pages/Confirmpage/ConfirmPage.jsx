import React from "react";
import {
  makeStyles,
  Typography,
  Link,
  Container,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh",
  },
  icon: {
    width: "100px",
    height: "100px",
    marginBottom: theme.spacing(2),
  },
  message: {
    color: theme.palette.success.main,
    marginBottom: theme.spacing(2),
  },
}));

const ConfirmPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box textAlign="center">
        <lord-icon
          className={classes.icon}
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "300px", height: "300px", marginBottom: "30px" }}
          src="https://cdn.lordicon.com/lupuorrc.json"
        ></lord-icon>
        <Typography variant="h5" className={classes.message}>
          Congratulations! Your order was placed successfully.
        </Typography>
        <Link href="/" color="inherit">
          Go to Home Page &gt;&gt;
        </Link>
      </Box>
    </Container>
  );
};

export default ConfirmPage;
