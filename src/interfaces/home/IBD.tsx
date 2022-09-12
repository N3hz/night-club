export interface IListOfPublications {
  id: number;
  imageRoute: any;
  alt: string;
  title: string;
  description: string;
  rating: number;
  chapters: IChapter[];
}

export interface IChapter {
  numberChapter: number;
  dateUpdate: string;
  nameChapter: string;
  listImagesChapter: IChapterImages[];
}

export interface IChapterImages {
  numberPage: number;
  routeImage: string;
  alt: string;
}

export interface IListUpdates {
  id: number;
  imageRoute: any;
  alt: string;
}

export interface IListMemes {
  id: number;
  imageRoute: any;
  alt: string;
}

export interface IImageRouter {
  id: number;
  origin: string;
  alt: string;
  name: string;
  route: string;
}

export interface IIcons {
  id: number;
  alt: string;
  name: string;
  route: string;
}
