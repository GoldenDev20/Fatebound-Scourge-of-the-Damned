//Priority: 1000
/**
 * @file arsnouvea.js
 * @description Recipe Ars Nouveau script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Arcane Core =======
    event.shaped('ars_nouveau:arcane_core', ['CAC', 'BDB', 'CAC'], {
        A: 'ars_nouveau:sourcestone',
        B: '#forge:ingots/energized_steel',
        C: '#forge:ingots/gold',
        D: ['#forge:storage_blocks/lapis', '#forge:storage_blocks/fluorite', '#forge:storage_blocks/sulfur']
    }).id(`kubejs:ars_nouveau/arcane_core`)

    //======= Arcane Pedestal =======
    event.shaped('ars_nouveau:arcane_pedestal', ['CAC', 'BDB', 'CDC'], {
        A: 'ars_nouveau:sourcestone',
        B: '#forge:ingots/brass',
        C: '#forge:ingots/gold',
        D: ['#forge:gems/lapis', '#forge:gems/fluorite', '#forge:gems/sulfur']
    }).id(`kubejs:ars_nouveau/arcane_pedestal`)

    //======= Enchanting Apparatus =======
    event.shaped('ars_nouveau:enchanting_apparatus', ['CAC', 'BDB', 'CAC'], {
        A: 'ars_nouveau:sourcestone',
        B: '#forge:ingots/energized_steel',
        C: '#forge:ingots/gold',
        D: '#forge:gems/sapphire'
    }).id(`kubejs:ars_nouveau/enchanting_apparatus`)

    //======= Spell Prism =======
    event.shaped('ars_nouveau:spell_prism', ['CAC', 'BDB', 'CAC'], {
        A: '#forge:treated_wood',
        B: 'botania:spell_cloth',
        C: '#forge:storage_blocks/gold',
        D: '#botania:all_quartz'
    }).id(`kubejs:ars_nouveau/spell_prism`)

    //======= Containment Jar =======
    event.shaped('2x ars_nouveau:mob_jar', ['DAD', 'BCB', 'BBB'], {
        A: '#forge:nuggets/bronze',
        B: '#forge:glass/colorless',
        C: 'thermal:jar',
        D: 'ars_nouveau:archwood_slab'
    }).id(`kubejs:ars_nouveau/mob_jar`)

    //======= Source Jar =======
    event.shaped('2x ars_nouveau:source_jar', ['DAD', 'BCB', 'EEE'], {
        A: '#forge:nuggets/bronze',
        B: '#forge:glass/colorless',
        C: 'thermal:jar',
        D: 'ars_nouveau:archwood_slab',
        E: '#forge:ingots/gold'
    }).id(`kubejs:ars_nouveau/source_jar`)

    //======= Ring of Potential =======
    event.shaped('ars_nouveau:ring_of_potential', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:nuggets/silver',
        B: '#forge:gems/source'
    }).id(`kubejs:ars_nouveau/ring_of_potential`)

    //======= Alchemist Crown =======
    event.shaped('ars_nouveau:alchemists_crown', [' C ', 'ABA', ' D '], {
        A: 'thermal:jar',
        B: 'minecraft:golden_helmet',
        C: 'botania:cosmetic_red_glasses',
        D: 'ars_nouveau:mundane_belt'
    }).id(`kubejs:ars_nouveau/alchemists_crown`)

    //======= Repository =======
    event.shaped('2x ars_nouveau:repository', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:nuggets/electrum',
        B: 'ars_nouveau:archwood_chest',
        C: '#forge:gems/source'
    }).id(`kubejs:ars_nouveau/repository`)

    //======= Dominion Wand =======
    event.shaped('ars_nouveau:dominion_wand', [' AB', 'DCA', 'CD '], {
        A: '#forge:ingots/allthemodium',
        B: '#forge:gems/source',
        C: '#forge:rods/wooden',
        D: 'botania:mana_string'
    }).id(`kubejs:ars_nouveau/dominion_wand`)

    //======= Ritual Brazier =======
    event.shaped('ars_nouveau:ritual_brazier', [' A ', 'BCB', 'DED'], {
        A: 'ars_nouveau:arcane_pedestal',
        B: '#forge:ingots/energized_steel',
        C: '#forge:storage_blocks/source',
        D: 'ars_nouveau:sourcestone',
        E: '#forge:ingots/allthemodium'
    }).id(`kubejs:ars_nouveau/ritual_brazier`)

    //======= Basic Spell Turret =======
    event.shaped('ars_nouveau:basic_spell_turret', [' A ', 'BCB', 'ADA'], {
        A: '#forge:ingots/allthemodium',
        B: '#forge:wires/electrum',
        C: '#forge:storage_blocks/source',
        D: 'botania:spell_cloth'
    }).id(`kubejs:ars_nouveau/basic_spell_turret`)

    //======= Sourcestone =======
    event.custom({
        "type": "industrialforegoing:stonework_generate",
        "lavaConsume": 0,
        "lavaNeed": 1000,
        "output": {
            "count": 1,
            "item": "ars_nouveau:sourcestone"
        },
        "waterConsume": 0,
        "waterNeed": 1000
    })

    removeRecipeByID(event, [
        'ars_nouveau:arcane_core',
        'ars_nouveau:arcane_pedestal',
        'ars_nouveau:enchanting_apparatus',
        'ars_nouveau:spell_prism',
        'ars_nouveau:mob_jar',
        'ars_nouveau:source_jar',
        'ars_nouveau:alchemists_crown',
        'ars_nouveau:dominion_wand',
        'ars_nouveau:repository',
        'ars_nouveau:ritual_brazier',
        'ars_nouveau:ring_of_potential',
        'ars_nouveau:basic_spell_turret'
    ])

})