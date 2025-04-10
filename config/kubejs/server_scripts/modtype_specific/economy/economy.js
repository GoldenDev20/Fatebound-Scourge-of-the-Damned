//Priority: 1000
/**
 * @file economy.js
 * @description Recipe Economy script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= $1 =======
  event.shapeless('2x kubejs:note_1', 'kubejs:note_2').id(`kubejs:bills/2_to_1`)
  event.shapeless('5x kubejs:note_1', 'kubejs:note_5').id(`kubejs:bills/5_to_1`)
  event.shapeless('10x kubejs:note_1', 'kubejs:note_10').id(`kubejs:bills/10_to_1`)
  event.shapeless('20x kubejs:note_1', 'kubejs:note_20').id(`kubejs:bills/20_to_1`)
  event.shapeless('50x kubejs:note_1', 'kubejs:note_50').id(`kubejs:bills/50_to_1`)
  //======= $2 =======
  event.shapeless('kubejs:note_2', '2x kubejs:note_1').id(`kubejs:bills/1_to_2`)
  event.shapeless('5x kubejs:note_2', 'kubejs:note_10').id(`kubejs:bills/10_to_2`)
  event.shapeless('10x kubejs:note_2', 'kubejs:note_20').id(`kubejs:bills/20_to_2`)
  event.shapeless('50x kubejs:note_2', 'kubejs:note_100').id(`kubejs:bills/100_to_2`)
  //======= $5 =======
  event.shapeless('kubejs:note_5', ['kubejs:note_1', '2x kubejs:note_2']).id(`kubejs:bills/5`)
  event.shapeless('kubejs:note_5', '5x kubejs:note_1').id(`kubejs:bills/1_to_5`)
  event.shapeless('2x kubejs:note_5', 'kubejs:note_10').id(`kubejs:bills/10_to_5`)
  event.shapeless('4x kubejs:note_5', 'kubejs:note_20').id(`kubejs:bills/20_to_5`)
  event.shapeless('10x kubejs:note_5', 'kubejs:note_50').id(`kubejs:bills/50_to_5`)
  event.shapeless('20x kubejs:note_5', 'kubejs:note_100').id(`kubejs:bills/100_to_5`)
  event.shapeless('40x kubejs:note_5', 'kubejs:note_200').id(`kubejs:bills/200_to_5`)
  //======= $10 =======
  event.shapeless('kubejs:note_10', ['3x kubejs:note_1', 'kubejs:note_2', 'kubejs:note_5']).id(`kubejs:bills/1-2-5_10`)
  event.shapeless('kubejs:note_10', '5x kubejs:note_2').id(`kubejs:bills/2_to_10`)
  event.shapeless('kubejs:note_10', '2x kubejs:note_5').id(`kubejs:bills/5_to_10`)
  event.shapeless('2x kubejs:note_10', 'kubejs:note_20').id(`kubejs:bills/20_to_10`)
  event.shapeless('10x kubejs:note_10', 'kubejs:note_100').id(`kubejs:bills/100_to_10`)
  event.shapeless('20x kubejs:note_10', 'kubejs:note_200').id(`kubejs:bills/200_to_10`)
  event.shapeless('50x kubejs:note_10', 'kubejs:note_500').id(`kubejs:bills/500_to_10`)
  //======= $20 =======
  event.shapeless('kubejs:note_20', ['2x kubejs:note_5', 'kubejs:note_10']).id(`kubejs:bills/5-10_to_20`)
  event.shapeless('kubejs:note_20', '4x kubejs:note_5').id(`kubejs:bills/5_to_20`)
  event.shapeless('kubejs:note_20', '2x kubejs:note_10').id(`kubejs:bills/10_to_20`)
  event.shapeless('kubejs:note_20', ['5x kubejs:note_2', '2x kubejs:note_5']).id(`kubejs:bills/2-5_to_20`)
  event.shapeless('kubejs:note_20', ['5x kubejs:note_2', 'kubejs:note_10']).id(`kubejs:bills/2-10_to_20`)
  event.shapeless('5x kubejs:note_20', 'kubejs:note_100').id(`kubejs:bills/100_to_20`)
  event.shapeless('10x kubejs:note_20', 'kubejs:note_200').id(`kubejs:bills/200_to_20`)
  event.shapeless('50x kubejs:note_20', 'kubejs:note_1000').id(`kubejs:bills/1000_to_20`)
  //======= $50 =======
  event.shapeless('kubejs:note_50', ['8x kubejs:note_5', 'kubejs:note_10']).id(`kubejs:bills/5-10_to_50`)
  event.shapeless('kubejs:note_50', ['6x kubejs:note_5', '2x kubejs:note_10']).id(`kubejs:bills/5-10_to_50_2`)
  event.shapeless('kubejs:note_50', ['6x kubejs:note_5', 'kubejs:note_20']).id(`kubejs:bills/5-20_to_50`)
  event.shapeless('kubejs:note_50', ['4x kubejs:note_5', '3x kubejs:note_10']).id(`kubejs:bills/5-10_to_50_3`)
  event.shapeless('kubejs:note_50', ['4x kubejs:note_5', 'kubejs:note_10', 'kubejs:note_20']).id(`kubejs:bills/5-10-20_to_50`)
  event.shapeless('kubejs:note_50', ['2x kubejs:note_5', '2x kubejs:note_10', 'kubejs:note_20']).id(`kubejs:bills/5-10-20_to_50_2`)
  event.shapeless('kubejs:note_50', ['2x kubejs:note_5', '2x kubejs:note_20']).id(`kubejs:bills/5-20_to_50_2`)
  event.shapeless('kubejs:note_50', ['3x kubejs:note_10', 'kubejs:note_20']).id(`kubejs:bills/10-20_to_50`)
  event.shapeless('kubejs:note_50', ['kubejs:note_10', '2x kubejs:note_20']).id(`kubejs:bills/10-20_to_50_2`)
  event.shapeless('kubejs:note_50', '5x kubejs:note_10').id(`kubejs:bills/10_to_50`)
  event.shapeless('kubejs:note_50', ['5x kubejs:note_2', '2x kubejs:note_20']).id(`kubejs:bills/2-20_to_50`)
  event.shapeless('kubejs:note_50', ['5x kubejs:note_2', '2x kubejs:note_10', 'kubejs:note_20']).id(`kubejs:bills/2-10-20_to_50`)
  event.shapeless('kubejs:note_50', ['5x kubejs:note_2', '3x kubejs:note_10']).id(`kubejs:bills/2-10_to_50`)
  event.shapeless('2x kubejs:note_50', 'kubejs:note_100').id(`kubejs:bills/100_to_50`)
  event.shapeless('4x kubejs:note_50', 'kubejs:note_200').id(`kubejs:bills/200_to_50`)
  event.shapeless('10x kubejs:note_50', 'kubejs:note_500').id(`kubejs:bills/500_to_50`)
  event.shapeless('20x kubejs:note_50', 'kubejs:note_1000').id(`kubejs:bills/1000_to_50`)
  //======= $100 =======
  event.shapeless('kubejs:note_100', '2x kubejs:note_50').id(`kubejs:bills/50_to_100`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', '2x kubejs:note_20', 'kubejs:note_10']).id(`kubejs:bills/10-20-50_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', 'kubejs:note_20', '3x kubejs:note_10']).id(`kubejs:bills/10-20-50_to_50_2`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', 'kubejs:note_20', 'kubejs:note_10', '4x kubejs:note_5']).id(`kubejs:bills/5-10-20-50_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', '2x kubejs:note_20', 'kubejs:note_5', '5x kubejs:note_1']).id(`kubejs:bills/1-5-20-50_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', 'kubejs:note_20', '6x kubejs:note_5']).id(`kubejs:bills/5-20-50_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', '3x kubejs:note_10', '4x kubejs:note_5']).id(`kubejs:bills/5-10-50_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', '2x kubejs:note_20', '5x kubejs:note_2']).id(`kubejs:bills/2-20-50_to_50`)
  event.shapeless('kubejs:note_100', '5x kubejs:note_20').id(`kubejs:bills/20_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', '5x kubejs:note_10', ]).id(`kubejs:bills/10-50_to_50`)
  event.shapeless('kubejs:note_100', ['kubejs:note_50', '3x kubejs:note_10', 'kubejs:note_20']).id(`kubejs:bills/10-20-50_to_50_3`)
  event.shapeless('2x kubejs:note_100', 'kubejs:note_200').id(`kubejs:bills/200_to_100`)
  event.shapeless('5x kubejs:note_100', 'kubejs:note_500').id(`kubejs:bills/500_to_100`)
  event.shapeless('10x kubejs:note_100', 'kubejs:note_1000').id(`kubejs:bills/1000_to_100`)
  //======= $200 =======
  event.shapeless('kubejs:note_200', '2x kubejs:note_100').id(`kubejs:bills/100_to_200`)
  event.shapeless('kubejs:note_200', '4x kubejs:note_50').id(`kubejs:bills/50_to_200`)
  event.shapeless('kubejs:note_200', ['kubejs:note_100', '2x kubejs:note_50']).id(`kubejs:bills/50-100_to_200`)
  event.shapeless('kubejs:note_200', ['kubejs:note_100', '5x kubejs:note_20']).id(`kubejs:bills/20-100_to_200`)
  event.shapeless('kubejs:note_200', ['2x kubejs:note_50', '5x kubejs:note_20']).id(`kubejs:bills/20-50_to_200`)
  event.shapeless('kubejs:note_200', ['kubejs:note_100', 'kubejs:note_50', '5x kubejs:note_10']).id(`kubejs:bills/10-50-100_to_200`)
  event.shapeless('kubejs:note_200', ['kubejs:note_100', 'kubejs:note_50', 'kubejs:note_20', '3x kubejs:note_10']).id(`kubejs:bills/10-20-50-100_to_200`)
  event.shapeless('kubejs:note_200', ['kubejs:note_100', 'kubejs:note_50', '2x kubejs:note_20', 'kubejs:note_10']).id(`kubejs:bills/10-20-50-100_to_200_2`)
  event.shapeless('kubejs:note_200', ['2x kubejs:note_50', '5x kubejs:note_20']).id(`kubejs:bills/20-50_to_200_2`)
  event.shapeless('5x kubejs:note_200', 'kubejs:note_1000').id(`kubejs:bills/1000_to_200`)
  //======= $500 =======
  event.shapeless('kubejs:note_500', '5x kubejs:note_100').id(`kubejs:bills/100_to_500`)
  event.shapeless('kubejs:note_500', ['2x kubejs:note_200', 'kubejs:note_100']).id(`kubejs:bills/100-200_to_500`)
  event.shapeless('kubejs:note_500', ['kubejs:note_200', '3x kubejs:note_100']).id(`kubejs:bills/100-200_to_500_2`)
  event.shapeless('kubejs:note_500', ['2x kubejs:note_200', '2x kubejs:note_50']).id(`kubejs:bills/50-200_to_500`)
  event.shapeless('kubejs:note_500', ['2x kubejs:note_200', '5x kubejs:note_20']).id(`kubejs:bills/20-200_to_500`)
  event.shapeless('kubejs:note_500', ['2x kubejs:note_200', 'kubejs:note_50', '5x kubejs:note_10']).id(`kubejs:bills/10-50-200_to_500`)
  event.shapeless('kubejs:note_500', ['2x kubejs:note_200', 'kubejs:note_50', '4x kubejs:note_10', '2x kubejs:note_5']).id(`kubejs:bills/5-10-50-200_to_500`)
  event.shapeless('2x kubejs:note_500', 'kubejs:note_1000').id(`kubejs:bills/1000_to_500`)
  //======= $1'000 =======
  event.shapeless('kubejs:note_1000', '5x kubejs:note_200').id(`kubejs:bills/200_to_1000`)
  event.shapeless('kubejs:note_1000', '2x kubejs:note_500').id(`kubejs:bills/500_to_1000`)
  event.shapeless('kubejs:note_1000', ['5x kubejs:note_100', 'kubejs:note_500']).id(`kubejs:bills/100-500_to_1000`)
  event.shapeless('kubejs:note_1000', ['6x kubejs:note_100', '2x kubejs:note_200']).id(`kubejs:bills/100-200_to_1000`)
  event.shapeless('kubejs:note_1000', ['4x kubejs:note_100', '3x kubejs:note_200']).id(`kubejs:bills/100-200_to_1000_2`)
  event.shapeless('kubejs:note_1000', ['2x kubejs:note_50', '5x kubejs:note_100', '2x kubejs:note_200']).id(`kubejs:bills/50-100-200_to_1000`)
  event.shapeless('5x kubejs:note_1000', 'kubejs:5k_card').id(`kubejs:bills/5k_to_1000`)
  event.shapeless('10x kubejs:note_1000', 'kubejs:10k_card').id(`kubejs:bills/10k_to_1000`)
  event.shapeless('50x kubejs:note_1000', 'kubejs:50k_card').id(`kubejs:bills/50k_to_1000`)
  //======= $5'000 =======
  event.shapeless('kubejs:5k_card', '5x kubejs:note_1000').id(`kubejs:cards/5k`)
  event.shapeless('2x kubejs:5k_card', 'kubejs:10k_card').id(`kubejs:cards/10k_to_5k`)
  event.shapeless('10x kubejs:5k_card', 'kubejs:50k_card').id(`kubejs:cards/50k_to_5k`)
  //======= $10'000 =======
  event.shapeless('kubejs:10k_card', '2x kubejs:5k_card').id(`kubejs:cards/10k`)
  event.shapeless('5x kubejs:10k_card', 'kubejs:50k_card').id(`kubejs:cards/50k_to_10k`)
  event.shapeless('10x kubejs:10k_card', 'kubejs:100k_card').id(`kubejs:cards/100k_to_10k`)
  event.shapeless('50x kubejs:10k_card', 'kubejs:500k_card').id(`kubejs:cards/500k_to_10k`)
  //======= $50'000 =======
  event.shapeless('kubejs:50k_card', '5x kubejs:10k_card').id(`kubejs:cards/50k`)
  event.shapeless('2x kubejs:50k_card', 'kubejs:100k_card').id(`kubejs:cards/100k_to_50k`)
  event.shapeless('10x kubejs:50k_card', 'kubejs:500k_card').id(`kubejs:cards/500k_to_50k`)
  event.shapeless('20x kubejs:50k_card', 'kubejs:1m_card').id(`kubejs:cards/1m_to_50k`)
  //======= $100'000 =======
  event.shapeless('kubejs:100k_card', '2x kubejs:50k_card').id(`kubejs:cards/100k`)
  event.shapeless('5x kubejs:100k_card', 'kubejs:500k_card').id(`kubejs:cards/500k_to_100k`)
  event.shapeless('10x kubejs:100k_card', 'kubejs:1m_card').id(`kubejs:cards/1m_to_100k`)
  event.shapeless('50x kubejs:100k_card', 'kubejs:5m_card').id(`kubejs:cards/5m_to_100k`)
  //======= $500'000 =======
  event.shapeless('kubejs:500k_card', '5x kubejs:100k_card').id(`kubejs:cards/500k`)
  event.shapeless('2x kubejs:500k_card', 'kubejs:1m_card').id(`kubejs:cards/1m_to_500k`)
  event.shapeless('10x kubejs:500k_card', 'kubejs:5m_card').id(`kubejs:cards/5m_to_500k`)
  event.shapeless('20x kubejs:500k_card', 'kubejs:10m_card').id(`kubejs:cards/10m_to_500k`)
  //======= $1'000'000 =======
  event.shapeless('kubejs:1m_card', '2x kubejs:500k_card').id(`kubejs:cards/1m`)
  event.shapeless('5x kubejs:1m_card', 'kubejs:5m_card').id(`kubejs:cards/5m_to_1m`)
  event.shapeless('10x kubejs:1m_card', 'kubejs:10m_card').id(`kubejs:cards/10m_to_1m`)
  event.shapeless('50x kubejs:1m_card', 'kubejs:50m_card').id(`kubejs:cards/50m_to_1m`)
  //======= $5'000'000 =======
  event.shapeless('kubejs:5m_card', '5x kubejs:1m_card').id(`kubejs:cards/5m`)
  event.shapeless('2x kubejs:5m_card', 'kubejs:10m_card').id(`kubejs:cards/10m_to_5m`)
  event.shapeless('10x kubejs:5m_card', 'kubejs:50m_card').id(`kubejs:cards/50m_to_5m`)
  event.shapeless('20x kubejs:5m_card', 'kubejs:100m_card').id(`kubejs:cards/100m_to_5m`)
  //======= $10'000'000 =======
  event.shapeless('kubejs:10m_card', '2x kubejs:5m_card').id(`kubejs:cards/10m`)
  event.shapeless('5x kubejs:10m_card', 'kubejs:50m_card').id(`kubejs:cards/50m_to_10m`)
  event.shapeless('10x kubejs:10m_card', 'kubejs:100m_card').id(`kubejs:cards/100m_to_10m`)
  event.shapeless('50x kubejs:10m_card', 'kubejs:500m_card').id(`kubejs:cards/500m_to_10m`)
  //======= $50'000'000 =======
  event.shapeless('kubejs:50m_card', '5x kubejs:10m_card').id(`kubejs:cards/50m`)
  event.shapeless('2x kubejs:50m_card', 'kubejs:100m_card').id(`kubejs:cards/100m_to_50m`)
  event.shapeless('10x kubejs:50m_card', 'kubejs:500m_card').id(`kubejs:cards/500m_to_50m`)
  event.shapeless('20x kubejs:50m_card', 'kubejs:1b_card').id(`kubejs:cards/1b_to_50m`)
  //======= $100'000'000 =======
  event.shapeless('kubejs:100m_card', '2x kubejs:50m_card').id(`kubejs:cards/100m`)
  event.shapeless('5x kubejs:100m_card', 'kubejs:500m_card').id(`kubejs:cards/500m_to_100m`)
  event.shapeless('10x kubejs:100m_card', 'kubejs:1b_card').id(`kubejs:cards/1b_to_100m`)
  //======= $500'000'000 =======
  event.shapeless('kubejs:500m_card', '5x kubejs:100m_card').id(`kubejs:cards/500m`)
  event.shapeless('2x kubejs:500m_card', 'kubejs:1b_card').id(`kubejs:cards/1b_to_500m`)
  //======= $1'000'000'000 =======
  event.shapeless('kubejs:1b_card', '2x kubejs:500m_card').id(`kubejs:cards/1b`)

})