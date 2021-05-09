interface IPhotoContentObject {
  _content?: string;
};

interface IPhotoTag {
  id: number;
  _content: string;
};

interface IPhotoTags {
  tag: IPhotoTag[];
};

interface IPhotoOwnerMeta {
  nsid: string;
  username: string;
  [p:string]: any;
};

interface IPhotoMeta {
  id: string;
  title: IPhotoContentObject;// | string;
  description: IPhotoContentObject;// | string;
  owner: IPhotoOwnerMeta;
  tags: IPhotoTags;// | string[];
  server: string;
  secret: string;
  farm: number;
  isfamily?: number;
  isfriend?: number;
  ispublic?: number;
  size?: string;
  [p:string]: any;
};

export default IPhotoMeta;