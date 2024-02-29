import { StaticImageData } from "next/image";

export interface I_SectionsTitltes {
  mainTitle: string;
  subText: string;
}
export interface I_ServiceCardModel {
  id: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
}
