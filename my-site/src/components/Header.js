import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const headersData = [
    {
        label: "Listings",
        href: "/listings",
      },
      {
        label: "Mentors",
        href: "/mentors",
      },
      {
        label: "My Account",
        href: "/account",
      },
      {
        label: "Log Out",
        href: "/logout",
      },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left"
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));




export default function Header() {

    const { header, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return (
        <Toolbar className={toolbar}>
            {headLogo}
            <div>{getMenuButtons()}</div>
        </Toolbar>
        )
    }


    const headLogo = (
        <Typography variant='h6' component='h1' className={logo}>
            Chris King
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button 
                {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: RouterLink,
                    className: getMenuButtons
                }}
                >
                    {label}
                    </Button>
            );
        });
    };


    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    )
}
