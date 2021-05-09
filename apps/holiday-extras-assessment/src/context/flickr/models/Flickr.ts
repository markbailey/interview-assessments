import FlickrSDK from 'flickr-sdk';

import { ISearchOptions, IPhotoSizes, IPhotoMeta } from '../interfaces';
import actions from '../actions';

const flickr = new FlickrSDK(process.env.REACT_APP_FLICKR_API_KEY);
const PHOTO_SIZES: IPhotoSizes = {
  small: 'w',
  medium: 'z',
  large: 'b'
};

class Flickr {
  static async getPhotos (options: ISearchOptions, callback: Function) {
    callback(actions.SET_LOADING, true, true);
    return flickr.photos
      .search(options)
      .then((response: any) =>{
        const data = response.body.photos;
        const photos = data.photo
          .filter((photo: IPhotoMeta) => photo.title !== "This content isn't available right now")

        const payload = {
          photo_count: parseInt(data.total),
          page_count: data.pages,
          photos,
        };

        callback(actions.SET_PHOTOS, payload);
      })
      .catch((error: any) => callback(actions.SET_ERROR, error, true)); 
  }

  static async getInfo (photoId: string, callback: Function) {
    return flickr.photos  
      .getInfo({ photo_id: photoId })
      .then((response: any) => {
        const data = response.body;
        callback(actions.SET_PHOTOS, this.getMeta(data.photo));
      })
      .catch((error: any) => callback(actions.SET_ERROR, error, true));
  }

  static getUrl (photo: IPhotoMeta, type: string) {
    if (!photo || !photo.id) return null;
    switch (type) {
      case 'page':
        return `https://www.flickr.com/photos/${photo.author.id}/${photo.id}`;
      case 'profile':
        return `https://www.flickr.com/people/${photo.author.id}`;
      default:
        const size: string = photo.size || 'medium';
        return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${PHOTO_SIZES[size]}.jpg`
    }
  }

  static getMeta (photo: IPhotoMeta, size = 'medium') { 
    if (!photo) return photo;
    
    const title = photo.title._content;
    const userId = photo.owner.nsid;
    const username = photo.owner.username;
    const description = photo.description._content;
    const tags = photo.tags.tag;

    return {
      id: photo.id,
      title,
      author: {
        id: userId,
        username,
      },
      description,
      tags,
      server: photo.server,
      secret: photo.secret,
      size
    };
  };
}

export default Flickr;