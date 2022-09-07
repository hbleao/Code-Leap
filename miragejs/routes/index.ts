export default function routes(this: any) {
  this.urlPrefix = 'https://dev.codeleap.co.uk/';
  this.namespace = 'careers/';

  this.resource('post');
  this.get('posts', async (schema: any) => {
    return schema.posts.all().models;
  });
}
