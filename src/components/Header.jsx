import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { useStyles } from '../utils/styles';

const Header = () => {
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  return (
    <header>
      <Container className={logoContainer} maxWidth="lg">
        <SportsSoccerIcon className={soccerIcon} />
        <Typography 
          className={brandLogo} 
          variant="h4" component="h1" 
        >
          Bet
          <Typography variant="h4" component="span" color="secondary">
          Ninja
          </Typography>
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
