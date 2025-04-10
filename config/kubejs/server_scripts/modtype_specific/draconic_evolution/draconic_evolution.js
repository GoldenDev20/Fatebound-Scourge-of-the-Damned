//Priority: 1000
/**
 * @file draconic_evolution.js
 * @description Recipe Draconic Evolution script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Draconium Ingot =======
    event.recipes.mekanism.smelting('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust')
    event.recipes.mekanism.smelting('draconicevolution:draconium_ingot', '#forge:ores/draconium')

    //======= Ultimate Singularity =======
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "extendedcrafting:ultimate_singularity",
        },
        catalyst: {
            item: "draconicevolution:awakened_core",
        },
        total_energy: 32000000,
        tier: "DRACONIC",
        ingredients: [{
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:aluminum"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:bronze"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:clay"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:coal"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:copper"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:diamond"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:electrum"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:emerald"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:enderium"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:fiery"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:glowstone"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:gold"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:invar"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:iridium"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:iron"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:lapis_lazuli"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:lead"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:lumium"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:manasteel"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:netherite"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:nickel"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:osmium"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:pink_slime"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:plastic"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:platinum"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:redstone"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:refined_obsidian"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:sapphire"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:silver"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:steel"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:tin"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:uranium"}',
            },
        ],
    }).id(`kubejs:extendedcrafting/ultimate_singularity`)

    event.remove({
        type: 'minecraft:smelting',
        input: 'draconicevolution:draconium_dust'
    })
    event.remove({
        type: 'minecraft:smelting',
        input: '#forge:ores/draconium'
    })

    removeRecipeByID(event, [
        'extendedcrafting:ultimate_singularity',
        'enderio:smelting/draconicevolution/components/draconium_ingot_from_dust',
        'enderio:smelting/draconicevolution/components/draconium_ingot_from_ore'
    ])

})
