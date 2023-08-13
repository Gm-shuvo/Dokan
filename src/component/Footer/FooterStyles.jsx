import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "80%",
    margin: "60vh auto 0 auto",
    borderTop: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "60vh auto 0 auto",
    },
  },

  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    
  },

  brandName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "& img": {
      marginBottom: theme.spacing(1),
      
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: 'center',
      '& h6': {
        textAlign: 'center',
        fontSize: '.8rem',
      },

    },
  },
  menubar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  brandTitle: {
    marginTop: '14px',
    textTransform: "uppercase",
    fontSize: "0.75rem",
    letterSpacing: "4px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.625rem",
    },

  },

  navTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "0.875rem",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },

  },

  navList: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    listStyle: "none",
    padding: 0,
    
  },

  navItem: {
    marginBottom: theme.spacing(2),
    "&:hover": {
      textDecoration: "underline",
    },
  },

  navLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    "&:hover": {
      textDecoration: "underline",
    },
  },

  useFulLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  flexReach: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  reachOutFlex: {
    display: 'none',
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
    },
  },
  reachOut: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    "& svg": {
      marginRight: theme.spacing(1),
    },
    color: theme.palette.text.secondary,
  },
  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing(2)}px 0`,
  },
  copyRight: {
    fontSize: "0.875rem",
  },
  socialIcons: {
    display: "flex",
    gap: "8px",
    "& a": {
      color: theme.palette.primary.main,
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.25)",
      },
    },
  },
  socialIcon: {
    fontSize: "1.5rem",
  },
}));

export default useStyles;
