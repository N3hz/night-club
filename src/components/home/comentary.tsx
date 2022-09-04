import React from "react";

export const Comentary = ({
  classDiv,
  idMenu,
  idMessage,
}: {
  classDiv: "is-block" | "is-hidden";
  idMenu: "Updates" | "Memes";
  idMessage: number;
}) => {
  const addComentary = () => {
    console.log("Add a new comentary");
  };

  console.log({
    idMenu,
    idMessage,
  });

  return (
    <div className={classDiv}>
      <br />
      <div className="field">
        <label className="label is-blue" style={{ fontSize: 12 }}>
          Nombre Usuaria
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            style={{ backgroundColor: "black", color: "white", fontSize: 12 }}
            value={"Anónimo"}
          />
        </div>
      </div>

      <label className="label is-blue" style={{ fontSize: 12 }}>
        Comentario
      </label>
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Find a repository"
            style={{ backgroundColor: "black", color: "white", fontSize: 12 }}
          />
        </p>
        <p className="control">
          <button className="button is-dark is-small" onClick={addComentary}>
            Enviar
          </button>
        </p>
      </div>

      <div className="field">
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Textarea"
            disabled
            style={{ backgroundColor: "black", color: "white", fontSize: 12 }}
            value={
              "13:08:2022 8:16 - Alguien: Me encanto \n13:08:2022 8:16 - Otra: como estas?"
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};
