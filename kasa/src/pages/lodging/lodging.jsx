import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import Tags from "../../components/tags/Tags";
import Collapse from "../../components/collapse/Collapse";

function Lodging() {
  const { id } = useParams();

  const [lodging, setLodging] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Les données n'ont pas pu être récupérées");
        return response.json();
      })
      .then((data) => {
        setLodging(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement ...</p>;
  if (error || !lodging) return <Navigate to="/NotFound" />;

  const equipmentList = lodging.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <main className="main-lodging">
      <Slideshow pictures={lodging.pictures} />
      <div className="information">
        <div className="information-main">
          <div className="title-tags">
            <h1>{lodging.title}</h1>
            <p>{lodging.location}</p>
            <Tags tags={lodging.tags} />
          </div>
        </div>
        <div className="information-secondary">
          <Host host={lodging.host} />
          <Rating rating={lodging.rating} />
        </div>
      </div>
      <div className="collapse-section">
        <div className="collapse-container">
          <Collapse title="Description" text={lodging.description} />
        </div>
        <div className="collapse-container">
          <Collapse title="Équipements" text={<ul>{equipmentList}</ul>} />
        </div>
      </div>
    </main>
  );
}

export default Lodging;
