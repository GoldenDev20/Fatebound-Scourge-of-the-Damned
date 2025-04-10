//Priority: 1000
/**
 * @file ae2.js
 * @description Recipe AE2 script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Vibration Chamber =======
  event.shaped('ae2:vibration_chamber', ['AAA', 'CDC', 'ABA'], {
    A: 'minecraft:polished_deepslate',
    B: 'mysticalagriculture:machine_frame',
    C: '#forge:plates/iron',
    D: '#forge:furnaces/iron'
  }).id(`kubejs:ae2/vibration_chamber`)

  //======= ME Controller =======
  event.shaped('ae2:controller', ['ABA', 'CDC', 'ABA'], {
    A: 'ae2:smooth_sky_stone_block',
    B: 'ae2:fluix_crystal',
    C: '#forge:plastic',
    D: 'ae2:engineering_processor'
  }).id(`kubejs:ae2/controller`)

  //======= Sky Stone Block =======
  event.shaped('4x ae2:sky_stone_block', ['BSB', 'SBS', 'BSB'], {
    S: 'minecraft:stone',
    B: 'minecraft:blackstone'
  }).id(`kubejs:ae2/sky_stone_block`)

  //======= PROCESSOR PRESSES =======
  //======= Calculation =======
  event.shaped('ae2:calculation_processor_press', ['PFP', 'FVF', 'PFP'], {
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron',
    P: 'ae2:fluix_pearl'
  }).id(`kubejs:ae2/calculation_press`)
  //======= Logic =======
  event.shaped('ae2:logic_processor_press', ['CFC', 'FVF', 'CFC'], {
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron',
    C: '#forge:ingots/rose_gold'
  }).id(`kubejs:ae2/logic_press`)
  //======= Engineering =======
  event.shaped('ae2:engineering_processor_press', ['DFD', 'FVF', 'DFD'], {
    D: '#forge:gems/mana_diamond',
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:ae2/engineering_press`)
  //======= Silicon =======
  event.shaped('ae2:silicon_press', ['WFW', 'FVF', 'WFW'], {
    W: '#forge:silicon',
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:ae2/silicon_press`)

  //======= Quartz Glass =======
  modifyShaped(event, 'ae2:quartz_glass', 4, ['GDG', 'DGD', 'GDG'], {
    G: '#ae2:all_quartz_dust',
    D: '#forge:glass'
  })

  //======= Quartz Fiber =======
  modifyShaped(event, 'ae2:quartz_fiber', 3, ['DDD', 'GGG', 'DDD'], {
    G: '#ae2:all_quartz_dust',
    D: '#forge:glass'
  })

  //======= ME Chest =======
  modifyShaped(event, 'ae2:chest', 1, ['GTG', 'CBC', 'IFI'], {
    G: '#forge:glass',
    T: 'ae2:terminal',
    B: 'kubejs:personal_id',
    C: 'ae2:fluix_glass_cable',
    I: '#forge:ingots/iron',
    F: '#ae2:all_fluix'
  })

  //======= Matter Condenser =======
  modifyShaped(event, 'ae2:condenser', 1, ['IGI', 'GDG', 'IGI'], {
    G: '#forge:glass',
    I: '#forge:ingots/iron',
    D: '#forge:dusts/fluix',
  })

  //======= Spatial IO Port =======
  modifyShaped(event, 'ae2:spatial_io_port', 1, ['GGG', 'CPC', 'IEI'], {
    G: 'ae2:quartz_vibrant_glass',
    C: 'ae2:fluix_glass_cable',
    P: 'ae2:io_port',
    I: '#forge:ingots/iron',
    E: 'ae2:engineering_processor'
  })

  //======= ME IO port =======
  modifyShaped(event, 'ae2:io_port', 1, ['GGG', 'DCD', 'IPI'], {
    G: 'ae2:quartz_glass',
    C: 'ae2:fluix_glass_cable',
    P: 'ae2:logic_processor',
    I: '#forge:ingots/iron',
    D: 'ae2:drive'
  })

  //======= ME Interface =======
  event.shaped('ae2:interface', ['IGI', 'ABF', 'IGI'], {
    G: 'ae2:quartz_glass',
    A: 'ae2:annihilation_core',
    B: 'thermal:item_buffer',
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron'
  }).id(`kubejs:ae2/interface`)

  //======= Molecular Assembler =======
  event.shaped('ae2:molecular_assembler', ['IGI', 'ACF', 'IGI'], {
    G: 'ae2:quartz_glass',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron',
    C: 'enderio:octadic_capacitor'
  }).id(`kubejs:ae2/molecular_assembler`)

  //======= Cell Workbench =======
  event.shaped('ae2:cell_workbench', ['WEW', 'ICI', 'III'], {
    W: '#minecraft:wool',
    E: 'ae2:calculation_processor',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden'
  }).id(`kubejs:ae2/cell_workbench`)

  //======= Energy Acceptor =======
  event.shaped('ae2:energy_acceptor', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/electrum',
    B: 'ae2:quartz_glass',
    C: 'immersiveengineering:coil_lv'
  }).id(`kubejs:ae2/energy_acceptor`)

  //======= Illuminated Panel =======
  event.shaped('3x ae2:semi_dark_monitor', [' BA', 'ECD', ' BA'], {
    A: 'ae2:quartz_glass',
    B: 'create:electron_tube',
    C: 'thermal:rf_coil',
    D: 'create:display_board',
    E: 'extendedcrafting:black_iron_slate'
  }).id(`kubejs:ae2/semi_dark_monitor`)

  //======= Annihilation Core =======
  event.shaped('3x ae2:annihilation_core', [' B ', 'DCA', ' B '], {
    A: '#forge:gems/niotic',
    B: '#forge:dusts/fluix',
    C: 'enderio:octadic_capacitor',
    D: '#forge:circuits/basic'
  }).id(`kubejs:ae2/annihilation_core`)

  //======= Formation Core =======
  event.shaped('3x ae2:formation_core', [' B ', 'DCA', ' B '], {
    A: '#forge:gems/spirited',
    B: '#forge:dusts/fluix',
    C: 'enderio:octadic_capacitor',
    D: '#forge:circuits/basic'
  }).id(`kubejs:ae2/formation_core`)

  //======= Infinite Range Booster =======
  event.shaped('aeinfinitybooster:infinity_card', ['CBC', 'BAB', 'DDD'], {
    A: 'extendedcrafting:flux_star',
    B: 'ae2:wireless_booster',
    C: '#forge:plates/platinum',
    D: '#forge:ingots/dragonsteel'
  }).id(`kubejs:aeinfinitybooster/infinity_card`)

  //======= Wireless Universal Terminal =======
  event.shaped(Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,gridKey:17066991997782L,internalMaxPower:4800000.0d,pattern_access:1b,pattern_encoding:1b}'), ['DAD', 'BEC', 'DFD'], {
    A: 'ae2:wireless_crafting_terminal',
    B: 'ae2wtlib:wireless_pattern_encoding_terminal',
    C: 'ae2wtlib:wireless_pattern_access_terminal',
    D: 'ae2:quartz_glass',
    E: 'kubejs:personal_id',
    F: 'ae2:engineering_processor'
  }).id(`kubejs:ae2wtlib/wireless_universal_terminal`)

  //======= ME Mana Cell Housing =======
  modifyShaped(event, 'appbot:mana_cell_housing', 1, ['ABA', 'B B', 'CCC'], {
    A: 'ae2:quartz_glass',
    B: '#forge:dusts/redstone',
    C: '#forge:ingots/manasteel'
  })

  //======= MEGA Mana Cell Housing =======
  event.shaped('megacells:mega_mana_cell_housing', ['ABA', 'B B', 'CCC'], {
    A: 'ae2:quartz_vibrant_glass',
    B: 'ae2:sky_dust',
    C: '#forge:ingots/manasteel'
  }).id(`kubejs:megacells/mega_mana_cell_housing`)

  //======= ME Crafting Terminal =======
  modifyShapeless(event, 'ae2:crafting_terminal', 1, ['ae2:terminal', 'toms_storage:ts.crafting_terminal', 'ae2:calculation_processor'])

  event.shapeless('ae2:ender_dust', 'thermal:ender_pearl_dust').id(`kubejs:thermal/ender_pearl_dust`)
  event.shapeless('ae2:guide', ['minecraft:book', 'ae2:certus_quartz_crystal']).id(`kubejs:ae2/guide`)

  modifyShapeless(event, 'ae2:cable_anchor', 3, ['#forge:ingots/iron', '#ae2:knife'])
  modifyShapeless(event, 'ae2:fluix_covered_cable', 1, ['#minecraft:wool', 'ae2:fluix_glass_cable'])
  modifyShapeless(event, 'ae2:crafting_card', 1, ['#forge:workbenches', 'ae2:basic_card'])
  modifyShapeless(event, 'ae2:fuzzy_card', 1, ['#minecraft:wool', 'ae2:advanced_card'])

  removeRecipeByID(event, [
    'ae2:network/blocks/controller',
    'ae2:network/blocks/interfaces_interface',
    'ae2:network/blocks/cell_workbench',
    'ae2:network/blocks/energy_energy_acceptor',
    'ae2:network/blocks/crystal_processing_quartz_growth_accelerator',
    'ae2:network/blocks/energy_vibration_chamber',
    'ae2:network/parts/panels_semi_dark_monitor',
    'ae2:network/crafting/molecular_assembler',
    'ae2:materials/annihilationcore',
    'ae2:materials/formationcore',,
    'aeinfinitybooster:infinity_card',
    'ae2wtlib:wireless_universal_terminal/upgrade_pattern_encoding',
    'ae2wtlib:wireless_universal_terminal/upgrade_pattern_acces',
    'ae2wtlib:wireless_universal_terminal/upgrade_crafting',
    'ae2wtlib:wireless_universal_terminal/ce',
    'ae2wtlib:wireless_universal_terminal/ca',
    'ae2wtlib:wireless_universal_terminal/ae',
    'megacells:cells/mega_mana_cell_housing'
  ])

})
