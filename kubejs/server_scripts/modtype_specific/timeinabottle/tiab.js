//Priority: 1000
/**
 * @file tiab.js
 * @description Recipe Time in a bottle standalone script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Time in a bottle =======
  event.shaped('tiab:time_in_a_bottle', ['AFA', 'BCB', 'DED'], {
    A: '#forge:ingots/rose_gold',
    B: 'tombstone:impregnated_diamond',
    C: 'thermal:machine_speed_augment',
    D: 'thermal:lapis_gear',
	  E: 'thermal:jar',
    F: 'rftoolsutility:speed_module'
  }).id(`kubejs:tiab/time_in_a_bottle`)

  removeRecipeByID(event, [
    'tiab:time_in_a_bottle'
  ])

})
