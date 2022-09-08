import {
  IListMemes,
  IListOfPublications,
  IListUpdates,
} from "../../interfaces/home/IBD";

export const UseBD = () => {
  const publications: IListOfPublications[] = [
    {
      id: 0,
      imageRoute: require("../../assets/titles/ByeBye.png"),
      title: "Bye Bye",
    },
    {
      id: 1,
      imageRoute: require("../../assets/titles/7mo.png"),
      title: "El 7Hombre",
    },
    {
      id: 2,
      imageRoute: require("../../assets/titles/Noche.png"),
      title: "Noche junto al agua",
    },
    {
      id: 3,
      imageRoute: require("../../assets/titles/RCH.png"),
      title: "Rosas y Champaña",
    },
    {
      id: 4,
      imageRoute: require("../../assets/titles/Unro.png"),
      title: "Unromantic",
    },
  ];

  const updates: IListUpdates[] = [
    {
      id: 0,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 1,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 2,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 3,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 4,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
  ];

  const memes: IListMemes[] = [
    {
      id: 0,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 1,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 2,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 3,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
    {
      id: 4,
      imageRoute: require("../../assets/titles/Unro.png"),
    },
  ];

  return { publications, updates, memes };
};
