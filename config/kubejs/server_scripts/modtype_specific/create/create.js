//Priority: 1000
/**
 * @file create.js
 * @description Recipe Create script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Mechanical Crafter =======
  event.shaped('create:mechanical_crafter', ['C', 'B', 'A'], {
    A: '#forge:workbenches',
    B: 'create:brass_casing',
    C: 'create:electron_tube'
  }).id(`kubejs:create/mechanical_crafter`)

  //======= Windmill Bearing =======
  event.shaped('create:windmill_bearing', ['A', 'B', 'C'], {
    A: 'create:turntable',
    B: 'create:andesite_casing',
    C: 'create:shaft'
  }).id(`kubejs:create/windmill_bearing`)

  //======= Millstone =======
  event.shaped('create:millstone', ['A', 'B', 'C'], {
    A: 'create:cogwheel',
    B: 'create:andesite_casing',
    C: 'minecraft:smooth_stone_slab'
  }).id(`kubejs:create/millstone`)

  //======= Andesite Tunnel =======
  event.shaped('3x create:andesite_tunnel', ['AAA', 'ABA', 'DCD'], {
    A: '#forge:plates/aluminum',
    B: 'supplementaries:cog_block',
    C: 'immersiveengineering:strip_curtain',
    D: 'create:andesite_casing'
  }).id(`kubejs:create/andesite_tunnel`)

  //======= Brass Tunnel =======
  event.shaped('3x create:brass_tunnel', ['AAA', 'ABA', 'DCD'], {
    A: '#forge:plates/brass',
    B: 'supplementaries:cog_block',
    C: 'immersiveengineering:strip_curtain',
    D: 'create:brass_casing'
  }).id(`kubejs:create/brass_tunnel`)

  //======= Andesite Funnel =======
  event.shaped('3x create:andesite_funnel', ['AAA', 'ABA', 'DCD'], {
    A: '#forge:plates/aluminum',
    B: 'advgenerators:controller',
    C: 'immersiveengineering:strip_curtain',
    D: 'create:andesite_casing'
  }).id(`kubejs:create/andesite_funnel`)

  //======= Brass Funnel =======
  event.shaped('3x create:brass_funnel', ['AAA', 'ABA', 'DCD'], {
    A: '#forge:plates/brass',
    B: 'advgenerators:controller',
    C: 'immersiveengineering:strip_curtain',
    D: 'create:brass_casing'
  }).id(`kubejs:create/brass_funnel`)

  //======= Encased Chain Drive =======
  event.shaped('create:encased_chain_drive', ['A', 'B', 'C'], {
    A: 'create:shaft',
    B: 'create:andesite_casing',
    C: ['minecraft:chain', '#forge:rope']
  }).id(`kubejs:create/encased_chain_drive`)

  //======= Chute =======
  event.shaped('12x create:chute', ['A A', 'A A', 'A A'], {
    A: 'immersiveengineering:sheetmetal_colored_black'
  }).id(`kubejs:create/chute`)

  //======= Mechanical Press =======
  event.shaped('create:mechanical_press', [' A ', 'DBD', ' C '], {
    A: 'create:shaft',
    B: 'create:andesite_casing',
    C: 'allthecompressed:cobblestone_2x',
    D: 'create:andesite_alloy'
  }).id(`kubejs:create/mechanical_press`)

  //======= Mechanical Mixer =======
  event.shaped('create:mechanical_mixer', [' A ', 'DBD', ' C '], {
    A: 'create:cogwheel',
    B: 'create:andesite_casing',
    C: 'create:whisk',
    D: 'create:andesite_alloy'
  }).id(`kubejs:create/mechanical_mixer`)

  //======= Whisk =======
  event.shaped('create:whisk', [' A ', 'BCB', 'BBB'], {
    A: 'create:shaft',
    B: '#forge:plates/iron',
    C: 'create:andesite_alloy'
  }).id(`kubejs:create/whisk`)

  //======= Rope Pulley =======
  event.shaped('create:rope_pulley', ['A', 'B', 'C'], {
    A: 'create:shaft',
    B: 'create:andesite_casing',
    C: '#forge:rope'
  }).id(`kubejs:create/rope_pulley`)

  //======= Elevator Pulley =======
  event.shaped('create:elevator_pulley', ['A', 'B', 'C'], {
    A: 'create:brass_casing',
    B: 'create:rope_pulley',
    C: 'advgenerators:controller'
  }).id(`kubejs:create/elevator_pulley`)

  //======= Mechanical Drill =======
  event.shaped('create:mechanical_drill', [' A ', 'DCD', ' B '], {
    A: 'thermal:drill_head',
    B: 'create:andesite_casing',
    C: '#forge:gears/steel',
    D: 'create:andesite_alloy'
  }).id(`kubejs:create/mechanical_drill`)

  //======= Mechanical Roller =======
  event.shaped('create:mechanical_roller', [' A ', 'DBD', ' C '], {
    A: 'create:electron_tube',
    B: 'create:andesite_casing',
    C: 'create:crushing_wheel',
    D: 'create:andesite_alloy'
  }).id(`kubejs:create/mechanical_roller`)

  //======= Mechanical Harvester =======
  event.shaped('create:mechanical_harvester', ['DAB', 'ACA', 'BA '], {
    A: '#forge:plates/iron',
    B: '#forge:gears/steel',
    C: '#forge:rods/iron',
    D: 'create:andesite_casing'
  }).id(`kubejs:create/mechanical_harvester`)

  //======= Mechanical Saw =======
  event.shaped('create:mechanical_saw', [' A ', 'DCD', ' B '], {
    A: Item.of('immersiveengineering:sawblade', '{Damage:0}').strongNBT(),
    B: 'create:andesite_casing',
    C: '#forge:gears/steel',
    D: 'create:andesite_alloy'
  }).id(`kubejs:create/mechanical_saw`)

  //======= Redstone Contact =======
  event.shaped('2x create:redstone_contact', [' A ', 'DBD', ' C '], {
    A: '#forge:plates/copper',
    B: '#forge:dusts/redstone',
    C: 'create:andesite_casing',
    D: 'create:andesite_alloy'
  }).id(`kubejs:create/redstone_contact`)

  //======= Peculiar Bell =======
  event.shaped('create:peculiar_bell', ['A', 'B'], {
    A: '#forge:storage_blocks/brass',
    B: '#forge:ingots/energized_steel'
  }).id(`kubejs:create/peculiar_bell`)

  //======= Crafter Slot Cover =======
  event.shaped('create:crafter_slot_cover', ['ABA'], {
    A: '#forge:nuggets/gold',
    B: '#forge:plates/brass'
  }).id(`kubejs:create/crafter_slot_cover`)

  //======= Schematicannon =======
  event.shaped('create:schematicannon', [' A ', 'BCB', 'DED'], {
    A: 'immersiveengineering:gunpart_barrel',
    B: '#minecraft:planks',
    C: 'minecraft:dispenser',
    D: '#misctags:smooth_stone',
    E: '#forge:gears/steel'
  }).id(`kubejs:create/schematicannon`)

  //======= Rose Quartz Lamp =======
  event.shaped('create:rose_quartz_lamp', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:gems/rose_quartz',
    B: '#forge:dusts/redstone',
    C: 'create:electron_tube'
  }).id(`kubejs:create/rose_quartz_lamp`)

  //======= Mechanical Press missing plates recipes =======
  //Thermal
  event.custom({
    type: "create:pressing",
    ingredients: [{
      tag: "forge:ingots/rose_gold"
    }],
    results: [{
      item: "thermal:rose_gold_plate"
    }]
  }).id(`kubejs:create/pressing/rose_gold_ingot`)
  //Thermal Extra
  event.custom({
    type: "create:pressing",
    ingredients: [{
      tag: "forge:ingots/soul_infused"
    }],
    results: [{
      item: "thermal_extra:soul_infused_plate"
    }]
  }).id(`kubejs:create/pressing/soul_infused_ingot`)
  event.custom({
    type: "create:pressing",
    ingredients: [{
      tag: "forge:ingots/shellite"
    }],
    results: [{
      item: "thermal_extra:shellite_plate"
    }]
  }).id(`kubejs:create/pressing/shellite_ingot`)
  event.custom({
    type: "create:pressing",
    ingredients: [{
      tag: "forge:ingots/twinite"
    }],
    results: [{
      item: "thermal_extra:twinite_plate"
    }]
  }).id(`kubejs:create/pressing/twinite_ingot`)
  event.custom({
    type: "create:pressing",
    ingredients: [{
      tag: "forge:ingots/dragonsteel"
    }],
    results: [{
      item: "thermal_extra:dragonsteel_plate"
    }]
  }).id(`kubejs:create/pressing/dragonsteel_ingot`)

  event.smelting('alltheores:platinum_ingot', 'create:crushed_raw_platinum').xp(0.1).id('kubejs:create/smelting/platinum_ingot_from_crushed')
  event.blasting('alltheores:platinum_ingot', 'create:crushed_raw_platinum').xp(0.1).id('kubejs:create/blasting/platinum_ingot_from_crushed')

  event.custom({
    type: 'create:splashing',
    ingredients: [{
      'item': 'create:crushed_raw_platinum'
    }],
    results: [{
      'count': 9,
      'item': 'alltheores:platinum_nugget'
    }]
  }).id('kubejs:create/splashing/crushed_raw_platinum')

  removeRecipeByID(event, [
    'balancedflight:sequenced_assembly/flight_anchor',
    'create:crafting/logistics/andesite_tunnel',
    'create:crafting/logistics/brass_tunnel',
    'create:crafting/logistics/andesite_funnel',
    'create:crafting/logistics/brass_funnel',
    'create:crafting/logistics/redstone_contact',
    'create:crafting/kinetics/encased_chain_drive',
    'create:crafting/kinetics/chute',
    'create:crafting/kinetics/whisk',
    'create:crafting/kinetics/millstone',
    'create:crafting/kinetics/rope_pulley',
    'create:crafting/kinetics/elevator_pulley',
    'create:crafting/kinetics/windmill_bearing',
    'create:crafting/kinetics/mechanical_press',
    'create:crafting/kinetics/mechanical_harvester',
    'create:crafting/kinetics/mechanical_crafter',
    'create:crafting/kinetics/mechanical_drill',
    'create:crafting/kinetics/mechanical_saw',
    'create:crafting/kinetics/mechanical_roller',
    'create:crafting/kinetics/mechanical_mixer',
    'create:crafting/kinetics/rose_quartz_lamp',
    'create:crafting/kinetics/crafter_slot_cover',
    'create:crafting/curiosities/peculiar_bell',
    'create:crafting/schematics/schematicannon'
  ])

})