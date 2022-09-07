/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import { faker } from '@faker-js/faker';

export default {
  posts: Factory.extend({
    id() {
      return faker.random.numeric();
    },
    username() {
      return faker.name.fullName();
    },
    title() {
      return faker.commerce.productName();
    },
    content() {
      return faker.commerce.productDescription();
    },
    created_datetime() {
      return faker.date.month();
    }
  })
};
