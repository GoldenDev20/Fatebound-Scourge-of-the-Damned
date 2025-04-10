//Priority: 1000
/**
 * @file dankstorage.js
 * @description Recipe Dank Storage script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Red Print =======
  event.shaped('dankstorage:red_print', ['AA', 'BB'], {
    A: '#forge:paper',
    B: '#forge:dusts/cinnabar'
  }).id(`kubejs:dankstorage/red_print`)

})