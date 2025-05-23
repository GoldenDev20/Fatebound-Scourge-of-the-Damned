//Priority: 1000
/**
 * @file industrialforegoing.js
 * @description Recipe Industrial Foregoing script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Item Transporter =======
  event.shaped('2x industrialforegoing:item_transporter_type', ['AEA', 'BCB', 'ADA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:ingots/gold',
    C: 'create:andesite_casing',
    D: 'minecraft:piston',
    E: 'minecraft:ender_pearl'
  }).id(`kubejs:industrialforegoing/item_transporter_type`)

  //======= Fluid Transporter =======
  event.shaped('2x industrialforegoing:fluid_transporter_type', ['AEA', 'BCB', 'ADA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:gems/lapis',
    C: 'create:andesite_casing',
    D: 'minecraft:piston',
    E: 'minecraft:ender_pearl'
  }).id(`kubejs:industrialforegoing/fluid_transporter_type`)

  //======= World Transporter =======
  event.shaped('2x industrialforegoing:world_transporter_type', ['AEA', 'BCB', 'ADA'], {
    A: '#forge:dusts/redstone',
    B: 'minecraft:hopper',
    C: 'create:andesite_casing',
    D: 'minecraft:dropper',
    E: 'minecraft:ender_pearl'
  }).id(`kubejs:industrialforegoing/world_transporter_type`)

  //======= Pity Machine Frame =======
  event.shaped('industrialforegoing:machine_frame_pity', ['ADA', 'BCB', 'ADA'], {
    A: '#forge:treated_wood',
    B: '#forge:gears/bronze',
    C: 'create:andesite_casing',
    D: 'thermal:rf_coil'
  }).id(`kubejs:industrialforegoing/machine_frame_pity`)

  //======= Simple Machine Frame =======
  event.shaped('industrialforegoing:machine_frame_simple', ['ADA', 'BCB', 'ADA'], {
    A: '#thermal:glass/hardened',
    B: '#forge:gears/steel',
    C: '#industrialforegoing:machine_frame/pity',
    D: 'thermal:rf_coil'
  }).id(`kubejs:industrialforegoing/machine_frame_simple`)

  //======= Dissolution Chamber =======
  event.shaped('industrialforegoing:dissolution_chamber', ['CAC', 'BDB', 'EFE'], {
    A: 'enderstorage:ender_chest',
    B: 'create:fluid_valve',
    C: '#forge:plastic',
    D: '#industrialforegoing:machine_frame/pity',
    E: '#forge:gears/steel',
    F: 'immersiveengineering:fluid_sorter'
  }).id(`kubejs:industrialforegoing/dissolution_chamber`)

  //======= Material StoneWork Factory =======
  event.shaped('industrialforegoing:material_stonework_factory', ['CAC', 'BDG', 'EFE'], {
    A: 'rftoolscontrol:craftingstation',
    B: 'thermal:flux_drill',
    C: '#forge:plastic',
    D: '#industrialforegoing:machine_frame/advanced',
    E: '#forge:ingots/energized_steel',
    F: 'industrialforegoing:pink_slime',
    G: '#forge:furnaces/netherite'
  }).id(`kubejs:industrialforegoing/material_stonework_factory`)

  //======= Sludge Refiner =======
  event.shaped('industrialforegoing:sludge_refiner', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plastic',
    B: 'immersiveengineering:fluid_placer',
    C: 'immersiveengineering:blastbrick_reinforced',
    D: '#industrialforegoing:machine_frame/pity',
    E: '#forge:gears/steel',
    F: 'immersiveengineering:furnace_heater'
  }).id(`kubejs:industrialforegoing/sludge_refiner`)

  //======= Fluid Extractor =======
  event.shaped('industrialforegoing:fluid_extractor', ['ADA', 'BCB', 'ADA'], {
    A: '#forge:ingots/iron',
    B: '#forge:cobblestone',
    C: '#industrialforegoing:machine_frame/pity',
    D: 'minecraft:piston'
  }).id(`kubejs:industrialforegoing/fluid_extractor`)

  //======= Plant Fertilizer =======
  event.shaped('industrialforegoing:plant_fertilizer', ['ADA', 'BCF', 'EGE'], {
    A: '#forge:plastic',
    B: 'industrialforegoing:fertilizer',
    C: '#industrialforegoing:machine_frame/simple',
    D: 'immersiveengineering:fertilizer',
    E: '#forge:gears/iron',
    F: 'botania:fertilizer',
    G: 'mysticalagriculture:mystical_fertilizer'
  }).id(`kubejs:industrialforegoing/plant_fertilizer`)

  //======= Sewer =======
  event.shaped('industrialforegoing:sewer', ['ADA', 'BCB', 'BDB'], {
    A: '#forge:plastic',
    B: '#forge:ingots/aluminum',
    C: '#industrialforegoing:machine_frame/pity',
    D: 'quark:grate'
  }).id(`kubejs:industrialforegoing/sewer`)

  //======= Mob Duplicator =======
  event.shaped('industrialforegoing:mob_duplicator', ['ADA', 'BCB', 'EFE'], {
    A: '#forge:plastic',
    B: '#forge:gears/allthemodium',
    C: '#industrialforegoing:machine_frame/advanced',
    D: 'minecraft:nether_star',
    E: '#forge:storage_blocks/emerald',
    F: '#forge:storage_blocks/redstone'
  }).id(`kubejs:industrialforegoing/mob_duplicator`)

  //======= Marine Fisher =======
  event.shaped('industrialforegoing:marine_fisher', ['ADA', 'BCB', 'EFE'], {
    A: '#forge:plastic',
    B: 'cyclic:fisher',
    C: '#industrialforegoing:machine_frame/simple',
    D: 'aquaculture:diamond_fishing_rod',
    E: '#forge:gears/iron',
    F: 'thermal:deep_aquachow'
  }).id(`kubejs:industrialforegoing/marine_fisher`)

  //======= Laser Drill =======
  event.shaped('industrialforegoing:laser_drill', ['ADA', 'BCB', 'EFE'], {
    A: '#forge:plastic',
    B: 'thermal:flux_drill',
    C: '#industrialforegoing:machine_frame/advanced',
    D: 'immersiveengineering:drillhead_steel',
    E: '#forge:gears/diamond',
    F: '#forge:storage_blocks/redstone'
  }).id(`kubejs:industrialforegoing/laser_drill`)

  const recipes = [
    //======= Advanced Machine Frame =======
    {
      output: '2x industrialforegoing:machine_frame_advanced',
      inputs: [
        '#forge:ingots/energized_steel',
        '#industrialforegoing:machine_frame/simple',
        '#forge:ingots/energized_steel',
        'thermal:rf_coil',
        'thermal:rf_coil',
        '#forge:gears/steel',
        'immersiveengineering:light_engineering',
        '#forge:gears/steel'
      ],
      inputFluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 800,
      id: `kubejs:industrialforegoing/machine_frame_advanced`
    },
    //======= Supreme Machine Frame =======
    {
      output: '2x industrialforegoing:machine_frame_supreme',
      inputs: [
        '#forge:ingots/allthemodium',
        '#industrialforegoing:machine_frame/advanced',
        '#forge:ingots/allthemodium',
        'createaddition:tesla_coil',
        'createaddition:tesla_coil',
        '#forge:gears/dragonsteel',
        'immersiveengineering:heavy_engineering',
        '#forge:gears/dragonsteel'
      ],
      inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
      processingTime: 800,
      id: `kubejs:industrialforegoing/machine_frame_supreme`
    },
    //======= Addon: Speed Tier 1 =======
    {
      output: Item.of('industrialforegoing:speed_addon_1', 3, '{TitaniumAugment:{Speed:2.0f}}'),
      inputs: [
        'ironfurnaces:augment_speed',
        '#forge:gems/cinnabar',
        'ironfurnaces:augment_speed',
        '#forge:dusts/apatite',
        '#forge:dusts/apatite',
        'ironfurnaces:augment_speed',
        '#forge:gems/cinnabar',
        'ironfurnaces:augment_speed'
      ],
      inputFluid: '{Amount:500,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 200,
      id: `industrialforegoing:dissolution_chamber/speed_addon_1`
    },
    //======= Addon: Speed Tier 2 =======
    {
      output: Item.of('industrialforegoing:speed_addon_2', 3, '{TitaniumAugment:{Speed:3.0f}}'),
      inputs: [
        'industrialforegoing:speed_addon_1',
        'mekanism:elite_control_circuit',
        'industrialforegoing:speed_addon_1',
        'botania:pixie_dust',
        'botania:pixie_dust',
        'industrialforegoing:speed_addon_1',
        'mekanism:elite_control_circuit',
        'industrialforegoing:speed_addon_1'
      ],
      inputFluid: '{Amount:800,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 300,
      id: `industrialforegoing:dissolution_chamber/speed_addon_2`
    },
    //======= Addon: Efficiency Tier 1 =======
    {
      output: Item.of('industrialforegoing:efficiency_addon_1', 3, '{TitaniumAugment:{Efficiency:0.9f}}'),
      inputs: [
        'ironfurnaces:augment_fuel',
        'mininggadgets:upgrade_battery_3',
        'ironfurnaces:augment_fuel',
        'powah:crystal_niotic',
        'powah:crystal_niotic',
        'ironfurnaces:augment_fuel',
        'mininggadgets:upgrade_battery_3',
        'ironfurnaces:augment_fuel'
      ],
      inputFluid: '{Amount:500,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 200,
      id: `industrialforegoing:dissolution_chamber/efficiency_addon_1`
    },
    //======= Addon: Efficiency Tier 2 =======
    {
      output: Item.of('industrialforegoing:efficiency_addon_2', 3, '{TitaniumAugment:{Efficiency:0.8f}}'),
      inputs: [
        'industrialforegoing:efficiency_addon_1',
        'mekanism:elite_control_circuit',
        'industrialforegoing:efficiency_addon_1',
        'powah:crystal_spirited',
        'powah:crystal_spirited',
        'industrialforegoing:efficiency_addon_1',
        'mekanism:elite_control_circuit',
        'industrialforegoing:efficiency_addon_1'
      ],
      inputFluid: '{Amount:800,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 300,
      id: `industrialforegoing:dissolution_chamber/efficiency_addon_2`
    },
    //======= Addon: Processing Tier 1 =======
    {
      output: Item.of('industrialforegoing:processing_addon_1', 3, '{TitaniumAugment:{Processing:2.0f}}'),
      inputs: [
        'ironfurnaces:augment_generator',
        'create:content_observer',
        'ironfurnaces:augment_generator',
        '#forge:gems/ruby',
        '#forge:gems/ruby',
        'ironfurnaces:augment_generator',
        'create:content_observer',
        'ironfurnaces:augment_generator'
      ],
      inputFluid: '{Amount:500,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 200,
      id: `industrialforegoing:dissolution_chamber/processing_addon_1`
    },
    //======= Addon: Processing Tier 2 =======
    {
      output: Item.of('industrialforegoing:processing_addon_2', 3, '{TitaniumAugment:{Processing:3.0f}}'),
      inputs: [
        'industrialforegoing:processing_addon_1',
        'rftoolscontrol:cpu_core_2000',
        'industrialforegoing:processing_addon_1',
        '#forge:gems/sapphire',
        '#forge:gems/sapphire',
        'industrialforegoing:processing_addon_1',
        'rftoolscontrol:cpu_core_2000',
        'industrialforegoing:processing_addon_1'
      ],
      inputFluid: '{Amount:800,FluidName:"industrialforegoing:pink_slime"}',
      processingTime: 300,
      id: `industrialforegoing:dissolution_chamber/processing_addon_2`
    },
    //======= Glowstone =======
    {
      output: '8x minecraft:glowstone_dust',
      inputs: [
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores',
        'thermal:glowstone_mushroom_spores'
      ],
      inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
      processingTime: 40,
      id: `kubejs:industrialforegoing/glowstone_dust_from_spores`
    },
    //======= Redstone =======
    {
      output: '8x minecraft:redstone',
      inputs: [
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores',
        'thermal:redstone_mushroom_spores'
      ],
      inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
      processingTime: 40,
      id: `kubejs:industrialforegoing/redstone_from_spores`
    },
    //======= Gunpowder =======
    {
      output: '8x minecraft:gunpowder',
      inputs: [
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores',
        'thermal:gunpowder_mushroom_spores'
      ],
      inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
      processingTime: 40,
      id: `kubejs:industrialforegoing/gunpowder_from_spores`
    },
    //======= Slime Ball =======
    {
      output: '8x minecraft:slime_ball',
      inputs: [
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores',
        'thermal:slime_mushroom_spores'
      ],
      inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
      processingTime: 40,
      id: `kubejs:industrialforegoing/slime_ball_from_spores`
    }
  ]

  recipes.forEach((recipe) => {
    recipe.type = 'industrialforegoing:dissolution_chamber';
    recipe.input = recipe.inputs.map((input) => Ingredient.of(input).toJson());
    recipe.output = Item.of(recipe.output).toJson();
    event.custom(recipe).id(recipe.id);
  })

  removeRecipeByID(event, [
    'industrialforegoing:machine_frame_pity',
    'industrialforegoing:dissolution_chamber/simple_machine_frame',
    'industrialforegoing:dissolution_chamber/advanced_machine_frame',
    'industrialforegoing:dissolution_chamber/supreme_machine_frame',
    'industrialforegoing:dissolution_chamber',
    'industrialforegoing:material_stonework_factory',
    'industrialforegoing:sludge_refiner',
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:plant_fertilizer',
    'industrialforegoing:sewer',
    'industrialforegoing:mob_duplicator',
    'industrialforegoing:marine_fisher',
    'industrialforegoing:laser_drill',
    'industrialforegoing:item_transporter_type',
    'industrialforegoing:fluid_transporter_type',
    'industrialforegoing:world_transporter_type'
  ])

})