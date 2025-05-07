'use strict';

/**
 * travel-agent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::travel-agent.travel-agent');
