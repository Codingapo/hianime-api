import { Hono } from 'hono';
import documentationController from '../controllers/documentation.controller';
import handler from '../utils/handler';

// controllers
import homepageController from '../controllers/homepage.controller';
import detailpageController from '../controllers/detailpage.controller';
import listpageController from '../controllers/listpage.controller';
import searchController from '../controllers/search.controller';
import suggestionController from '../controllers/suggestion.controller';
import charactersController from '../controllers/characters.controller';
import characterDetailConroller from '../controllers/characterDetail.controller';
import episodesController from '../controllers/episodes.controller';
import serversController from '../controllers/serversController';
import streamController from '../controllers/streamController';
import allGenresController from '../controllers/allGenres.controller';

const router = new Hono();

router.get('/', handler(documentationController));
router.get('/home', handler(homepageController));
router.get('/anime/:id', handler(detailpageController));
router.get('/animes/:query/:category?', handler(listpageController));
router.get('/search', handler(searchController));
router.get('/suggestion', handler(suggestionController));
router.get('/characters/:id', handler(charactersController));
router.get('/character/:id', handler(characterDetailConroller));
router.get('/episodes/:id', handler(episodesController));
router.get('/servers', handler(serversController));
router.get('/stream', handler(streamController));
router.get('/genres', handler(allGenresController));
router.get('/*', (c) => {
  return c.html(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="404 - Page not found. Contact The King TGA for support." />
    <meta name="author" content="The King TGA" />
    <title>404 - Page Not Found</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #e2e8f0;
        font-family: 'Inter', sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="text-center px-4">
      <h1 class="text-5xl md:text-6xl font-bold text-indigo-400 mb-6 animate-pulse">
        The is only one King TGA
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-8">
        If you want anything, you can contact me here:
      </p>
      <a
        href="https://t.me/tga"
        class="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        aria-label="Contact The King TGA on Telegram"
      >
        Contact Me
      </a>
    </div>
  </body>
</html>

    `);
});

export default router;
