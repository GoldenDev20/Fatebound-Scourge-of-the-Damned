//Priority: 1000
/**
 * @file minicoal.js
 * @description Recipe Mini Coal script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Mini Charcoal =======
  modifyShaped(event, 'minecraft:charcoal', 1, ['AAA', 'AAA', 'AAA'], {
    A: 'minicoal:mini_charcoal'
  })

  modifyShapeless(event, 'minicoal:mini_charcoal', 9, ['minecraft:charcoal'])

  //======= Mini Coal =======
  modifyShaped(event, 'minecraft:coal', 1, ['AAA', 'AAA', 'AAA'], {
    A: 'minicoal:mini_coal'
  })

  modifyShapeless(event, 'minicoal:mini_coal', 9, ['minecraft:coal'])

  removeRecipeByID(event, [
    'minecraft:mini_coal_to_coal',
    'minecraft:mini_charcoal_to_charcoal'
  ])

})