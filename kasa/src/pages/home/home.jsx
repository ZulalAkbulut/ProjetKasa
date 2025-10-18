import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

function Home() {
  const [lodgings, setLodgings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Les données n'ont pas pu être récupérées");
        }
        return response.json();
      })
      .then((data) => {
        setLodgings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="main-home">
      <div className="home-banner">
        <Banner
          url="src/assets/IMG.png"
          title={"Chez vous,\npartout et ailleurs"}
        />
      </div>
      <div className="gallery">
        {lodgings.map((lodging) => (
          <Link key={lodging.id} to={`/lodging/${lodging.id}`}>
            <Card key={lodging.id} image={lodging.cover} title={lodging.title} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
