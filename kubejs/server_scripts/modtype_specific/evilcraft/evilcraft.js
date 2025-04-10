//Priority: 1000
/**
 * @file evilcraft.js
 * @description Recipe EvilCraft script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Origin of Darkness (Guide Book) =======
  event.shapeless('evilcraft:origins_of_darkness', ['minecraft:book', '2x evilcraft:dark_gem']).id(`kubejs:evilcraft/origins_of_darkness`)

  //======= Crushed Dark Gem =======
  event.shapeless('evilcraft:dark_gem_crushed', ['evilcraft:dark_gem', '#forge:all_hammers']).id(`kubejs:evilcraft/dark_gem_crushed`)

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "evilcraft:dark_gem"
      }
    },
    output: {
      count: 2,
      item: "evilcraft:dark_gem_crushed"
    }
  }).id(`kubejs:evilcraft/mekanism/dark_gem_crushed`)

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3200,
    input: {
      item: "evilcraft:dark_gem"
    },
    result: {
      count: 2,
      item: "evilcraft:dark_gem_crushed"
    },
    secondaries: []
  }).id(`kubejs:evilcraft/immersiveengineering/dark_gem_crushed`)

  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      item: "evilcraft:dark_gem"
    },
    result: [{
      item: "evilcraft:dark_gem_crushed",
      count: 2
    }],
    energy_mod: 0.5
  }).id(`kubejs:evilcraft/thermal/dark_gem_crushed`)

  event.remove({ output: 'evilcraft:broom' })

})
