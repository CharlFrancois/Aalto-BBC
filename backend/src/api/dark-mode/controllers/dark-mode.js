'use strict';

/**
 *  dark-mode controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dark-mode.dark-mode');
