//Priority: 1000
/**
 * @file cataclysm.js
 * @description Recipe Cataclys script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= The Incinerator =======
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: true,
    key: {
      C: {
        item: 'minecraft:blaze_rod'
      },
      L: {
        item: 'minecraft:netherite_sword'
      },
      R: {
        item: 'cataclysm:ignitium_ingot'
      }
    },
    pattern: [
      '  R  ',
      '  R  ',
      '  R  ',
      'CCRCC',
      '  L  '
    ],
    result: {
      item: 'cataclysm:the_incinerator'
    }
  })

  removeRecipeByID(event, [
    'cataclysm:the_incinerator'
  ])

})