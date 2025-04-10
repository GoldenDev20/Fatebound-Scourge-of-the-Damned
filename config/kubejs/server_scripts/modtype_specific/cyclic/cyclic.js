//Priority: 1000
/**
 * @file cuclic.js
 * @description Recipe Cyclic script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Compressed Cabblestone =======
    event.shapeless('cyclic:compressed_cobblestone', 'allthecompressed:cobblestone_1x').id(`kubejs:cyclic/compressed_cobblestone`)
    event.shapeless('allthecompressed:cobblestone_1x', 'cyclic:compressed_cobblestone').id(`kubejs:allthecompressed/cobblestone_1x`)

    /*//======= Crafter =======
    event.shaped('cyclic:crafter', ['ABA', 'CDC', 'ABA'], {
        A: '#forge:storage_blocks/amethyst',
        B: '#forge:workbenches',
        C: 'minecraft:sticky_piston',
        D: 'cyclic:gem_amber'
    }).id(`kubejs:cyclic/crafter`)*/

    //======= Packager =======
    event.shaped('cyclic:packager', ['ABA', 'CDC', 'ABA'], {
        A: '#forge:dyes/light_blue',
        B: 'minecraft:dropper',
        C: 'minecraft:piston',
        D: 'rftoolsutility:crafter1'
    }).id(`kubejs:cyclic/crafter`)

    //======= Fluid Collector =======
    event.shaped('cyclic:collector_fluid', ['ABA', 'CDC', 'EEE'], {
        A: '#forge:storage_blocks/iron',
        B: '#forge:storage_blocks/lapis',
        C: 'minecraft:bucket',
        D: 'cyclic:flint_block',
        E: 'minecraft:hopper'
    }).id(`kubejs:cyclic/collector_fluid`)

    //======= Workbench =======
    event.shaped('cyclic:workbench', ['AB', 'B '], {
        A: '#forge:workbenches',
        B: '#minecraft:stone_crafting_materials'
    }).id(`kubejs:cyclic/workbench`)

    //======= Apple Sprout Diamond =======
    event.shaped('2x cyclic:apple_sprout_diamond', ['ACA', 'CBC', 'ACA'], {
        A: '#forge:storage_blocks/diamond',
        B: 'cyclic:apple_chocolate',
        C: '#forge:gems/diamond'
    }).id(`kubejs:cyclic/apple_sprout_diamond`)

    //======= Apple Sprout Emerald =======
    event.shaped('2x cyclic:apple_sprout_emerald', ['ACA', 'CBC', 'ACA'], {
        A: '#forge:storage_blocks/emerald',
        B: 'cyclic:apple_chocolate',
        C: '#forge:gems/emerald'
    }).id(`kubejs:cyclic/apple_sprout_emerald`)

    //======= Cloak of Invisibility =======
    event.shaped('cyclic:charm_invisible', ['ACA', 'CBC', 'ACA'], {
        A: '#forge:wool/purple',
        B: 'botania:invisibility_cloak',
        C: 'ars_nouveau:glyph_invisibility'
    }).id(`kubejs:cyclic/charm_invisible`)

    removeRecipeByID(event, [
        'cyclic:crafter',
        'cyclic:packager',
        'cyclic:workbench',
        'cyclic:crafting_stick',
        'cyclic:apple_sprout_diamond',
        'cyclic:apple_sprout_emerald',
        'cyclic:charm_invisible',
        'cyclic:collector_fluid'
    ])

})