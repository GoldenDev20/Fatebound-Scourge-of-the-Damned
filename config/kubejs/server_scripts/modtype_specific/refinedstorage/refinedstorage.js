//Priority: 1000
/**
 * @file refinedstroage.js
 * @description Recipe Refined Storage script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Raw Basic Processor =======
  event.shapeless('refinedstorage:raw_basic_processor', [
    'refinedstorage:processor_binding',
    '#forge:ingots/prosperity',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:refinedstorage/raw_basic_processor`)

  //======= Raw Improved Processor =======
  event.shapeless('refinedstorage:raw_improved_processor', [
    'refinedstorage:processor_binding',
    '#forge:ingots/rose_gold',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:refinedstorage/raw_improved_processor`)

  //======= Raw Advanced Processor =======
  event.shapeless('refinedstorage:raw_advanced_processor', [
    'refinedstorage:processor_binding',
    '#forge:ingots/platinum',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:refinedstorage/raw_advanced_processor`)

  //======= Raw Withering Processor =======
  event.shapeless('extradisks:raw_withering_processor', [
    'refinedstorage:processor_binding',
    'extendedcrafting:ender_star',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:extradisks/raw_withering_processor`)

  //======= Raw Neural Processor =======
  event.shaped('extrastorage:raw_neural_processor', ['ABC', 'BDB', 'EFE'], {
    A: 'extradisks:raw_withering_processor',
    B: '#botania:all_quartz',
    C: 'rebornstorage:raw_super_advanced_processor',
    D: '#forge:silicon',
    E: '#forge:ingots/dragonsteel',
    F: 'refinedstorage:processor_binding'
  }).id(`kubejs:extrastorage/raw_neural_processor`)

  //======= Machine Casing =======
  event.shaped('refinedstorage:machine_casing', ['ABA', 'CDC', 'ABA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: '#forge:silicon',
    C: '#forge:plastic',
    D: '#forge:glass/tinted'
  }).id(`kubejs:refinedstorage/machine_casing`)

  //======= Infinite Range Booster =======
  event.shaped('rsinfinitybooster:infinity_card', ['CBC', 'BAB', 'DDD'], {
    A: 'extendedcrafting:flux_star',
    B: 'refinedstorage:range_upgrade',
    C: '#forge:plates/platinum',
    D: '#forge:ingots/dragonsteel'
  }).id(`kubejs:rsinfinitybooster/infinity_card`)

  //======= Advanced Machine Casing =======
  event.shaped('extradisks:advanced_machine_casing', ['ABA', 'CDC', 'AEA'], {
    A: 'extradisks:withering_processor',
    B: 'refinedstorage:construction_core',
    C: 'extrastorage:neural_processor',
		D: 'refinedstorage:machine_casing',
    E: 'refinedstorage:destruction_core'
  }).id(`kubejs:extradisks/advanced_storage_housing`)

  //======= Iron Crafter =======
  event.shaped('extrastorage:iron_crafter', ['ABA', 'CDC', 'A A'], {
    A: '#forge:storage_blocks/iron',
    B: '#forge:chests/wooden',
    C: 'extrastorage:neural_processor',
    D: 'refinedstorage:crafter'
  }).id(`kubejs:extrastorage/iron_crafter`)

  //======= Security Manager =======
  event.shaped('refinedstorage:security_manager', ['ABA', 'CDC', 'AEA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: '#forge:chests/wooden',
    C: 'refinedstorage:security_card',
    D: 'refinedstorage:machine_casing',
    E: 'kubejs:personal_id'
  }).id(`kubejs:refinedstorage/security_manager`)

  //======= REBORN STORAGE =======
  event.shaped('6x rebornstorage:multiblock_frame', ['ABA', 'BCB', 'ABA'], {
    A: 'refinedstorage:machine_casing',
    B: 'rebornstorage:super_advanced_processor',
    C: '#forge:silicon'
  }).id(`kubejs:rebornstorage/multiblock_frame`)

  event.shaped('2x rebornstorage:multiblock_heat', ['ABA', 'BCB', 'ABA'], {
    A: 'rebornstorage:multiblock_frame',
    B: 'advgenerators:heat_exchanger',
    C: '#forge:silicon'
  }).id(`kubejs:rebornstorage/multiblock_heat`)

  event.shaped('rebornstorage:multiblock_cpu', ['ADA', 'BCB', 'ADA'], {
    A: 'rebornstorage:multiblock_frame',
    B: 'refinedstorage:crafting_upgrade',
    C: 'ironfurnaces:augment_speed',
    D: 'rebornstorage:super_advanced_processor'
  }).id(`kubejs:rebornstorage/multiblock_cpu`)

  event.shaped('rebornstorage:multiblock_storage', ['ADA', 'BCB', 'ABA'], {
    A: 'rebornstorage:multiblock_frame',
    B: 'refinedstorage:1k_storage_block',
    C: 'rebornstorage:super_advanced_processor',
    D: 'extrastorage:netherite_crafter'
  }).id(`kubejs:rebornstorage/multiblock_storage`)

  //======= Super Wireless Grid =======
  event.shaped('rebornstorage:super_wireless_crafting_grid', ['ADA', 'ACA', 'ABA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'rebornstorage:super_advanced_processor',
    C: 'universalgrid:wireless_universal_grid',
    D: Item.of('cyclic:ender_pearl_mounted', '{Damage:0}')
  }).id(`kubejs:rebornstorage/super_wireless_crafting_grid`)

  //======= STORAGE PARTS =======
  //======= 4096k Storage Part =======
  event.shaped('extradisks:4096k_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'refinedstorage:advanced_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/items/1024k',
    D: '#forge:ingots/signalum'
  }).id(`kubejs:extradisks/part/4096k_storage_part`)
  //======= 16384k Storage Part =======
  event.shaped('extradisks:16384k_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'refinedstorage:advanced_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/items/4096k',
    D: '#forge:ingots/platinum'
  }).id(`kubejs:extradisks/part/16384k_storage_part`)
  //======= 65536k Storage Part =======
  event.shaped('extradisks:65536k_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'refinedstorage:advanced_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/items/16384k',
    D: '#forge:ingots/unobtainium'
  }).id(`kubejs:extradisks/part/65536k_storage_part`)
  //======= 262144k Storage Part =======
  event.shaped('extradisks:262144k_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'extradisks:withering_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/items/65536k',
    D: '#forge:ingots/supremium'
  }).id(`kubejs:extradisks/part/262144k_storage_part`)
  //======= 1048576k Storage Part =======
  event.shaped('extradisks:1048576k_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'extradisks:withering_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/items/262144k',
    D: '#forge:ingots/insanium'
  }).id(`kubejs:extradisks/part/1048576k_storage_part`)
  //======= Infinite Storage Part =======
  event.recipes.extendedcrafting.shaped_table({
    pattern: [
      'AAAAAAAAA',
      'ADFFEFFDA',
      'AFD C DFA',
      'AF BBB FA',
      'AECBBBCEA',
      'AF BBB FA',
      'AFD C DFA',
      'ADFFEFFDA',
      'AAAAAAAAA',
    ],
    key: {
      A: {item: 'thermal_extra:dragonsteel_glass', },
      B: {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot', },
      C: {item: 'extradisks:1048576k_storage_part', },
      D: {item: 'extradisks:withering_processor', },
      E: {item: 'extrastorage:neural_processor', },
      F: {item: 'minecraft:redstone', },
    },
    result: {item: 'extradisks:infinite_storage_part', },
  }).id(`kubejs:extradisks/infinite_storage_part`)
  //======= 16384k Fluid Storage Part =======
  event.shaped('extradisks:16384k_fluid_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'refinedstorage:advanced_processor',
    B: '#forge:dusts/redstone',
    C: 'refinedstorage:4096k_fluid_storage_part',
    D: '#forge:ingots/nickel'
  }).id(`kubejs:extradisks/part/16384k_fluid_storage_part`)
  //======= 65536k Fluid Storage Part =======
  event.shaped('extradisks:65536k_fluid_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'refinedstorage:advanced_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/fluids/16384k',
    D: '#forge:ingots/lumium'
  }).id(`kubejs:extradisks/part/65536k_fluid_storage_part`)
  //======= 262144k Fluid Storage Part =======
  event.shaped('extradisks:262144k_fluid_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'refinedstorage:advanced_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/fluids/65536k',
    D: '#forge:ingots/enderium'
  }).id(`kubejs:extradisks/part/262144k_fluid_storage_part`)
  //======= 1048576k Fluid Storage Part =======
  event.shaped('extradisks:1048576k_fluid_storage_part', ['ADA', 'CBC', 'ACA'], {
    A: 'extradisks:withering_processor',
    B: '#forge:dusts/redstone',
    C: '#refinedstorage:parts/fluids/262144k',
    D: '#forge:ingots/vibranium'
  }).id(`kubejs:extradisks/part/1048576k_fluid_storage_part`)
  //======= Infinite Fluid Storage Park =======
  event.recipes.extendedcrafting.shaped_table({
    pattern: [
      'AAAAAAAAA',
      'ADFFEFFDA',
      'AFD C DFA',
      'AF BBB FA',
      'AECBBBCEA',
      'AF BBB FA',
      'AFD C DFA',
      'ADFFEFFDA',
      'AAAAAAAAA',
    ],
    key: {
      A: {item: 'thermal_extra:twinite_glass', },
      B: {item: 'allthemodium:vibranium_allthemodium_alloy_ingot', },
      C: {item: 'extradisks:1048576k_fluid_storage_part', },
      D: {item: 'rebornstorage:super_advanced_processor', },
      E: {item: 'extrastorage:neural_processor', },
      F: {item: 'minecraft:redstone', },
    },
    result: {item: 'extradisks:infinite_fluid_storage_part', },
  }).id(`kubejs:extradisks/infinite_fluid_storage_part`)

  //======= Crafting Grid =======
  event.shapeless('refinedstorage:crafting_grid', [
    'refinedstorage:grid',
    'refinedstorage:advanced_processor',
    'toms_storage:ts.crafting_terminal'
  ]).id(`kubejs:refinedstorage/crafting_grid`)

  removeRecipeByID(event, [
    //======= STORAGE PARTS =======
    //======= Removes overlapping Extra Storage parts =======
    /^extrastorage:(?:part|disk|storage_block)\/.+/,
    //======= Removes overlapping Reborn Storage parts =======
    /^rebornstorage:(?:disks|parts)\/(small|medium|large|larger).+/,
    'extradisks:part/4096k_storage_part',
    'extradisks:part/16384k_storage_part',
    'extradisks:part/65536k_storage_part',
    'extradisks:part/262144k_storage_part',
    'extradisks:part/1048576k_storage_part',
    'extradisks:part/infinite_storage_part',
    'extradisks:part/16384k_fluid_storage_part',
    'extradisks:part/65536k_fluid_storage_part',
    'extradisks:part/262144k_fluid_storage_part',
    'extradisks:part/1048576k_fluid_storage_part',
    'extradisks:part/infinite_fluid_storage_part',
    'refinedstorage:raw_basic_processor',
    'refinedstorage:raw_improved_processor',
    'refinedstorage:raw_advanced_processor',
    'extradisks:raw_withering_processor',
    'extrastorage:raw_neural_processor',
    'extrastorage:iron_crafter',
    'refinedstorage:machine_casing',
    'extradisks:advanced_machine_casing',
    'refinedstorage:security_manager',
    'rebornstorage:multiblock_frame',
    'rebornstorage:multiblock_heat',
    'rebornstorage:multiblock_cpu',
    'rebornstorage:multiblock_storage',
    'rebornstorage:parts/super_wireless_crafting_grid',
    'rsinfinitybooster:infinity_card',
    'refinedstorage:crafting_grid/crafting_grid'
  ])

})
