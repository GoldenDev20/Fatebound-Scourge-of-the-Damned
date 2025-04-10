//Priority: 1000
/**
 * @file securitycraft.js
 * @description Recipe Security Craft script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Level 1 Keycard =======
    event.shaped('securitycraft:keycard_lv1', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/gold'
    }).id(`kubejs:securitycraft/keycard_lv1`)

    //======= Level 2 Keycard =======
    event.shaped('securitycraft:keycard_lv2', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/brass'
    }).id(`kubejs:securitycraft/keycard_lv2`)

    //======= Level 3 Keycard =======
    event.shaped('securitycraft:keycard_lv3', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/rose_gold'
    }).id(`kubejs:securitycraft/keycard_lv3`)

    //======= Level 4 Keycard =======
    event.shaped('securitycraft:keycard_lv4', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/elementium'
    }).id(`kubejs:securitycraft/keycard_lv4`)

    //======= Level 5 Keycard =======
    event.shaped('securitycraft:keycard_lv5', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/manyullyn'
    }).id(`kubejs:securitycraft/keycard_lv5`)

    //======= Limited Use Keycard =======
    event.shaped('securitycraft:limited_use_keycard', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:gems/lapis'
    }).id(`kubejs:securitycraft/limited_use_keycard`)

    //======= Mine Remote Access Tool =======
    event.shaped('securitycraft:remote_access_mine', [' BA', ' CD', 'E  '], {
        A: 'kubejs:personal_id',
        B: 'minecraft:redstone_torch',
        C: '#forge:gems/diamond',
        D: '#forge:ingots/gold',
        E: '#forge:rods/wooden'
    }).id(`kubejs:securitycraft/remote_access_mine`)

    //======= Sentry Remote Access Tool =======
    event.shaped('securitycraft:remote_access_sentry', ['BAB', 'BDB', 'BCB'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: 'minecraft:redstone_torch',
        D: '#forge:gems/diamond'
    }).id(`kubejs:securitycraft/remote_access_sentry`)

    //======= Reinforced Redstone Lamp =======
    event.shaped('securitycraft:reinforced_redstone_lamp', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:nuggets/steel',
        B: '#forge:dusts/redstone',
        C: 'securitycraft:reinforced_glowstone'
    }).id(`kubejs:securitycraft/reinforced_redstone_lamp`)

    removeRecipeByID(event, [
        'securitycraft:keycard_lv1',
        'securitycraft:keycard_lv2',
        'securitycraft:keycard_lv3',
        'securitycraft:keycard_lv4',
        'securitycraft:keycard_lv5',
        'securitycraft:limited_use_keycard',
        'securitycraft:remote_access_mine',
        'securitycraft:remote_access_sentry',
        'securitycraft:reinforced_redstone_lamp',
    ])

})
