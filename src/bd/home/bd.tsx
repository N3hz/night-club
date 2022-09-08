import {
  IListMemes,
  IListOfPublications,
  IListUpdates,
  IImageRouter,
  IIcons,
} from "../../interfaces/home/IBD";

export const UseBD = () => {
  const origin: string = "https://drive.google.com/uc?export=view&id=";

  const iconsRoute: IIcons[] = [
    {
      id: 0,
      name: "star",
      alt: "star",
      route: `${origin}1t0aGnVBN5-dr06P_61QIXvnirnGzBMGe`,
    },
    {
      id: 1,
      name: "eye",
      alt: "eye",
      route: `${origin}1ahU1z3LLsehFvOt3LQONPUF8KOhYoZsA`,
    },
  ];

  const imageRoutes: IImageRouter[] = [
    {
      id: 0,
      origin: "firstPage",
      name: "logoSmall",
      alt: "nightClub",
      route: `${origin}1TDs29suRfW0a9DZtn4pxrMhajhKSR9-a`,
    },
  ];

  const publications: IListOfPublications[] = [
    {
      id: 0,
      imageRoute: `${origin}1NL23ovrViDkqWV_9-LTH8gHt0xBYpExu`,
      title: "Bye Bye",
      alt: "Bye Bye",
      description:
        "El deprimido omega Seo-Yu perdió a toda su familia en un accidente de coche, y desde ese día, ha sufrido profundos sentimientos de desesperación, vergüenza, soledad y culpa. Una noche lluviosa, finalmente se da por vencido y decide morir saltando desde un puente y encontrar a su familia en el más allá, pero sus planes de suicidio se frustran de repente cuando un coche se estrella en el lugar. El conductor sin carné resulta ser un joven alfa llamado Seong-Hyeon, que culpa a Seo-Yu de distraerle y se asusta al ver los daños en el coche de su hermano mayor. Temeroso de enfrentarse a su hermano, Seong-Hyeon hace un trato con Seo-Yu: el chico pagará tres millones de wons si Seo-Yu miente a su hermano Seong-Hun y dice que el accidente ocurrió porque el adolescente le salvó la vida. Seong-Hun no se cree la historia de mierda en lo más mínimo, pero él y el mentalmente inestable omega parecen tener una clara química entre ellos...",
      chapters: [
        {
          dateUpdate: "2022-08-12 13:00:00",
          nameChapter: "Chapter 1.00",
          numberChapter: 1,
          listImagesChapter: [
            {
              numberPage: 1,
              routeImage: `${origin}1ea9fvBLmaYTxTmgi4Jv9DJfaseXjw_lg`,
              alt: "",
            },
            {
              numberPage: 2,
              routeImage: `${origin}1ea9fvBLmaYTxTmgi4Jv9DJfaseXjw_lg`,
              alt: "",
            },
          ],
        },
        {
          dateUpdate: "2022-08-14 18:30:00",
          nameChapter: "Chapter 2.00",
          numberChapter: 2,
          listImagesChapter: [
            {
              numberPage: 1,
              routeImage: `${origin}1kL6ArxcNYty-MHCD5QJ9VjOXOVQMBmp4`,
              alt: "",
            },
            {
              numberPage: 2,
              routeImage: `${origin}1ltN172tVCTe1zau0bzo5_p40_HEo-jbl`,
              alt: "",
            },
          ],
        },
      ],
    },
  ];

  const updates: IListUpdates[] = [
    {
      id: 0,
      imageRoute: `${origin}1gCWnLK1gPae1PZNK_V7qtUIwCEUFrYGZ`,
      alt: `Unro`,
    },
    {
      id: 1,
      imageRoute: `${origin}1gCWnLK1gPae1PZNK_V7qtUIwCEUFrYGZ`,
      alt: `Unro`,
    },
  ];

  const memes: IListMemes[] = [
    {
      id: 0,
      imageRoute: `${origin}1ydaYPsFocacSiCUqfSSxDbCLVOfJ9e4H`,
      alt: "Unro",
    },
    {
      id: 1,
      imageRoute: `${origin}1ydaYPsFocacSiCUqfSSxDbCLVOfJ9e4H`,
      alt: "Unro",
    },
  ];

  return { publications, updates, memes, imageRoutes, iconsRoute };
};
