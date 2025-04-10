//Priority: 100
/**
 * @file remove_recipes.js
 * @description Vanilla Minecraft recipe removement script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  colors.forEach((color) => {
    removeRecipeByID(event, [
      `minecraft:${color}_bed_from_white_bed`,
      `minecraft:${color}_concrete_powder`,
      `minecraft:${color}_stained_glass`,
      `minecraft:${color}_stained_glass_pane_from_glass_pane`,
      `minecraft:${color}_terracotta`,
      `minecraft:${color}_wool`,
      `minecraft:${color}_carpet_from_white_carpet`,
      'minecraft:crafting_table',
      'minecraft:furnace',
      'minecraft:book',
      'minecraft:pumpkin_pie',
      'minecraft:rabbit_stew_from_brown_mushroom',
      'minecraft:rabbit_stew_from_red_mushroom',
      'minecraft:mushroom_stew',
      'minecraft:candle',
      `minecraft:${color}_candle`,
      'minecraft:smithing_table'
    ])
  })

})