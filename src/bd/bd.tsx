import {
  IListMemes,
  IListOfPublications,
  IListUpdates,
  IImageRouter,
  IIcons,
} from "../interfaces/home/IBD";

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
      imageRoute: `${origin}12eF_-u9qDx-eayrA1XF8YKJqjMn1lNWZ`,
      title: "Bye Bye",
      alt: "Bye Bye",
      rating: 5,
      description:
        "El deprimido omega Seo-Yu perdió a toda su familia en un accidente de coche, y desde ese día, ha sufrido profundos sentimientos de desesperación, vergüenza, soledad y culpa. Una noche lluviosa, finalmente se da por vencido y decide morir saltando desde un puente y encontrar a su familia en el más allá, pero sus planes de suicidio se frustran de repente cuando un coche se estrella en el lugar. El conductor sin carné resulta ser un joven alfa llamado Seong-Hyeon, que culpa a Seo-Yu de distraerle y se asusta al ver los daños en el coche de su hermano mayor. Temeroso de enfrentarse a su hermano, Seong-Hyeon hace un trato con Seo-Yu: el chico pagará tres millones de wons si Seo-Yu miente a su hermano Seong-Hun y dice que el accidente ocurrió porque el adolescente le salvó la vida. Seong-Hun no se cree la historia de mierda en lo más mínimo, pero él y el mentalmente inestable omega parecen tener una clara química entre ellos...",
      chapters: [
        {
          dateUpdate: "2022-09-11 21:00:00",
          nameChapter: "Chapter 1.00",
          numberChapter: 1,
          listImagesChapter: [
            {
              numberPage: 1,
              routeImage: `${origin}1J5PUDPJxEsYezEA6oZCzV7TTZgfcGXmJ`,
              alt: "",
            },
            {
              numberPage: 2,
              routeImage: `${origin}159vAEQACZ58epHb2UGQI2O6dNRjnbrLi`,
              alt: "",
            },
            {
              numberPage: 3,
              routeImage: `${origin}19RnRsO-S0zCe4gp35ESckXaBINguC_Gz`,
              alt: "",
            },
            {
              numberPage: 4,
              routeImage: `${origin}1xx4MXNdkLdqS44Gmtpr_yME0-w-fBjXA`,
              alt: "",
            },
            {
              numberPage: 5,
              routeImage: `${origin}1FDEzQo3sHGAHFxXFYccSmNLF5mku0qzK`,
              alt: "",
            },
            {
              numberPage: 6,
              routeImage: `${origin}1gyip9mdYOeKFQ93mDtMpux2wg_a47yhc`,
              alt: "",
            },
            {
              numberPage: 7,
              routeImage: `${origin}1pMaarBBtCJoPvYf3-efdPe2ptqb1h9MB`,
              alt: "",
            },
            {
              numberPage: 8,
              routeImage: `${origin}19i0N3kqK0fI1cXvc7oiF5DOljQ1cbX_m`,
              alt: "",
            },
            {
              numberPage: 9,
              routeImage: `${origin}13gwmPy60TX1dsUGLOtlWegNwf6SWUcmY`,
              alt: "",
            },
            {
              numberPage: 10,
              routeImage: `${origin}1aSUFXp9YI_eO5S250YwZYlrTOz0dCV88`,
              alt: "",
            },
            {
              numberPage: 11,
              routeImage: `${origin}1i1-YbJLa0R5jLK19X8ERWEFW_UI-79-Y`,
              alt: "",
            },
            {
              numberPage: 12,
              routeImage: `${origin}190mhZxScaM3Dud4nYC2O_cKkIHPpxTyI`,
              alt: "",
            },
            {
              numberPage: 13,
              routeImage: `${origin}1SQ40umT6p977ra2zKoq9E5ag8T3O3RXy`,
              alt: "",
            },
          ],
        },
        {
          dateUpdate: "2022-09-11 21:00:00",
          nameChapter: "Chapter 2.00",
          numberChapter: 2,
          listImagesChapter: [
            {
              numberPage: 1,
              routeImage: `${origin}1vQlpcnFIDL1z6JTyLP8a1vSj36oLL9L2`,
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
  ];

  const memes: IListMemes[] = [
    {
      id: 0,
      imageRoute: `${origin}1ydaYPsFocacSiCUqfSSxDbCLVOfJ9e4H`,
      alt: "Unro",
    },
  ];

  return { publications, updates, memes, imageRoutes, iconsRoute };
};
