//Priority: 1000
/**
 * @file alltheores.js
 * @description Recipe ATO - All the Ores script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  let oreHammers = ['copper', 'iron', 'bronze', 'invar', 'platinum']

  oreHammers.forEach((metal) => {
    modifyShaped(event, `alltheores:${metal}_ore_hammer`, 1, [' AC', ' BA', 'B  '], {
      A: `#forge:storage_blocks/${metal}`,
      B: '#forge:rods/wooden',
      C: '#forge:string'
    })

    removeRecipeByID(event, [`alltheores:${metal}_ore_hammer`])
  })

})