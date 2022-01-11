import React from 'react';
import Rating from '@mui/material/Rating';
import '../styles/cardSofa.css';

const CardSofa = (props) => {
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-ratings">
          <h2>{props.rating}</h2>
          <Rating
            name="read-only"
            value={props.rating}
            precision={0.1}
            readOnly
            style={{ fontSize: `2em` }}
          />
          <h3>
            {props.rating >= 4.5
              ? 'Excelente'
              : props.rating >= 4 && props.rating < 4.5
              ? 'Muy bueno'
              : props.rating >= 3 && props.rating < 4
              ? 'Bueno'
              : props.rating >= 2 && props.rating < 3
              ? 'Regular'
              : props.rating >= 1 && props.rating < 2
              ? 'Malo'
              : 'Muy malo'}
          </h3>
        </div>
        <div className="card-image">
          <img src={props.image} width={400} alt={props.title} />
        </div>

        <div className="card-attributes">
          <h4>{props.title}</h4>
          <p>{`${props.description.substring(0, 60)}...`}</p>
        </div>
        <div className="card-url">
          <a href={props.link} target="_blank">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSofa;
