//Priority: 1000
/**
 * @file irons_spellbooks.js
 * @description Recipe Iron's Speels 'n Spellbooks script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Common Ink =======
    event.shaped('irons_spellbooks:common_ink', [' D ', 'CBC', ' A '], {
        A: 'minecraft:glass_bottle',
        B: 'minecraft:ink_sac',
        C: 'irons_spellbooks:arcane_essence',
        D: '#forge:feathers'
    }).id(`kubejs:irons_spellbooks/common_ink`)

    //======= Cinder Essence =======
    event.shaped('irons_spellbooks:cinder_essence', ['ABA', 'BDB', 'ACA'], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'minecraft:blaze_powder',
        C: 'minecraft:fire_charge',
        D: 'minecraft:netherite_scrap'
    }).id(`kubejs:irons_spellbooks/cinder_essence`)

    event.custom({
        type: "minecraft:smelting",
        experience: 4,
        cookingtime: 2440,
        ingredient: {
            item: "irons_spellbooks:arcane_essence"
        },
        result: "irons_spellbooks:cinder_essence"
    }).id(`kubejs:irons_spellbooks/smelting/arcane_essence_to_cinder_essence`)

    //======= Rotten Spell Book =======
    event.shaped('irons_spellbooks:rotten_spell_book', ['BAB', 'DCF', 'EBE'], {
        A: 'irons_spellbooks:uncommon_ink',
        B: 'minecraft:rotten_flesh',
        C: 'irons_spellbooks:iron_spell_book',
        D: 'minecraft:quartz',
        E: 'irons_spellbooks:arcane_essence',
        F: 'minecraft:iron_sword'
    }).id(`kubejs:irons_spellbooks/rotten_spell_book`)

    //======= Frozen Bone =======
    event.custom({
        type: "minecraft:smelting",
        experience: 3,
        cookingtime: 260,
        ingredient: {
            item: "irons_spellbooks:frozen_bone"
        },
        result: "minecraft:bone"
    }).id(`kubejs:irons_spellbooks/smelting/frozen_bone_to_bone`)

})