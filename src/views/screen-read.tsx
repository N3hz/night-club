import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UseBD } from "../bd/home/bd";
import { IChapterImages } from "../interfaces/home/IBD";

export const ScreenRead = () => {
  const search = useLocation().search;
  const idSelection = new URLSearchParams(search).get("q");

  const [lastChapter, setlastChapter] = useState<number | undefined>(undefined);
  const [chapterSelected, setChapterSelected] = useState<
    IChapterImages[] | undefined
  >(undefined);

  const { publications, imageRoutes, iconsRoute } = UseBD();

  const logoSmall = imageRoutes.filter((x) => x.id === 0)[0];
  const star = iconsRoute.filter((x) => x.id === 0)[0];
  const eye = iconsRoute.filter((x) => x.id === 1)[0];
  const publication = publications.filter(
    (x) => x.id === parseInt(idSelection ?? "0")
  )[0];

  const chapterSelectedChange = ({ id }: { id: number }) => {
    if (lastChapter === id) {
      setlastChapter(undefined);
      setChapterSelected(undefined);
      return;
    }

    const listChapters = publication.chapters.find(
      (x) => x.numberChapter === id
    )?.listImagesChapter;

    setlastChapter(id);
    setChapterSelected(listChapters);
  };

  console.log(chapterSelected);

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile is-centered">
            <img src={logoSmall.route} alt={logoSmall.alt} />
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column d-mg-cover">
          <img src={publication.imageRoute} alt={publication.alt} />
        </div>
        <div className="column d-mg-description">
          <div className="block">
            <strong style={{ color: "#e4087e", fontSize: 14 }}>Title: </strong>
            <span style={{ fontSize: 13 }}> {publication.title}</span>
          </div>
          <div className="block" style={{ textAlign: "justify" }}>
            <strong style={{ color: "#e4087e", fontSize: 14 }}>
              Description:{" "}
            </strong>
            <span style={{ fontSize: 13 }} className="is-hidden-tablet">
              {publication.description.substring(0, 128)}
            </span>
            <span style={{ fontSize: 13 }} className="is-hidden-mobile">
              {publication.description.substring(0, 550)}
            </span>
          </div>
          <div className="block">
            <strong style={{ color: "#e4087e", fontSize: 14 }}>Rating: </strong>
            <img style={{ width: 14 }} src={star.route} alt={star.alt} />
            <img style={{ width: 14 }} src={star.route} alt={star.alt} />
            <img style={{ width: 14 }} src={star.route} alt={star.alt} />
            <img style={{ width: 14 }} src={star.route} alt={star.alt} />
            <img style={{ width: 14 }} src={star.route} alt={star.alt} />
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column d-mg">
          <table className="table  is-fullwidth" style={{ fontSize: 12 }}>
            <thead>
              <tr>
                <th>Upload Date</th>
                <th>Chapter</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {publication.chapters.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{x.dateUpdate}</td>
                    <td>{x.nameChapter}</td>
                    <td>
                      <img
                        style={{ width: 20 }}
                        src={eye.route}
                        alt={eye.alt}
                        onClick={() =>
                          chapterSelectedChange({ id: x.numberChapter })
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="columns">
        <div className="column d-mg">
          {chapterSelected ? (
            chapterSelected.map((x, index) => {
              return <img key={index} src={x.routeImage} alt={x.alt} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
