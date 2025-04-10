//Priority: 1000
/**
 * @file powah.js
 * @description Recipe Powah! script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Dielectric Paste =======
    modifyShaped(event, 'powah:dielectric_paste', 24, ['AAA', 'BBC', '   '], {
        A: '#forge:coal_coke',
        B: '#forge:clay',
        C: '#forge:buckets/lava'
    })

    //======= Dielectric Paste =======
    modifyShapeless(event, 'powah:dielectric_paste', 16, ['2x #forge:coal_coke', '#forge:clay', '#forge:dusts/blaze'])

    //======= Dielectric Rod =======
    modifyShaped(event, 'powah:dielectric_rod', 8, ['ABA', 'ABA', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: 'createaddition:iron_wire'
    })

    //======= Dielectric Rod (Horizontal) =======
    modifyShaped(event, 'powah:dielectric_rod_horizontal', 8, ['AAA', 'BBB', 'AAA'], {
        A: 'powah:dielectric_paste',
        B: 'createaddition:iron_wire'
    })

    //======= Dielectric Casing =======
    modifyShaped(event, 'powah:dielectric_casing', 1, ['ACA', 'B B', 'ACA'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:dielectric_rod',
        C: 'powah:dielectric_rod_horizontal'
    })

    //======= Basic Capacitor =======
    modifyShaped(event, 'powah:capacitor_basic', 1, [' AB', 'ACA', 'BA '], {
        A: '#forge:ingots/steel',
        B: 'powah:dielectric_paste',
        C: '#forge:storage_blocks/redstone'
    })

    //======= Furnator (Starter) =======
    modifyShaped(event, 'powah:furnator_starter', 1, ['AAA', 'BCB', 'ADA'], {
        A: 'powah:dielectric_paste',
        B: 'powah:capacitor_basic_tiny',
        C: 'powah:dielectric_casing',
        D: '#forge:furnaces/silver'
    })

    //======= Furnator (Basic) =======
    modifyShaped(event, 'powah:furnator_basic', 1, ['AAA', 'BCB', 'ADA'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:capacitor_basic',
        C: 'powah:dielectric_casing',
        D: 'powah:furnator_starter'
    })

    //======= Magmator (Basic) =======
    modifyShaped(event, 'powah:magmator_basic', 1, ['AAA', 'BCB', 'ADA'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:capacitor_basic',
        C: 'powah:dielectric_casing',
        D: 'powah:magmator_starter'
    })

    //======= Thermo Generator (Basic) =======
    modifyShaped(event, 'powah:thermo_generator_basic', 1, ['EAE', 'BCB', 'FDF'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:capacitor_basic',
        C: 'powah:dielectric_casing',
        D: 'powah:thermo_generator_starter',
        E: 'powah:dielectric_paste',
        F: 'powah:thermoelectric_plate'
    })

    //======= Battery (Basic) =======
    modifyShaped(event, 'powah:battery_basic', 1, ['EAE', 'BCB', 'EDE'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:capacitor_basic_large',
        C: '#forge:storage_blocks/redstone',
        D: 'powah:battery_starter',
        E: 'powah:dielectric_paste'
    })

    //======= Energy Cell (Starter) =======
    modifyShaped(event, 'powah:energy_cell_starter', 1, ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:capacitor_basic_tiny',
        C: 'powah:dielectric_casing'
    })

    //======= Energy Cell (Basic) =======
    modifyShaped(event, 'powah:energy_cell_basic', 1, ['ADA', 'BCB', 'ADA'], {
        A: '#forge:ingots/pulsating_alloy',
        B: 'powah:energy_cell_starter',
        C: 'powah:dielectric_casing',
        D: 'powah:capacitor_basic_large'
    })

    //======= Basic Capacitor (Large) =======
    event.shaped('2x powah:capacitor_basic_large', [' AB', 'ACA', 'BA '], {
        A: '#forge:dusts/ender_pearl',
        B: 'powah:capacitor_basic',
        C: '#forge:gems/apatite'
    }).id(`kubejs:powah/capacitor_basic_large`)

    //======= Energizing Rod (Basic) =======
    event.shaped('powah:energizing_rod_basic', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_basic_large',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_starter'
    }).id(`kubejs:powah/energizing_rod_basic`)

    //======= Energizing Rod (Hardened) =======
    event.shaped('powah:energizing_rod_hardened', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_hardened',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_basic'
    }).id(`kubejs:powah/energizing_rod_hardened`)

    //======= Energizing Rod (Blazing) =======
    event.shaped('powah:energizing_rod_blazing', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_blazing',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_hardened'
    }).id(`kubejs:powah/energizing_rod_blazing`)

    //======= Energizing Rod (Niotic) =======
    event.shaped('powah:energizing_rod_niotic', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_niotic',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_blazing'
    }).id(`kubejs:powah/energizing_rod_niotic`)

    //======= Energizing Rod (Spirited) =======
    event.shaped('powah:energizing_rod_spirited', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_basic_large',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_niotic'
    }).id(`kubejs:powah/energizing_rod_spirited`)

    //======= Energizing Rod (Nitro) =======
    event.shaped('powah:energizing_rod_nitro', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_spirited',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_spirited'
    }).id(`kubejs:powah/energizing_rod_nitro`)

    //======= Energizing Orb =======
    event.shaped('powah:energizing_orb', ['AAA', 'ACA', 'BBB'], {
        A: 'mekanism:structural_glass',
        B: 'forbidden_arcanus:polished_darkstone_slab',
        C: 'powah:dielectric_casing'
    }).id(`kubejs:powah/energizing_orb`)

    //======= Player Transmitter (Basic) =======
    event.shaped('powah:player_transmitter_basic', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_starter',
        B: 'powah:capacitor_basic_large',
        C: 'powah:dielectric_casing',
        D: 'cyclic:teleport'
    }).id(`kubejs:powah/player_transmitter_basic`)

    //======= Player Transmitter (Hardened) =======
    event.shaped('powah:player_transmitter_hardened', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_basic',
        B: 'powah:capacitor_hardened',
        C: 'powah:dielectric_casing',
        D: 'cyclic:teleport'
    }).id(`kubejs:powah/player_transmitter_hardened`)

    //======= Player Transmitter (Blazing) =======
    event.shaped('powah:player_transmitter_blazing', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_hardened',
        B: 'powah:capacitor_blazing',
        C: 'powah:dielectric_casing',
        D: 'cyclic:teleport'
    }).id(`kubejs:powah/player_transmitter_blazing`)

    //======= Player Transmitter (Niotic) =======
    event.shaped('powah:player_transmitter_niotic', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_blazing',
        B: 'powah:capacitor_niotic',
        C: 'powah:dielectric_casing',
        D: 'cyclic:teleport'
    }).id(`kubejs:powah/player_transmitter_niotic`)

    //======= Player Transmitter (Spirited) =======
    event.shaped('powah:player_transmitter_spirited', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_niotic',
        B: 'powah:capacitor_spirited',
        C: 'powah:dielectric_casing',
        D: 'cyclic:teleport'
    }).id(`kubejs:powah/player_transmitter_spirited`)

    //======= Player Transmitter (Nitro) =======
    event.shaped('powah:player_transmitter_nitro', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_spirited',
        B: 'powah:capacitor_nitro',
        C: 'powah:dielectric_casing',
        D: 'cyclic:teleport'
    }).id(`kubejs:powah/player_transmitter_nitro`)

    removeRecipeByID(event, [
        'powah:crafting/energizing_orb',
        'powah:crafting/capacitor_basic_large',
        'powah:crafting/energizing_rod_basic',
        'powah:crafting/energizing_rod_hardened',
        'powah:crafting/energizing_rod_blazing',
        'powah:crafting/energizing_rod_niotic',
        'powah:crafting/energizing_rod_spirited',
        'powah:crafting/energizing_rod_nitro',
        'powah:crafting/player_tranmitter_basic',
        'powah:crafting/player_tranmitter_hardened',
        'powah:crafting/player_tranmitter_blazing',
        'powah:crafting/player_tranmitter_niotic',
        'powah:crafting/player_tranmitter_spirited',
        'powah:crafting/player_tranmitter_nitro',
    ])

})
