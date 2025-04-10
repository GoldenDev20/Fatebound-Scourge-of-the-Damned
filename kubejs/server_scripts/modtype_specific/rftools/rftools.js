//Priority: 1000
/**
 * @file reftools.js
 * @description Recipe RFTools script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Builder =======
  event.shaped('rftoolsbuilder:builder', ['AEA', 'RMR', 'AFA'], {
    A: '#forge:ingots/steel',
    E: 'mininggadgets:upgrade_empty',
    F: 'cyclic:structure',
    R: 'immersiveengineering:drill',
    M: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftools/builder`)

  //======= Shape Card (Quarry) =======
  event.shaped('rftoolsbuilder:shape_card_quarry', ['AEA', 'RMR', 'AFA'], {
    A: '#forge:ingots/steel',
    E: 'industrialforegoing:laser_drill',
    F: 'mekanism:module_excavation_escalation_unit',
    R: 'immersiveengineering:drillhead_steel',
    M: 'rftoolsbuilder:shape_card_def'
  }).id(`kubejs:rftools/shape_card_quarry`)

  //======= Machine Frame =======
  event.shaped('rftoolsbase:machine_frame', ['ABA', 'C C', 'ABA'], {
    A: '#forge:ingots/iron',
    B: 'minecraft:amethyst_shard',
    C: '#forge:plates/aluminum'
  }).id(`kubejs:rftoolsutility/clock_module`)

  //======= Processor =======
  event.shaped('rftoolscontrol:processor', ['ABA', 'CDC', 'ABA'], {
	  A: '#forge:storage_blocks/redstone',
    B: '#forge:ingots/rose_gold',
	  C: 'rftoolscontrol:cpu_core_2000',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/processor`)

  //======= Programmer =======
  event.shaped('rftoolscontrol:programmer', ['ABA', 'CDC', 'ABA'], {
	  A: '#forge:storage_blocks/redstone',
    B: '#forge:ingots/rose_gold',
	  C: 'rftoolscontrol:ram_chip',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/programmer`)

  //======= Crafting Card =======
  event.shaped('8x rftoolsbase:crafting_card', ['AB ', 'CA ', '   '], {
	  A: '#forge:paper',
    B: '#forge:workbenches',
	  C: '#forge:dusts/redstone'
  }).id(`kubejs:rftoolsbase/crafting_card`)

  //======= Crafter Tier 1 =======
  event.shaped('rftoolsutility:crafter1', [' A ', 'BCB', ' A '], {
	  A: 'minecraft:redstone_torch',
    B: '#forge:workbenches',
	  C: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolsutility/crafter1`)

  //======= Crafter Tier 2 =======
  event.shaped('rftoolsutility:crafter2', [' A ', 'BCB', ' A '], {
	  A: 'minecraft:redstone_torch',
    B: '#forge:workbenches',
	  C: 'rftoolsutility:crafter1'
  }).id(`kubejs:rftoolsutility/crafter2`)

  //======= Crafter Tier 3 =======
  event.shaped('rftoolsutility:crafter3', [' A ', 'BCB', ' A '], {
	  A: 'minecraft:redstone_torch',
    B: '#forge:workbenches',
	  C: 'rftoolsutility:crafter2'
  }).id(`kubejs:rftoolsutility/crafter3`)

  removeRecipeByID(event, [
    'rftoolsbuilder:builder',
    'rftoolsbuilder:shape_card_quarry',
    'rftoolsbase:machine_frame',
    'rftoolscontrol:processor',
    'rftoolscontrol:programmer',
    'rftoolsbase:crafting_card',
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3'
  ])

})
