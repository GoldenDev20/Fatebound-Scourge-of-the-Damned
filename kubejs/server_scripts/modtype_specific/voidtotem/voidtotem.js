//Priority: 1000
/**
 * @file voidtotem.js
 * @description Recipe Void Totem script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Totem of Void Undying=======
  event.shaped('voidtotem:totem_of_void_undying', ['ABA', 'CDC', ' C '], {
    A: 'nourished_nether:necronium_block',
    B: 'botania:mana_void',
    C: Item.of('cyclic:ender_eye_reuse', '{Damage:0}'),
    D: 'minecraft:totem_of_undying'
  }).id(`kubejs:voidtotem/totem_of_void_undying`)

  removeRecipeByID(event, [
    'voidtotem:totem_of_void_undying'
  ])

})
