//Priority: 1000
/**
 * @file immersive_aircraft.js
 * @description Recipe Immerisve Airecraft script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Blueprint =======
    event.shaped('kubejs:blueprint', [' A ', 'ABA', ' A '], {
        A: '#forge:paper',
        B: '#forge:dyes/blue'
    }).id(`kubejs:immersive_aircraft/blueprint`)

    //======= Airship Bluprint =======
    event.shapeless('kubejs:airship_blueprint', [
        'kubejs:blueprint', '2x #minecraft:planks'
    ]).id(`kubejs:immersive_aircraft/airship_blueprint`)

    //======= Cargo Airship Blueprint =======
    event.shapeless('kubejs:cargo_blueprint', [
        'kubejs:blueprint', '2x #forge:chests/wooden'
    ]).id(`kubejs:immersive_aircraft/cargo_blueprint`)

    //======= Biplane Blueprint =======
    event.shapeless('kubejs:biplane_blueprint', [
        'kubejs:blueprint', '2x #forge:ingots/iron'
    ]).id(`kubejs:immersive_aircraft/biplane_blueprint`)

    //======= Gyrodyne Blueprint =======
    event.shapeless('kubejs:gyrodyne_blueprint', [
        'kubejs:blueprint', '#forge:ingots/iron', '#forge:ingots/copper'
    ]).id(`kubejs:immersive_aircraft/gyrodyne_blueprint`)

    //======= Quadrocopter Blueprint =======
    event.shapeless('kubejs:quadrocopter_blueprint', [
        'kubejs:blueprint', '2x minecraft:bamboo_block'
    ]).id(`kubejs:immersive_aircraft/quadrocopter_blueprint`)

    //======= Hull =======
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "immersiveengineering:alu_scaffolding_standard"
            },
            B: {
                item: "immersiveengineering:slab_sheetmetal_aluminum"
            },
            C: {
                item: "immersiveengineering:treated_wood_horizontal"
            },
            D: {
                item: "immersiveengineering:treated_wood_packaged"
            },
            E: {
                item: "alltheores:aluminum_plate"
            },
            F: {
                item: "alltheores:iron_gear"
            }
        },
        pattern: [
            "CDDCC",
            "BEBEB",
            "AFAFA",
            "BEBEB",
            "CDCDC"
        ],
        result: {
            item: "immersive_aircraft:hull"
        }
    }).id(`kubejs:immersive_aircraft/hull`)

    //======= Boiler =======
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "minecraft:copper_ingot"
            },
            B: {
                item: "create:steam_engine"
            },
            C: {
                item: "ironfurnaces:copper_furnace"
            },
            D: {
                item: "cyclic:copper_bars"
            },
            E: {
                item: "thermal:fluid_duct"
            }
        },
        pattern: [
            "AAAAA",
            "ACECA",
            "ACBCA",
            "ACECA",
            "ADDDA"
        ],
        result: {
            item: "immersive_aircraft:boiler"
        }
    }).id(`kubejs:immersive_aircraft/boiler`)

    //======= Engine =======
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "immersiveengineering:sheetmetal_steel"
            },
            B: {
                item: "createaddition:electric_motor"
            },
            C: {
                item: "create:smart_fluid_pipe"
            },
            D: {
                item: "create:belt_connector"
            },
            E: {
                item: "alltheores:steel_gear"
            },
            F: {
                item: "immersive_aircraft:boiler"
            },
            G: {
                item: "immersiveengineering:slab_sheetmetal_aluminum"
            }
        },
        pattern: [
            "GGGGG",
            "ADEDA",
            "AEBEA",
            "ADEDA",
            "ACFCA"
        ],
        result: {
            item: "immersive_aircraft:engine"
        }
    }).id(`kubejs:immersive_aircraft/engine`)

    //======= Sail =======
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "supplementaries:rope"
            },
            B: {
                item: "immersiveengineering:hemp_fabric"
            },
            C: {
                item: "minecraft:white_banner"
            }
        },
        pattern: [
            " C BA",
            "CCCBA",
            "CCCBA",
            " CCBA",
            "C CBA"
        ],
        result: {
            item: "immersive_aircraft:sail"
        }
    }).id(`kubejs:immersive_aircraft/sail`)

    //======= Propeller =======
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "alltheores:steel_ingot"
            },
            B: {
                item: "alltheores:steel_gear"
            },
            C: {
                item: "alltheores:aluminum_plate"
            }
        },
        pattern: [
            "AA   ",
            " AA  ",
            " CBC ",
            "  AA ",
            "   AA"
        ],
        result: {
            item: "immersive_aircraft:propeller"
        }
    }).id(`kubejs:immersive_aircraft/propeller`)

    //======= Enhanced Propeller =======
    event.shaped('immersive_aircraft:enhanced_propeller', ['AB ', ' C ', ' BA'], {
        A: '#forge:ingots/copper',
        B: 'immersive_aircraft:propeller',
        C: 'supplementaries:cog_block'
    }).id(`kubejs:immersive_aircraft/enhanced_propeller`)

    //======= Eco Engine =======
    event.shaped('immersive_aircraft:eco_engine', ['ABA', 'BCB', 'DDD'], {
        A: 'mekanism:bio_fuel',
        B: '#forge:ingots/gold',
        C: 'immersive_aircraft:engine',
        D: '#forge:plates/aluminum'
    }).id(`kubejs:immersive_aircraft/eco_engine`)

    //======= Nether Engine =======
    event.shaped('immersive_aircraft:nether_engine', ['ABA', 'BCB', 'DDD'], {
        A: 'reliquary:molten_core',
        B: '#forge:ingots/netherite',
        C: 'immersive_aircraft:engine',
        D: '#forge:plates/steel'
    }).id(`kubejs:immersive_aircraft/nether_engine`)

    //======= Steel Boiler =======
    event.shaped('immersive_aircraft:steel_boiler', ['AAA', 'ACA', 'ABA'], {
        A: '#forge:ingots/steel',
        B: 'mekanism:boiler_valve',
        C: 'immersive_aircraft:boiler'
    }).id(`kubejs:immersive_aircraft/steel_boiler`)

    //======= Industrial Gears =======
    event.shaped('immersive_aircraft:industrial_gears', [' AB', 'CDA', 'EC '], {
        A: '#forge:ingots/iron',
        B: '#forge:gears/iron',
        D: 'create:gearbox',
        C: '#forge:ingots/copper',
        E: '#forge:gears/copper'
    }).id(`kubejs:immersive_aircraft/industrial_gears`)

    //======= Sturdy Pipes =======
    event.shaped('immersive_aircraft:sturdy_pipes', ['  A', 'BCB', 'A  '], {
        A: 'create:fluid_pipe',
        B: 'immersiveengineering:fluid_pipe',
        C: 'create:smart_fluid_pipe'
    }).id(`kubejs:immersive_aircraft/sturdy_pipes`)

    //======= Gyroscope =======
    event.shaped('immersive_aircraft:gyroscope', [' A ', 'BCB', ' D '], {
        A: 'cyclic:detector_weather',
        B: 'cyclic:location_data',
        C: 'minecraft:compass',
        D: 'buildersaddition:entity_detector'
    }).id(`kubejs:immersive_aircraft/gyroscope`)

    //======= Hull Reinforcement =======
    event.shaped('immersive_aircraft:hull_reinforcement', ['AAA', 'BCB', 'AAA'], {
        A: '#forge:ingots/steel',
        B: 'immersive_aircraft:hull',
        C: '#forge:storage_blocks/energized_steel'
    }).id(`kubejs:immersive_aircraft/hull_reinforcemente`)

    //======= Improved Landing Gear =======
    event.shaped('immersive_aircraft:improved_landing_gear', [' AB', 'CCA', 'CC '], {
        A: '#forge:plates/iron',
        B: '#forge:ingots/steel',
        C: '#forge:rubber'
    }).id(`kubejs:immersive_aircraft/improved_landing_gear`)

    //======= Airship =======
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:airship_blueprint"
        },
        loops: 1,
        results: [{
            chance: 100,
            item: "immersive_aircraft:airship"
        }],
        sequence: [{
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:airship_blueprint"
                }, {
                    item: "create:precision_mechanism"
                }],
                results: [{
                    item: "kubejs:airship_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:airship_blueprint"
                }, {
                    item: "immersive_aircraft:sail"
                }],
                results: [{
                    item: "kubejs:airship_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:airship_blueprint"
                }, {
                    item: "immersive_aircraft:sail"
                }],
                results: [{
                    item: "kubejs:airship_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:airship_blueprint"
                }, {
                    item: "immersive_aircraft:hull"
                }],
                results: [{
                    item: "kubejs:airship_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:airship_blueprint"
                }, {
                    item: "immersive_aircraft:engine"
                }],
                results: [{
                    item: "kubejs:airship_blueprint"
                }]
            }
        ],
        transitionalItem: {
            item: "kubejs:airship_blueprint"
        }
    }).id(`kubejs:immersive_aircraft/airship`)

    //======= Cargo Airship =======
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:cargo_blueprint"
        },
        loops: 1,
        results: [{
            chance: 100,
            item: "immersive_aircraft:cargo_airship"
        }],
        sequence: [{
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:cargo_blueprint"
                }, {
                    item: "create:precision_mechanism"
                }],
                results: [{
                    item: "kubejs:cargo_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:cargo_blueprint"
                }, {
                    item: "immersive_aircraft:airship"
                }],
                results: [{
                    item: "kubejs:cargo_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:cargo_blueprint"
                }, {
                    item: "dankstorage:dank_5"
                }],
                results: [{
                    item: "kubejs:cargo_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:cargo_blueprint"
                }, {
                    item: "immersive_aircraft:hull"
                }],
                results: [{
                    item: "kubejs:cargo_blueprint"
                }]
            }
        ],
        transitionalItem: {
            item: "kubejs:cargo_blueprint"
        }
    }).id(`kubejs:immersive_aircraft/cargo_airship`)

    //======= Biplane =======
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:biplane_blueprint"
        },
        loops: 1,
        results: [{
            chance: 100,
            item: "immersive_aircraft:biplane"
        }],
        sequence: [{
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:biplane_blueprint"
                }, {
                    item: "create:precision_mechanism"
                }],
                results: [{
                    item: "kubejs:biplane_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:biplane_blueprint"
                }, {
                    item: "immersive_aircraft:hull"
                }],
                results: [{
                    item: "kubejs:biplane_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:biplane_blueprint"
                }, {
                    item: "immersive_aircraft:hull"
                }],
                results: [{
                    item: "kubejs:biplane_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:biplane_blueprint"
                }, {
                    item: "immersive_aircraft:engine"
                }],
                results: [{
                    item: "kubejs:biplane_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:biplane_blueprint"
                }, {
                    item: "immersive_aircraft:propeller"
                }],
                results: [{
                    item: "kubejs:biplane_blueprint"
                }]
            }
        ],
        transitionalItem: {
            item: "kubejs:biplane_blueprint"
        }
    }).id(`kubejs:immersive_aircraft/biplane`)

    //======= Gyrodyne =======
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:gyrodyne_blueprint"
        },
        loops: 1,
        results: [{
            chance: 100,
            item: "immersive_aircraft:gyrodyne"
        }],
        sequence: [{
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:gyrodyne_blueprint"
                }, {
                    item: "create:precision_mechanism"
                }],
                results: [{
                    item: "kubejs:gyrodyne_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:gyrodyne_blueprint"
                }, {
                    item: "immersive_aircraft:sail"
                }],
                results: [{
                    item: "kubejs:gyrodyne_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:gyrodyne_blueprint"
                }, {
                    item: "immersive_aircraft:sail"
                }],
                results: [{
                    item: "kubejs:gyrodyne_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:gyrodyne_blueprint"
                }, {
                    item: "immersive_aircraft:hull"
                }],
                results: [{
                    item: "kubejs:gyrodyne_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:gyrodyne_blueprint"
                }, {
                    item: "immersive_aircraft:propeller"
                }],
                results: [{
                    item: "kubejs:gyrodyne_blueprint"
                }]
            }
        ],
        transitionalItem: {
            item: "kubejs:gyrodyne_blueprint"
        }
    }).id(`kubejs:immersive_aircraft/gyrodyne`)

    //======= Quadrocopter =======
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:quadrocopter_blueprint"
        },
        loops: 1,
        results: [{
            chance: 100,
            item: "immersive_aircraft:quadrocopter"
        }],
        sequence: [{
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:quadrocopter_blueprint"
                }, {
                    item: "immersive_aircraft:propeller"
                }],
                results: [{
                    item: "kubejs:quadrocopter_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:quadrocopter_blueprint"
                }, {
                    item: "immersive_aircraft:propeller"
                }],
                results: [{
                    item: "kubejs:quadrocopter_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:quadrocopter_blueprint"
                }, {
                    item: "immersive_aircraft:engine"
                }],
                results: [{
                    item: "kubejs:quadrocopter_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:quadrocopter_blueprint"
                }, {
                    item: "farmersdelight:basket"
                }],
                results: [{
                    item: "kubejs:quadrocopter_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:quadrocopter_blueprint"
                }, {
                    item: "immersive_aircraft:propeller"
                }],
                results: [{
                    item: "kubejs:quadrocopter_blueprint"
                }]
            },
            {
                type: "create:deploying",
                ingredients: [{
                    item: "kubejs:quadrocopter_blueprint"
                }, {
                    item: "immersive_aircraft:propeller"
                }],
                results: [{
                    item: "kubejs:quadrocopter_blueprint"
                }]
            }
        ],
        transitionalItem: {
            item: "kubejs:quadrocopter_blueprint"
        }
    }).id(`kubejs:immersive_aircraft/quadrocopter`)

    removeRecipeByID(event, [
        'immersive_aircraft:hull',
        'immersive_aircraft:boiler',
        'immersive_aircraft:engine',
        'immersive_aircraft:sail',
        'immersive_aircraft:propeller',
        'immersive_aircraft:enhanced_propeller',
        'immersive_aircraft:eco_engine',
        'immersive_aircraft:nether_engine',
        'immersive_aircraft:steel_boiler',
        'immersive_aircraft:industrial_gears',
        'immersive_aircraft:sturdy_pipes',
        'immersive_aircraft:gyroscope',
        'immersive_aircraft:hull_reinforcement',
        'immersive_aircraft:improved_landing_gear',
        'immersive_aircraft:airship',
        'immersive_aircraft:cargo_airship',
        'immersive_aircraft:biplane',
        'immersive_aircraft:gyrodyne',
        'immersive_aircraft:quadrocopter'
    ])

})