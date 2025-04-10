//Priority: 100
/**
 * @file recipes.js
 * @description Modpack recipe script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Stone of Transcendence =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('mysticalexpansion:divinium_essence').toJson(),
      Ingredient.of('enigmaticlegacy:astral_dust').toJson(),
      Ingredient.of('cataclysm:void_core').toJson(),
      Ingredient.of('forbidden_arcanus:dark_matter').toJson(),
      Ingredient.of('rats:purifying_liquid').toJson(),
      Ingredient.of('redstone_arsenal:flux_gem').toJson()
    ],
    energy: '70000',
    result: Item.of('kubejs:stone_of_transcendence').toJson()
  }).id(`kubejs:energizing/stone_of_transcendence`)

  //======= Empowered Kyanite of the Depth =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('aquamirae:abyssal_amethyst').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:kyanite_of_the_depth').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('aquamirae:abyssal_amethyst').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:kyanite_of_the_depth_empowered').toJson()
  }).id(`kubejs:energizing/kyanite_of_the_depth_empowered`)

  //======= Empowered Crystal of Wild Spirit =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('werewolves:werewolf_tooth').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:crystal_of_wild_spirit').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('werewolves:werewolf_tooth').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:crystal_of_wild_spirit_empowered').toJson()
  }).id(`kubejs:energizing/crystal_of_wild_spirit_empowered`)

  //======= Empowered Jewel of the Deepdark =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('deeperdarker:soul_crystal').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:jewel_of_the_deepdark').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('deeperdarker:soul_crystal').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:jewel_of_the_deepdark_empowered').toJson()
  }).id(`kubejs:energizing/jewel_of_the_deepdark_empowered`)

  //======= Empowered Void Tears =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('the_deep_void:void_matter').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:void_tears').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('the_deep_void:void_matter').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:void_tears_empowered').toJson()
  }).id(`kubejs:energizing/void_tears_empowered`)

  //======= Empowered Stone of Fear =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('naturesaura:token_fear').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:stone_of_fear').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('naturesaura:token_fear').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:stone_of_fear_empowered').toJson()
  }).id(`kubejs:energizing/stone_of_fear_empowered`)

  //======= Empowered Emerald of the Lost Soul =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('callfromthedepth_:soulinagony').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:emerald_of_the_lost_soul').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('callfromthedepth_:soulinagony').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:emerald_of_the_lost_soul_empowered').toJson()
  }).id(`kubejs:energizing/emerald_of_the_lost_soul_empowered`)

  //======= Empowered Skydust Amethyst =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('forbidden_arcanus:golden_feather').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:skydust_amethyst').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('forbidden_arcanus:golden_feather').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:skydust_amethyst_empowered').toJson()
  }).id(`kubejs:energizing/skydust_amethyst_empowered`)

  //======= Empowered Heart of Hell =======
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('midnight_madness:demonic_soul_crystal').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('kubejs:heart_of_hell').toJson(),
      Ingredient.of('forcecraft:force_ingot').toJson(),
      Ingredient.of('midnight_madness:demonic_soul_crystal').toJson()
    ],
    energy: '125000',
    result: Item.of('kubejs:heart_of_hell_empowered').toJson()
  }).id(`kubejs:energizing/heart_of_hell_empowered`)

  //======= Dreamweaver Moonstone =======
   event.shaped('kubejs:dreamweaver_moonstone', ['ADA', 'BCB', 'ADA'], {
    A: '#forge:gems/arcane_crystal',
    B: 'blue_skies:moonstone',
    C: 'botanicalmachinery:mana_emerald',
    D: '#forge:ingots/deorum'
  }).id(`kubejs:dreamweaver_moonstone`)

  //======= Radiant Ruby =======
  event.shaped('kubejs:radiant_ruby', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:ruby_essence',
    B: '#forge:gems/nitro',
    C: 'alexscaves:radiant_essence',
    D: '#forge:ingots/fiery'
  }).id(`kubejs:radiant_ruby`)

  //======= Elysian Malachite =======
  event.shaped('kubejs:elysian_malachite', ['ADA', 'BCB', 'ADA'], {
    A: 'infinity_nexus_miner:demetrium_crystal',
    B: 'bloodmagic:reagentgrowth',
    C: 'botania:overgrowth_seed',
    D: 'twilightforest:transformation_powder'
  }).id(`kubejs:elysian_malachite`)

  //======= Dusk Citrine =======
  event.shaped('kubejs:dusk_citrine', ['ADA', 'BCB', 'AEA'], {
    A: '#forge:ingots/flux',
    B: 'bloodmagic:ritualdivinerdusk',
    C: 'infinity_nexus_miner:citrium_crystal',
    D: 'twilightforest:snow_queen_trophy',
    E:  'twilightforest:ur_ghast_trophy'
  }).id(`kubejs:dusk_citrine`)

  //======= Arcane Bloodstone =======
  event.shaped('kubejs:arcane_bloodstone', ['ADA', 'BCB', 'ADA'], {
    A: 'evilcraft:blood_infusion_core',
    B: 'bloodmagic:weakbloodshard',
    C: 'rats:arcane_technology',
    D: 'irons_spellbooks:blood_vial'
  }).id(`kubejs:arcane_bloodstone`)

  //======= Glimmering Garnet =======
  event.shaped('kubejs:glimmering_garnet', ['ADA', 'BCB', 'ADA'], {
    A: 'evilcraft:burning_gem_stone',
    B: 'eidolon:crimson_essence',
    C: 'born_in_chaos_v1:orbofthe_summoner',
    D: '#forge:gems/vibrant_crystal'
  }).id(`kubejs:glimmering_garnet`)

  //======= Veil of Shadows =======
  event.shaped('kubejs:veil_of_shadows', ['ADA', 'BCB', 'ADA'], {
    A: 'eidolon:shadow_gem',
    B: 'tconstruct:ender_slime_crystal',
    C: Item.of('easy_mob_farm:mystic_binding_crystal', '{Damage:0}'),
    D: 'hmag:mysterious_petal'
  }).id(`kubejs:veil_of_shadows`)

  //======= Luminous Peridot =======
  event.shaped('kubejs:luminous_peridot', ['ADA', 'BCB', 'ADA'], {
    A: 'botania:quartz_sunny',
    B: 'mowziesmobs:glowing_jelly',
    C: 'ars_nouveau:jar_of_light',
    D: 'alltheores:peridot'
  }).id(`kubejs:luminous_peridot`)

  //======= Twilight Diamond =======
  event.shaped('kubejs:twilight_diamond', ['ADA', 'BCB', 'ADA'], {
    A: 'mekanism:enriched_diamond',
    B: 'create_new_age:overcharged_diamond',
    C: 'quark:diamond_heart',
    D: '#forge:gems/insanium'
  }).id(`kubejs:twilight_diamond`)

  //======= Crimson Sunstone =======
  event.shaped('kubejs:crimson_sunstone', ['ADA', 'BCB', 'ADA'], {
    A: 'blue_skies:sunstone_crystal',
    B: 'iceandfire:shiny_scales',
    C: 'infinity_nexus_miner:darium_crystal',
    D: 'eidolon:crimson_gem'
  }).id(`kubejs:crimson_sunstone`)

  //======= Wraithstone =======
  event.shaped('kubejs:wraithstone', ['ADA', 'BCB', 'ADA'], {
    A: 'netherexp:ochre_frogmist',
    B: 'bloodmagic:reagentlava',
    C: 'eidolon:wraith_heart',
    D: 'eidolon:crimson_gem'
  }).id(`kubejs:wraithstone`)

  //======= Whispering Quartz =======
  event.shaped('kubejs:whispering_quartz', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:certus_quartz_essence',
    B: '#forge:ingots/dreadsteel',
    C: 'midnight_madness:dragon_soul',
    D: 'midnight:virilux'
  }).id(`kubejs:whispering_quartz`)

  //======= Seraphic Jade =======
  event.shaped('kubejs:seraphic_jade', ['ADA', 'BCB', 'ADA'], {
    A: '#forge:gems/skyjade',
    B: 'infinity_nexus_miner:demetrium_crystal',
    C: 'enigmaticlegacy:earth_heart',
    D: 'enderio:enticing_crystal'
  }).id(`kubejs:seraphic_jade`)

  //======= Enchanted Onyx =======
  event.shaped('kubejs:enchanted_onyx', ['ADA', 'BCB', 'ADA'], {
    A: 'the_deep_void:onyx',
    B: 'infinity_nexus_miner:agate_crystal',
    C: Item.of('irons_spellbooks:diamond_spell_book', '{ISB_Spells:{data:[],maxSpells:10,mustEquip:1b,spellWheel:1b}}'),
    D: 'forbidden_arcanus:arcane_crystal'
  }).id(`kubejs:enchanted_onyx`)

  //======= Celestial Sapphire =======
  event.shaped('kubejs:celestial_sapphire', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:sapphire_essence',
    B: 'thermal:xp_crystal',
    C: 'draconicevolution:celestial_manipulator',
    D: 'bloodmagic:etherealslate'
  }).id(`kubejs:celestial_sapphire`)

  //======= Frosted Topaz =======
  event.shaped('kubejs:frosted_topaz', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:ice_essence',
    B: 'born_in_chaos_v1:permafrost_shard',
    C: Item.of('mowziesmobs:ice_crystal', '{Damage:0}'),
    D: 'botania:mana_pearl'
  }).id(`kubejs:frosted_topaz`)

  //======= Phantom Tourmaline =======
  event.shaped('kubejs:phantom_tourmaline', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:phantom_essence',
    B: 'iceandfire:dread_shard',
    C: 'enigmaticaddons:forger_gem',
    D: 'reliquary:infernal_claw'
  }).id(`kubejs:phantom_tourmaline`)

  //======= Shadow Opal =======
  event.shaped('kubejs:shadow_opal', ['ADA', 'BCB', 'ADA'], {
    A: 'tconstruct:ender_slime_crystal',
    B: 'netherexp:phasmo_shard',
    C: 'enigmaticaddons:forgotten_ice',
    D: 'villagertools:darkness'
  }).id(`kubejs:shadow_opal`)

  //======= Starlit Aquamarine =======
  event.shaped('kubejs:starlit_aquamarine', ['ADA', 'BCB', 'ADA'], {
    A: 'seadwellers:aquamarine',
    B: 'born_in_chaos_v1:fire_dust',
    C: 'alexscaves:depth_charge',
    D: 'forbidden_arcanus:mundabitur_dust'
  }).id(`kubejs:starlit_aquamarine`)

  //======= Mystic Amethyst =======
  event.shaped('kubejs:mystic_amethyst', ['ADA', 'BCB', 'ADA'], {
    A: 'mysticalagriculture:amethyst_essence',
    B: 'botania:life_essence',
    C: 'enigmaticlegacy:cosmic_heart',
    D: 'alexscaves:tectonic_shard'
  }).id(`kubejs:mystic_amethyst`)

  //======= Black Card =======
  event.shaped('4x kubejs:blank_card', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:nuggets/copper',
    B: 'minecraft:clay_ball',
    C: 'minecraft:paper'
  }).id(`kubejs:blank_card`)

  //======= Personal ID =======
  event.shaped('2x kubejs:personal_id', [' C ', 'AED', ' B '], {
    A: 'silentgear:blueprint_paper',
    B: 'cyclic:carbon_paper',
    C: 'kubejs:blank_card',
    D: 'thermal:redprint',
    E: 'minecraft:piston'
  }).id(`kubejs:personal_id`)

  //======= Obsidian With Iron Block =======
  event.shaped('kubejs:obsidian_with_iron_block', ['AAA', 'AAA', 'AAA'], {
    A: 'forbidden_arcanus:obsidian_with_iron'
  }).id(`kubejs:obsidian_with_iron_block`)

  //======= Flux Dust =======
  event.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: {
      amount: 10,
      tag: "mekanism:redstone"
    },
    itemInput: {
      ingredient: {
        tag: "forge:dusts/obsidian"
      }
    },
    output: {
      item: "fluxnetworks:flux_dust"
    }
  }).id(`kubejs:fluxnetworks/flux_dust`)

  //======= Gold Bars Conversion =======
  event.shapeless('quark:gold_bars', 'cyclic:gold_bars')
  event.shapeless('cyclic:gold_bars', 'quark:gold_bars')

})