//Priority: 1000
/**
 * @file constructionwand.js
 * @description Recipe Construction Wand script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Infinity Wand =======
  event.shaped('constructionwand:infinity_wand', ['  C', ' B ', 'A  '], {
    A: 'redstone_arsenal:flux_obsidian_rod',
    B: 'allthemodium:unobtainium_rod',
    C: 'extendedcrafting:ender_star'
  }).id(`kubejs:constructionwand/infinity_wand`)

  removeRecipeByID(event, [
    'constructionwand:infinity_wand'
  ])

})