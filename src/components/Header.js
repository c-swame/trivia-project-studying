import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import triviaLogo from '../assets/images/trivia-logo.gif';

class Header extends Component {
  renderScore = () => {
    const { score } = this.props;
    return (
      <Typography
        variant="span"
        gutterBottom
      >
        <Stack
          direction="row"
          spacing={ 2 }
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box
            sx={ { width: '100%',
              fontSize: 16,
              textAlign: 'center' } }
          >
            Score:
          </Box>
          <Box
            data-testid="header-score"
            sx={ { width: '100%',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center' } }
          >
            {score}
          </Box>
        </Stack>
      </Typography>
    );
  }

  render() {
    const { name, email } = this.props;
    const hash = md5(email).toString();

    return (
      <Stack
        component="header"
        direction="row"
        spacing={ 4 }
        justifyContent="space-between"
        alignItems="center"
        sx={ { py: 1, px: 4, bgcolor: 'black', color: 'white' } }
      >
        <Box component={ Link } to="/">
          <Box
            component="img"
            sx={ {
              maxHeight: '75px',
            } }
            alt="Logo do trivia"
            src={ triviaLogo }
          />
        </Box>
        <Stack
          direction="row"
          spacing={ 4 }
          justifyContent="flex-end"
          alignItems="center"
          sx={ { py: 1, px: 4, bgcolor: 'black', color: 'white' } }
        >
          <Stack
            direction="column"
            spacing={ 1 }
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Typography
              variant="span"
              gutterBottom
              data-testid="header-player-name"
            >
              <Box
                sx={ { width: '100%',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'center' } }
              >
                { name }
              </Box>
            </Typography>
            {this.renderScore()}
          </Stack>
          <Avatar
            alt="player"
            src={ `https://www.gravatar.com/avatar/${hash}` }
            sx={ { width: 56, height: 56 } }
            imgProps={ { 'data-testid': 'header-profile-picture' } }
          />
        </Stack>
      </Stack>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
