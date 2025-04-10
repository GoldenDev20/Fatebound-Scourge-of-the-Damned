//Priority: 1000
/**
 * @file waystones.js
 * @description Recipe Waystones script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Warp Stone =======
  event.shaped('waystones:warp_stone', ['ABA', 'BCB', 'ABA'], {
    A: 'waystones:warp_dust',
    B: 'rftoolsbase:infused_enderpearl',
    C: 'tombstone:impregnated_diamond'
  }).id(`kubejs:waystones/warp_stone`)

  //======= Warp Dust =======
  event.shapeless('waystones:warp_dust', ['#forge:dusts/diamond', '#forge:ender_pearls', '#forge:dyes/purple']).id(`kubejs:waystones/warp_dust`)

  removeRecipeByID(event, [
    'waystones:warp_dust',
    'waystones:warp_stone'
  ])

})
