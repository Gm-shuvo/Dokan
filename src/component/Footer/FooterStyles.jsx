import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: theme.spacing(16),
        padding: "0 35px",
        borderTop: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(8),
        },
    },
    section: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: theme.spacing(4),
        marginBottom: theme.spacing(4),
        paddingTop: theme.spacing(3),
    },
    brandTitle: {
        marginTop: theme.spacing(3),
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        letterSpacing: '4px',
    },
    navTitle: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    navList: {
        display: 'flex',
        flexDirection: 'column',
    },
    navItem: {
        marginBottom: theme.spacing(2),
    },
    navLink: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    reachOut: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    contactInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
        '& svg': {
            marginRight: theme.spacing(1),
        },
    },
    bottomSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px 0`,
    },
    copyRight: {
        fontSize: '0.875rem',
    },
    socialIcons: {
        display: 'flex',
        gap: theme.spacing(5),
        '& a': {
            color: theme.palette.primary.main,
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.25)',
            },
        },
    },
    socialIcon: {
        fontSize: '1.5rem',
    },
}));

export default useStyles;
