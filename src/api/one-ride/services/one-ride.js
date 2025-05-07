'use strict';

/**
 * one-ride service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::one-ride.one-ride');
