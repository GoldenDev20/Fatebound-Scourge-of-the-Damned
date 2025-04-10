//Priority: 1000
/**
 * @file reliquary.js
 * @description Recipe Reliquary script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Lilypad of Fertility =======
  event.shaped('reliquary:fertile_lily_pad', ['ABA', 'DCD', 'AEA'], {
    A: 'immersiveengineering:fertilizer',
    B: 'mysticalagriculture:inferium_growth_accelerator',
    C: 'minecraft:lily_pad',
    D: 'create:tree_fertilizer',
    E: 'farmersdelight:organic_compost'
  }).id(`kubejs:reliquary/fertile_lily_pad`)

  removeRecipeByID(event, [
    'reliquary:fertile_lily_pad'
  ])

})