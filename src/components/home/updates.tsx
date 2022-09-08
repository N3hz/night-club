import React, { useState } from "react";
import Carousel from "nuka-carousel";
import { UseBD } from "../../bd/bd";
import { Comentary } from "./comentary";

export const Updates = () => {
  const { updates } = UseBD();

  const [coments, setComents] = useState(false);
  const [comentsId, setComentsId] = useState(0);

  const classDiv = coments ? "is-block" : "is-hidden";
  const changeBlock = (id: number) => {
    setComents(!coments);
    setComentsId(id);
  };
  const hideBlock = () => {
    setComents(false);
  };

  return (
    <>
      <h4 className="title is-5 is-blue" style={{ color: "white" }}>
        Actualizaciones
      </h4>
      <Carousel
        wrapAround={true}
        slidesToShow={1}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "red",
          },
        }}
        beforeSlide={hideBlock}
        style={{ maxWidth: 700 }}
      >
        {updates.map((x, index) => (
          <div key={index}>
            <img src={x.imageRoute} alt={x.alt} />
            <p
              onClick={() => changeBlock(x.id)}
              style={{ fontSize: 13, cursor: "pointer" }}
            >
              Comentarios
            </p>
          </div>
        ))}
      </Carousel>
      <Comentary classDiv={classDiv} idMenu={"Updates"} idMessage={comentsId} />
    </>
  );
};
