import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Gallery.css";

const Gallery = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/logements")
      .then((res) => res.json())
      .then((data1) => setDatas(data1));
  }, []);
  console.log(datas);
  return (
    <div className="Gallery">
      {datas.map((data) => (
        <Card
          title={data.title}
          key={data.id}
          cover={data.cover}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default Gallery;
