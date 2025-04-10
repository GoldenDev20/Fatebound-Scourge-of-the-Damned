//Priority: 1
/**
 * @file jei_add_info.js
 * @description jei additional infomation|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
JEIEvents.information(event => {

  event.addItem('enderstorage:ender_chest', [
    'Cross-dimensional wireless item transfer to any chest on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase inventory size.'
  ])

  event.addItem('enderstorage:ender_tank', [
    'Cross-dimensional wireless fluid transfer to any tank on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase tank size.'
  ])

  //======= Crystals for Crystals of Cretion =======
  event.addItem('kubejs:kyanite_of_the_depth', ['Drops from Ghost of Captain Cornelia Boss.'])
  event.addItem('kubejs:crystal_of_wild_spirit', ['Drops from Wilden Chimera Boss.'])
  event.addItem('kubejs:jewel_of_the_deepdark', ['Drops from Warden Boss.'])
  event.addItem('kubejs:void_tears', ['Drops from Void Blossom Boss.'])
  event.addItem('kubejs:stone_of_fear', ['Drops from Arachnarach Boss.'])
  event.addItem('kubejs:emerald_of_the_lost_soul', ['Drops from The Night Lich.'])
  event.addItem('kubejs:skydust_amethyst', ['Drops from Valkyrie Queen Boss.'])
  event.addItem('kubejs:heart_of_hell', ['Drops from Nether Gauntlet Boss.'])

  //======= Enigmatic Legacy =======
  // Heart of the Earth
  event.addItem('enigmaticlegacy:earth_heart', [
    '100% drop chance by killing a Wither.',
    '10% drop chance by killing Vex.',
    '5% drop chance by killing Wither Skeleton.'
  ])

  // Heart of the Abyss
  event.addItem('enigmaticlegacy:abyssal_heart', ['100% drop chance by killing a Warden.'])

})