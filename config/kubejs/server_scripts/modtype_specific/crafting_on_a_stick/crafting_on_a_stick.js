//Priority: 1000
/**
 * @file crafting_on_a_stick.js
 * @description Recipe Crafting on a Stick script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Crafting Table =======
    modifyShaped(event, 'crafting_on_a_stick:crafting_table', 1, [' A', 'B '], {
        A: '#forge:workbenches',
        B: '#forge:rods/wooden'
    })

    //======= Loom =======
    modifyShaped(event, 'crafting_on_a_stick:loom', 1, [' A', 'B '], {
        A: 'minecraft:loom',
        B: '#forge:rods/wooden'
    })

    //======= Grindstone =======
    modifyShaped(event, 'crafting_on_a_stick:grindstone', 1, [' A', 'B '], {
        A: 'minecraft:grindstone',
        B: '#forge:rods/wooden'
    })

    //======= Cartography Table =======
    modifyShaped(event, 'crafting_on_a_stick:cartography_table', 1, [' A', 'B '], {
        A: 'minecraft:cartography_table',
        B: '#forge:rods/wooden'
    })

    //======= Bench Saw =======
    modifyShaped(event, 'crafting_on_a_stick:stonecutter', 1, [' A', 'B '], {
        A: 'minecraft:stonecutter',
        B: '#forge:rods/wooden'
    })

    //======= Smithing Table =======
    modifyShaped(event, 'crafting_on_a_stick:smithing_table', 1, [' A', 'B '], {
        A: 'minecraft:smithing_table',
        B: '#forge:rods/wooden'
    })

    //======= Anvil =======
    modifyShaped(event, 'crafting_on_a_stick:anvil', 1, [' A', 'B '], {
        A: 'minecraft:anvil',
        B: '#forge:rods/wooden'
    })

    //======= Chipped Anvil =======
    modifyShaped(event, 'crafting_on_a_stick:chipped_anvil', 1, [' A', 'B '], {
        A: 'minecraft:chipped_anvil',
        B: '#forge:rods/wooden'
    })

    //======= Damaged Anvil =======
    modifyShaped(event, 'crafting_on_a_stick:damaged_anvil', 1, [' A', 'B '], {
        A: 'minecraft:damaged_anvil',
        B: '#forge:rods/wooden'
    })

})
