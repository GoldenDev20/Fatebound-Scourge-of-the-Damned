//Priority: 1000
/**
 * @file minninggadgets.js
 * @description Recipe Mining Gadgets script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Modification Table =======
  event.shaped('mininggadgets:modificationtable', ['DAD', 'BCB', 'BEB'], {
    A: 'create:display_board',
    B: '#forge:ingots/energized_steel',
    C: 'rftoolscontrol:cpu_core_2000',
    D: 'mininggadgets:upgrade_empty',
    E: 'kubejs:personal_id'
  }).id(`kubejs:mininggadgets/modificationtable`)

  removeRecipeByID(event, [
    'mininggadgets:modificationtable'
  ])

})