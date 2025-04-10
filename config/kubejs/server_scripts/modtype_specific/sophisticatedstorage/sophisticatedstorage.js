//Priority: 1000
/**
 * @file sophisticatedstorage.js
 * @description Recipe Sophisticated Storage script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Storage Controller =======
  event.shaped('sophisticatedstorage:controller', ['ABA', 'DCD', 'AEA'], {
    A: '#forge:plates/tin',
    B: 'advgenerators:controller',
    C: 'create:andesite_casing',
    D: 'sophisticatedstorage:upgrade_base',
    E: 'minecraft:comparator'
  }).id(`kubejs:sophisticatedstorage/controller`)

  removeRecipeByID(event, [
    'sophisticatedstorage:controller'
  ])

})
