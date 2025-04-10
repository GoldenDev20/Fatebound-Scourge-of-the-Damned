//Priority: 1000
/**
 * @file entangled.js
 * @description Recipe Entangled script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Entangled Block =======
  event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/unobtainium',
    B: '#forge:ender_pearls',
    C: 'enderstorage:ender_chest'
  }).id(`kubejs:entangled/block`)

  //======= Entangled Binder =======
  event.shaped('entangled:item', [' BC', ' AB', 'A  '], {
    A: '#forge:ingots/unobtainium',
    B: '#forge:ender_pearls',
    C: 'enderstorage:ender_chest'
  }).id(`kubejs:entangled/item`)

  removeRecipeByID(event, [
    'entangled:block',
    'entangled:item'
  ])

})