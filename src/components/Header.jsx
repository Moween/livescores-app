import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  brandLogo: {
    color: 'white',
    padding: 10
  }
})

const Header = () => {
  const { brandLogo } = useStyles();
  return (
    <header>
      <Container>
        <Typography className={brandLogo} variant="h4" component="h1">
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
