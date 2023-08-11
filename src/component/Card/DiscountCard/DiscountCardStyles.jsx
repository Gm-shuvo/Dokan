import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "80%",
    height: "100%",
    backgroundColor: "black",
    padding: "50px 0",
    borderRadius: "10px",
    minHeight: "300px",
    [theme.breakpoints.down("md")]: {
      padding: "40px 40px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "100%",
      padding: "20px 0",
    },
  },
  cardContent: {
    width: "100%",
    height: "100%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "0.4fr 0.6fr",
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
  },
  cardContentLeft: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  cardContentRight: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "0",
      bottom: "0",
    },
  },

  cardContentRightTop: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "& h3": {
      fontSize: "30px",
      fontWeight: "700",
      color: "white",
      marginBottom: "20px",
      "& span": {
        color: "#f4a09c",
      },
    },
    "& p": {
      fontSize: "20px",
      fontWeight: "400",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "end",
      "& h3": {
        fontSize: "26px",
        fontWeight: "700",
        color: "white",
        marginBottom: "15px",
        
      },
      "& p": {
        fontSize: "18px",
        fontWeight: "400",
      },
    },
    
  },

  cardContentRightBottom: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "flex-start",
    marginTop: "20px",
    "& form": {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      "& input": {
        width: "300px",
        height: "40px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        padding: "0 10px",
        fontSize: "18px",
        fontWeight: "400",
        color: "black",
        "&::placeholder": {
          fontSize: "18px",
          fontWeight: "400",
          color: "black",
        },
      },
      "& button": {
        width: "150px",
        height: "40px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        marginLeft: "10px",
        color: "White",
        backgroundColor: "#f4a09c",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& span": {
          marginLeft: "10px",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
      "& form": {
        width: "90%",
        justifyContent: "center",
        "& input": {
          width: "200px",
          height: "30px",
          fontSize: "15px",
          fontWeight: "400",
          "&::placeholder": {
            fontSize: "15px",
            fontWeight: "400",
            color: "black",
          },
        },
        "& button": {
          width: "100px",
          height: "30px",
          fontSize: "15px",
        },
      },
    },
  },
}));
