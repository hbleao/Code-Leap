/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

import { Server } from 'miragejs';

const postsSeeder = (server: Server) => {
  server.createList('post', 10);
};

export default function seeds(server: Server) {
  postsSeeder(server);
}
