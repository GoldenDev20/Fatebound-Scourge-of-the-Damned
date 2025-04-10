//Priority: 1000
/**
 * @file bwg.js
 * @description Recipe Oh The Biomes We've Gone script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Black Ice =======
  event.shaped('biomeswevegone:black_ice', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:ice',
    B: '#forge:dyes/black'
  }).id(`kubejs:bwg/black_ice`)

})