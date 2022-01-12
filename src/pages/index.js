import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import CardSofa from '../components/cardSofa';

import '../styles/index.css';

const IndexPage = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetch('https://api.sofas.mx/api/colchons')
      .then((response) => response.json())
      .then((data) => setDataApi(data.data));
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <div style={{ backgroundImage: `url('../../colchon.png')` }} className="hero-container">
        <div className="hero-container-txt">
          <h1>¿Cual es el mejor colchón de México?</h1>
          <p>
            En esta lista encontrarás los mejores colchones baratos avalados por la opinión de
            expertos en descanso y la opinión de cientos de usuarios que ya los han probado.
          </p>
        </div>
      </div>

      {dataApi
        .sort((a, b) => b.attributes.Rating - a.attributes.Rating)
        .map((item, i) => {
          return (
            <CardSofa
              key={i}
              title={item.attributes.Title}
              rating={item.attributes.Rating}
              description={item.attributes.Description}
              link={item.attributes.Link}
              position={item.attributes.position}
              image={item.attributes.ImageLink}
            />
          );
        })}

      <div className="index-description">
        <p>
          Elegir un colchón no es algo que pueda tomarse a la ligera. Si realmente quieres descansar
          y cuidar la salud de tu espalda no puedes fijarte tan solo en el precio, sino en que sus
          propiedades encajen con tu morfología y forma de dormir.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
