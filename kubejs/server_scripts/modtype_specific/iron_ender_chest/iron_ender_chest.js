//Priority: 1000
/**
 * @file iron_ender_chest.js
 * @description Recipe Iron Ender Chests script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Diamond Ender Chest =======
  modifyShaped(event, 'iron_ender_chests:diamond_ender_chest', 1, ['ABA', 'BCB', 'ABA'], {
    A: '#forge:gems/diamond',
    B: '#forge:storage_blocks/diamond',
    C: '#iron_ender_chests:iron_tier'
  })

  //======= Netherite Ender Chest =======
  event.shaped('iron_ender_chests:netherite_ender_chest', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/netherite',
    B: '#forge:storage_blocks/netherite',
    C: '#iron_ender_chests:diamond_tier'
  }).id(`kubejs:iron_ender_chests/netherite_ender_chest`)

  removeRecipeByID(event, [
    'iron_ender_chests:netherite_ender_chest'
  ])

})