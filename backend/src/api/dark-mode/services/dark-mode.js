'use strict';

/**
 * dark-mode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dark-mode.dark-mode');
