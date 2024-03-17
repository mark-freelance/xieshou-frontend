import moment from "moment";
import { IHeroWithoutUser, IUserInNotion } from "../schema/user";

export const userInNotion2DB = (user: IUserInNotion): IHeroWithoutUser => ({
  id: user.id,
  // title: user.properties.title.rich_text[0]?.plain_text,
  title: user.properties.title.rich_text[0]?.plain_text,
  name: user.properties.嘉宾姓名.title[0]?.plain_text,
  updatedAt: moment(user.last_edited_time).toDate(),
  createdAt: moment(user.created_time).toDate(),
  avatar: user.properties.照片.files[0]?.file?.url ?? null,
  cover: user.properties.照片.files[0]?.file?.url ?? null,
  cities: user.properties.坐标.select?.name ?? null,
});