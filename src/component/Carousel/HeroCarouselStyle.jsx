import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  slider: {
    height: 480,
    width: '80%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 480,
      width: '90%',
    },
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    clipPath: 'circle(0% at 0 0)',
    '&.active': {
      clipPath: 'circle(150% at 0 50%)',
      transition: '1.3s',
      transitionProperty: 'clip-path',
    },
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    position: 'relative',
    '& > img': {
      height: '80%',
      width: 'auto',
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
    '& > div': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    [theme.breakpoints.down('sm')]: {
      '& > img': {
        height: '60%',
        width: 'auto',
      },
    },
  },
  info: {
    position: 'absolute',
    top: '50%',
    left: 30,
    transform: 'translateY(-50%)',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      top: '20%',
      
    },
  },
  title:{
    textTransform: 'uppercase',
    font: "bold",
    fontWeight: 700,
    color: '#fff',
    marginBottom: 10,
  },
  description:{
    color: "lihgtgray",
    marginBottom: 20,

  },
  navigation: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    bottom: 30,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  navBtn: {
    height: 8,
    width: 8,
    margin: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#ff7c7c',
      height: 12,
      width: 12,
    },
  },
}));