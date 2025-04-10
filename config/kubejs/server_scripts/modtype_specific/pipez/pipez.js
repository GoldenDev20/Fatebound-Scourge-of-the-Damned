//Priority: 1000
/**
 * @file pipez.js
 * @description Recipe Pipez script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Infinity Upgrade =======
  event.shaped('16x pipez:infinity_upgrade', ['ABA', 'BCB', 'ADA'], {
    A: '#forge:ingots/dragonsteel',
    B: '#forge:storage_blocks/enhanced_redstone_ingot',
    C: 'pipez:ultimate_upgrade',
    D: '#forge:pellets/polonium'
  }).id(`kubejs:pipez/infinity_upgrade`)

})
