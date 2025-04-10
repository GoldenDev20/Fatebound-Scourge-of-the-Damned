//Priority: 1000
/**
 * @file justhammers.js
 * @description Recipe Just Hammers script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    let StoneHammers = ['impact', 'reinforced', 'reinforced_impact', 'destructor']
    let HammerMaterials = ['iron', 'gold', 'diamond', 'netherite']

    //======= Stone Hammer =======
    event.shaped('justhammers:stone_hammer', ['ABA', 'ACA', ' C '], {
        A: '#forge:stone',
        B: 'redstone_arsenal:obsidian_rod',
        C: '#forge:rods/iron'
    }).id(`kubejs:justhammers/stone_hammer`)

    removeRecipeByID(event, [
        'justhammers:stone_hammer'
    ])

    StoneHammers.forEach((type) => {
        //======= Stone Impact, Reinforced, Reinforced Impact & Destructor Hammer =======
        event.shaped(`justhammers:stone_${type}_hammer`, ['ADA', 'ABA', ' C '], {
            A: '#forge:stone',
            B: 'redstone_arsenal:obsidian_rod',
            C: '#forge:rods/iron',
            D: `justhammers:${type}_core`
        }).id(`kubejs:justhammers/stone_${type}_hammer`)

        removeRecipeByID(event, [
            `justhammers:stone_${type}_hammer`
        ])
    })

    HammerMaterials.forEach((material) => {
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.getFirst().isEmpty()) {
            //======= Check for gems =======
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
            if (ingotTag.getFirst().isEmpty()) {
                return
            }
        }
        //======= Hammers =======
        event.shaped(`justhammers:${material}_hammer`, ['ABA', 'ACA', ' C '], {
            A: ingotTag,
            B: 'redstone_arsenal:obsidian_rod',
            C: '#forge:rods/iron'
        }).id(`kubejs:justhammers/${material}_hammer`)

        //======= Impact Hammers =======
        event.shaped(`justhammers:${material}_impact_hammer`, ['ADA', 'ABA', ' C '], {
            A: `#forge:storage_blocks/${material}`,
            B: 'redstone_arsenal:obsidian_rod',
            C: '#forge:rods/iron',
            D: 'justhammers:impact_core'
        }).id(`kubejs:justhammers/${material}_impact_hammer`)

        //======= Reinforced Hammers =======
        event.shaped(`justhammers:${material}_reinforced_hammer`, ['ADA', 'ABA', ' C '], {
            A: `#forge:storage_blocks/${material}`,
            B: 'redstone_arsenal:obsidian_rod',
            C: '#forge:rods/iron',
            D: 'justhammers:reinforced_core'
        }).id(`kubejs:justhammers/${material}_reinforced_hammer`)

        //======= Reinforced Impact Hammers =======
        event.shaped(`justhammers:${material}_reinforced_impact_hammer`, ['ADA', 'ABA', ' C '], {
            A: `#forge:storage_blocks/${material}`,
            B: 'redstone_arsenal:obsidian_rod',
            C: '#forge:rods/iron',
            D: 'justhammers:reinforced_impact_core'
        }).id(`kubejs:justhammers/${material}_reinforced_impact_hammer`)

        //======= Destructor Hammers =======
        event.shaped(`justhammers:${material}_destructor_hammer`, ['ADA', 'ABA', ' C '], {
            A: `#forge:storage_blocks/${material}`,
            B: 'redstone_arsenal:obsidian_rod',
            C: '#forge:rods/iron',
            D: 'justhammers:destructor_core'
        }).id(`kubejs:justhammers/${material}_destructor_hammer`)

        removeRecipeByID(event, [
            `justhammers:${material}_hammer`,
            `justhammers:${material}_impact_hammer`,
            `justhammers:${material}_reinforced_hammer`,
            `justhammers:${material}_reinforced_impact_hammer`,
            `justhammers:${material}_destructor_hammer`
        ])

    })

})