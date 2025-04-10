//Priority: 100
/**
 * @file rods.js
 * @description Additional Rods unify script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    const metalAlltheores = [
        'aluminum',
        'iridium',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'steel',
        'invar',
        'electrum',
        'bronze',
        'iron',
        'gold',
        'copper',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'brass'
    ]
    metalAlltheores.forEach((metalAlltheores) => {
        modifyShaped(event, `alltheores:${metalAlltheores}_rod`, 1, [' B', 'BA'], {
            A: '#alltheores:ore_hammers',
            B: `#forge:ingots/${metalAlltheores}`
        })
        removeRecipeByID(event, [`alltheores:${metalAlltheores}_rod`])
    })

    const metalAllthemodium = [
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]
    metalAllthemodium.forEach((metalAllthemodium) => {
        modifyShaped(event, `allthemodium:${metalAllthemodium}_rod`, 1, [' B', 'BA'], {
            A: '#alltheores:ore_hammers',
            B: `#forge:ingots/${metalAllthemodium}`
        })
    })


    modifyShaped(event, 'alltheores:diamond_rod', 1, [' B', 'BA'], {
        A: '#alltheores:ore_hammers',
        B: '#forge:gems/diamond'
    })


    removeRecipeByID(event, [
        'alltheores:diamond_rod',
        'allthemodium:allthemodium_rod',
        'allthemodium:vibranium_rod',
        'allthemodium:unobtainium_rod'
    ])

})