// Core
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
// Hooks
import makeStyles from '@material-ui/core/styles/makeStyles';
// Components
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Styles
import style from './Card.style';


const useStyles = makeStyles(style, { name: 'Card' });

function Card({ id, name, onClick = () => {} }){
  const classes = useStyles();

  const handleClick = useCallback((evt) => onClick(evt, id), [id, onClick]);

  return (
    <MuiCard className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`#${id} ${name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
