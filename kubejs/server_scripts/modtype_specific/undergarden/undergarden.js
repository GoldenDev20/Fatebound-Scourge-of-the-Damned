//Priority: 1000
/**
 * @file undergarden.js
 * @description Recipe The Undergarden script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Cloggrum Battleaxe =======
  event.shaped('undergarden:cloggrum_battleaxe', ['ADA', 'ABA', ' B '], {
    A: '#forge:ingots/cloggrum',
    B: '#forge:rods/wooden',
    D: '#forge:storage_blocks/cloggrum'
  }).id(`kubejs:undergarden/cloggrum_battleaxe`)

})
