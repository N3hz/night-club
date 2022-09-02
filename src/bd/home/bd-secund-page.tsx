import React from "react";
import { IListOfPublications } from "../../interfaces/home/ISecundPage";

export const BDSecundPage = () => {
  const publications: IListOfPublications[] = [
    {
      imageRoute: require("../../assets/titles/ByeBye.png"),
      title: "Bye Bye",
    },
    {
      imageRoute: require("../../assets/titles/7mo.png"),
      title: "El 7Hombre",
    },
    {
      imageRoute: require("../../assets/titles/Noche.png"),
      title: "Noche junto al agua",
    },
    {
      imageRoute: require("../../assets/titles/RCH.png"),
      title: "Rosas y Champaña",
    },
    {
      imageRoute: require("../../assets/titles/Unro.png"),
      title: "Unromantic",
    },
  ];

  return { publications };
};
