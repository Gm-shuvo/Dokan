import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    marginTop: "112px",
    width: "80%",
    margin: "0 auto",
    display: "grid",
    gap: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      gap: theme.spacing(4),
    },
  },
  top: {
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: "0.4fr 0.6fr",
    gap: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      justifyContent: "start",
      gap: theme.spacing(4),
    },
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "600px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "10px",
      transition: "all 0.5s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.02)",
      },
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: "500px",
      justifyContent: "start",
      "& img": {
        width: "80%",
        height: "100%",
      },
    },
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  rightHeader: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    "& h1": {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#555",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
    "& svg": {
      fontSize: "2rem",
      cursor: "pointer",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
  productPriceQuantity: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
    marginBottom: "20px",
    "& h1": {
      fontSize: ".9rem",
      color: "#555",
    },
    "& span": {
      fontSize: ".9rem",
      color: "#555",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
      "& h1": {
        fontSize: ".8rem",
      },
      "& span": {
        fontSize: ".8rem",
      },
    },
  },
  productColorVariant: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),

    "& span": {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#555",
      minWidth: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1),
      "& span": {
        fontSize: ".8rem",
      },
    },
  },

  productSizeVariant: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    "& span": {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#555",
      minWidth: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1),
      "& span": {
        fontSize: ".8rem",
        minWidth: "30px",
      },
    },
  },
  productButton: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    marginTop: "40px",
    "& button": {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        transform: "scale(1.02)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      "& button": {
        padding: "10px 15px",
      },
    },
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  buttonText: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  plusMinusbuttons: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    "& button": {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        transform: "scale(1.02)",
      },
    },
  },
}));
