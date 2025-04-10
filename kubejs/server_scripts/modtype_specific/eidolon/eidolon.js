//Priority: 1000
/**
 * @file eidolon.js
 * @description Recipe Eidolon script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Magic Workbench =======
    event.shaped('eidolon:worktable', ['AAA', 'BDB', 'CCC'], {
        A: 'minecraft:purple_carpet',
        B: 'eidolon:pewter_ingot',
        C: 'naturesaura:ancient_planks',
        D: 'eidolon:wooden_altar'
    }).id(`kubejs:eidolon/worktable`)

    //======= Research Table =======
    event.shaped('eidolon:research_table', ['B D', 'AAA', 'CCC'], {
        A: 'minecraft:red_carpet',
        B: 'eidolon:notetaking_tools',
        C: 'naturesaura:ancient_planks',
        D: 'eidolon:magic_candlestick'
    }).id(`kubejs:eidolon/research_table`)

    //======= Brazier =======
    event.shaped('eidolon:brazier', ['AAA', 'DBD', 'CDC'], {
        A: 'eidolon:pewter_ingot',
        B: '#forge:storage_blocks/coal',
        C: '#forge:rods/aluminum',
        D: 'eidolon:enchanted_ash'
    }).id(`kubejs:eidolon/brazier`)

    //======= Wooden Altar =======
    event.shaped('3x eidolon:wooden_altar', ['AAA', 'B B', 'B B'], {
        A: 'eidolon:illwood_planks_slab',
        B: 'eidolon:illwood_planks'
    }).id(`kubejs:eidolon/wooden_altar`)

    //======= Illwood Fence =======
    event.shaped('3x eidolon:illwood_planks_fence', ['ABA', 'ABA'], {
        A: 'eidolon:illwood_planks',
        B: '#forge:rods/wooden'
    }).id(`kubejs:eidolon/illwood_planks_fence`)

    //======= Illwood Fence Gate =======
    event.shaped('eidolon:illwood_planks_fence_gate', ['BAB', 'BAB'], {
        A: 'eidolon:illwood_planks',
        B: '#forge:rods/wooden'
    }).id(`kubejs:eidolon/illwood_planks_fence_gate`)

    //======= Ancient Brick =======
    event.shaped('2x eidolon:elder_brick', [' A ', 'ABA', ' A '], {
        A: 'eidolon:arcane_seal',
        B: 'minecraft:brick'
    }).id(`kubejs:eidolon/elder_brick`)

    //======= Ancient Eye =======
    event.shaped('eidolon:elder_bricks_eye', ['A', 'A'], {
        A: 'eidolon:elder_bricks_slab'
    }).id(`kubejs:eidolon/elder_bricks_eye`)

    //======= Smooth Stone Arch =======
    event.shaped('2x eidolon:smooth_stone_arch', ['A', 'A'], {
        A: 'eidolon:smooth_stone_bricks'
    }).id(`kubejs:eidolon/smooth_stone_arch`)

    //======= Mossy Smooth Stone Bricks =======
    event.shaped('2x eidolon:mossy_smooth_stone_bricks', ['AB'], {
        A: 'eidolon:smooth_stone_bricks',
        B: ['minecraft:vine', 'minecraft:moss_block']
    }).id(`kubejs:eidolon/mossy_smooth_stone_bricks`)

    removeRecipeByID(event, [
        'eidolon:worktable',
        'eidolon:brazier',
        'eidolon:research_table',
        'eidolon:wooden_altar',
        'eidolon:mossy_smooth_stone_bricks',
        'eidolon:illwood_planks_gate',
        'eidolon:illwood_planks_fence'
    ])

})