import Flickr from '../context/flickr/models/Flickr';

const photoMeta: any = {
  id: '51177582804',
  title: 'beautiful sunset on the cıty',
  author:{
    id: '152129687@N03',
    username: 'batuhankurt'
  },
  description: 'beautiful sunset on the cıty',
  tags:[],
  server: '65535',
  secret: 'bf7f6c7187',
  size: 'medium'
};

test('get URL', () => {
  let url = Flickr.getUrl(photoMeta, 'page');
  expect(url).not.toBeNull();
  expect(url).toEqual(`https://www.flickr.com/photos/152129687@N03/51177582804`);

  url = Flickr.getUrl(photoMeta, 'profile');
  expect(url).not.toBeNull();
  expect(url).toEqual(`https://www.flickr.com/people/152129687@N03`);

  url = Flickr.getUrl({ ...photoMeta, size: 'medium' }, 'photo');
  expect(url).not.toBeNull();
  expect(url).toEqual(`https://live.staticflickr.com/65535/51177582804_bf7f6c7187_z.jpg`);
});

// test('get URL', () => {});