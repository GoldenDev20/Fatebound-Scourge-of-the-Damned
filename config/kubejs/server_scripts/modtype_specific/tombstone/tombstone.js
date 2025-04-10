//Priority: 1000
/**
 * @file tombstone.js
 * @description Recipe Corail Tombston script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Ankh of Prayer =======
  event.shaped('tombstone:ankh_of_prayer', ['CBC', 'BAB', 'CBC'], {
    A: '#forge:ingots/gold',
    B: '#forge:rods/wooden',
    C: 'nourished_nether:soul_quartz'
  }).id(`kubejs:tombstone/ankh_of_pray`)

  //======= Grave Dust =======
  event.shapeless('tombstone:grave_dust', ['#forge:all_hammers', 'mysticalagriculture:soulium_gemstone']).id(`kubejs:tombstone/grave_dust`)

  removeRecipeByID(event, [
    'tombstone:ankh_of_prayer'
  ])

})
