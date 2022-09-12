import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UseBD } from "../bd/bd";
import { IChapterImages } from "../interfaces/home/IBD";

export const ScreenRead = () => {
  const search = useLocation().search;
  const idSelection = new URLSearchParams(search).get("q");

  const [lastChapter, setlastChapter] = useState<number | undefined>(undefined);
  const [chapterSelected, setChapterSelected] = useState<
    IChapterImages[] | undefined
  >(undefined);

  const { publications, imageRoutes, iconsRoute } = UseBD();

  const letraTitle = 13;
  const letraContain = 13;

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

  const nextChangeChapter = ({ id }: { id: number }) => {
    chapterSelectedChange({
      id: (lastChapter ?? 0) + id,
    });
  };

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile is-centered">
            <Link to={`/`}>
              <img src={logoSmall.route} alt={logoSmall.alt} />
            </Link>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column d-mg-imagen">
          <img src={publication.imageRoute} alt={publication.alt} />
        </div>
        <div className="column d-mg-description">
          <div className="block">
            <strong style={{ color: "#e4087e", fontSize: letraTitle }}>
              Title:{" "}
            </strong>
            <span style={{ fontSize: letraContain }}> {publication.title}</span>
          </div>
          <div className="block" style={{ textAlign: "justify" }}>
            <strong style={{ color: "#e4087e", fontSize: letraTitle }}>
              Description:{" "}
            </strong>
            <span
              style={{ fontSize: letraContain }}
              className="is-hidden-tablet"
            >
              {publication.description.substring(0, 165)}
            </span>
            <span
              style={{ fontSize: letraContain }}
              className="is-hidden-mobile"
            >
              {publication.description}
            </span>
          </div>
          <div className="block">
            <strong style={{ color: "#e4087e", fontSize: letraTitle }}>
              Rating:{" "}
            </strong>

            {(() => {
              const arr = [];
              for (let i = 0; i < publication.rating; i++) {
                arr.push(
                  <img
                    key={i}
                    style={{ width: 14 }}
                    src={star.route}
                    alt={star.alt}
                  />
                );
              }
              return arr;
            })()}
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column d-mg-lr">
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
                        style={{ width: 20, cursor: "pointer" }}
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
        <div className="column">
          {chapterSelected ? (
            chapterSelected.map((x, index) => {
              return <img key={index} src={x.routeImage} alt={x.alt} />;
            })
          ) : (
            <></>
          )}

          {chapterSelected ? (
            <div className="d-mg-topp">
              <div className="columns is-mobile">
                <div className="column">
                  <button
                    className="button is-info"
                    onClick={() => nextChangeChapter({ id: -1 })}
                  >
                    Previous chapter
                  </button>
                </div>
                <div
                  className="column"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button
                    className="button is-info"
                    onClick={() => nextChangeChapter({ id: 1 })}
                  >
                    Next chapter
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
