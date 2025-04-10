//Priority: 1
/**
 * @file custom_items_registry.js
 * @description Global custom items registration script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
StartupEvents.registry('item', event => {

	//Register new items here
	event.create('stone_gear').displayName('Stone Gear')
	event.create('personal_id').displayName('§9Personal ID Card')
	event.create('blank_card').displayName('Blank Card')
	event.create('blank_disk').displayName('Blank Disk')
	event.create('explorershat').displayName(`§2Explorer's Hat`)
	event.create('note_1').displayName('§e$1')
	event.create('note_2').displayName('§e$2')
	event.create('note_5').displayName('§e$5')
	event.create('note_10').displayName('§e$10')
	event.create('note_20').displayName('§e$20')
	event.create('note_50').displayName('§e$50')
	event.create('note_100').displayName('§e$100')
	event.create('note_200').displayName('§e$200')
	event.create('note_500').displayName('§e$500')
	event.create('note_1000').displayName('§e$1000')
	event.create('1b_card').displayName('§d1B Card')
	event.create('1m_card').displayName('§d1M Card')
	event.create('5k_card').displayName('§d5K Card')
	event.create('5m_card').displayName('§d5M Card')
	event.create('10k_card').displayName('§d10K Card')
	event.create('10m_card').displayName('§d10M Card')
	event.create('50k_card').displayName('§d50K Card')
	event.create('50m_card').displayName('§d50M Card')
	event.create('100k_card').displayName('§d100K Card')
	event.create('100m_card').displayName('§d100M Card')
	event.create('500k_card').displayName('§d500K Card')
	event.create('500m_card').displayName('§d500M Card')
	event.create('dreamweaver_moonstone').displayName(`§bDreamweaver Moonstone`)
	event.create('radiant_ruby').displayName(`§bRadiant Ruby`)
	event.create('elysian_malachite').displayName(`§bElysian Malachite`)
	event.create('dusk_citrine').displayName(`§bDusk Citrine`)
	event.create('arcane_bloodstone').displayName(`§bArcane Bloodstone`)
	event.create('glimmering_garnet').displayName(`§bGlimmering Garnet`)
	event.create('veil_of_shadows').displayName(`§bVeil of Shadows`)
	event.create('luminous_peridot').displayName(`§bLuminous Peridot`)
	event.create('twilight_diamond').displayName(`§bTwilight Diamond`)
	event.create('crimson_sunstone').displayName(`§bCrimson Sunstone`)
	event.create('wraithstone').displayName(`§bWraithstone`)
	event.create('whispering_quartz').displayName(`§bWhispering Quartz`)
	event.create('seraphic_jade').displayName(`§bSeraphic Jade`)
	event.create('enchanted_onyx').displayName(`§bEnchanted Onyx`)
	event.create('celestial_sapphire').displayName(`§bCelestial Sapphire`)
	event.create('frosted_topaz').displayName(`§bFrosted Topaz`)
	event.create('phantom_tourmaline').displayName(`§bPhantom Tourmaline`)
	event.create('shadow_opal').displayName(`§bShadow Opal`)
	event.create('starlit_aquamarine').displayName(`§bStarlit Aquamarine`)
	event.create('mystic_amethyst').displayName(`§bMystic Amethyst`)
	event.create('stone_of_transcendence').displayName(`§5Stone of Transcendence`)
	event.create('blueprint').displayName('Blueprint')
	event.create('airship_blueprint').displayName('Airship Blueprint')
	event.create('biplane_blueprint').displayName('Biplane Blueprint')
	event.create('cargo_blueprint').displayName('Cargo Airship Blueprint')
	event.create('gyrodyne_blueprint').displayName('Gyrodyne Blueprint')
	event.create('quadrocopter_blueprint').displayName('Quadrocopter Blueprint')
	event.create('crystal_of_creation').displayName(`§6Crystal of Creation`)

	event.create('kyanite_of_the_depth').displayName(`§bKyanite of the Depth`)
	event.create('kyanite_of_the_depth_empowered').displayName(`§bEmpowered Kyanite of the Depth`)
	event.create('crystal_of_wild_spirit').displayName(`§bCrystal of Wild Spirit`)
	event.create('crystal_of_wild_spirit_empowered').displayName(`§bEmpowered Crystal of Wild Spirit`)
	event.create('jewel_of_the_deepdark').displayName(`§bJewel of the Deepdark`)
	event.create('jewel_of_the_deepdark_empowered').displayName(`§bEmpowered Jewel of the Deepdark`)
	event.create('void_tears').displayName(`§bVoid Tears`)
	event.create('void_tears_empowered').displayName(`§bEmpowered Void Tears`)
	event.create('stone_of_fear').displayName(`§bStone of Fear`)
	event.create('stone_of_fear_empowered').displayName(`§bEmpowered Stone of Fear`)
	event.create('emerald_of_the_lost_soul').displayName(`§bEmerald of the Lost Soul`)
	event.create('emerald_of_the_lost_soul_empowered').displayName(`§bEmpowered Emerald of the Lost Soul`)
	event.create('skydust_amethyst').displayName(`§bSkydust Amethyst`)
	event.create('skydust_amethyst_empowered').displayName(`§bEmpowered Skydust Amethyst`)
	event.create('heart_of_hell').displayName(`§bHeart of Hell`)
	event.create('heart_of_hell_empowered').displayName(`§bEmpowered Heart of Hell`)

})

StartupEvents.registry('block', event => {

	//Register new blocks here
	event.create('magical_soil').displayName('§5Magical Soil').grassSoundType().mapColor('grass').hardness(1.0)
	event.create('ender_pearl_block_1x').displayName('Ender Pearl Block 1x')
	event.create('ender_pearl_block_2x').displayName('Ender Pearl Block 2x')
	event.create('ender_pearl_block_3x').displayName('Ender Pearl Block 3x')
	event.create('ender_pearl_block_4x').displayName('Ender Pearl Block 4x')
	event.create('ender_pearl_block_5x').displayName('Ender Pearl Block 5x')
	event.create('ender_pearl_block_6x').displayName('Ender Pearl Block 6x')
	event.create('ender_pearl_block_7x').displayName('Ender Pearl Block 7x')
	event.create('ender_pearl_block_8x').displayName('Ender Pearl Block 8x')
	event.create('ender_pearl_block_9x').displayName('Ender Pearl Block 9x')
	event.create('obsidian_with_iron_block').displayName('Obsidian With Iron Block')

})