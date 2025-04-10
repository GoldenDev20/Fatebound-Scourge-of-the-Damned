//Priority: 1000
/**
 * @file engmaticlegacy.js
 * @description Recipe Enigmatic Legacy script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Ring of the Seven Curses ======
  event.shaped('enigmaticlegacy:cursed_ring', ['AEB', 'EDE', 'CEC'], {
    A: 'enigmaticlegacy:unholy_grail',
    B: 'enigmaticlegacy:forbidden_fruit',
    C: 'enigmaticlegacy:etherium_ingot',
    D: 'enigmaticlegacy:ender_ring',
    E: 'minecraft:netherite_ingot'
  }).id(`kubejs:enigmaticlegacy/cursed_ring`)

  //======= Dormant Eye =======
  event.shaped('enigmaticlegacy:enigmatic_eye', ['ABA', 'BCB', 'ABA'], {
    A: 'apotheosis:gem_dust',
    B: '#forge:ingots/netherite',
    C: 'enigmaticlegacy:oblivion_stone'
  }).id(`kubejs:enigmaticlegacy/enigmatic_eye`)

  colors.forEach((color) => {
    removeRecipeByID(event, [
      `enigmaticlegacy:wool/${color}_wool`
    ])
  })

})