//Priority: 1000
/**
 * @file glassential.js
 * @description Recipe Glassesntial script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Redstone Glass =======
    event.shaped('4x glassential:glass_redstone', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:storage_blocks/redstone'
    }).id(`kubejs:glassential/glass_redstone`)

    //======= Luminous Glass =======
    event.shaped('4x glassential:glass_light', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: Item.of('lightingwand:wand', '{Damage:0}')
    }).id(`kubejs:glassential/glass_light`)

    //======= Tinted Ethereal Glass =======
    event.shaped('4x glassential:glass_dark_ethereal', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass/tinted',
        B: 'rftoolsbase:infused_enderpearl'
    }).id(`kubejs:glassential/glass_dark_ethereal`)

    //======= Tinted Reverse Ethereal Glass =======
    event.shaped('4x glassential:glass_dark_ethereal_reverse', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_dark_ethereal',
        B: '#forge:storage_blocks/coal'
    }).id(`kubejs:glassential/glass_dark_ethereal_reverse`)

    //======= Ethereal Glass =======
    event.shaped('4x glassential:glass_ethereal', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'botania:forest_eye'
    }).id(`kubejs:glassential/glass_ethereal`)

    //======= Reverse Ethereal Glass =======
    event.shaped('4x glassential:glass_ethereal_reverse', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_ethereal',
        B: '#forge:storage_blocks/charcoal'
    }).id(`kubejs:glassential/glass_ethereal_reverse`)

    //======= Ghostly Glass =======
    event.shaped('4x glassential:glass_ghostly', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'waystones:warp_stone'
    }).id(`kubejs:glassential/glass_ghostly`)

    removeRecipeByID(event, [
        'glassential:glass_redstone',
        'glassential:glass_light',
        'glassential:glass_dark_ethereal',
        'glassential:glass_dark_ethereal_reverse',
        'glassential:glass_ethereal',
        'glassential:glass_ethereal_reverse',
        'glassential:glass_ghostly'
    ])

})