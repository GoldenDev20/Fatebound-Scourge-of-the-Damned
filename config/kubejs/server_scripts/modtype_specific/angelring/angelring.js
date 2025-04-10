//Priority: 1000
/**
 * @file angelring.js
 * @description Recipe Angel Ring script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Diamond Ring =======
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      A: {
        item: "alltheores:osmium_block"
      },
      B: {
        item: "alltheores:platinum_block"
      },
      E: {
        item: "minecraft:elytra"
      },
      G: {
        item: "minecraft:diamond"
      },
      N: {
        item: "minecraft:nether_star"
      },
      S: {
        item: "irons_spellbooks:arcane_ingot"
      }
    },
    pattern: [
      " GGGGG ",
      "GGANAGG",
      "GABSBAG",
      "GNSESNG",
      "GABSBAG",
      "GGANAGG",
      " GGGGG "
    ],
    result: {
      item: "angelring:diamond_ring"
    }
  }).id(`kubejs:angelring/diamond_ring`)

  //======= Angel Ring =======
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "angelring:diamond_ring"
    },
    loops: 1,
    results: [{
      chance: 100,
      item: "angelring:angel_ring"
    }],
    sequence: [{
        type: "create:deploying",
        ingredients: [{
          item: "angelring:diamond_ring"
        }, {
          item: "mysticalagriculture:flight_augment"
        }],
        results: [{
          item: "angelring:diamond_ring"
        }]
      },
      {
        type: "create:deploying",
        ingredients: [{
          item: "angelring:diamond_ring"
        }, {
          item: "ars_nouveau:ritual_flight"
        }],
        results: [{
          item: "angelring:diamond_ring"
        }]
      },
      {
        type: "create:deploying",
        ingredients: [{
          item: "angelring:diamond_ring"
        }, {
          item: "allthemodium:allthemodium_block"
        }],
        results: [{
          item: "angelring:diamond_ring"
        }]
      },
      {
        type: "create:deploying",
        ingredients: [{
          item: "angelring:diamond_ring"
        }, {
          item: "redstone_arsenal:flux_elytra"
        }],
        results: [{
          item: "angelring:diamond_ring"
        }]
      },
      {
        type: "create:deploying",
        ingredients: [{
          item: "angelring:diamond_ring"
        }, {
          item: "rftoolsutility:flight_module"
        }],
        results: [{
          item: "angelring:diamond_ring"
        }]
      }
    ],
    transitionalItem: {
      item: "angelring:diamond_ring"
    }
  })

  removeRecipeByID(event, [
    'angelring:diamond_ring',
    'angelring:angel_ring'
  ])

})