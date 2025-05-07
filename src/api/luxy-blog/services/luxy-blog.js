'use strict';

/**
 * luxy-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::luxy-blog.luxy-blog');
