//Priority: 1000
/**
 * @file ender_io.js
 * @description Recipe Ender IO script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Void Chassis ======
  event.shaped('enderio:void_chassis', ['ABA', 'BCB', 'ABA'], {
    A: 'cyclic:netherite_bars',
    B: '#forge:ingots/enderium',
    C: 'enderio:grains_of_infinity'
  }).id(`kubejs:enderio/void_chassis`)

  //======= Travel Anchor ======
  event.shaped('enderio:travel_anchor', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/dark_steel',
    B: 'enderio:conduit_binder',
    C: '#forge:gems/pulsating_crystal'
  }).id(`kubejs:enderio/travel_anchor`)

  //======= XP Vacuum ======
  event.shaped('enderio:xp_vacuum', ['AAA', 'ABA', 'ACA'], {
    A: '#forge:ingots/dark_steel',
    B: 'enderio:experience_rod',
    C: '#forge:gems/pulsating_crystal'
  }).id(`kubejs:enderio/xp_vacuum`)

  //======= Vacuum Chest ======
  event.shaped('enderio:vacuum_chest', ['AAA', 'ABA', 'ACA'], {
    A: '#forge:ingots/dark_steel',
    B: '#forge:chests',
    C: '#forge:gems/pulsating_crystal'
  }).id(`kubejs:enderio/vacuum_chest`)

  removeRecipeByID(event, [
    'enderio:void_chassis',
    'enderio:travel_anchor',
    'enderio:xp_vacuum',
    'enderio:vacuum_chest'
  ])

})