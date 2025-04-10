//Priority: 1000
/**
 * @file aether.js
 * @description Recipe Aether script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Incubator =======
  modifyShaped(event, 'aether:incubator', 1, ['ABA', 'BCB', 'ABA'], {
    A: 'aether:holystone_bricks',
    B: 'deep_aether:skyjade',
    C: 'aether:ambrosium_block'
  })

  //======= Freezer =======
  modifyShaped(event, 'aether:freezer', 1, ['AAA', 'ABA', 'CCC'], {
    A: 'deep_aether:chiseled_holystone',
    B: 'aether:icestone',
    C: 'aether:skyroot_planks'
  })

})