//Priority: 1000
/**
 * @file xnet.js
 * @description Recipe xNet script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Controller =======
    event.shaped('xnet:controller', ['ABA', 'CDC', 'AEA'], {
        A: 'immersiveengineering:electron_tube',
        B: 'rftoolsutility:screen',
        C: '#forge:plates/aluminum',
        D: 'cyclic:battery',
        E: 'thermal:rf_coil'
    }).id(`kubejs:xnet/controller`)

    //======= Router =======
    event.shaped('2x xnet:router', ['ABA', 'CDC', 'AEA'], {
        A: 'immersiveengineering:electron_tube',
        B: 'rftoolsutility:screen',
        C: '#forge:plates/aluminum',
        D: 'rftoolscontrol:advanced_network_card',
        E: 'createaddition:redstone_relay'
    }).id(`kubejs:xnet/router`)

    //======= Wireless Router =======
    event.shaped('xnet:wireless_router', ['ABA', 'CDC', 'AEA'], {
        A: 'rftoolsbase:infused_enderpearl',
        B: 'xnet:antenna',
        C: 'rftoolsutility:redstone_transmitter',
        D: 'xnet:router',
        E: 'xnet:antenna_base'
    }).id(`kubejs:xnet/wireless_router`)

    //======= Redstone Proxy =======
    event.shaped('xnet:redstone_proxy', ['ABA', 'DCD', 'ABA'], {
        A: 'advgenerators:iron_wiring',
        B: 'minecraft:observer',
        C: 'rftoolsbase:machine_frame',
        D: 'create:redstone_link'
    }).id(`kubejs:xnet/redstone_proxy`)

    const id_prefix = 'kubejs:xnet/shaped/'

    const recipes = [
        //======= Routing Network Cable =======
        {
            output: '16x xnet:netcable_routing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'immersiveengineering:wirecoil_electrum',
                B: '#forge:fabric_hemp',
                C: 'quark:white_corundum_cluster'
            },
            id: `${id_prefix}netcable_routing`
        },
        //======= Routing Connector =======
        {
            output: 'xnet:connector_routing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/electrum',
                B: 'quark:white_corundum_cluster',
                C: 'createaddition:portable_energy_interface'
            },
            id: `${id_prefix}connector_routing`
        },
        //======= Advanced Routing Connector (NOT) =======
        {
            output: 'xnet:advanced_connector_routing',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'redstone_arsenal:flux_gem',
                B: '#forge:plastic',
                C: 'xnet:connector_routing',
                D: '#forge:gems/infused_diamond'
            },
            id: `${id_prefix}advanced_connector_routing`
        }
    ]

    xnet_colors.forEach((color) => {
        recipes.push(
            //======= Colorful Network Cable =======
            {
                output: `16x xnet:netcable_${color}`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'immersiveengineering:wirecoil_electrum',
                    B: '#forge:fabric_hemp',
                    C: `quark:${color}_corundum_cluster`
                },
                id: `${id_prefix}netcable_${color}`
            },
            //======= Colorful Connector =======
            {
                output: `xnet:connector_${color}`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#forge:plates/electrum',
                    B: `quark:${color}_corundum_cluster`,
                    C: 'createaddition:portable_energy_interface'
                },
                id: `${id_prefix}connector_${color}`
            },
            //======= Advanced Colorful Connector =======
            {
                output: `xnet:advanced_connector_${color}`,
                pattern: [' A ', 'BCB', ' D '],
                key: {
                    A: 'redstone_arsenal:flux_gem',
                    B: '#forge:plastic',
                    C: `xnet:connector_${color}`,
                    D: '#forge:gems/infused_diamond'
                },
                id: `${id_prefix}advanced_connector_${color}`
            }
        )
    })

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

    removeRecipeByID(event, [
        'xnet:connector_upgrade',
        'xnet:controller',
        'xnet:router',
        'xnet:wireless_router',
        'xnet:redstone_proxy',
        'xnet:netcable_red',
        'xnet:netcable_green',
        'xnet:netcable_blue',
        'xnet:netcable_yellow',
        'xnet:netcable_routing',
        'xnet:connector_red',
        'xnet:connector_green',
        'xnet:connector_blue',
        'xnet:connector_yellow',
        'xnet:connector_routing',
        'xnet:advanced_connector_red',
        'xnet:advanced_connector_green',
        'xnet:advanced_connector_blue',
        'xnet:advanced_connector_yellow',
        'xnet:advanced_connector_routing'
    ])

})
