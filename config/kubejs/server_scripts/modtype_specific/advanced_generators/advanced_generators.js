//Priority: 1000
/**
 * @file advanced_generators.js
 * @description Recipe Advanced Generators script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
import { modifyShaped } from './constants.js';

ServerEvents.recipes(event => {

    const ironFrame = 'advgenerators:iron_frame';
    const ironTubing = 'advgenerators:iron_tubing';
    const ironWiring = 'advgenerators:iron_wiring';
    const woodenRod = '#forge:rods/wooden';
    const ironIngot = '#forge:ingots/iron';
    const goldIngot = '#forge:ingots/gold';
    const steelIngot = '#forge:ingots/steel';
    const redstoneDust = '#forge:dusts/redstone';
    const quartz = '#botania:all_quartz';
    const piston = 'minecraft:piston';

    // Funkction to add recipe
    const addShapedRecipe = (result, count, pattern, ingredients) => {
        modifyShaped(event, result, count, pattern, ingredients);
    };

    //======= Advanced Generators Recipes =======
    const recipes = [
        { result: 'advgenerators:iron_tubing', count: 2, pattern: ['A  ', ' B ', '  A'], ingredients: { A: ironIngot, B: woodenRod } },
        { result: 'advgenerators:iron_wiring', count: 2, pattern: ['AC ', 'CBC', ' CA'], ingredients: { A: ironIngot, B: woodenRod, C: redstoneDust } },
        { result: 'advgenerators:upgrade_kit', count: 4, pattern: ['A  ', ' B ', '  A'], ingredients: { A: ironFrame, B: woodenRod } },
        { result: 'advgenerators:turbine_rotor_tier2', count: 1, pattern: ['AAA', 'ABA', 'AAA'], ingredients: { A: goldIngot, B: woodenRod } },
        { result: 'advgenerators:turbine_kit_tier2', count: 1, pattern: ['AAA', 'ABA', 'AAA'], ingredients: { A: goldIngot, B: woodenRod } },
        { result: 'advgenerators:turbine_blade', count: 2, pattern: ['AB ', 'AB ', ' B '], ingredients: { A: ironFrame, B: ironIngot } },
        { result: 'advgenerators:controller', count: 2, pattern: ['ABA', 'CDC', 'EBE'], ingredients: { A: ironIngot, B: redstoneDust, C: ironWiring, D: quartz, E: ironTubing } },
        { result: 'advgenerators:power_io', count: 1, pattern: ['ABA', 'CDC', 'ABA'], ingredients: { A: ironFrame, B: piston, C: ironTubing, D: ironWiring } },
        { result: 'advgenerators:steam_turbine_controller', count: 1, pattern: ['ABA', 'CEC', 'ADA'], ingredients: { A: ironFrame, B: 'advgenerators:controller', C: ironTubing, D: ironWiring, E: 'irongenerators:diamond_generator' } },
        { result: 'advgenerators:syngas_controller', count: 1, pattern: ['ABA', 'FEC', 'ADA'], ingredients: { A: ironFrame, B: 'advgenerators:pressure_valve', C: ironTubing, D: ironWiring, E: 'advgenerators:controller', F: 'irongenerators:signalum_generator' } },
        { result: 'advgenerators:exchanger_controller', count: 1, pattern: ['ADA', 'CBC', 'AEA'], ingredients: { A: ironFrame, B: 'advgenerators:controller', C: ironTubing, D: ironWiring, E: 'irongenerators:osmium_generator' } },
        { result: 'advgenerators:fuel_turbine_controller', count: 1, pattern: ['ACA', 'DBD', 'AEA'], ingredients: { A: ironFrame, B: 'advgenerators:controller', C: ironTubing, D: ironWiring, E: 'irongenerators:enderium_generator' } },
        { result: 'advgenerators:gas_input', count: 1, pattern: ['A A', 'BCB', ' D '], ingredients: { A: steelIngot, B: ironFrame, C: piston, D: ironTubing } },
    ];

    recipes.forEach(recipe => {
        addShapedRecipe(recipe.result, recipe.count, recipe.pattern, recipe.ingredients);
    });

    removeRecipeByID(event, [
        'advgenerators:turbines/rotor_tier4_invar',
        'advgenerators:turbines/kit_tier4_invar'
    ])

});
