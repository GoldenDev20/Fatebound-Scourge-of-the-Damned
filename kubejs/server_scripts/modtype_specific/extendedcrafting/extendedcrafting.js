//Priority: 1000
/**
 * @file extendedcrafting.js
 * @description Recipe Extended Crafting script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Redstone Ingot =======
    event.shaped('extendedcrafting:redstone_ingot', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/iron',
        B: '#forge:dusts/redstone'
    }).id(`kubejs:extendedcrafting/redstone_ingot`)

    //======= Ender Ingot =======
    event.shaped('extendedcrafting:ender_ingot', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/iron',
        B: 'minecraft:ender_pearl'
    }).id(`kubejs:extendedcrafting/ender_ingot`)

    //======= The Ultimate Ingot =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "  A   A  ",
            " BCDEFGH ",
            "AIJKLMNOA",
            " PQRSTUV ",
            " WXYZ123 ",
            " 4567890 ",
            "AabcdefgA",
            " hijklmn ",
            "  A   A  ",
        ],
        key: {
            A: { item: "extendedcrafting:black_iron_ingot", },
            B: { item: "minecraft:iron_ingot", },
            C: { item: "minecraft:gold_ingot", },
            D: { item: "alltheores:aluminum_ingot", },
            E: { item: "minecraft:copper_ingot", },
            F: { item: "alltheores:lead_ingot", },
            G: { item: "alltheores:nickel_ingot", },
            H: { item: "alltheores:osmium_ingot", },
            I: { item: "alltheores:zinc_ingot", },
            J: { item: "alltheores:silver_ingot", },
            K: { item: "alltheores:tin_ingot", },
            L: { item: "alltheores:uranium_ingot", },
            M: { item: "alltheores:platinum_ingot", },
            N: { item: "botania:manasteel_ingot", },
            O: { item: "botania:elementium_ingot", },
            P: { item: "botania:terrasteel_ingot", },
            Q: { item: "enderio:soularium_ingot", },
            R: { item: "enderio:dark_steel_ingot", },
            S: { item: "enderio:vibrant_alloy_ingot", },
            T: { item: "draconicevolution:draconium_ingot", },
            U: { item: "draconicevolution:draconium_ingot", },
            V: { item: "minecraft:netherite_ingot", },
            W: { item: "mysticalagriculture:inferium_ingot", },
            X: { item: "mysticalagriculture:prudentium_ingot", },
            Y: { item: "mysticalagriculture:tertium_ingot", },
            Z: { item: "mysticalagriculture:imperium_ingot", },
            1: { item: "mysticalagriculture:supremium_ingot", },
            2: { item: "mysticalagradditions:insanium_ingot", },
            3: { item: "twilightforest:knightmetal_ingot", },
            4: { item: "mekanism:ingot_refined_obsidian", },
            5: { item: "mekanism:ingot_refined_glowstone", },
            6: { item: "alltheores:steel_ingot", },
            7: { item: "industrialforegoing:pink_slime_ingot", },
            8: { item: "tconstruct:cobalt_ingot", },
            9: { item: "enderio:end_steel_ingot", },
            0: { item: "tconstruct:manyullyn_ingot", },
            a: { item: "thermal_extra:dragonsteel_ingot", },
            b: { item: "allthemodium:allthemodium_ingot", },
            c: { item: "allthemodium:unobtainium_ingot", },
            d: { item: "allthemodium:vibranium_ingot", },
            e: { item: "thermal_extra:soul_infused_ingot", },
            f: { item: "thermal_extra:shellite_ingot", },
            g: { item: "thermal_extra:twinite_ingot", },
            h: { item: "blue_skies:horizonite_ingot", },
            i: { item: "alltheores:bronze_ingot", },
            j: { item: "alltheores:invar_ingot", },
            k: { item: "alltheores:constantan_ingot", },
            l: { item: "alltheores:signalum_ingot", },
            m: { item: "alltheores:lumium_ingot", },
            n: { item: "alltheores:enderium_ingot", }
        },
        result: {
            item: "extendedcrafting:the_ultimate_ingot",
        },
    }).id(`kubejs:extendedcrafting/the_ultimate_ingot`)

    //======= Auto Crafting Tables =======
    event.shaped('extendedcrafting:basic_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:basic_table'
    }).id(`kubejs:extendedcrafting/basic_auto_table`)

    event.shaped('extendedcrafting:advanced_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:advanced_table'
    }).id(`kubejs:extendedcrafting/advanced_auto_table`)

    event.shaped('extendedcrafting:elite_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:elite_table'
    }).id(`kubejs:extendedcrafting/elite_auto_table`)

    event.shaped('extendedcrafting:ultimate_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:ultimate_table'
    }).id(`kubejs:extendedcrafting/ultimate_auto_table`)

    //======= Black Iron Frame =======
    event.shaped('extendedcrafting:frame', ['ABA', 'BCB', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:ender_star',
        C: 'extendedcrafting:crystaltine_catalyst'
    }).id(`kubejs:extendedcrafting/frame`)

    //======= Queantum Comressor =======
    event.shaped('extendedcrafting:compressor', ['ABA', 'CEC', 'ADA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:crystaltine_catalyst',
        C: 'extendedcrafting:enhanced_redstone_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:frame'
    }).id(`kubejs:extendedcrafting/compressor`)

    //======= Basic Crafting Table =======
    modifyShaped(event, 'extendedcrafting:basic_table', 1, ['ABA', 'CDC', 'AEA'], {
        A: 'extendedcrafting:basic_component',
        B: 'extendedcrafting:basic_catalyst',
        C: '#forge:workbenches',
        D: '#forge:storage_blocks/iron',
        E: 'extendedcrafting:black_iron_slate'
    })

    //======= Ender Crafter =======
    modifyShaped(event, 'extendedcrafting:ender_crafter', 1, ['AAA', 'BCB', 'BBB'], {
        A: 'minecraft:ender_eye',
        B: '#forge:ingots/ender_ingot',
        C: '#forge:workbenches'
    })

    //======= Flux Crafter =======
    modifyShaped(event, 'extendedcrafting:flux_crafter', 1, ['AAA', 'BCB', 'BBB'], {
        A: '#forge:ingots/gold',
        B: '#forge:ingots/redstone',
        C: '#forge:workbenches'
    })

    removeRecipeByID(event, [
        'extendedcrafting:basic_auto_table',
        'extendedcrafting:advanced_auto_table',
        'extendedcrafting:elite_auto_table',
        'extendedcrafting:ultimate_auto_table',
        'extendedcrafting:frame',
        'extendedcrafting:compressor',
        'extendedcrafting:redstone_ingot',
        'extendedcrafting:ender_ingot',
        'extendedcrafting:handheld_table',
        //'extendedcrafting:ultimate_singularity'
    ])

})