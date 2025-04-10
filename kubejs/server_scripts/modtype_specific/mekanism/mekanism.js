//Priority: 1000
/**
 * @file mekanism.js
 * @description Recipe Mekanism script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Steel Casing =======
  event.shaped('mekanism:steel_casing', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:ingots/end_steel',
    B: 'enderio:reinforced_obsidian_block',
    C: '#forge:storage_blocks/dark_steel',
    D: '#immersiveengineering:scaffoldings/steel'
  }).id(`kubejs:mekanism/steel_casing`)

  //======= Digital Miner =======
  event.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:storage_blocks/energized_steel'
  }).id(`kubejs:mekanism/digital_miner`)

  //======= Atomic Disassembler =======
  event.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: '#forge:ingots/vibrant_alloy'
  }).id(`kubejs:mekanism/atomic_disassembler`)

  //======= Robit =======
  event.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/energized_steel',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: '#mekanism:personal_storage'
  }).id(`kubejs:mekanism/robit`)

  //======= Personal Chest =======
  event.shaped('mekanism:personal_chest', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:chests/wooden',
    D: 'mekanism:elite_control_circuit',
    E: '#forge:ingots/enderium',
    F: 'kubejs:personal_id'
  }).id(`kubejs:mekanism/personal_chest`)

  //======= Personal Barrel =======
  event.shaped('mekanism:personal_barrel', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:barrels/wooden',
    D: 'mekanism:elite_control_circuit',
    E: '#forge:ingots/enderium',
    F: 'kubejs:personal_id'
  }).id(`kubejs:mekanism/personal_barrel`)

  //======= Energy Tablet =======
  event.shaped('mekanism:energy_tablet', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:ingots/gold',
    C: 'mekanism:alloy_infused',
    D: 'enderio:basic_capacitor'
  }).id(`kubejs:mekanism/energy_tablet`)

  //======= Configurator =======
  event.shaped('mekanism:configurator', [' A ', 'CDC', ' B '], {
    A: 'enderio:basic_capacitor',
    B: '#forge:rods/steel',
    C: 'mekanism:alloy_infused',
    D: 'mekanism:energy_tablet'
  }).id(`kubejs:mekanism/configurator`)

  //======= Configuration Card =======
  event.shaped('mekanism:configuration_card', ['ACA', 'CBC', 'ACA'], {
    A: 'enderio:basic_capacitor',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:alloy_infused'
  }).id(`kubejs:mekanism/configuration_card`)

  //======= Geiger Counter =======
  event.shaped('mekanism:geiger_counter', ['ACA', 'CBC', 'ACA'], {
    A: 'enderio:basic_capacitor',
    B: 'mekanism:basic_control_circuit',
    C: '#forge:ingots/lead'
  }).id(`kubejs:mekanism/geiger_counter`)

  //======= Dosimeter =======
  event.shaped('mekanism:dosimeter', ['ACA', 'CBC', 'ACA'], {
    A: 'enderio:basic_capacitor',
    B: '#forge:ingots/redstone',
    C: '#forge:ingots/lead'
  }).id(`kubejs:mekanism/dosimeter`)

  //======= Cardboard Box =======
  event.shaped('mekanism:cardboard_box', ['ABA', 'A A', 'AAA'], {
    A: '#forge:dusts/wood',
    B: 'sophisticatedstorage:packing_tape'
  }).id(`kubejs:mekanism/cardboard_box`)

  //======= Metallurgic Infuser =======
  event.shaped('mekanism:metallurgic_infuser', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:ingots/steel',
    B: '#forge:furnaces/iron',
    C: '#forge:dusts/redstone',
    D: '#forge:ingots/end_steel'
  }).id(`kubejs:mekanism/metallurgic_infuser`)

  //======= Enrichment Chamber =======
  event.shaped('mekanism:enrichment_chamber', ['AEA', 'CDC', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: '#forge:circuits/advanced',
    C: '#forge:ingots/obsidian',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/enrichment_chamber`)

  //======= Osmium Compressor =======
  event.shaped('mekanism:osmium_compressor', ['AEA', 'CDC', 'ABA'], {
    A: '#mekanism:alloys/infused',
    B: '#forge:circuits/advanced',
    C: 'create:fluid_tank',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/osmium_compressor`)

  //======= Energized Smelter =======
  event.shaped('mekanism:energized_smelter', ['AEA', 'CDC', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: '#forge:circuits/advanced',
    C: '#forge:furnaces/crystal',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/energized_smelter`)

  //======= Crusher =======
  event.shaped('mekanism:crusher', ['AEA', 'CDC', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: '#forge:circuits/advanced',
    C: 'create:crushing_wheel',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/crusher`)

  //======= Teleporter Frame =======
  event.shaped('4x mekanism:teleporter_frame', ['ABA', 'BCB', 'ABA'], {
    A: 'ars_nouveau:sourcestone',
    B: '#forge:ingots/refined_glowstone',
    C: 'ars_nouveau:ritual_warping'
  }).id(`kubejs:mekanism/teleporter_frame`)

  //======= Teleporter =======
  event.shaped('mekanism:teleporter', ['ABA', 'CDC', 'AEA'], {
    A: '#forge:ingots/obsidian',
    B: 'mekanism:teleportation_core',
    C: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}').strongNBT(),
    D: 'minecraft:respawn_anchor',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/teleporter`)

  //======= Portable Teleporter =======
  event.shaped('mekanism:portable_teleporter', ['ABA', 'CDC', 'AEA'], {
    A: '#forge:ingots/energized_steel',
    B: 'mekanism:teleportation_core',
    C: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}').strongNBT(),
    D: 'rftoolsutility:screen',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/portable_teleporter`)

  //======= Resistive Heater =======
  event.shaped('mekanism:resistive_heater', ['ABA', 'CDC', 'ECE'], {
    A: '#forge:storage_blocks/energized_steel',
    B: 'advgenerators:heating_chamber',
    C: '#forge:ingots/fiery',
    D: 'immersiveengineering:furnace_heater',
    E: 'immersiveengineering:blastbrick_reinforced'
  }).id(`kubejs:mekanism/resistive_heater`)

  //======= Chargepad =======
  event.shaped('mekanism:chargepad', [' A ', 'BCB', 'DDD'], {
    A: 'thermal:flux_capacitor',
    B: '#forge:ingots/steel',
    C: 'mekanism:energy_tablet',
    D: 'quark:obsidian_pressure_plate'
  }).id(`kubejs:mekanism/chargepad`)

  //======= Chemical Oxidizer =======
  event.shaped('mekanism:chemical_oxidizer', ['CBE', 'ADA', 'FBF'], {
    A: 'immersiveengineering:insulating_glass',
    B: '#forge:circuits/advanced',
    C: '#mekanism:personal_storage',
    D: 'mysticalagriculture:machine_frame',
    E: 'mekanism:basic_chemical_tank',
    F: '#forge:alloys/elite'
  }).id(`kubejs:mekanism/chemical_oxidizer`)

  //======= Chemical Infuser =======
  event.shaped('mekanism:chemical_infuser', ['EBE', 'ACA', 'DED'], {
    A: 'immersiveengineering:insulating_glass',
    B: '#forge:ingots/steel',
    C: 'mysticalagriculture:machine_frame',
    D: '#forge:plates/osmium',
    E: 'mekanism:basic_chemical_tank'
  }).id(`kubejs:mekanism/chemical_infuser`)

  //======= Basic Chemical Tank =======
  event.shaped('mekanism:basic_chemical_tank', [' A ', 'BCB', ' B '], {
    A: 'advgenerators:pressure_valve',
    B: '#forge:plates/steel',
    C: Item.of('create:copper_backtank', '{Air:900}')
  }).id(`kubejs:mekanism/basic_chemical_tank`)

  //======= Basic Fluid Tank =======
  event.shaped('mekanism:basic_fluid_tank', [' A ', 'BCB', ' B '], {
    A: 'create:fluid_valve',
    B: '#forge:plates/steel',
    C: Item.of('evilcraft:dark_tank', '{Fluid:{Amount:0,FluidName:"minecraft:empty"},capacity:16000}')
  }).id(`kubejs:mekanism/basic_fluid_tank`)

  //======= Rotary Condensentrator =======
  event.shaped('mekanism:rotary_condensentrator', ['EBF', 'ACA', 'DBD'], {
    A: 'immersiveengineering:insulating_glass',
    B: 'advgenerators:turbine_rotor_tier1',
    C: 'mysticalagriculture:machine_frame',
    D: '#forge:gears/steel',
    E: 'mekanism:basic_chemical_tank',
    F: 'thermal:fluid_reservoir'
  }).id(`kubejs:mekanism/rotary_condensentrator`)

  //======= Pressurized Reaction Chamber =======
  event.shaped('mekanism:pressurized_reaction_chamber', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:gears/steel',
    B: '#forge:circuits/elite',
    C: 'advgenerators:controller',
    D: 'mysticalagriculture:machine_frame',
    E: 'mekanism:basic_chemical_tank',
    F: 'thermal:fluid_reservoir'
  }).id(`kubejs:mekanism/pressurized_reaction_chamber`)

  //======= Laser Amplifier =======
  event.shaped('mekanism:laser_amplifier', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:plates/steel',
    B: '#forge:gems/infused_diamond',
    C: 'mysticalagriculture:machine_frame'
  }).id(`kubejs:mekanism/laser_amplifier`)

  //======= Basic Tier Installer =======
  event.shaped('mekanism:basic_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:circuits/basic',
    C: '#forge:ingots/iron',
    D: 'mysticalagriculture:machine_frame'
  }).id(`kubejs:mekanism/basic_tier_installer`)

  //======= Advanced Tier Installer =======
  event.shaped('mekanism:advanced_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#mekanism:alloys/infused',
    B: '#forge:circuits/advanced',
    C: '#forge:ingots/osmium',
    D: 'mysticalagriculture:machine_frame'
  }).id(`kubejs:mekanism/advanced_tier_installer`)

  //======= Elite Tier Installer =======
  event.shaped('mekanism:elite_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#mekanism:alloys/reinforced',
    B: '#forge:circuits/elite',
    C: '#forge:ingots/netherite',
    D: 'mysticalagriculture:machine_frame'
  }).id(`kubejs:mekanism/elite_tier_installer`)

  //======= Ultimate Tier Installer =======
  event.shaped('mekanism:ultimate_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#mekanism:alloys/atomic',
    B: '#forge:circuits/ultimate',
    C: '#forge:ingots/dragonsteel',
    D: 'mysticalagriculture:machine_frame'
  }).id(`kubejs:mekanism/ultimate_tier_installer`)

  //======= Chemical Crystallizer =======
  event.shaped('mekanism:chemical_crystallizer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:storage_blocks/unobtainium',
    B: 'mekanism:basic_chemical_tank',
    C: 'mysticalagriculture:supremium_growth_accelerator',
    D: 'mekanism:steel_casing'
  }).id(`kubejs:mekanism/chemical_crystallizer`)

  //======= Chemical Injection Chamber =======
  event.shaped('mekanism:chemical_injection_chamber', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/vibranium',
    B: '#mekanism:personal_storage',
    C: 'thermal:enderium_glass',
    D: 'mysticalagriculture:machine_frame',
    E: '#forge:gears/steel',
    F: 'mekanism:basic_chemical_tank'
  }).id(`kubejs:mekanism/chemical_injection_chamber`)

  removeRecipeByID(event, [
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanism:robit',
    'mekanism:steel_casing',
    'mekanism:personal_chest',
    'mekanism:personal_barrel',
    'mekanism:portable_teleporter',
    'mekanism:resistive_heater',
    'mekanism:chargepad',
    'mekanism:chemical_oxidizer',
    'mekanism:chemical_infuser',
    'mekanism:chemical_tank/basic',
    'mekanism:fluid_tank/basic',
    'mekanism:tier_installer/basic',
    'mekanism:tier_installer/advanced',
    'mekanism:tier_installer/elite',
    'mekanism:tier_installer/ultimate',
    'mekanism:rotary_condensentrator',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:laser_amplifier',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_injection_chamber',
    'mekanism:energy_tablet',
    'mekanism:configurator',
    'mekanism:configuration_card',
    'mekanism:geiger_counter',
    'mekanism:dosimeter',
    'mekanism:cardboard_box',
    'mekanism:metallurgic_infuser',
    'mekanism:enrichment_chamber',
    'mekanism:osmium_compressor',
    'mekanism:energized_smelter',
    'mekanism:crusher',
    'mekanism:teleporter_frame',
    'mekanism:teleporter',
  ])

})