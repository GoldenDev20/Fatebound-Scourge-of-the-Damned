//Priority: 100
/**
 * @file gears.js
 * @description Additional Gears unify script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Stone Gear =======
    event.shaped('kubejs:stone_gear', ['BAB', 'A A', 'BAB'], {
        A: 'create:andesite_alloy',
        B: '#forge:stone'
    }).id(`kubejs:stone_gear`)

    //======= Thermal =======
    const metalThermal = [
        'rose_gold',
        'netherite'
    ]
    metalThermal.forEach((metalThermal) => {
        modifyShaped(event, `thermal:${metalThermal}_gear`, 1, [' A ', 'ABA', ' A '], {
            A: `#forge:ingots/${metalThermal}`,
            B: '#forge:gears/stone'
        })
    })
    modifyShaped(event, 'thermal:lapis_gear', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:gems/lapis',
        B: '#forge:gears/stone'
    })
    modifyShaped(event, 'thermal:emerald_gear', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:gems/emerald',
        B: '#forge:gears/stone'
    })
    modifyShaped(event, 'thermal:quartz_gear', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:gems/quartz',
        B: '#forge:gears/stone'
    })

    //======= Thermal Extra =======
    const metalThermalExtra = [
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel'
    ]
    metalThermalExtra.forEach((metalThermalExtra) => {
        modifyShaped(event, `thermal_extra:${metalThermalExtra}_gear`, 1, [' A ', 'ABA', ' A '], {
            A: `#forge:ingots/${metalThermalExtra}`,
            B: '#forge:gears/stone'
        })
    })

    //======= Allthemodium =======
    const metalAllthemodium = [
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]
    metalAllthemodium.forEach((metalAllthemodium) => {
        modifyShaped(event, `allthemodium:${metalAllthemodium}_gear`, 1, [' A ', 'ABA', ' A '], {
            A: `#forge:ingots/${metalAllthemodium}`,
            B: '#forge:gears/stone'
        })
    })

    //======= Redstone Arsenal =======
    modifyShaped(event, 'redstone_arsenal:flux_gear', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/flux',
        B: '#forge:gears/stone'
    })

    //======= Alltheores =======
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
        modifyShaped(event, `alltheores:${metalAlltheores}_gear`, 1, [' A ', 'ABA', ' A '], {
            A: `#forge:ingots/${metalAlltheores}`,
            B: '#forge:gears/stone'
        })
    })

    modifyShaped(event, 'alltheores:diamond_gear', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:gems/diamond',
        B: '#forge:gears/stone'
    })

})