//Priority: 1000
/**
 * @file botania.js
 * @description Recipe Botania script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Livingwood =======
  event.custom({
    type: "botania:pure_daisy",
    input: {
      type: "block",
      block: "naturesaura:ancient_log"
    },
    output: {
      name: "botania:livingwood"
    }
  }).id(`kubejs:botania/livingwood`)

  //======= Livingrock =======
  event.custom({
    type: "botania:pure_daisy",
    input: {
      type: "block",
      block: "naturesaura:infused_stone"
    },
    output: {
      name: "botania:livingrock"
    }
  }).id(`kubejs:botania/livingrock`)

  //======= World Seed =======
  event.shaped('2x botania:world_seed', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:supremium_farmland',
    B: 'mysticalagriculture:prosperity_seed_base',
    C: 'botania:dragonstone',
    D: 'ars_nouveau:magebloom_crop'
  }).id(`kubejs:botania/world_seed`)

  //======= Overgrowth Seed =======
  event.shaped('botania:overgrowth_seed', ['ADA', 'BCB', 'ABA'], {
    A: 'botania:grass_seeds',
    B: 'mysticalagriculture:prosperity_seed_base',
    C: 'botania:orechid',
    D: 'ars_nouveau:ritual_overgrowth'
  }).id(`kubejs:botania/overgrowth_seed`)

  removeRecipeByID(event, [
    'botania:world_seed',
    'botania:pure_daisy/livingrock'
  ])

})