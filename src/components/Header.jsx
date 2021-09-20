import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  brandLogo: {
    color: 'white',
    padding: 10,
    paddingLeft: 0
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  soccerIcon: {
    color: 'white'
  }
})

const Header = () => {
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  return (
    <header>
      <Container className={logoContainer}>
        <SportsSoccerIcon className={soccerIcon} />
        <Typography 
          className={brandLogo} 
          variant="h4" component="h1" 
        >
          Live
          <Typography variant="h4" component="span" color="secondary">
          Score
          </Typography>
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
