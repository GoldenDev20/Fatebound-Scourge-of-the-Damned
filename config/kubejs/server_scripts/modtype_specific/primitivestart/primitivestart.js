//Priority: 1000
/**
 * @file primativestart.js
 * @description Reci[e Myrtrees script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Oak Log =======
  event.shaped('minecraft:oak_log', ['AA', 'AA'], {
    A: 'primitivestart:improvised_planks'
  }).id(`kubejs:primitivestart/oak_log`)

  //======= Plated Bone Tools =======
  let Tool = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe', 'shears', 'arrow']

  Tool.forEach((tool) => {
    event.smithing(`primitivestart:plated_bone_${tool}`,
      `primitivestart:reinforced_bone_${tool}`,
      '#forge:raw_materials/gold'
    ).id(`kubejs:primitivestart/plated_bone_${tool}`)
  })

  removeRecipeByID(event, [
    'primitivestart:crafting_table',
    'primitivestart:plated_bone_sword',
    'primitivestart:plated_bone_pickaxe',
    'primitivestart:plated_bone_axe',
    'primitivestart:plated_bone_shovel',
    'primitivestart:plated_bone_hoe',
    'primitivestart:plated_bone_shears',
    'primitivestart:plated_bone_arrow'
  ])

})
