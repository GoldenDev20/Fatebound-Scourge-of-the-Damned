//Priority: 1000
/**
 * @file immersiveengineering.js
 * @description Recipe Immersive Engingeering script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Coke Coal =======
  event.shapeless('immersiveengineering:coal_coke', 'thermal:coal_coke').id(`kubejs:immersiveengieering/coal_coke_conversion`)
  event.shapeless('thermal:coal_coke', 'immersiveengineering:coal_coke').id(`kubejs:thermal/coal_coke_conversion`)

  //======= Garden Cloche =======
  event.shaped('immersiveengineering:cloche', ['GEG', 'GFG', 'TRT'], {
    G: 'glassential:glass_redstone',
    E: 'immersiveengineering:toolupgrade_revolver_electro',
    T: '#forge:treated_wood',
    R: 'immersiveengineering:rs_engineering',
    F: 'reliquary:fertile_lily_pad'
  }).id(`kubejs:immersiveengieering/cloche`)

  //======= Redstone Engineering Block =======
  event.shaped('2x immersiveengineering:rs_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/iron',
    B: 'thermal:redstone_servo',
    C: '#forge:storage_blocks/copper',
    D: 'securitycraft:redstone_module'
  }).id(`kubejs:immersiveengieering/rs_engineering`)

  //======= Light Engineering Block =======
  event.shaped('2x immersiveengineering:light_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/aluminum',
    B: 'thermal:redstone_servo',
    C: '#forge:storage_blocks/nickel',
    D: 'immersiveengineering:component_electronic'
  }).id(`kubejs:immersiveengieering/light_engineering`)

  //======= Heavy Engineering Block =======
  event.shaped('2x immersiveengineering:heavy_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/steel',
    B: 'thermal:redstone_servo',
    C: '#forge:storage_blocks/enderium',
    D: '#forge:gears/steel'
  }).id(`kubejs:immersiveengieering/heavy_engineering`)

  //======= Engineer's Crafting Table =======
  event.shaped('immersiveengineering:craftingtable', ['AAA', 'BCB', 'B B'], {
    A: '#forge:treated_wood_slab',
    B: '#forge:rods/treated_wood',
    C: '#forge:workbenches'
  }).id(`kubejs:immersiveengieering/craftingtable`)

  //======= Reinforced Blast Brick =======
  event.shaped('3x immersiveengineering:blastbrick_reinforced', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:obsidian',
    B: '#forge:plates/steel',
    C: 'immersiveengineering:blastbrick'
  }).id(`kubejs:immersiveengieering/blastbrick_reinforced`)

  //======= Water Wheel =======
  event.shaped('immersiveengineering:watermill', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:waterwheel_segment',
    B: 'create:cogwheel'
  }).id(`kubejs:immersiveengieering/watermill`)

  //======= Windmill =======
  event.shaped('immersiveengineering:windmill', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:windmill_blade',
    B: 'create:cogwheel'
  }).id(`kubejs:immersiveengieering/windmill`)

  //======= Copper Coil Block =======
  event.shaped('immersiveengineering:coil_lv', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:wirecoil_copper',
    B: 'create:shaft'
  }).id(`kubejs:immersiveengieering/coil_lv`)

  //======= Electrum Coil Block =======
  event.shaped('immersiveengineering:coil_mv', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:wirecoil_electrum',
    B: 'create:shaft'
  }).id(`kubejs:immersiveengieering/coil_mv`)

  //======= High-Voltage Coil Block =======
  event.shaped('immersiveengineering:coil_hv', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:wirecoil_steel',
    B: 'create:shaft'
  }).id(`kubejs:immersiveengieering/coil_hv`)

  //======= Fluid Pump =======
  event.shaped('immersiveengineering:fluid_pump', [' A ', 'BCB', 'BDB'], {
    A: 'createaddition:capacitor',
    B: '#forge:plates/aluminum',
    C: 'createaddition:electric_motor',
    D: 'create:mechanical_pump'
  }).id(`kubejs:immersiveengieering/fluid_pump`)

  //======= Redstone Wire Coil =======
  event.shaped('4x immersiveengineering:wirecoil_redstone', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:wires/aluminum',
    C: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_redstone`)

  //======= Steel Cable Coil =======
  event.shaped('4x immersiveengineering:wirecoil_structure_steel', [' A ', 'ABA', ' A '], {
    A: '#forge:wires/steel',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_structure_steel`)

  //======= Hemp Rope Coil =======
  event.shaped('4x immersiveengineering:wirecoil_structure_rope', [' A ', 'ABA', ' A '], {
    A: '#forge:fiber_hemp',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_structure_rope`)

  //======= LV Wire Coil =======
  event.shaped('4x immersiveengineering:wirecoil_copper', [' A ', 'ABA', ' A '], {
    A: '#forge:wires/copper',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_copper`)

  //======= MV Wire Coil =======
  event.shaped('4x immersiveengineering:wirecoil_electrum', [' A ', 'ABA', ' A '], {
    A: '#forge:wires/electrum',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_electrum`)

  //======= HV Wire Coil =======
  event.shaped('4x immersiveengineering:wirecoil_steel', [' A ', 'CBC', ' A '], {
    A: '#forge:wires/steel',
    B: '#forge:rods/treated_wood',
    C: '#forge:wires/aluminum'
  }).id(`kubejs:immersiveengieering/wirecoil_steel`)

  //======= Insulated LV Wire Coil =======
  event.shaped('4x immersiveengineering:wirecoil_copper_ins', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:fabric_hemp',
    B: 'immersiveengineering:wirecoil_copper',
    C: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_copper_ins`)

  //======= Insulated MV Wire Coil =======
  event.shaped('4x immersiveengineering:wirecoil_electrum_ins', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:fabric_hemp',
    B: 'immersiveengineering:wirecoil_electrum',
    C: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_electrum_ins`)

  //======= Metalpress missed recipes =======
  //=======           PLATES          =======
  //Thermal Extra
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/soul_infused"
      },
      count: 1
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      item: "thermal_extra:soul_infused_plate"
    }
  }).id(`kubejs:immersiveengieering/metallpress/plate_soul_infused`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/shellite"
      },
      count: 1
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      item: "thermal_extra:shellite_plate"
    }
  }).id(`kubejs:immersiveengieering/metallpress/plate_shellite`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/twinite"
      },
      count: 1
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      item: "thermal_extra:twinite_plate"
    }
  }).id(`kubejs:immersiveengieering/metallpress/plate_twinite`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/dragonsteel"
      },
      count: 1
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      item: "thermal_extra:dragonsteel_plate"
    }
  }).id(`kubejs:immersiveengieering/metallpress/plate_dragonsteel`)
  //=======           GEARS           =======
  //Alltheores
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/signalum"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "alltheores:signalum_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_signalum`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/lumium"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "alltheores:lumium_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_lumium`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/enderium"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "alltheores:enderium_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_enderium`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/iridium"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "alltheores:iridium_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_iridium`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:gems/diamond"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "alltheores:diamond_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_diamond`)
  //Althemodium
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/allthemodium"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "allthemodium:allthemodium_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_allthemodium`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/unobtainium"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "allthemodium:unobtainium_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_unobtainium`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 3500,
    input: {
      base_ingredient: {
        tag: "forge:ingots/vibranium"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "allthemodium:vibranium_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_vibranium`)
  //Thermal Extra
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/soul_infused"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal_extra:soul_infused_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_soul_infused`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/shellite"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal_extra:shellite_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_shellite`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/twinite"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal_extra:twinite_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_twinite`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/dragonsteel"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal_extra:dragonsteel_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_dragonsteel`)
  //Thermal
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/netherite"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal:netherite_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_netherit`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:gems/quartz"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal:quartz_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_quartz`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:gems/emerald"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal:emerald_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_emerald`)
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:gems/lapis"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "thermal:lapis_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_lapis`)
  //Redstone Arsenal
  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:ingots/flux"
      },
      count: 4
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      item: "redstone_arsenal:flux_gear"
    }
  }).id(`kubejs:immersiveengieering/metallpress/gear_flux`)

  removeRecipeByID(event, [
    'immersiveengineering:crafting/cloche',
    'immersiveengineering:crafting/watermill',
    'immersiveengineering:crafting/windmill',
    'immersiveengineering:crafting/rs_engineering',
    'immersiveengineering:crafting/light_engineering',
    'immersiveengineering:crafting/heavy_engineering',
    'immersiveengineering:crafting/craftingtable',
    'immersiveengineering:crafting/fluid_pump',
    'immersiveengineering:crafting/blastbrick_reinforced',
    'immersiveengineering:crafting/coil_lv',
    'immersiveengineering:crafting/coil_mv',
    'immersiveengineering:crafting/coil_hv',
    'immersiveengineering:crafting/wirecoil_structure_steel',
    'immersiveengineering:crafting/wirecoil_structure_rope',
    'immersiveengineering:crafting/wirecoil_redstone',
    'immersiveengineering:crafting/wirecoil_copper',
    'immersiveengineering:crafting/wirecoil_copper_ins',
    'immersiveengineering:crafting/wirecoil_electrum',
    'immersiveengineering:crafting/wirecoil_electrum_ins',
    'immersiveengineering:crafting/wirecoil_steel'
  ])

})