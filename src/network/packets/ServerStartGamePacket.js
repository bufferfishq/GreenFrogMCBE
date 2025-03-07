/**
 * ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
 * ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
 * ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
 * ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
 * ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
 * ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
 *
 *
 * Copyright 2023 andriycraft
 * Github: https://github.com/andriycraft/GreenFrogMCBE
 */
const Gamemode = require("../../api/GameMode");
const Difficulty = require("./types/Difficulty");
const Dimension = require("./types/Dimension");
const Generator = require("./types/Generator");
const PacketConstructor = require("./PacketConstructor");

let entity_id = 0;
let runtimeentity_id = 0;
let gamemode = Gamemode.FALLBACK;
let playerx = 0;
let playery = 0;
let playerz = 0;
let rotationx = 0;
let rotationz = 0;
let seed = [];
let biome_type = 0;
let biome_name = "";
let dimension = Dimension.OVERWORLD;
let generator = Generator.INFINITE;
let world_gamemode = Gamemode.SURVIVAL;
let difficulty = Difficulty.PEACEFUL;
let spawn = {
	x: 0,
	y: 0,
	z: 0,
};
let permission_level = 0;
let world = "";

class ServerStartGamePacket extends PacketConstructor {
	/**
	 * Returns the name of the packet.
	 * @returns {String} The name of the packet.
	 */
	getPacketName() {
		return "start_game";
	}

	/**
	 * Returns whether the packet is critical or not.
	 * @returns {Boolean} Returns true if the packet is critical, false otherwise.
	 */
	isCriticalPacket() {
		return true;
	}

	/**
	 * Sets the entity ID
	 * @param {Number} new_entity_id - The entity ID
	 */
	setEntityId(new_entity_id) {
		entity_id = new_entity_id;
	}

	/**
	 * Sets the runtime entity ID
	 * @param {Number} new_runtime_entity_id - The runtime entity ID
	 */
	setRunTimeEntityId(new_runtime_entity_id) {
		runtimeentity_id = new_runtime_entity_id;
	}

	/**
	 * Sets the gamemode
	 * @param {Gamemode} new_gamemode - The gamemode
	 */
	setGamemode(new_gamemode) {
		gamemode = new_gamemode;
	}

	/**
	 * Sets the player spawn position X, Y, and Z
	 * @param {Number} x - The player X
	 * @param {Number} y - The player Y
	 * @param {Number} z - The player Z
	 */
	setPlayerPosition(x, y, z) {
		playerx = x;
		playery = y;
		playerz = z;
	}

	/**
	 * Sets the player rotation X and Z
	 * @param {Number} x - The player rotation (X)
	 * @param {Number} z - The player rotation (Z)
	 */
	setPlayerRotation(x, z) {
		rotationx = x;
		rotationz = z;
	}

	/**
	 * Sets the seed
	 * @param {Array<Number>} new_seed - The seed (contains 2 numbers: example: [0, 0])
	 */
	setSeed(new_seed) {
		seed = new_seed;
	}

	/**
	 * Sets the biome type
	 * @param {String} new_biome_type - The biome type
	 */
	setBiomeType(new_biome_type) {
		biome_type = new_biome_type;
	}

	/**
	 * Sets the biome name
	 * @param {Biomes} new_biome_name - The biome name
	 */
	setBiomeName(new_biome_name) {
		biome_name = new_biome_name;
	}

	/**
	 * Sets the dimension
	 * @param {Dimension} new_dimension - The dimension
	 */
	setDimension(new_dimension) {
		dimension = new_dimension;
	}

	/**
	 * Sets the generator
	 * @param {Generator} new_generator - The generator
	 */
	setGenerator(new_generator) {
		generator = new_generator;
	}

	/**
	 * Sets the world gamemode
	 * @param {Gamemode} new_world_gamemode - The world gamemode
	 */
	setWorldGamemode(new_world_gamemode) {
		world_gamemode = new_world_gamemode;
	}

	/**
	 * Sets the difficulty
	 * @param {Difficulty} new_difficulty - The difficulty
	 */
	setDifficulty(new_difficulty) {
		difficulty = new_difficulty;
	}

	/**
	 * Sets the spawn position X, Y, and Z
	 * @param {Number} x - The spawn X
	 * @param {Number} y - The spawn Y
	 * @param {Number} z - The spawn Z
	 */
	setSpawnPosition(x, y, z) {
		spawn.x = x;
		spawn.y = y;
		spawn.z = z;
	}

	/**
	 * Sets the spawn position
	 * @param {Number} new_permission_level - The permission level
	 */
	setPlayerPermissionLevel(new_permission_level) {
		permission_level = new_permission_level;
	}

	/**
	 * Sets the world name
	 * @param {String} worldname
	 */
	setWorldName(new_worldname) {
		world = new_worldname;
	}

	/**
	 * Returns the spawn position
	 * @returns {Number} - The permission level
	 */
	getPlayerPermissionLevel() {
		return permission_level;
	}

	/**
	 * Returns the entity id
	 * @returns {Number} - The entity id
	 */
	getEntityId() {
		return entity_id;
	}

	/**
	 * Returns the runtime entity id
	 * @returns {Number} - The runtime entity id
	 */
	getRunTimeEntityId() {
		return runtimeentity_id;
	}

	/**
	 * Returns the gamemode
	 * @returns {Gamemode} - The gamemode
	 */
	getGamemode() {
		return gamemode;
	}

	/**
	 * Returns the player spawn position X, Y, and Z
	 * @returns {Number} - The player X
	 * @returns {Number} - The player Y
	 * @returns {Number} - The player Z
	 */
	getPlayerPosition() {
		return {
			x: playerx,
			y: playery,
			z: playerz,
		};
	}

	/**
	 * Returns the player rotation X and Z
	 * @returns {Number} - The player rotation X
	 * @returns {Number} - The player rotation Z
	 */
	getPlayerRotation() {
		return {
			x: rotationx,
			z: rotationz,
		};
	}

	/**
	 * Returns the seed
	 * @returns {Array<NumbeR>} - The seed
	 */
	getSeed() {
		return seed;
	}

	/**
	 * Returns the biome type
	 * @returns {Biomes} - The biome type
	 */
	getBiomeType() {
		return biome_type;
	}

	/**
	 * Returns the biome name
	 * @returns {String} - The biome name
	 */
	getBiomeName() {
		return biome_name;
	}

	/**
	 * Returns the dimension
	 * @returns {Dimension} - The dimension
	 */
	getDimension() {
		return dimension;
	}

	/**
	 * Returns the generator
	 * @returns {Generator} - The generator
	 */
	getGenerator() {
		return generator;
	}

	/**
	 * Returns the world gamemode
	 * @returns {Gamemode} - The world gamemode
	 */
	getWorldGamemode() {
		return world_gamemode;
	}

	/**
	 * Returns the difficulty
	 * @returns {Difficulty} - The difficulty
	 */
	getDifficulty() {
		return difficulty;
	}

	/**
	 * Returns the spawn position as JSON
	 * @returns The spawn position as JSON
	 */
	getSpawnPosition() {
		return spawn;
	}

	/**
	 * Returns the world name
	 * @returns The world name
	 */
	getWorldName() {
		return world;
	}

	/**
	 * Sends the packet to the client
	 * @param {any} client
	 */
	writePacket(client) {
		client.queue(this.getPacketName(), {
			entity_id: this.getEntityId(),
			runtime_entity_id: this.getRunTimeEntityId(),
			player_gamemode: this.getGamemode(),
			player_position: this.getPlayerPosition(),
			rotation: this.getPlayerRotation(),
			seed: this.getSeed(),
			biome_type: this.getBiomeType(),
			biome_name: this.getBiomeName(),
			dimension: this.getDimension(),
			generator: this.getGenerator(),
			world_gamemode: this.getWorldGamemode(),
			difficulty: this.getDifficulty(),
			spawn_position: this.getSpawnPosition(),
			achievements_disabled: true,
			editor_world: false,
			day_cycle_stop_time: 0,
			edu_offer: 0,
			edu_features_enabled: false,
			edu_product_uuid: "",
			rain_level: 0,
			lightning_level: 0,
			has_confirmed_platform_locked_content: false,
			is_multiplayer: true,
			broadcast_to_lan: true,
			xbox_live_broadcast_mode: 8,
			platform_broadcast_mode: 8,
			enable_commands: true,
			is_texturepacks_required: false,
			gamerules: require("../../../world/gamerules.json").gamerules,
			experiments: [],
			experiments_previously_used: false,
			bonus_chest: false,
			map_enabled: false,
			permission_level: this.getPlayerPermissionLevel(),
			server_chunk_tick_range: 4,
			has_locked_behavior_pack: false,
			has_locked_resource_pack: false,
			is_from_locked_world_template: false,
			msa_gamertags_only: false,
			is_from_world_template: false,
			is_world_template_option_locked: false,
			only_spawn_v1_villagers: false,
			persona_disabled: false,
			custom_skins_disabled: false,
			emote_chat_muted: false,
			game_version: "*",
			limited_world_width: 0,
			limited_world_length: 0,
			is_new_nether: false,
			edu_resource_uri: {
				button_name: "",
				link_uri: "",
			},
			experimental_gameplay_override: false,
			chat_restriction_level: "none",
			disable_player_interactions: false,
			level_id: this.getWorldName(),
			world_name: this.getWorldName(),
			premium_world_template_id: "00000000-0000-0000-0000-000000000000",
			is_trial: false,
			movement_authority: "client",
			rewind_history_size: 0,
			server_authoritative_block_breaking: false,
			current_tick: [-1, -1],
			enchantment_seed: 0,
			block_properties: [],
			itemstates: [
				{
					name: "minecraft:chiseled_nether_bricks",
					runtime_id: -302,
					component_based: false,
				},
				{
					name: "minecraft:stone_brick_stairs",
					runtime_id: 109,
					component_based: false,
				},
				{
					name: "minecraft:redstone_lamp",
					runtime_id: 123,
					component_based: false,
				},
				{
					name: "minecraft:prize_pottery_shard",
					runtime_id: 661,
					component_based: false,
				},
				{
					name: "minecraft:element_30",
					runtime_id: -41,
					component_based: false,
				},
				{
					name: "minecraft:crimson_standing_sign",
					runtime_id: -250,
					component_based: false,
				},
				{
					name: "minecraft:red_nether_brick",
					runtime_id: 215,
					component_based: false,
				},
				{
					name: "minecraft:crimson_pressure_plate",
					runtime_id: -262,
					component_based: false,
				},
				{
					name: "minecraft:turtle_helmet",
					runtime_id: 579,
					component_based: false,
				},
				{
					name: "minecraft:element_109",
					runtime_id: -120,
					component_based: false,
				},
				{
					name: "minecraft:daylight_detector_inverted",
					runtime_id: 178,
					component_based: false,
				},
				{
					name: "minecraft:stone_pressure_plate",
					runtime_id: 70,
					component_based: false,
				},
				{
					name: "minecraft:acacia_chest_boat",
					runtime_id: 648,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone",
					runtime_id: -291,
					component_based: false,
				},
				{
					name: "minecraft:element_76",
					runtime_id: -87,
					component_based: false,
				},
				{
					name: "minecraft:netherite_sword",
					runtime_id: 610,
					component_based: false,
				},
				{
					name: "minecraft:cooked_rabbit",
					runtime_id: 289,
					component_based: false,
				},
				{
					name: "minecraft:element_77",
					runtime_id: -88,
					component_based: false,
				},
				{
					name: "minecraft:element_79",
					runtime_id: -90,
					component_based: false,
				},
				{
					name: "minecraft:element_78",
					runtime_id: -89,
					component_based: false,
				},
				{
					name: "minecraft:soul_campfire",
					runtime_id: 628,
					component_based: false,
				},
				{
					name: "minecraft:melon_block",
					runtime_id: 103,
					component_based: false,
				},
				{
					name: "minecraft:crimson_roots",
					runtime_id: -223,
					component_based: false,
				},
				{
					name: "minecraft:birch_boat",
					runtime_id: 377,
					component_based: false,
				},
				{
					name: "minecraft:end_bricks",
					runtime_id: 206,
					component_based: false,
				},
				{
					name: "minecraft:repeating_command_block",
					runtime_id: 188,
					component_based: false,
				},
				{
					name: "minecraft:element_75",
					runtime_id: -86,
					component_based: false,
				},
				{
					name: "minecraft:spruce_boat",
					runtime_id: 379,
					component_based: false,
				},
				{
					name: "minecraft:standing_sign",
					runtime_id: 63,
					component_based: false,
				},
				{
					name: "minecraft:vex_spawn_egg",
					runtime_id: 477,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_pressure_plate",
					runtime_id: -514,
					component_based: false,
				},
				{
					name: "minecraft:magenta_candle_cake",
					runtime_id: -432,
					component_based: false,
				},
				{
					name: "minecraft:waxed_exposed_cut_copper_stairs",
					runtime_id: -359,
					component_based: false,
				},
				{
					name: "minecraft:element_107",
					runtime_id: -118,
					component_based: false,
				},
				{
					name: "minecraft:element_108",
					runtime_id: -119,
					component_based: false,
				},
				{
					name: "minecraft:cookie",
					runtime_id: 271,
					component_based: false,
				},
				{
					name: "minecraft:chiseled_deepslate",
					runtime_id: -395,
					component_based: false,
				},
				{
					name: "minecraft:written_book",
					runtime_id: 517,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_redstone_ore",
					runtime_id: -403,
					component_based: false,
				},
				{
					name: "minecraft:glow_frame",
					runtime_id: 629,
					component_based: false,
				},
				{
					name: "minecraft:bone_meal",
					runtime_id: 412,
					component_based: false,
				},
				{
					name: "minecraft:salmon",
					runtime_id: 265,
					component_based: false,
				},
				{
					name: "minecraft:small_dripleaf_block",
					runtime_id: -336,
					component_based: false,
				},
				{
					name: "minecraft:white_candle",
					runtime_id: -413,
					component_based: false,
				},
				{
					name: "minecraft:cracked_nether_bricks",
					runtime_id: -303,
					component_based: false,
				},
				{
					name: "minecraft:crimson_sign",
					runtime_id: 620,
					component_based: false,
				},
				{
					name: "minecraft:jungle_fence_gate",
					runtime_id: 185,
					component_based: false,
				},
				{
					name: "minecraft:sculk_sensor",
					runtime_id: -307,
					component_based: false,
				},
				{
					name: "minecraft:diamond_helmet",
					runtime_id: 348,
					component_based: false,
				},
				{
					name: "minecraft:brick_block",
					runtime_id: 45,
					component_based: false,
				},
				{
					name: "minecraft:warden_spawn_egg",
					runtime_id: 638,
					component_based: false,
				},
				{
					name: "minecraft:element_104",
					runtime_id: -115,
					component_based: false,
				},
				{
					name: "minecraft:balloon",
					runtime_id: 604,
					component_based: false,
				},
				{
					name: "minecraft:element_106",
					runtime_id: -117,
					component_based: false,
				},
				{
					name: "minecraft:element_72",
					runtime_id: -83,
					component_based: false,
				},
				{
					name: "minecraft:element_74",
					runtime_id: -85,
					component_based: false,
				},
				{
					name: "minecraft:spruce_fence_gate",
					runtime_id: 183,
					component_based: false,
				},
				{
					name: "minecraft:arms_up_pottery_shard",
					runtime_id: 660,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_fence_gate",
					runtime_id: -492,
					component_based: false,
				},
				{
					name: "minecraft:saddle",
					runtime_id: 372,
					component_based: false,
				},
				{
					name: "minecraft:element_34",
					runtime_id: -45,
					component_based: false,
				},
				{
					name: "minecraft:waxed_oxidized_cut_copper",
					runtime_id: -447,
					component_based: false,
				},
				{
					name: "minecraft:acacia_stairs",
					runtime_id: 163,
					component_based: false,
				},
				{
					name: "minecraft:stripped_mangrove_log",
					runtime_id: -485,
					component_based: false,
				},
				{
					name: "minecraft:allow",
					runtime_id: 210,
					component_based: false,
				},
				{
					name: "minecraft:jungle_boat",
					runtime_id: 378,
					component_based: false,
				},
				{
					name: "minecraft:flowing_lava",
					runtime_id: 10,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_sign",
					runtime_id: 640,
					component_based: false,
				},
				{
					name: "minecraft:stripped_spruce_log",
					runtime_id: -5,
					component_based: false,
				},
				{
					name: "minecraft:element_32",
					runtime_id: -43,
					component_based: false,
				},
				{
					name: "minecraft:web",
					runtime_id: 30,
					component_based: false,
				},
				{
					name: "minecraft:colored_torch_rg",
					runtime_id: 202,
					component_based: false,
				},
				{
					name: "minecraft:diorite_stairs",
					runtime_id: -170,
					component_based: false,
				},
				{
					name: "minecraft:zombie_horse_spawn_egg",
					runtime_id: 469,
					component_based: false,
				},
				{
					name: "minecraft:item.crimson_door",
					runtime_id: -244,
					component_based: false,
				},
				{
					name: "minecraft:magma",
					runtime_id: 213,
					component_based: false,
				},
				{
					name: "minecraft:piglin_brute_spawn_egg",
					runtime_id: 500,
					component_based: false,
				},
				{
					name: "minecraft:dolphin_spawn_egg",
					runtime_id: 485,
					component_based: false,
				},
				{
					name: "minecraft:guardian_spawn_egg",
					runtime_id: 462,
					component_based: false,
				},
				{
					name: "minecraft:jungle_wall_sign",
					runtime_id: -189,
					component_based: false,
				},
				{
					name: "minecraft:campfire",
					runtime_id: 595,
					component_based: false,
				},
				{
					name: "minecraft:cyan_candle",
					runtime_id: -422,
					component_based: false,
				},
				{
					name: "minecraft:jungle_trapdoor",
					runtime_id: -148,
					component_based: false,
				},
				{
					name: "minecraft:warped_fungus",
					runtime_id: -229,
					component_based: false,
				},
				{
					name: "minecraft:big_dripleaf",
					runtime_id: -323,
					component_based: false,
				},
				{
					name: "minecraft:jungle_standing_sign",
					runtime_id: -188,
					component_based: false,
				},
				{
					name: "minecraft:purple_glazed_terracotta",
					runtime_id: 219,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_bricks",
					runtime_id: -274,
					component_based: false,
				},
				{
					name: "minecraft:cracked_deepslate_bricks",
					runtime_id: -410,
					component_based: false,
				},
				{
					name: "minecraft:trip_wire",
					runtime_id: 132,
					component_based: false,
				},
				{
					name: "minecraft:potatoes",
					runtime_id: 142,
					component_based: false,
				},
				{
					name: "minecraft:piston",
					runtime_id: 33,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_sign",
					runtime_id: 655,
					component_based: false,
				},
				{
					name: "minecraft:cobblestone",
					runtime_id: 4,
					component_based: false,
				},
				{
					name: "minecraft:hay_block",
					runtime_id: 170,
					component_based: false,
				},
				{
					name: "minecraft:prismarine_crystals",
					runtime_id: 555,
					component_based: false,
				},
				{
					name: "minecraft:element_100",
					runtime_id: -111,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_tile_double_slab",
					runtime_id: -398,
					component_based: false,
				},
				{
					name: "minecraft:fire_charge",
					runtime_id: 515,
					component_based: false,
				},
				{
					name: "minecraft:warped_nylium",
					runtime_id: -233,
					component_based: false,
				},
				{
					name: "minecraft:monster_egg",
					runtime_id: 97,
					component_based: false,
				},
				{
					name: "minecraft:carved_pumpkin",
					runtime_id: -155,
					component_based: false,
				},
				{
					name: "minecraft:element_36",
					runtime_id: -47,
					component_based: false,
				},
				{
					name: "minecraft:element_39",
					runtime_id: -50,
					component_based: false,
				},
				{
					name: "minecraft:honey_bottle",
					runtime_id: 598,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_fence_gate",
					runtime_id: -516,
					component_based: false,
				},
				{
					name: "minecraft:tadpole_bucket",
					runtime_id: 636,
					component_based: false,
				},
				{
					name: "minecraft:polished_granite_stairs",
					runtime_id: -172,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_block",
					runtime_id: -527,
					component_based: false,
				},
				{
					name: "minecraft:element_103",
					runtime_id: -114,
					component_based: false,
				},
				{
					name: "minecraft:info_update2",
					runtime_id: 249,
					component_based: false,
				},
				{
					name: "minecraft:light_block",
					runtime_id: -215,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_sign",
					runtime_id: 586,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_log",
					runtime_id: -484,
					component_based: false,
				},
				{
					name: "minecraft:skeleton_spawn_egg",
					runtime_id: 445,
					component_based: false,
				},
				{
					name: "minecraft:raw_gold",
					runtime_id: 512,
					component_based: false,
				},
				{
					name: "minecraft:birch_door",
					runtime_id: 560,
					component_based: false,
				},
				{
					name: "minecraft:flower_pot",
					runtime_id: 520,
					component_based: false,
				},
				{
					name: "minecraft:golden_sword",
					runtime_id: 323,
					component_based: false,
				},
				{
					name: "minecraft:element_73",
					runtime_id: -84,
					component_based: false,
				},
				{
					name: "minecraft:waxed_weathered_double_cut_copper_slab",
					runtime_id: -374,
					component_based: false,
				},
				{
					name: "minecraft:double_stone_block_slab",
					runtime_id: 43,
					component_based: false,
				},
				{
					name: "minecraft:polished_deepslate_double_slab",
					runtime_id: -397,
					component_based: false,
				},
				{
					name: "minecraft:birch_button",
					runtime_id: -141,
					component_based: false,
				},
				{
					name: "minecraft:darkoak_wall_sign",
					runtime_id: -193,
					component_based: false,
				},
				{
					name: "minecraft:oxidized_copper",
					runtime_id: -343,
					component_based: false,
				},
				{
					name: "minecraft:underwater_torch",
					runtime_id: 239,
					component_based: false,
				},
				{
					name: "minecraft:enderman_spawn_egg",
					runtime_id: 443,
					component_based: false,
				},
				{
					name: "minecraft:turtle_spawn_egg",
					runtime_id: 486,
					component_based: false,
				},
				{
					name: "minecraft:element_35",
					runtime_id: -46,
					component_based: false,
				},
				{
					name: "minecraft:soul_fire",
					runtime_id: -237,
					component_based: false,
				},
				{
					name: "minecraft:wolf_spawn_egg",
					runtime_id: 440,
					component_based: false,
				},
				{
					name: "minecraft:jungle_door",
					runtime_id: 561,
					component_based: false,
				},
				{
					name: "minecraft:hanging_roots",
					runtime_id: -319,
					component_based: false,
				},
				{
					name: "minecraft:element_31",
					runtime_id: -42,
					component_based: false,
				},
				{
					name: "minecraft:copper_block",
					runtime_id: -340,
					component_based: false,
				},
				{
					name: "minecraft:stripped_crimson_hyphae",
					runtime_id: -300,
					component_based: false,
				},
				{
					name: "minecraft:netherbrick",
					runtime_id: 529,
					component_based: false,
				},
				{
					name: "minecraft:deadbush",
					runtime_id: 32,
					component_based: false,
				},
				{
					name: "minecraft:black_wool",
					runtime_id: -554,
					component_based: false,
				},
				{
					name: "minecraft:warped_sign",
					runtime_id: 621,
					component_based: false,
				},
				{
					name: "minecraft:sandstone_stairs",
					runtime_id: 128,
					component_based: false,
				},
				{
					name: "minecraft:chainmail_leggings",
					runtime_id: 342,
					component_based: false,
				},
				{
					name: "minecraft:cod_spawn_egg",
					runtime_id: 481,
					component_based: false,
				},
				{
					name: "minecraft:golden_boots",
					runtime_id: 355,
					component_based: false,
				},
				{
					name: "minecraft:bat_spawn_egg",
					runtime_id: 454,
					component_based: false,
				},
				{
					name: "minecraft:lapis_block",
					runtime_id: 22,
					component_based: false,
				},
				{
					name: "minecraft:weathered_double_cut_copper_slab",
					runtime_id: -370,
					component_based: false,
				},
				{
					name: "minecraft:golden_carrot",
					runtime_id: 283,
					component_based: false,
				},
				{
					name: "minecraft:normal_stone_stairs",
					runtime_id: -180,
					component_based: false,
				},
				{
					name: "minecraft:pink_candle_cake",
					runtime_id: -436,
					component_based: false,
				},
				{
					name: "minecraft:water_bucket",
					runtime_id: 363,
					component_based: false,
				},
				{
					name: "minecraft:mossy_cobblestone_stairs",
					runtime_id: -179,
					component_based: false,
				},
				{
					name: "minecraft:golden_axe",
					runtime_id: 326,
					component_based: false,
				},
				{
					name: "minecraft:oak_sign",
					runtime_id: 359,
					component_based: false,
				},
				{
					name: "minecraft:blue_wool",
					runtime_id: -563,
					component_based: false,
				},
				{
					name: "minecraft:mycelium",
					runtime_id: 110,
					component_based: false,
				},
				{
					name: "minecraft:witch_spawn_egg",
					runtime_id: 453,
					component_based: false,
				},
				{
					name: "minecraft:dripstone_block",
					runtime_id: -317,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_chest_boat",
					runtime_id: 649,
					component_based: false,
				},
				{
					name: "minecraft:glowstone_dust",
					runtime_id: 395,
					component_based: false,
				},
				{
					name: "minecraft:wall_sign",
					runtime_id: 68,
					component_based: false,
				},
				{
					name: "minecraft:lit_redstone_ore",
					runtime_id: 74,
					component_based: false,
				},
				{
					name: "minecraft:yellow_wool",
					runtime_id: -558,
					component_based: false,
				},
				{
					name: "minecraft:baked_potato",
					runtime_id: 281,
					component_based: false,
				},
				{
					name: "minecraft:red_glazed_terracotta",
					runtime_id: 234,
					component_based: false,
				},
				{
					name: "minecraft:oxidized_cut_copper_stairs",
					runtime_id: -357,
					component_based: false,
				},
				{
					name: "minecraft:leaves",
					runtime_id: 18,
					component_based: false,
				},
				{
					name: "minecraft:lodestone_compass",
					runtime_id: 608,
					component_based: false,
				},
				{
					name: "minecraft:rabbit_stew",
					runtime_id: 290,
					component_based: false,
				},
				{
					name: "minecraft:netherite_shovel",
					runtime_id: 611,
					component_based: false,
				},
				{
					name: "minecraft:stripped_dark_oak_log",
					runtime_id: -9,
					component_based: false,
				},
				{
					name: "minecraft:cut_copper_slab",
					runtime_id: -361,
					component_based: false,
				},
				{
					name: "minecraft:cave_vines",
					runtime_id: -322,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_wood",
					runtime_id: -497,
					component_based: false,
				},
				{
					name: "minecraft:flint",
					runtime_id: 357,
					component_based: false,
				},
				{
					name: "minecraft:pink_candle",
					runtime_id: -419,
					component_based: false,
				},
				{
					name: "minecraft:villager_spawn_egg",
					runtime_id: 450,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_leaves",
					runtime_id: -472,
					component_based: false,
				},
				{
					name: "minecraft:stone_axe",
					runtime_id: 316,
					component_based: false,
				},
				{
					name: "minecraft:hopper",
					runtime_id: 533,
					component_based: false,
				},
				{
					name: "minecraft:spyglass",
					runtime_id: 631,
					component_based: false,
				},
				{
					name: "minecraft:command_block",
					runtime_id: 137,
					component_based: false,
				},
				{
					name: "minecraft:squid_spawn_egg",
					runtime_id: 451,
					component_based: false,
				},
				{
					name: "minecraft:chiseled_bookshelf",
					runtime_id: -526,
					component_based: false,
				},
				{
					name: "minecraft:yellow_candle_cake",
					runtime_id: -434,
					component_based: false,
				},
				{
					name: "minecraft:element_29",
					runtime_id: -40,
					component_based: false,
				},
				{
					name: "minecraft:moss_block",
					runtime_id: -320,
					component_based: false,
				},
				{
					name: "minecraft:spruce_button",
					runtime_id: -144,
					component_based: false,
				},
				{
					name: "minecraft:element_110",
					runtime_id: -121,
					component_based: false,
				},
				{
					name: "minecraft:cooked_mutton",
					runtime_id: 557,
					component_based: false,
				},
				{
					name: "minecraft:goat_horn",
					runtime_id: 633,
					component_based: false,
				},
				{
					name: "minecraft:light_blue_wool",
					runtime_id: -562,
					component_based: false,
				},
				{
					name: "minecraft:bee_nest",
					runtime_id: -218,
					component_based: false,
				},
				{
					name: "minecraft:cocoa_beans",
					runtime_id: 413,
					component_based: false,
				},
				{
					name: "minecraft:blackstone_wall",
					runtime_id: -277,
					component_based: false,
				},
				{
					name: "minecraft:spider_spawn_egg",
					runtime_id: 447,
					component_based: false,
				},
				{
					name: "minecraft:dropper",
					runtime_id: 125,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_chirp",
					runtime_id: 543,
					component_based: false,
				},
				{
					name: "minecraft:waxed_oxidized_cut_copper_slab",
					runtime_id: -449,
					component_based: false,
				},
				{
					name: "minecraft:endermite_spawn_egg",
					runtime_id: 461,
					component_based: false,
				},
				{
					name: "minecraft:gray_glazed_terracotta",
					runtime_id: 227,
					component_based: false,
				},
				{
					name: "minecraft:fishing_rod",
					runtime_id: 393,
					component_based: false,
				},
				{
					name: "minecraft:stained_glass_pane",
					runtime_id: 160,
					component_based: false,
				},
				{
					name: "minecraft:item.mangrove_door",
					runtime_id: -493,
					component_based: false,
				},
				{
					name: "minecraft:structure_void",
					runtime_id: 217,
					component_based: false,
				},
				{
					name: "minecraft:acacia_wall_sign",
					runtime_id: -191,
					component_based: false,
				},
				{
					name: "minecraft:salmon_spawn_egg",
					runtime_id: 483,
					component_based: false,
				},
				{
					name: "minecraft:white_dye",
					runtime_id: 411,
					component_based: false,
				},
				{
					name: "minecraft:black_glazed_terracotta",
					runtime_id: 235,
					component_based: false,
				},
				{
					name: "minecraft:bread",
					runtime_id: 261,
					component_based: false,
				},
				{
					name: "minecraft:camel_spawn_egg",
					runtime_id: 658,
					component_based: false,
				},
				{
					name: "minecraft:ladder",
					runtime_id: 65,
					component_based: false,
				},
				{
					name: "minecraft:element_81",
					runtime_id: -92,
					component_based: false,
				},
				{
					name: "minecraft:ender_chest",
					runtime_id: 130,
					component_based: false,
				},
				{
					name: "minecraft:iron_axe",
					runtime_id: 299,
					component_based: false,
				},
				{
					name: "minecraft:waxed_weathered_cut_copper_slab",
					runtime_id: -367,
					component_based: false,
				},
				{
					name: "minecraft:chiseled_polished_blackstone",
					runtime_id: -279,
					component_based: false,
				},
				{
					name: "minecraft:strider_spawn_egg",
					runtime_id: 496,
					component_based: false,
				},
				{
					name: "minecraft:smithing_table",
					runtime_id: -202,
					component_based: false,
				},
				{
					name: "minecraft:golden_pickaxe",
					runtime_id: 325,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_13",
					runtime_id: 540,
					component_based: false,
				},
				{
					name: "minecraft:mossy_cobblestone",
					runtime_id: 48,
					component_based: false,
				},
				{
					name: "minecraft:sniffer_spawn_egg",
					runtime_id: 501,
					component_based: false,
				},
				{
					name: "minecraft:pig_spawn_egg",
					runtime_id: 438,
					component_based: false,
				},
				{
					name: "minecraft:coal_ore",
					runtime_id: 16,
					component_based: false,
				},
				{
					name: "minecraft:chest_minecart",
					runtime_id: 390,
					component_based: false,
				},
				{
					name: "minecraft:shulker_box",
					runtime_id: 218,
					component_based: false,
				},
				{
					name: "minecraft:orange_wool",
					runtime_id: -557,
					component_based: false,
				},
				{
					name: "minecraft:element_70",
					runtime_id: -81,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_mall",
					runtime_id: 545,
					component_based: false,
				},
				{
					name: "minecraft:podzol",
					runtime_id: 243,
					component_based: false,
				},
				{
					name: "minecraft:leaves2",
					runtime_id: 161,
					component_based: false,
				},
				{
					name: "minecraft:stone",
					runtime_id: 1,
					component_based: false,
				},
				{
					name: "minecraft:wheat_seeds",
					runtime_id: 291,
					component_based: false,
				},
				{
					name: "minecraft:bed",
					runtime_id: 419,
					component_based: false,
				},
				{
					name: "minecraft:blue_glazed_terracotta",
					runtime_id: 231,
					component_based: false,
				},
				{
					name: "minecraft:chainmail_boots",
					runtime_id: 343,
					component_based: false,
				},
				{
					name: "minecraft:waxed_oxidized_cut_copper_stairs",
					runtime_id: -448,
					component_based: false,
				},
				{
					name: "minecraft:wooden_pressure_plate",
					runtime_id: 72,
					component_based: false,
				},
				{
					name: "minecraft:budding_amethyst",
					runtime_id: -328,
					component_based: false,
				},
				{
					name: "minecraft:pointed_dripstone",
					runtime_id: -308,
					component_based: false,
				},
				{
					name: "minecraft:azalea_leaves_flowered",
					runtime_id: -325,
					component_based: false,
				},
				{
					name: "minecraft:candle_cake",
					runtime_id: -429,
					component_based: false,
				},
				{
					name: "minecraft:weathered_copper",
					runtime_id: -342,
					component_based: false,
				},
				{
					name: "minecraft:element_71",
					runtime_id: -82,
					component_based: false,
				},
				{
					name: "minecraft:frame",
					runtime_id: 519,
					component_based: false,
				},
				{
					name: "minecraft:birch_standing_sign",
					runtime_id: -186,
					component_based: false,
				},
				{
					name: "minecraft:red_flower",
					runtime_id: 38,
					component_based: false,
				},
				{
					name: "minecraft:brown_candle_cake",
					runtime_id: -442,
					component_based: false,
				},
				{
					name: "minecraft:wooden_hoe",
					runtime_id: 330,
					component_based: false,
				},
				{
					name: "minecraft:waterlily",
					runtime_id: 111,
					component_based: false,
				},
				{
					name: "minecraft:warped_wall_sign",
					runtime_id: -253,
					component_based: false,
				},
				{
					name: "minecraft:twisting_vines",
					runtime_id: -287,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_wall_sign",
					runtime_id: -495,
					component_based: false,
				},
				{
					name: "minecraft:tropical_fish_bucket",
					runtime_id: 367,
					component_based: false,
				},
				{
					name: "minecraft:gray_wool",
					runtime_id: -553,
					component_based: false,
				},
				{
					name: "minecraft:sticky_piston_arm_collision",
					runtime_id: -217,
					component_based: false,
				},
				{
					name: "minecraft:element_117",
					runtime_id: -128,
					component_based: false,
				},
				{
					name: "minecraft:fence_gate",
					runtime_id: 107,
					component_based: false,
				},
				{
					name: "minecraft:mob_spawner",
					runtime_id: 52,
					component_based: false,
				},
				{
					name: "minecraft:element_105",
					runtime_id: -116,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_strad",
					runtime_id: 548,
					component_based: false,
				},
				{
					name: "minecraft:small_amethyst_bud",
					runtime_id: -332,
					component_based: false,
				},
				{
					name: "minecraft:orange_candle_cake",
					runtime_id: -431,
					component_based: false,
				},
				{
					name: "minecraft:element_22",
					runtime_id: -33,
					component_based: false,
				},
				{
					name: "minecraft:coal",
					runtime_id: 303,
					component_based: false,
				},
				{
					name: "minecraft:iron_block",
					runtime_id: 42,
					component_based: false,
				},
				{
					name: "minecraft:wood",
					runtime_id: -212,
					component_based: false,
				},
				{
					name: "minecraft:mud",
					runtime_id: -473,
					component_based: false,
				},
				{
					name: "minecraft:item.warped_door",
					runtime_id: -245,
					component_based: false,
				},
				{
					name: "minecraft:tallgrass",
					runtime_id: 31,
					component_based: false,
				},
				{
					name: "minecraft:element_33",
					runtime_id: -44,
					component_based: false,
				},
				{
					name: "minecraft:wool",
					runtime_id: 664,
					component_based: false,
				},
				{
					name: "minecraft:packed_ice",
					runtime_id: 174,
					component_based: false,
				},
				{
					name: "minecraft:silver_glazed_terracotta",
					runtime_id: 228,
					component_based: false,
				},
				{
					name: "minecraft:waxed_exposed_double_cut_copper_slab",
					runtime_id: -373,
					component_based: false,
				},
				{
					name: "minecraft:item.frame",
					runtime_id: 199,
					component_based: false,
				},
				{
					name: "minecraft:firework_rocket",
					runtime_id: 525,
					component_based: false,
				},
				{
					name: "minecraft:splash_potion",
					runtime_id: 567,
					component_based: false,
				},
				{
					name: "minecraft:anvil",
					runtime_id: 145,
					component_based: false,
				},
				{
					name: "minecraft:golden_rail",
					runtime_id: 27,
					component_based: false,
				},
				{
					name: "minecraft:observer",
					runtime_id: 251,
					component_based: false,
				},
				{
					name: "minecraft:cartography_table",
					runtime_id: -200,
					component_based: false,
				},
				{
					name: "minecraft:trident",
					runtime_id: 552,
					component_based: false,
				},
				{
					name: "minecraft:element_82",
					runtime_id: -93,
					component_based: false,
				},
				{
					name: "minecraft:frosted_ice",
					runtime_id: 207,
					component_based: false,
				},
				{
					name: "minecraft:gold_ingot",
					runtime_id: 307,
					component_based: false,
				},
				{
					name: "minecraft:chain_command_block",
					runtime_id: 189,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_wall_sign",
					runtime_id: -519,
					component_based: false,
				},
				{
					name: "minecraft:item.chain",
					runtime_id: -286,
					component_based: false,
				},
				{
					name: "minecraft:warped_pressure_plate",
					runtime_id: -263,
					component_based: false,
				},
				{
					name: "minecraft:lit_smoker",
					runtime_id: -199,
					component_based: false,
				},
				{
					name: "minecraft:carpet",
					runtime_id: 171,
					component_based: false,
				},
				{
					name: "minecraft:warped_stairs",
					runtime_id: -255,
					component_based: false,
				},
				{
					name: "minecraft:element_65",
					runtime_id: -76,
					component_based: false,
				},
				{
					name: "minecraft:slime",
					runtime_id: 165,
					component_based: false,
				},
				{
					name: "minecraft:element_89",
					runtime_id: -100,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_5",
					runtime_id: 642,
					component_based: false,
				},
				{
					name: "minecraft:polished_deepslate_wall",
					runtime_id: -386,
					component_based: false,
				},
				{
					name: "minecraft:item.hopper",
					runtime_id: 154,
					component_based: false,
				},
				{
					name: "minecraft:acacia_pressure_plate",
					runtime_id: -150,
					component_based: false,
				},
				{
					name: "minecraft:frog_spawn_egg",
					runtime_id: 634,
					component_based: false,
				},
				{
					name: "minecraft:moving_block",
					runtime_id: 250,
					component_based: false,
				},
				{
					name: "minecraft:acacia_fence_gate",
					runtime_id: 187,
					component_based: false,
				},
				{
					name: "minecraft:noteblock",
					runtime_id: 25,
					component_based: false,
				},
				{
					name: "minecraft:waxed_exposed_cut_copper_slab",
					runtime_id: -366,
					component_based: false,
				},
				{
					name: "minecraft:element_63",
					runtime_id: -74,
					component_based: false,
				},
				{
					name: "minecraft:experience_bottle",
					runtime_id: 514,
					component_based: false,
				},
				{
					name: "minecraft:brewing_stand",
					runtime_id: 432,
					component_based: false,
				},
				{
					name: "minecraft:tinted_glass",
					runtime_id: -334,
					component_based: false,
				},
				{
					name: "minecraft:element_68",
					runtime_id: -79,
					component_based: false,
				},
				{
					name: "minecraft:potato",
					runtime_id: 280,
					component_based: false,
				},
				{
					name: "minecraft:jungle_hanging_sign",
					runtime_id: -503,
					component_based: false,
				},
				{
					name: "minecraft:element_67",
					runtime_id: -78,
					component_based: false,
				},
				{
					name: "minecraft:sea_lantern",
					runtime_id: 169,
					component_based: false,
				},
				{
					name: "minecraft:redstone_ore",
					runtime_id: 73,
					component_based: false,
				},
				{
					name: "minecraft:polished_basalt",
					runtime_id: -235,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_chest_boat",
					runtime_id: 650,
					component_based: false,
				},
				{
					name: "minecraft:magenta_candle",
					runtime_id: -415,
					component_based: false,
				},
				{
					name: "minecraft:filled_map",
					runtime_id: 421,
					component_based: false,
				},
				{
					name: "minecraft:element_41",
					runtime_id: -52,
					component_based: false,
				},
				{
					name: "minecraft:chain",
					runtime_id: 625,
					component_based: false,
				},
				{
					name: "minecraft:axolotl_bucket",
					runtime_id: 370,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_raft",
					runtime_id: 656,
					component_based: false,
				},
				{
					name: "minecraft:magenta_wool",
					runtime_id: -565,
					component_based: false,
				},
				{
					name: "minecraft:element_43",
					runtime_id: -54,
					component_based: false,
				},
				{
					name: "minecraft:hard_stained_glass",
					runtime_id: 254,
					component_based: false,
				},
				{
					name: "minecraft:leather",
					runtime_id: 382,
					component_based: false,
				},
				{
					name: "minecraft:flower_banner_pattern",
					runtime_id: 587,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_button",
					runtime_id: -487,
					component_based: false,
				},
				{
					name: "minecraft:cooked_beef",
					runtime_id: 274,
					component_based: false,
				},
				{
					name: "minecraft:enchanting_table",
					runtime_id: 116,
					component_based: false,
				},
				{
					name: "minecraft:magma_cream",
					runtime_id: 431,
					component_based: false,
				},
				{
					name: "minecraft:item.beetroot",
					runtime_id: 244,
					component_based: false,
				},
				{
					name: "minecraft:ravager_spawn_egg",
					runtime_id: 494,
					component_based: false,
				},
				{
					name: "minecraft:element_85",
					runtime_id: -96,
					component_based: false,
				},
				{
					name: "minecraft:barrel",
					runtime_id: -203,
					component_based: false,
				},
				{
					name: "minecraft:mud_bricks",
					runtime_id: -475,
					component_based: false,
				},
				{
					name: "minecraft:sugar_cane",
					runtime_id: 386,
					component_based: false,
				},
				{
					name: "minecraft:yellow_flower",
					runtime_id: 37,
					component_based: false,
				},
				{
					name: "minecraft:element_46",
					runtime_id: -57,
					component_based: false,
				},
				{
					name: "minecraft:cobbled_deepslate",
					runtime_id: -379,
					component_based: false,
				},
				{
					name: "minecraft:black_dye",
					runtime_id: 396,
					component_based: false,
				},
				{
					name: "minecraft:wooden_button",
					runtime_id: 143,
					component_based: false,
				},
				{
					name: "minecraft:sponge",
					runtime_id: 19,
					component_based: false,
				},
				{
					name: "minecraft:snow_layer",
					runtime_id: 78,
					component_based: false,
				},
				{
					name: "minecraft:flowering_azalea",
					runtime_id: -338,
					component_based: false,
				},
				{
					name: "minecraft:grass",
					runtime_id: 2,
					component_based: false,
				},
				{
					name: "minecraft:element_21",
					runtime_id: -32,
					component_based: false,
				},
				{
					name: "minecraft:polished_andesite_stairs",
					runtime_id: -174,
					component_based: false,
				},
				{
					name: "minecraft:element_118",
					runtime_id: -129,
					component_based: false,
				},
				{
					name: "minecraft:stone_stairs",
					runtime_id: 67,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_tile_stairs",
					runtime_id: -389,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_coal_ore",
					runtime_id: -406,
					component_based: false,
				},
				{
					name: "minecraft:element_83",
					runtime_id: -94,
					component_based: false,
				},
				{
					name: "minecraft:glass_pane",
					runtime_id: 102,
					component_based: false,
				},
				{
					name: "minecraft:element_87",
					runtime_id: -98,
					component_based: false,
				},
				{
					name: "minecraft:fence",
					runtime_id: 85,
					component_based: false,
				},
				{
					name: "minecraft:warped_stem",
					runtime_id: -226,
					component_based: false,
				},
				{
					name: "minecraft:stray_spawn_egg",
					runtime_id: 463,
					component_based: false,
				},
				{
					name: "minecraft:painting",
					runtime_id: 358,
					component_based: false,
				},
				{
					name: "minecraft:orange_candle",
					runtime_id: -414,
					component_based: false,
				},
				{
					name: "minecraft:nether_brick_stairs",
					runtime_id: 114,
					component_based: false,
				},
				{
					name: "minecraft:hardened_clay",
					runtime_id: 172,
					component_based: false,
				},
				{
					name: "minecraft:tropical_fish",
					runtime_id: 266,
					component_based: false,
				},
				{
					name: "minecraft:spawn_egg",
					runtime_id: 668,
					component_based: false,
				},
				{
					name: "minecraft:bee_spawn_egg",
					runtime_id: 495,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_standing_sign",
					runtime_id: -494,
					component_based: false,
				},
				{
					name: "minecraft:wooden_pickaxe",
					runtime_id: 311,
					component_based: false,
				},
				{
					name: "minecraft:sweet_berry_bush",
					runtime_id: -207,
					component_based: false,
				},
				{
					name: "minecraft:slime_ball",
					runtime_id: 389,
					component_based: false,
				},
				{
					name: "minecraft:coral_fan",
					runtime_id: -133,
					component_based: false,
				},
				{
					name: "minecraft:sculk_vein",
					runtime_id: -459,
					component_based: false,
				},
				{
					name: "minecraft:mule_spawn_egg",
					runtime_id: 467,
					component_based: false,
				},
				{
					name: "minecraft:lapis_ore",
					runtime_id: 21,
					component_based: false,
				},
				{
					name: "minecraft:furnace",
					runtime_id: 61,
					component_based: false,
				},
				{
					name: "minecraft:glowstone",
					runtime_id: 89,
					component_based: false,
				},
				{
					name: "minecraft:nautilus_shell",
					runtime_id: 576,
					component_based: false,
				},
				{
					name: "minecraft:element_111",
					runtime_id: -122,
					component_based: false,
				},
				{
					name: "minecraft:cut_copper_stairs",
					runtime_id: -354,
					component_based: false,
				},
				{
					name: "minecraft:log",
					runtime_id: 17,
					component_based: false,
				},
				{
					name: "minecraft:item.spruce_door",
					runtime_id: 193,
					component_based: false,
				},
				{
					name: "minecraft:element_115",
					runtime_id: -126,
					component_based: false,
				},
				{
					name: "minecraft:brick_stairs",
					runtime_id: 108,
					component_based: false,
				},
				{
					name: "minecraft:armor_stand",
					runtime_id: 558,
					component_based: false,
				},
				{
					name: "minecraft:colored_torch_bp",
					runtime_id: 204,
					component_based: false,
				},
				{
					name: "minecraft:compound",
					runtime_id: 600,
					component_based: false,
				},
				{
					name: "minecraft:stripped_warped_hyphae",
					runtime_id: -301,
					component_based: false,
				},
				{
					name: "minecraft:crimson_slab",
					runtime_id: -264,
					component_based: false,
				},
				{
					name: "minecraft:string",
					runtime_id: 327,
					component_based: false,
				},
				{
					name: "minecraft:slime_spawn_egg",
					runtime_id: 446,
					component_based: false,
				},
				{
					name: "minecraft:jungle_sign",
					runtime_id: 584,
					component_based: false,
				},
				{
					name: "minecraft:potion",
					runtime_id: 427,
					component_based: false,
				},
				{
					name: "minecraft:pufferfish_bucket",
					runtime_id: 368,
					component_based: false,
				},
				{
					name: "minecraft:panda_spawn_egg",
					runtime_id: 490,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_wait",
					runtime_id: 551,
					component_based: false,
				},
				{
					name: "minecraft:npc_spawn_egg",
					runtime_id: 471,
					component_based: false,
				},
				{
					name: "minecraft:wither_spawn_egg",
					runtime_id: 508,
					component_based: false,
				},
				{
					name: "minecraft:glow_berries",
					runtime_id: 670,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_mellohi",
					runtime_id: 546,
					component_based: false,
				},
				{
					name: "geysermc:furnace_minecart",
					runtime_id: 671,
					component_based: true,
				},
				{
					name: "minecraft:crimson_fence",
					runtime_id: -256,
					component_based: false,
				},
				{
					name: "minecraft:iron_bars",
					runtime_id: 101,
					component_based: false,
				},
				{
					name: "minecraft:blackstone_double_slab",
					runtime_id: -283,
					component_based: false,
				},
				{
					name: "minecraft:warped_door",
					runtime_id: 623,
					component_based: false,
				},
				{
					name: "minecraft:jungle_chest_boat",
					runtime_id: 646,
					component_based: false,
				},
				{
					name: "minecraft:iron_leggings",
					runtime_id: 346,
					component_based: false,
				},
				{
					name: "minecraft:rabbit_foot",
					runtime_id: 534,
					component_based: false,
				},
				{
					name: "minecraft:undyed_shulker_box",
					runtime_id: 205,
					component_based: false,
				},
				{
					name: "minecraft:emerald",
					runtime_id: 518,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_ward",
					runtime_id: 549,
					component_based: false,
				},
				{
					name: "minecraft:skeleton_horse_spawn_egg",
					runtime_id: 468,
					component_based: false,
				},
				{
					name: "minecraft:waxed_cut_copper",
					runtime_id: -351,
					component_based: false,
				},
				{
					name: "minecraft:element_61",
					runtime_id: -72,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_roots",
					runtime_id: -482,
					component_based: false,
				},
				{
					name: "minecraft:netherite_chestplate",
					runtime_id: 616,
					component_based: false,
				},
				{
					name: "minecraft:tripwire_hook",
					runtime_id: 131,
					component_based: false,
				},
				{
					name: "minecraft:stone_shovel",
					runtime_id: 314,
					component_based: false,
				},
				{
					name: "minecraft:item.wooden_door",
					runtime_id: 64,
					component_based: false,
				},
				{
					name: "minecraft:rabbit",
					runtime_id: 288,
					component_based: false,
				},
				{
					name: "minecraft:double_stone_block_slab2",
					runtime_id: 181,
					component_based: false,
				},
				{
					name: "minecraft:element_24",
					runtime_id: -35,
					component_based: false,
				},
				{
					name: "minecraft:birch_hanging_sign",
					runtime_id: -502,
					component_based: false,
				},
				{
					name: "minecraft:chest",
					runtime_id: 54,
					component_based: false,
				},
				{
					name: "minecraft:stained_glass",
					runtime_id: 241,
					component_based: false,
				},
				{
					name: "minecraft:rabbit_spawn_egg",
					runtime_id: 460,
					component_based: false,
				},
				{
					name: "minecraft:birch_sign",
					runtime_id: 583,
					component_based: false,
				},
				{
					name: "minecraft:emerald_ore",
					runtime_id: 129,
					component_based: false,
				},
				{
					name: "minecraft:lit_deepslate_redstone_ore",
					runtime_id: -404,
					component_based: false,
				},
				{
					name: "minecraft:element_28",
					runtime_id: -39,
					component_based: false,
				},
				{
					name: "minecraft:brown_mushroom",
					runtime_id: 39,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_copper_ore",
					runtime_id: -408,
					component_based: false,
				},
				{
					name: "minecraft:exposed_cut_copper_stairs",
					runtime_id: -355,
					component_based: false,
				},
				{
					name: "minecraft:smooth_basalt",
					runtime_id: -377,
					component_based: false,
				},
				{
					name: "minecraft:red_sandstone_stairs",
					runtime_id: 180,
					component_based: false,
				},
				{
					name: "minecraft:waxed_weathered_cut_copper_stairs",
					runtime_id: -360,
					component_based: false,
				},
				{
					name: "minecraft:beetroot",
					runtime_id: 285,
					component_based: false,
				},
				{
					name: "minecraft:bedrock",
					runtime_id: 7,
					component_based: false,
				},
				{
					name: "minecraft:item.nether_sprouts",
					runtime_id: -238,
					component_based: false,
				},
				{
					name: "minecraft:element_80",
					runtime_id: -91,
					component_based: false,
				},
				{
					name: "minecraft:ocelot_spawn_egg",
					runtime_id: 452,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_brick_double_slab",
					runtime_id: -399,
					component_based: false,
				},
				{
					name: "minecraft:darkoak_standing_sign",
					runtime_id: -192,
					component_based: false,
				},
				{
					name: "minecraft:cooked_cod",
					runtime_id: 268,
					component_based: false,
				},
				{
					name: "minecraft:melon_slice",
					runtime_id: 272,
					component_based: false,
				},
				{
					name: "minecraft:jungle_button",
					runtime_id: -143,
					component_based: false,
				},
				{
					name: "minecraft:stripped_acacia_log",
					runtime_id: -8,
					component_based: false,
				},
				{
					name: "minecraft:item.kelp",
					runtime_id: -138,
					component_based: false,
				},
				{
					name: "minecraft:dirt_with_roots",
					runtime_id: -318,
					component_based: false,
				},
				{
					name: "minecraft:banner",
					runtime_id: 573,
					component_based: false,
				},
				{
					name: "minecraft:stripped_bamboo_block",
					runtime_id: -528,
					component_based: false,
				},
				{
					name: "minecraft:scute",
					runtime_id: 578,
					component_based: false,
				},
				{
					name: "minecraft:clock",
					runtime_id: 394,
					component_based: false,
				},
				{
					name: "minecraft:chainmail_helmet",
					runtime_id: 340,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_stairs",
					runtime_id: -512,
					component_based: false,
				},
				{
					name: "minecraft:acacia_door",
					runtime_id: 562,
					component_based: false,
				},
				{
					name: "minecraft:redstone",
					runtime_id: 374,
					component_based: false,
				},
				{
					name: "minecraft:border_block",
					runtime_id: 212,
					component_based: false,
				},
				{
					name: "minecraft:dirt",
					runtime_id: 3,
					component_based: false,
				},
				{
					name: "minecraft:double_cut_copper_slab",
					runtime_id: -368,
					component_based: false,
				},
				{
					name: "minecraft:glow_stick",
					runtime_id: 607,
					component_based: false,
				},
				{
					name: "minecraft:elytra",
					runtime_id: 570,
					component_based: false,
				},
				{
					name: "minecraft:chorus_fruit",
					runtime_id: 564,
					component_based: false,
				},
				{
					name: "minecraft:netherite_leggings",
					runtime_id: 617,
					component_based: false,
				},
				{
					name: "minecraft:hopper_minecart",
					runtime_id: 532,
					component_based: false,
				},
				{
					name: "minecraft:llama_spawn_egg",
					runtime_id: 474,
					component_based: false,
				},
				{
					name: "minecraft:dragon_egg",
					runtime_id: 122,
					component_based: false,
				},
				{
					name: "minecraft:waxed_cut_copper_stairs",
					runtime_id: -358,
					component_based: false,
				},
				{
					name: "minecraft:water",
					runtime_id: 9,
					component_based: false,
				},
				{
					name: "minecraft:fox_spawn_egg",
					runtime_id: 491,
					component_based: false,
				},
				{
					name: "minecraft:target",
					runtime_id: -239,
					component_based: false,
				},
				{
					name: "minecraft:jungle_pressure_plate",
					runtime_id: -153,
					component_based: false,
				},
				{
					name: "minecraft:camera",
					runtime_id: 599,
					component_based: false,
				},
				{
					name: "minecraft:red_dye",
					runtime_id: 397,
					component_based: false,
				},
				{
					name: "minecraft:purple_wool",
					runtime_id: -564,
					component_based: false,
				},
				{
					name: "minecraft:end_stone",
					runtime_id: 121,
					component_based: false,
				},
				{
					name: "minecraft:paper",
					runtime_id: 387,
					component_based: false,
				},
				{
					name: "minecraft:item.soul_campfire",
					runtime_id: -290,
					component_based: false,
				},
				{
					name: "minecraft:iron_nugget",
					runtime_id: 575,
					component_based: false,
				},
				{
					name: "minecraft:wandering_trader_spawn_egg",
					runtime_id: 493,
					component_based: false,
				},
				{
					name: "minecraft:leather_leggings",
					runtime_id: 338,
					component_based: false,
				},
				{
					name: "minecraft:hoglin_spawn_egg",
					runtime_id: 497,
					component_based: false,
				},
				{
					name: "minecraft:element_6",
					runtime_id: -17,
					component_based: false,
				},
				{
					name: "minecraft:creeper_spawn_egg",
					runtime_id: 442,
					component_based: false,
				},
				{
					name: "minecraft:golden_apple",
					runtime_id: 258,
					component_based: false,
				},
				{
					name: "minecraft:flowing_water",
					runtime_id: 8,
					component_based: false,
				},
				{
					name: "minecraft:mutton",
					runtime_id: 556,
					component_based: false,
				},
				{
					name: "minecraft:iron_sword",
					runtime_id: 308,
					component_based: false,
				},
				{
					name: "minecraft:soul_soil",
					runtime_id: -236,
					component_based: false,
				},
				{
					name: "minecraft:item.jungle_door",
					runtime_id: 195,
					component_based: false,
				},
				{
					name: "minecraft:amethyst_block",
					runtime_id: -327,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_mosaic_slab",
					runtime_id: -524,
					component_based: false,
				},
				{
					name: "minecraft:carrots",
					runtime_id: 141,
					component_based: false,
				},
				{
					name: "minecraft:crimson_fungus",
					runtime_id: -228,
					component_based: false,
				},
				{
					name: "minecraft:purpur_stairs",
					runtime_id: 203,
					component_based: false,
				},
				{
					name: "minecraft:item.dark_oak_door",
					runtime_id: 197,
					component_based: false,
				},
				{
					name: "minecraft:polar_bear_spawn_egg",
					runtime_id: 473,
					component_based: false,
				},
				{
					name: "minecraft:double_wooden_slab",
					runtime_id: 157,
					component_based: false,
				},
				{
					name: "minecraft:nether_gold_ore",
					runtime_id: -288,
					component_based: false,
				},
				{
					name: "minecraft:cocoa",
					runtime_id: 127,
					component_based: false,
				},
				{
					name: "minecraft:cooked_chicken",
					runtime_id: 276,
					component_based: false,
				},
				{
					name: "minecraft:iron_golem_spawn_egg",
					runtime_id: 505,
					component_based: false,
				},
				{
					name: "minecraft:crimson_button",
					runtime_id: -260,
					component_based: false,
				},
				{
					name: "minecraft:wooden_slab",
					runtime_id: 158,
					component_based: false,
				},
				{
					name: "minecraft:drowned_spawn_egg",
					runtime_id: 484,
					component_based: false,
				},
				{
					name: "minecraft:light_weighted_pressure_plate",
					runtime_id: 147,
					component_based: false,
				},
				{
					name: "minecraft:phantom_membrane",
					runtime_id: 580,
					component_based: false,
				},
				{
					name: "minecraft:netherite_pickaxe",
					runtime_id: 612,
					component_based: false,
				},
				{
					name: "minecraft:spruce_stairs",
					runtime_id: 134,
					component_based: false,
				},
				{
					name: "minecraft:prismarine_bricks_stairs",
					runtime_id: -4,
					component_based: false,
				},
				{
					name: "minecraft:copper_ore",
					runtime_id: -311,
					component_based: false,
				},
				{
					name: "minecraft:bell",
					runtime_id: -206,
					component_based: false,
				},
				{
					name: "minecraft:item.iron_door",
					runtime_id: 71,
					component_based: false,
				},
				{
					name: "minecraft:stained_hardened_clay",
					runtime_id: 159,
					component_based: false,
				},
				{
					name: "minecraft:sandstone",
					runtime_id: 24,
					component_based: false,
				},
				{
					name: "minecraft:daylight_detector",
					runtime_id: 151,
					component_based: false,
				},
				{
					name: "minecraft:light_blue_glazed_terracotta",
					runtime_id: 223,
					component_based: false,
				},
				{
					name: "minecraft:white_wool",
					runtime_id: 35,
					component_based: false,
				},
				{
					name: "minecraft:torchflower_seeds",
					runtime_id: 296,
					component_based: false,
				},
				{
					name: "minecraft:element_113",
					runtime_id: -124,
					component_based: false,
				},
				{
					name: "minecraft:exposed_double_cut_copper_slab",
					runtime_id: -369,
					component_based: false,
				},
				{
					name: "minecraft:item.cake",
					runtime_id: 92,
					component_based: false,
				},
				{
					name: "minecraft:mud_brick_slab",
					runtime_id: -478,
					component_based: false,
				},
				{
					name: "minecraft:fire",
					runtime_id: 51,
					component_based: false,
				},
				{
					name: "minecraft:shears",
					runtime_id: 422,
					component_based: false,
				},
				{
					name: "minecraft:element_26",
					runtime_id: -37,
					component_based: false,
				},
				{
					name: "minecraft:ender_pearl",
					runtime_id: 423,
					component_based: false,
				},
				{
					name: "minecraft:oak_hanging_sign",
					runtime_id: -500,
					component_based: false,
				},
				{
					name: "minecraft:iron_hoe",
					runtime_id: 332,
					component_based: false,
				},
				{
					name: "minecraft:element_102",
					runtime_id: -113,
					component_based: false,
				},
				{
					name: "minecraft:golden_helmet",
					runtime_id: 352,
					component_based: false,
				},
				{
					name: "minecraft:item.camera",
					runtime_id: 242,
					component_based: false,
				},
				{
					name: "minecraft:spore_blossom",
					runtime_id: -321,
					component_based: false,
				},
				{
					name: "minecraft:granite_stairs",
					runtime_id: -169,
					component_based: false,
				},
				{
					name: "minecraft:weathered_cut_copper_stairs",
					runtime_id: -356,
					component_based: false,
				},
				{
					name: "minecraft:bordure_indented_banner_pattern",
					runtime_id: 592,
					component_based: false,
				},
				{
					name: "minecraft:waxed_exposed_cut_copper",
					runtime_id: -352,
					component_based: false,
				},
				{
					name: "minecraft:sculk",
					runtime_id: -458,
					component_based: false,
				},
				{
					name: "minecraft:wither_skeleton_spawn_egg",
					runtime_id: 465,
					component_based: false,
				},
				{
					name: "minecraft:element_37",
					runtime_id: -48,
					component_based: false,
				},
				{
					name: "minecraft:sparkler",
					runtime_id: 606,
					component_based: false,
				},
				{
					name: "minecraft:loom",
					runtime_id: -204,
					component_based: false,
				},
				{
					name: "minecraft:netherite_block",
					runtime_id: -270,
					component_based: false,
				},
				{
					name: "minecraft:blue_ice",
					runtime_id: -11,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_button",
					runtime_id: -296,
					component_based: false,
				},
				{
					name: "minecraft:brown_wool",
					runtime_id: -555,
					component_based: false,
				},
				{
					name: "minecraft:iron_chestplate",
					runtime_id: 345,
					component_based: false,
				},
				{
					name: "minecraft:mud_brick_double_slab",
					runtime_id: -479,
					component_based: false,
				},
				{
					name: "minecraft:element_48",
					runtime_id: -59,
					component_based: false,
				},
				{
					name: "minecraft:command_block_minecart",
					runtime_id: 569,
					component_based: false,
				},
				{
					name: "minecraft:milk_bucket",
					runtime_id: 362,
					component_based: false,
				},
				{
					name: "minecraft:green_glazed_terracotta",
					runtime_id: 233,
					component_based: false,
				},
				{
					name: "minecraft:vindicator_spawn_egg",
					runtime_id: 475,
					component_based: false,
				},
				{
					name: "minecraft:element_15",
					runtime_id: -26,
					component_based: false,
				},
				{
					name: "minecraft:cyan_wool",
					runtime_id: -561,
					component_based: false,
				},
				{
					name: "minecraft:decorated_pot",
					runtime_id: -551,
					component_based: false,
				},
				{
					name: "minecraft:red_candle_cake",
					runtime_id: -444,
					component_based: false,
				},
				{
					name: "minecraft:evoker_spawn_egg",
					runtime_id: 476,
					component_based: false,
				},
				{
					name: "minecraft:soul_lantern",
					runtime_id: -269,
					component_based: false,
				},
				{
					name: "minecraft:diamond_boots",
					runtime_id: 351,
					component_based: false,
				},
				{
					name: "minecraft:deepslate",
					runtime_id: -378,
					component_based: false,
				},
				{
					name: "minecraft:cow_spawn_egg",
					runtime_id: 437,
					component_based: false,
				},
				{
					name: "minecraft:diamond_axe",
					runtime_id: 320,
					component_based: false,
				},
				{
					name: "minecraft:clay",
					runtime_id: 82,
					component_based: false,
				},
				{
					name: "minecraft:torchflower",
					runtime_id: -568,
					component_based: false,
				},
				{
					name: "minecraft:repeater",
					runtime_id: 420,
					component_based: false,
				},
				{
					name: "minecraft:nether_brick_fence",
					runtime_id: 113,
					component_based: false,
				},
				{
					name: "minecraft:chicken",
					runtime_id: 275,
					component_based: false,
				},
				{
					name: "minecraft:bamboo",
					runtime_id: -163,
					component_based: false,
				},
				{
					name: "minecraft:green_candle",
					runtime_id: -426,
					component_based: false,
				},
				{
					name: "minecraft:cat_spawn_egg",
					runtime_id: 489,
					component_based: false,
				},
				{
					name: "minecraft:hard_stained_glass_pane",
					runtime_id: 191,
					component_based: false,
				},
				{
					name: "minecraft:stone_pickaxe",
					runtime_id: 315,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_cat",
					runtime_id: 541,
					component_based: false,
				},
				{
					name: "minecraft:crimson_hanging_sign",
					runtime_id: -506,
					component_based: false,
				},
				{
					name: "minecraft:cyan_glazed_terracotta",
					runtime_id: 229,
					component_based: false,
				},
				{
					name: "minecraft:golden_leggings",
					runtime_id: 354,
					component_based: false,
				},
				{
					name: "minecraft:amethyst_shard",
					runtime_id: 630,
					component_based: false,
				},
				{
					name: "minecraft:melon_seeds",
					runtime_id: 293,
					component_based: false,
				},
				{
					name: "minecraft:bone_block",
					runtime_id: 216,
					component_based: false,
				},
				{
					name: "minecraft:element_52",
					runtime_id: -63,
					component_based: false,
				},
				{
					name: "minecraft:apple",
					runtime_id: 257,
					component_based: false,
				},
				{
					name: "minecraft:coral",
					runtime_id: -131,
					component_based: false,
				},
				{
					name: "minecraft:stonecutter_block",
					runtime_id: -197,
					component_based: false,
				},
				{
					name: "minecraft:minecart",
					runtime_id: 371,
					component_based: false,
				},
				{
					name: "minecraft:stone_block_slab4",
					runtime_id: -166,
					component_based: false,
				},
				{
					name: "minecraft:netherite_helmet",
					runtime_id: 615,
					component_based: false,
				},
				{
					name: "minecraft:cave_spider_spawn_egg",
					runtime_id: 458,
					component_based: false,
				},
				{
					name: "minecraft:medium_amethyst_bud",
					runtime_id: -331,
					component_based: false,
				},
				{
					name: "minecraft:cut_copper",
					runtime_id: -347,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_iron_ore",
					runtime_id: -401,
					component_based: false,
				},
				{
					name: "minecraft:client_request_placeholder_block",
					runtime_id: -465,
					component_based: false,
				},
				{
					name: "minecraft:green_wool",
					runtime_id: -560,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_double_slab",
					runtime_id: -499,
					component_based: false,
				},
				{
					name: "minecraft:element_53",
					runtime_id: -64,
					component_based: false,
				},
				{
					name: "minecraft:crimson_wall_sign",
					runtime_id: -252,
					component_based: false,
				},
				{
					name: "minecraft:iron_helmet",
					runtime_id: 344,
					component_based: false,
				},
				{
					name: "minecraft:wooden_door",
					runtime_id: 360,
					component_based: false,
				},
				{
					name: "minecraft:raw_iron_block",
					runtime_id: -451,
					component_based: false,
				},
				{
					name: "minecraft:rail",
					runtime_id: 66,
					component_based: false,
				},
				{
					name: "minecraft:quartz_stairs",
					runtime_id: 156,
					component_based: false,
				},
				{
					name: "minecraft:firework_star",
					runtime_id: 526,
					component_based: false,
				},
				{
					name: "minecraft:magma_cube_spawn_egg",
					runtime_id: 456,
					component_based: false,
				},
				{
					name: "minecraft:birch_wall_sign",
					runtime_id: -187,
					component_based: false,
				},
				{
					name: "minecraft:spruce_wall_sign",
					runtime_id: -182,
					component_based: false,
				},
				{
					name: "minecraft:redstone_torch",
					runtime_id: 76,
					component_based: false,
				},
				{
					name: "minecraft:cyan_dye",
					runtime_id: 402,
					component_based: false,
				},
				{
					name: "minecraft:blaze_powder",
					runtime_id: 430,
					component_based: false,
				},
				{
					name: "minecraft:stripped_warped_stem",
					runtime_id: -241,
					component_based: false,
				},
				{
					name: "minecraft:smooth_stone",
					runtime_id: -183,
					component_based: false,
				},
				{
					name: "minecraft:soul_sand",
					runtime_id: 88,
					component_based: false,
				},
				{
					name: "minecraft:waxed_oxidized_copper",
					runtime_id: -446,
					component_based: false,
				},
				{
					name: "minecraft:iron_ore",
					runtime_id: 15,
					component_based: false,
				},
				{
					name: "minecraft:packed_mud",
					runtime_id: -477,
					component_based: false,
				},
				{
					name: "minecraft:lime_candle_cake",
					runtime_id: -435,
					component_based: false,
				},
				{
					name: "minecraft:polished_deepslate",
					runtime_id: -383,
					component_based: false,
				},
				{
					name: "minecraft:amethyst_cluster",
					runtime_id: -329,
					component_based: false,
				},
				{
					name: "minecraft:portal",
					runtime_id: 90,
					component_based: false,
				},
				{
					name: "minecraft:element_98",
					runtime_id: -109,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_diamond_ore",
					runtime_id: -405,
					component_based: false,
				},
				{
					name: "minecraft:sculk_catalyst",
					runtime_id: -460,
					component_based: false,
				},
				{
					name: "minecraft:element_99",
					runtime_id: -110,
					component_based: false,
				},
				{
					name: "minecraft:rotten_flesh",
					runtime_id: 277,
					component_based: false,
				},
				{
					name: "minecraft:basalt",
					runtime_id: -234,
					component_based: false,
				},
				{
					name: "minecraft:mooshroom_spawn_egg",
					runtime_id: 441,
					component_based: false,
				},
				{
					name: "minecraft:yellow_candle",
					runtime_id: -417,
					component_based: false,
				},
				{
					name: "minecraft:item.reeds",
					runtime_id: 83,
					component_based: false,
				},
				{
					name: "minecraft:item.skull",
					runtime_id: 144,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_mosaic_double_slab",
					runtime_id: -525,
					component_based: false,
				},
				{
					name: "minecraft:rabbit_hide",
					runtime_id: 535,
					component_based: false,
				},
				{
					name: "minecraft:yellow_dye",
					runtime_id: 407,
					component_based: false,
				},
				{
					name: "minecraft:structure_block",
					runtime_id: 252,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_standing_sign",
					runtime_id: -518,
					component_based: false,
				},
				{
					name: "minecraft:activator_rail",
					runtime_id: 126,
					component_based: false,
				},
				{
					name: "minecraft:iron_horse_armor",
					runtime_id: 537,
					component_based: false,
				},
				{
					name: "minecraft:stripped_oak_log",
					runtime_id: -10,
					component_based: false,
				},
				{
					name: "minecraft:honeycomb",
					runtime_id: 597,
					component_based: false,
				},
				{
					name: "minecraft:oxidized_cut_copper",
					runtime_id: -350,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_tile_slab",
					runtime_id: -388,
					component_based: false,
				},
				{
					name: "minecraft:acacia_button",
					runtime_id: -140,
					component_based: false,
				},
				{
					name: "minecraft:cobbled_deepslate_wall",
					runtime_id: -382,
					component_based: false,
				},
				{
					name: "minecraft:light_blue_dye",
					runtime_id: 408,
					component_based: false,
				},
				{
					name: "minecraft:element_0",
					runtime_id: 36,
					component_based: false,
				},
				{
					name: "minecraft:mud_brick_wall",
					runtime_id: -481,
					component_based: false,
				},
				{
					name: "minecraft:magenta_glazed_terracotta",
					runtime_id: 222,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_otherside",
					runtime_id: 632,
					component_based: false,
				},
				{
					name: "minecraft:dragon_breath",
					runtime_id: 566,
					component_based: false,
				},
				{
					name: "minecraft:end_portal_frame",
					runtime_id: 120,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_propagule",
					runtime_id: -474,
					component_based: false,
				},
				{
					name: "minecraft:flint_and_steel",
					runtime_id: 300,
					component_based: false,
				},
				{
					name: "minecraft:tnt_minecart",
					runtime_id: 531,
					component_based: false,
				},
				{
					name: "minecraft:pumpkin_seeds",
					runtime_id: 292,
					component_based: false,
				},
				{
					name: "minecraft:allay_spawn_egg",
					runtime_id: 637,
					component_based: false,
				},
				{
					name: "minecraft:element_51",
					runtime_id: -62,
					component_based: false,
				},
				{
					name: "minecraft:light_gray_candle",
					runtime_id: -421,
					component_based: false,
				},
				{
					name: "minecraft:snow",
					runtime_id: 80,
					component_based: false,
				},
				{
					name: "minecraft:weeping_vines",
					runtime_id: -231,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_double_slab",
					runtime_id: -294,
					component_based: false,
				},
				{
					name: "minecraft:grindstone",
					runtime_id: -195,
					component_based: false,
				},
				{
					name: "minecraft:pink_wool",
					runtime_id: -566,
					component_based: false,
				},
				{
					name: "minecraft:stonecutter",
					runtime_id: 245,
					component_based: false,
				},
				{
					name: "minecraft:nether_brick",
					runtime_id: 112,
					component_based: false,
				},
				{
					name: "minecraft:frog_spawn",
					runtime_id: -468,
					component_based: false,
				},
				{
					name: "minecraft:element_57",
					runtime_id: -68,
					component_based: false,
				},
				{
					name: "minecraft:element_55",
					runtime_id: -66,
					component_based: false,
				},
				{
					name: "minecraft:hard_glass",
					runtime_id: 253,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_fence",
					runtime_id: -491,
					component_based: false,
				},
				{
					name: "minecraft:element_59",
					runtime_id: -70,
					component_based: false,
				},
				{
					name: "minecraft:golden_horse_armor",
					runtime_id: 538,
					component_based: false,
				},
				{
					name: "minecraft:comparator",
					runtime_id: 528,
					component_based: false,
				},
				{
					name: "minecraft:candle",
					runtime_id: -412,
					component_based: false,
				},
				{
					name: "minecraft:pearlescent_froglight",
					runtime_id: -469,
					component_based: false,
				},
				{
					name: "minecraft:iron_boots",
					runtime_id: 347,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_trapdoor",
					runtime_id: -496,
					component_based: false,
				},
				{
					name: "minecraft:weathered_cut_copper",
					runtime_id: -349,
					component_based: false,
				},
				{
					name: "minecraft:leather_horse_armor",
					runtime_id: 536,
					component_based: false,
				},
				{
					name: "minecraft:element_3",
					runtime_id: -14,
					component_based: false,
				},
				{
					name: "minecraft:zombie_spawn_egg",
					runtime_id: 448,
					component_based: false,
				},
				{
					name: "minecraft:gravel",
					runtime_id: 13,
					component_based: false,
				},
				{
					name: "minecraft:infested_deepslate",
					runtime_id: -454,
					component_based: false,
				},
				{
					name: "minecraft:stripped_crimson_stem",
					runtime_id: -240,
					component_based: false,
				},
				{
					name: "minecraft:crimson_hyphae",
					runtime_id: -299,
					component_based: false,
				},
				{
					name: "minecraft:stonebrick",
					runtime_id: 98,
					component_based: false,
				},
				{
					name: "minecraft:polished_deepslate_slab",
					runtime_id: -384,
					component_based: false,
				},
				{
					name: "minecraft:oak_boat",
					runtime_id: 376,
					component_based: false,
				},
				{
					name: "minecraft:coral_fan_hang2",
					runtime_id: -136,
					component_based: false,
				},
				{
					name: "minecraft:iron_shovel",
					runtime_id: 297,
					component_based: false,
				},
				{
					name: "minecraft:netherite_hoe",
					runtime_id: 614,
					component_based: false,
				},
				{
					name: "minecraft:coral_fan_hang3",
					runtime_id: -137,
					component_based: false,
				},
				{
					name: "minecraft:element_91",
					runtime_id: -102,
					component_based: false,
				},
				{
					name: "minecraft:warped_fungus_on_a_stick",
					runtime_id: 624,
					component_based: false,
				},
				{
					name: "minecraft:silverfish_spawn_egg",
					runtime_id: 444,
					component_based: false,
				},
				{
					name: "minecraft:element_4",
					runtime_id: -15,
					component_based: false,
				},
				{
					name: "minecraft:element_12",
					runtime_id: -23,
					component_based: false,
				},
				{
					name: "minecraft:element_95",
					runtime_id: -106,
					component_based: false,
				},
				{
					name: "minecraft:egg",
					runtime_id: 391,
					component_based: false,
				},
				{
					name: "minecraft:sweet_berries",
					runtime_id: 287,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_brick_slab",
					runtime_id: -284,
					component_based: false,
				},
				{
					name: "minecraft:blue_dye",
					runtime_id: 400,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_emerald_ore",
					runtime_id: -407,
					component_based: false,
				},
				{
					name: "minecraft:redstone_wire",
					runtime_id: 55,
					component_based: false,
				},
				{
					name: "minecraft:warped_hyphae",
					runtime_id: -298,
					component_based: false,
				},
				{
					name: "minecraft:moss_carpet",
					runtime_id: -335,
					component_based: false,
				},
				{
					name: "minecraft:element_92",
					runtime_id: -103,
					component_based: false,
				},
				{
					name: "minecraft:pufferfish_spawn_egg",
					runtime_id: 482,
					component_based: false,
				},
				{
					name: "minecraft:element_13",
					runtime_id: -24,
					component_based: false,
				},
				{
					name: "minecraft:bowl",
					runtime_id: 322,
					component_based: false,
				},
				{
					name: "minecraft:element_96",
					runtime_id: -107,
					component_based: false,
				},
				{
					name: "minecraft:raw_copper",
					runtime_id: 513,
					component_based: false,
				},
				{
					name: "minecraft:element_17",
					runtime_id: -28,
					component_based: false,
				},
				{
					name: "minecraft:light_gray_wool",
					runtime_id: -552,
					component_based: false,
				},
				{
					name: "minecraft:bow",
					runtime_id: 301,
					component_based: false,
				},
				{
					name: "minecraft:element_16",
					runtime_id: -27,
					component_based: false,
				},
				{
					name: "minecraft:cake",
					runtime_id: 418,
					component_based: false,
				},
				{
					name: "minecraft:clay_ball",
					runtime_id: 385,
					component_based: false,
				},
				{
					name: "minecraft:piston_arm_collision",
					runtime_id: 34,
					component_based: false,
				},
				{
					name: "minecraft:piglin_banner_pattern",
					runtime_id: 593,
					component_based: false,
				},
				{
					name: "minecraft:writable_book",
					runtime_id: 516,
					component_based: false,
				},
				{
					name: "minecraft:charcoal",
					runtime_id: 304,
					component_based: false,
				},
				{
					name: "minecraft:lingering_potion",
					runtime_id: 568,
					component_based: false,
				},
				{
					name: "minecraft:muddy_mangrove_roots",
					runtime_id: -483,
					component_based: false,
				},
				{
					name: "minecraft:element_50",
					runtime_id: -61,
					component_based: false,
				},
				{
					name: "minecraft:spruce_hanging_sign",
					runtime_id: -501,
					component_based: false,
				},
				{
					name: "minecraft:ghast_tear",
					runtime_id: 425,
					component_based: false,
				},
				{
					name: "minecraft:ancient_debris",
					runtime_id: -271,
					component_based: false,
				},
				{
					name: "minecraft:element_7",
					runtime_id: -18,
					component_based: false,
				},
				{
					name: "minecraft:quartz_block",
					runtime_id: 155,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_slab",
					runtime_id: -489,
					component_based: false,
				},
				{
					name: "minecraft:blaze_spawn_egg",
					runtime_id: 457,
					component_based: false,
				},
				{
					name: "minecraft:item.campfire",
					runtime_id: -209,
					component_based: false,
				},
				{
					name: "minecraft:diamond_horse_armor",
					runtime_id: 539,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_brick_stairs",
					runtime_id: -275,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_pressure_plate",
					runtime_id: -490,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_wall",
					runtime_id: -297,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_boat",
					runtime_id: 381,
					component_based: false,
				},
				{
					name: "minecraft:ink_sac",
					runtime_id: 414,
					component_based: false,
				},
				{
					name: "minecraft:birch_trapdoor",
					runtime_id: -146,
					component_based: false,
				},
				{
					name: "minecraft:brown_dye",
					runtime_id: 399,
					component_based: false,
				},
				{
					name: "minecraft:crimson_double_slab",
					runtime_id: -266,
					component_based: false,
				},
				{
					name: "minecraft:netherite_scrap",
					runtime_id: 619,
					component_based: false,
				},
				{
					name: "minecraft:nether_wart",
					runtime_id: 294,
					component_based: false,
				},
				{
					name: "minecraft:element_54",
					runtime_id: -65,
					component_based: false,
				},
				{
					name: "minecraft:element_58",
					runtime_id: -69,
					component_based: false,
				},
				{
					name: "minecraft:feather",
					runtime_id: 328,
					component_based: false,
				},
				{
					name: "minecraft:mossy_stone_brick_stairs",
					runtime_id: -175,
					component_based: false,
				},
				{
					name: "minecraft:item.glow_frame",
					runtime_id: -339,
					component_based: false,
				},
				{
					name: "minecraft:crimson_planks",
					runtime_id: -242,
					component_based: false,
				},
				{
					name: "minecraft:wheat",
					runtime_id: 335,
					component_based: false,
				},
				{
					name: "minecraft:stone_block_slab2",
					runtime_id: 182,
					component_based: false,
				},
				{
					name: "minecraft:crimson_stem",
					runtime_id: -225,
					component_based: false,
				},
				{
					name: "minecraft:cave_vines_body_with_berries",
					runtime_id: -375,
					component_based: false,
				},
				{
					name: "minecraft:tropical_fish_spawn_egg",
					runtime_id: 480,
					component_based: false,
				},
				{
					name: "minecraft:lit_redstone_lamp",
					runtime_id: 124,
					component_based: false,
				},
				{
					name: "minecraft:warped_hanging_sign",
					runtime_id: -507,
					component_based: false,
				},
				{
					name: "minecraft:wither_rose",
					runtime_id: -216,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_bricks",
					runtime_id: -391,
					component_based: false,
				},
				{
					name: "minecraft:skull_pottery_shard",
					runtime_id: 662,
					component_based: false,
				},
				{
					name: "minecraft:gray_candle_cake",
					runtime_id: -437,
					component_based: false,
				},
				{
					name: "minecraft:diamond_chestplate",
					runtime_id: 349,
					component_based: false,
				},
				{
					name: "minecraft:item.acacia_door",
					runtime_id: 196,
					component_based: false,
				},
				{
					name: "minecraft:lime_wool",
					runtime_id: -559,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_brick_wall",
					runtime_id: -278,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_trapdoor",
					runtime_id: -520,
					component_based: false,
				},
				{
					name: "minecraft:item.flower_pot",
					runtime_id: 140,
					component_based: false,
				},
				{
					name: "minecraft:cyan_candle_cake",
					runtime_id: -439,
					component_based: false,
				},
				{
					name: "minecraft:axolotl_spawn_egg",
					runtime_id: 502,
					component_based: false,
				},
				{
					name: "minecraft:planks",
					runtime_id: 5,
					component_based: false,
				},
				{
					name: "minecraft:ice_bomb",
					runtime_id: 601,
					component_based: false,
				},
				{
					name: "minecraft:pink_dye",
					runtime_id: 405,
					component_based: false,
				},
				{
					name: "minecraft:waxed_copper",
					runtime_id: -344,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_fence_gate",
					runtime_id: 186,
					component_based: false,
				},
				{
					name: "minecraft:nether_sprouts",
					runtime_id: 627,
					component_based: false,
				},
				{
					name: "minecraft:red_mushroom",
					runtime_id: 40,
					component_based: false,
				},
				{
					name: "minecraft:glass_bottle",
					runtime_id: 428,
					component_based: false,
				},
				{
					name: "minecraft:crimson_trapdoor",
					runtime_id: -246,
					component_based: false,
				},
				{
					name: "minecraft:shroomlight",
					runtime_id: -230,
					component_based: false,
				},
				{
					name: "minecraft:element_9",
					runtime_id: -20,
					component_based: false,
				},
				{
					name: "minecraft:element_8",
					runtime_id: -19,
					component_based: false,
				},
				{
					name: "minecraft:smooth_sandstone_stairs",
					runtime_id: -177,
					component_based: false,
				},
				{
					name: "minecraft:bucket",
					runtime_id: 361,
					component_based: false,
				},
				{
					name: "minecraft:element_19",
					runtime_id: -30,
					component_based: false,
				},
				{
					name: "minecraft:leather_boots",
					runtime_id: 339,
					component_based: false,
				},
				{
					name: "minecraft:end_gateway",
					runtime_id: 209,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_planks",
					runtime_id: -486,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_boat",
					runtime_id: 641,
					component_based: false,
				},
				{
					name: "minecraft:pumpkin",
					runtime_id: 86,
					component_based: false,
				},
				{
					name: "minecraft:gold_block",
					runtime_id: 41,
					component_based: false,
				},
				{
					name: "minecraft:coral_fan_dead",
					runtime_id: -134,
					component_based: false,
				},
				{
					name: "minecraft:concrete_powder",
					runtime_id: 237,
					component_based: false,
				},
				{
					name: "minecraft:reinforced_deepslate",
					runtime_id: -466,
					component_based: false,
				},
				{
					name: "minecraft:deny",
					runtime_id: 211,
					component_based: false,
				},
				{
					name: "minecraft:jungle_stairs",
					runtime_id: 136,
					component_based: false,
				},
				{
					name: "minecraft:dark_prismarine_stairs",
					runtime_id: -3,
					component_based: false,
				},
				{
					name: "minecraft:element_18",
					runtime_id: -29,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_stairs",
					runtime_id: 164,
					component_based: false,
				},
				{
					name: "minecraft:cod_bucket",
					runtime_id: 365,
					component_based: false,
				},
				{
					name: "minecraft:chest_boat",
					runtime_id: 651,
					component_based: false,
				},
				{
					name: "minecraft:raw_iron",
					runtime_id: 511,
					component_based: false,
				},
				{
					name: "minecraft:reserved6",
					runtime_id: 255,
					component_based: false,
				},
				{
					name: "minecraft:powered_repeater",
					runtime_id: 94,
					component_based: false,
				},
				{
					name: "minecraft:acacia_hanging_sign",
					runtime_id: -504,
					component_based: false,
				},
				{
					name: "minecraft:oxidized_double_cut_copper_slab",
					runtime_id: -371,
					component_based: false,
				},
				{
					name: "minecraft:acacia_sign",
					runtime_id: 585,
					component_based: false,
				},
				{
					name: "minecraft:kelp",
					runtime_id: 383,
					component_based: false,
				},
				{
					name: "minecraft:item.nether_wart",
					runtime_id: 115,
					component_based: false,
				},
				{
					name: "minecraft:diamond_hoe",
					runtime_id: 333,
					component_based: false,
				},
				{
					name: "minecraft:light_blue_candle",
					runtime_id: -416,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_brick_wall",
					runtime_id: -394,
					component_based: false,
				},
				{
					name: "minecraft:lectern",
					runtime_id: -194,
					component_based: false,
				},
				{
					name: "minecraft:iron_ingot",
					runtime_id: 306,
					component_based: false,
				},
				{
					name: "minecraft:quartz_bricks",
					runtime_id: -304,
					component_based: false,
				},
				{
					name: "minecraft:powder_snow_bucket",
					runtime_id: 369,
					component_based: false,
				},
				{
					name: "minecraft:green_dye",
					runtime_id: 398,
					component_based: false,
				},
				{
					name: "minecraft:turtle_egg",
					runtime_id: -159,
					component_based: false,
				},
				{
					name: "minecraft:acacia_trapdoor",
					runtime_id: -145,
					component_based: false,
				},
				{
					name: "minecraft:pillager_spawn_egg",
					runtime_id: 492,
					component_based: false,
				},
				{
					name: "minecraft:copper_ingot",
					runtime_id: 510,
					component_based: false,
				},
				{
					name: "minecraft:gray_dye",
					runtime_id: 404,
					component_based: false,
				},
				{
					name: "minecraft:sea_pickle",
					runtime_id: -156,
					component_based: false,
				},
				{
					name: "minecraft:gunpowder",
					runtime_id: 329,
					component_based: false,
				},
				{
					name: "minecraft:zoglin_spawn_egg",
					runtime_id: 499,
					component_based: false,
				},
				{
					name: "minecraft:unpowered_comparator",
					runtime_id: 149,
					component_based: false,
				},
				{
					name: "minecraft:double_plant",
					runtime_id: 175,
					component_based: false,
				},
				{
					name: "minecraft:sugar",
					runtime_id: 417,
					component_based: false,
				},
				{
					name: "minecraft:dye",
					runtime_id: 666,
					component_based: false,
				},
				{
					name: "minecraft:red_candle",
					runtime_id: -427,
					component_based: false,
				},
				{
					name: "minecraft:field_masoned_banner_pattern",
					runtime_id: 591,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_slab",
					runtime_id: -513,
					component_based: false,
				},
				{
					name: "minecraft:chicken_spawn_egg",
					runtime_id: 436,
					component_based: false,
				},
				{
					name: "minecraft:concrete",
					runtime_id: 236,
					component_based: false,
				},
				{
					name: "minecraft:tadpole_spawn_egg",
					runtime_id: 635,
					component_based: false,
				},
				{
					name: "minecraft:farmland",
					runtime_id: 60,
					component_based: false,
				},
				{
					name: "minecraft:warped_standing_sign",
					runtime_id: -251,
					component_based: false,
				},
				{
					name: "minecraft:torch",
					runtime_id: 50,
					component_based: false,
				},
				{
					name: "minecraft:standing_banner",
					runtime_id: 176,
					component_based: false,
				},
				{
					name: "minecraft:diamond_block",
					runtime_id: 57,
					component_based: false,
				},
				{
					name: "minecraft:element_93",
					runtime_id: -104,
					component_based: false,
				},
				{
					name: "minecraft:double_stone_block_slab4",
					runtime_id: -168,
					component_based: false,
				},
				{
					name: "minecraft:acacia_standing_sign",
					runtime_id: -190,
					component_based: false,
				},
				{
					name: "minecraft:smooth_quartz_stairs",
					runtime_id: -185,
					component_based: false,
				},
				{
					name: "minecraft:birch_pressure_plate",
					runtime_id: -151,
					component_based: false,
				},
				{
					name: "minecraft:purple_candle_cake",
					runtime_id: -440,
					component_based: false,
				},
				{
					name: "minecraft:chorus_flower",
					runtime_id: 200,
					component_based: false,
				},
				{
					name: "minecraft:cobbled_deepslate_stairs",
					runtime_id: -381,
					component_based: false,
				},
				{
					name: "minecraft:stripped_jungle_log",
					runtime_id: -7,
					component_based: false,
				},
				{
					name: "minecraft:tnt",
					runtime_id: 46,
					component_based: false,
				},
				{
					name: "minecraft:lime_dye",
					runtime_id: 406,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_tile_wall",
					runtime_id: -390,
					component_based: false,
				},
				{
					name: "minecraft:diamond_leggings",
					runtime_id: 350,
					component_based: false,
				},
				{
					name: "minecraft:waxed_weathered_cut_copper",
					runtime_id: -353,
					component_based: false,
				},
				{
					name: "minecraft:ochre_froglight",
					runtime_id: -471,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_tiles",
					runtime_id: -387,
					component_based: false,
				},
				{
					name: "minecraft:element_1",
					runtime_id: -12,
					component_based: false,
				},
				{
					name: "minecraft:chainmail_chestplate",
					runtime_id: 341,
					component_based: false,
				},
				{
					name: "minecraft:element_2",
					runtime_id: -13,
					component_based: false,
				},
				{
					name: "minecraft:birch_stairs",
					runtime_id: 135,
					component_based: false,
				},
				{
					name: "minecraft:cobblestone_wall",
					runtime_id: 139,
					component_based: false,
				},
				{
					name: "minecraft:agent_spawn_egg",
					runtime_id: 488,
					component_based: false,
				},
				{
					name: "minecraft:beef",
					runtime_id: 273,
					component_based: false,
				},
				{
					name: "minecraft:red_wool",
					runtime_id: -556,
					component_based: false,
				},
				{
					name: "minecraft:donkey_spawn_egg",
					runtime_id: 466,
					component_based: false,
				},
				{
					name: "minecraft:iron_pickaxe",
					runtime_id: 298,
					component_based: false,
				},
				{
					name: "minecraft:elder_guardian_spawn_egg",
					runtime_id: 472,
					component_based: false,
				},
				{
					name: "minecraft:end_brick_stairs",
					runtime_id: -178,
					component_based: false,
				},
				{
					name: "minecraft:unpowered_repeater",
					runtime_id: 93,
					component_based: false,
				},
				{
					name: "minecraft:spruce_pressure_plate",
					runtime_id: -154,
					component_based: false,
				},
				{
					name: "minecraft:respawn_anchor",
					runtime_id: -272,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_chest_raft",
					runtime_id: 657,
					component_based: false,
				},
				{
					name: "minecraft:netherite_axe",
					runtime_id: 613,
					component_based: false,
				},
				{
					name: "minecraft:element_94",
					runtime_id: -105,
					component_based: false,
				},
				{
					name: "minecraft:book",
					runtime_id: 388,
					component_based: false,
				},
				{
					name: "minecraft:element_11",
					runtime_id: -22,
					component_based: false,
				},
				{
					name: "minecraft:compass",
					runtime_id: 392,
					component_based: false,
				},
				{
					name: "minecraft:acacia_boat",
					runtime_id: 380,
					component_based: false,
				},
				{
					name: "minecraft:glow_lichen",
					runtime_id: -411,
					component_based: false,
				},
				{
					name: "minecraft:detector_rail",
					runtime_id: 28,
					component_based: false,
				},
				{
					name: "minecraft:powder_snow",
					runtime_id: -306,
					component_based: false,
				},
				{
					name: "minecraft:lime_glazed_terracotta",
					runtime_id: 225,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_brick_stairs",
					runtime_id: -393,
					component_based: false,
				},
				{
					name: "minecraft:carrot",
					runtime_id: 279,
					component_based: false,
				},
				{
					name: "minecraft:beehive",
					runtime_id: -219,
					component_based: false,
				},
				{
					name: "minecraft:exposed_copper",
					runtime_id: -341,
					component_based: false,
				},
				{
					name: "minecraft:warped_roots",
					runtime_id: -224,
					component_based: false,
				},
				{
					name: "minecraft:quartz",
					runtime_id: 530,
					component_based: false,
				},
				{
					name: "minecraft:prismarine_shard",
					runtime_id: 571,
					component_based: false,
				},
				{
					name: "minecraft:element_10",
					runtime_id: -21,
					component_based: false,
				},
				{
					name: "minecraft:lodestone",
					runtime_id: -222,
					component_based: false,
				},
				{
					name: "minecraft:barrier",
					runtime_id: -161,
					component_based: false,
				},
				{
					name: "minecraft:element_45",
					runtime_id: -56,
					component_based: false,
				},
				{
					name: "minecraft:gold_ore",
					runtime_id: 14,
					component_based: false,
				},
				{
					name: "minecraft:cod",
					runtime_id: 264,
					component_based: false,
				},
				{
					name: "minecraft:blackstone_slab",
					runtime_id: -282,
					component_based: false,
				},
				{
					name: "minecraft:glow_ink_sac",
					runtime_id: 509,
					component_based: false,
				},
				{
					name: "minecraft:azalea_leaves",
					runtime_id: -324,
					component_based: false,
				},
				{
					name: "minecraft:end_rod",
					runtime_id: 208,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_sapling",
					runtime_id: -164,
					component_based: false,
				},
				{
					name: "minecraft:nether_star",
					runtime_id: 524,
					component_based: false,
				},
				{
					name: "minecraft:bleach",
					runtime_id: 602,
					component_based: false,
				},
				{
					name: "minecraft:lava",
					runtime_id: 11,
					component_based: false,
				},
				{
					name: "minecraft:crying_obsidian",
					runtime_id: -289,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_hanging_sign",
					runtime_id: -508,
					component_based: false,
				},
				{
					name: "minecraft:black_candle",
					runtime_id: -428,
					component_based: false,
				},
				{
					name: "minecraft:banner_pattern",
					runtime_id: 667,
					component_based: false,
				},
				{
					name: "minecraft:spruce_chest_boat",
					runtime_id: 647,
					component_based: false,
				},
				{
					name: "minecraft:redstone_block",
					runtime_id: 152,
					component_based: false,
				},
				{
					name: "minecraft:element_56",
					runtime_id: -67,
					component_based: false,
				},
				{
					name: "minecraft:azalea",
					runtime_id: -337,
					component_based: false,
				},
				{
					name: "minecraft:warped_wart_block",
					runtime_id: -227,
					component_based: false,
				},
				{
					name: "minecraft:spruce_sign",
					runtime_id: 582,
					component_based: false,
				},
				{
					name: "minecraft:waxed_double_cut_copper_slab",
					runtime_id: -372,
					component_based: false,
				},
				{
					name: "minecraft:purpur_block",
					runtime_id: 201,
					component_based: false,
				},
				{
					name: "minecraft:gray_candle",
					runtime_id: -420,
					component_based: false,
				},
				{
					name: "minecraft:golden_hoe",
					runtime_id: 334,
					component_based: false,
				},
				{
					name: "minecraft:magenta_dye",
					runtime_id: 409,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_trapdoor",
					runtime_id: -147,
					component_based: false,
				},
				{
					name: "minecraft:element_66",
					runtime_id: -77,
					component_based: false,
				},
				{
					name: "minecraft:dried_kelp_block",
					runtime_id: -139,
					component_based: false,
				},
				{
					name: "minecraft:shulker_shell",
					runtime_id: 572,
					component_based: false,
				},
				{
					name: "minecraft:waxed_cut_copper_slab",
					runtime_id: -365,
					component_based: false,
				},
				{
					name: "minecraft:pink_glazed_terracotta",
					runtime_id: 226,
					component_based: false,
				},
				{
					name: "minecraft:cactus",
					runtime_id: 81,
					component_based: false,
				},
				{
					name: "minecraft:element_64",
					runtime_id: -75,
					component_based: false,
				},
				{
					name: "minecraft:stone_hoe",
					runtime_id: 331,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_gold_ore",
					runtime_id: -402,
					component_based: false,
				},
				{
					name: "minecraft:cauldron",
					runtime_id: 433,
					component_based: false,
				},
				{
					name: "minecraft:crossbow",
					runtime_id: 581,
					component_based: false,
				},
				{
					name: "minecraft:empty_map",
					runtime_id: 521,
					component_based: false,
				},
				{
					name: "minecraft:wall_banner",
					runtime_id: 177,
					component_based: false,
				},
				{
					name: "minecraft:popped_chorus_fruit",
					runtime_id: 565,
					component_based: false,
				},
				{
					name: "minecraft:element_44",
					runtime_id: -55,
					component_based: false,
				},
				{
					name: "minecraft:wooden_shovel",
					runtime_id: 310,
					component_based: false,
				},
				{
					name: "minecraft:spider_eye",
					runtime_id: 278,
					component_based: false,
				},
				{
					name: "minecraft:stripped_mangrove_wood",
					runtime_id: -498,
					component_based: false,
				},
				{
					name: "minecraft:brick",
					runtime_id: 384,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_pressure_plate",
					runtime_id: -152,
					component_based: false,
				},
				{
					name: "minecraft:yellow_glazed_terracotta",
					runtime_id: 224,
					component_based: false,
				},
				{
					name: "minecraft:bubble_column",
					runtime_id: -160,
					component_based: false,
				},
				{
					name: "minecraft:suspicious_sand",
					runtime_id: -529,
					component_based: false,
				},
				{
					name: "minecraft:cooked_salmon",
					runtime_id: 269,
					component_based: false,
				},
				{
					name: "minecraft:grass_path",
					runtime_id: 198,
					component_based: false,
				},
				{
					name: "minecraft:phantom_spawn_egg",
					runtime_id: 487,
					component_based: false,
				},
				{
					name: "minecraft:element_42",
					runtime_id: -53,
					component_based: false,
				},
				{
					name: "minecraft:element_40",
					runtime_id: -51,
					component_based: false,
				},
				{
					name: "minecraft:jigsaw",
					runtime_id: -211,
					component_based: false,
				},
				{
					name: "minecraft:oak_chest_boat",
					runtime_id: 644,
					component_based: false,
				},
				{
					name: "minecraft:diamond_sword",
					runtime_id: 317,
					component_based: false,
				},
				{
					name: "minecraft:wooden_sword",
					runtime_id: 309,
					component_based: false,
				},
				{
					name: "minecraft:soul_torch",
					runtime_id: -268,
					component_based: false,
				},
				{
					name: "minecraft:lever",
					runtime_id: 69,
					component_based: false,
				},
				{
					name: "minecraft:beetroot_seeds",
					runtime_id: 295,
					component_based: false,
				},
				{
					name: "minecraft:beacon",
					runtime_id: 138,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_door",
					runtime_id: 639,
					component_based: false,
				},
				{
					name: "minecraft:glistering_melon_slice",
					runtime_id: 435,
					component_based: false,
				},
				{
					name: "minecraft:black_candle_cake",
					runtime_id: -445,
					component_based: false,
				},
				{
					name: "minecraft:warped_fence_gate",
					runtime_id: -259,
					component_based: false,
				},
				{
					name: "minecraft:smoker",
					runtime_id: -198,
					component_based: false,
				},
				{
					name: "minecraft:trapdoor",
					runtime_id: 96,
					component_based: false,
				},
				{
					name: "minecraft:element_116",
					runtime_id: -127,
					component_based: false,
				},
				{
					name: "minecraft:mangrove_stairs",
					runtime_id: -488,
					component_based: false,
				},
				{
					name: "minecraft:coral_block",
					runtime_id: -132,
					component_based: false,
				},
				{
					name: "minecraft:element_23",
					runtime_id: -34,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_stairs",
					runtime_id: -292,
					component_based: false,
				},
				{
					name: "minecraft:lit_blast_furnace",
					runtime_id: -214,
					component_based: false,
				},
				{
					name: "minecraft:blackstone_stairs",
					runtime_id: -276,
					component_based: false,
				},
				{
					name: "minecraft:chemistry_table",
					runtime_id: 238,
					component_based: false,
				},
				{
					name: "minecraft:element_62",
					runtime_id: -73,
					component_based: false,
				},
				{
					name: "minecraft:element_60",
					runtime_id: -71,
					component_based: false,
				},
				{
					name: "minecraft:vine",
					runtime_id: 106,
					component_based: false,
				},
				{
					name: "minecraft:warped_fence",
					runtime_id: -257,
					component_based: false,
				},
				{
					name: "minecraft:stone_button",
					runtime_id: 77,
					component_based: false,
				},
				{
					name: "minecraft:purple_dye",
					runtime_id: 401,
					component_based: false,
				},
				{
					name: "minecraft:prismarine",
					runtime_id: 168,
					component_based: false,
				},
				{
					name: "minecraft:heart_of_the_sea",
					runtime_id: 577,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_far",
					runtime_id: 544,
					component_based: false,
				},
				{
					name: "minecraft:prismarine_stairs",
					runtime_id: -2,
					component_based: false,
				},
				{
					name: "minecraft:echo_shard",
					runtime_id: 653,
					component_based: false,
				},
				{
					name: "minecraft:iron_door",
					runtime_id: 373,
					component_based: false,
				},
				{
					name: "minecraft:leather_helmet",
					runtime_id: 336,
					component_based: false,
				},
				{
					name: "minecraft:poisonous_potato",
					runtime_id: 282,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_fence",
					runtime_id: -515,
					component_based: false,
				},
				{
					name: "minecraft:double_stone_block_slab3",
					runtime_id: -167,
					component_based: false,
				},
				{
					name: "minecraft:golden_shovel",
					runtime_id: 324,
					component_based: false,
				},
				{
					name: "minecraft:pumpkin_stem",
					runtime_id: 104,
					component_based: false,
				},
				{
					name: "minecraft:salmon_bucket",
					runtime_id: 366,
					component_based: false,
				},
				{
					name: "minecraft:raw_gold_block",
					runtime_id: -453,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_planks",
					runtime_id: -510,
					component_based: false,
				},
				{
					name: "minecraft:warped_planks",
					runtime_id: -243,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_door",
					runtime_id: 563,
					component_based: false,
				},
				{
					name: "minecraft:chemical_heat",
					runtime_id: 192,
					component_based: false,
				},
				{
					name: "minecraft:gold_nugget",
					runtime_id: 426,
					component_based: false,
				},
				{
					name: "minecraft:pumpkin_pie",
					runtime_id: 284,
					component_based: false,
				},
				{
					name: "minecraft:element_114",
					runtime_id: -125,
					component_based: false,
				},
				{
					name: "minecraft:light_gray_dye",
					runtime_id: 403,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_blocks",
					runtime_id: 542,
					component_based: false,
				},
				{
					name: "minecraft:end_crystal",
					runtime_id: 669,
					component_based: false,
				},
				{
					name: "minecraft:golden_chestplate",
					runtime_id: 353,
					component_based: false,
				},
				{
					name: "minecraft:trapped_chest",
					runtime_id: 146,
					component_based: false,
				},
				{
					name: "minecraft:stone_block_slab",
					runtime_id: 44,
					component_based: false,
				},
				{
					name: "minecraft:stone_sword",
					runtime_id: 313,
					component_based: false,
				},
				{
					name: "minecraft:snowball",
					runtime_id: 375,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_mosaic_stairs",
					runtime_id: -523,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_hanging_sign",
					runtime_id: -505,
					component_based: false,
				},
				{
					name: "minecraft:totem_of_undying",
					runtime_id: 574,
					component_based: false,
				},
				{
					name: "minecraft:lava_cauldron",
					runtime_id: -210,
					component_based: false,
				},
				{
					name: "minecraft:weathered_cut_copper_slab",
					runtime_id: -363,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_hanging_sign",
					runtime_id: -522,
					component_based: false,
				},
				{
					name: "minecraft:element_47",
					runtime_id: -58,
					component_based: false,
				},
				{
					name: "minecraft:diamond",
					runtime_id: 305,
					component_based: false,
				},
				{
					name: "minecraft:cracked_polished_blackstone_bricks",
					runtime_id: -280,
					component_based: false,
				},
				{
					name: "minecraft:dark_oak_button",
					runtime_id: -142,
					component_based: false,
				},
				{
					name: "minecraft:lime_candle",
					runtime_id: -418,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_brick_double_slab",
					runtime_id: -285,
					component_based: false,
				},
				{
					name: "minecraft:ender_eye",
					runtime_id: 434,
					component_based: false,
				},
				{
					name: "minecraft:sapling",
					runtime_id: 6,
					component_based: false,
				},
				{
					name: "minecraft:recovery_compass",
					runtime_id: 652,
					component_based: false,
				},
				{
					name: "minecraft:archer_pottery_shard",
					runtime_id: 659,
					component_based: false,
				},
				{
					name: "minecraft:item.wheat",
					runtime_id: 59,
					component_based: false,
				},
				{
					name: "minecraft:zombie_pigman_spawn_egg",
					runtime_id: 449,
					component_based: false,
				},
				{
					name: "minecraft:globe_banner_pattern",
					runtime_id: 594,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_door",
					runtime_id: -517,
					component_based: false,
				},
				{
					name: "minecraft:creeper_banner_pattern",
					runtime_id: 588,
					component_based: false,
				},
				{
					name: "minecraft:honeycomb_block",
					runtime_id: -221,
					component_based: false,
				},
				{
					name: "minecraft:element_69",
					runtime_id: -80,
					component_based: false,
				},
				{
					name: "minecraft:glowingobsidian",
					runtime_id: 246,
					component_based: false,
				},
				{
					name: "minecraft:light_blue_candle_cake",
					runtime_id: -433,
					component_based: false,
				},
				{
					name: "minecraft:polished_deepslate_stairs",
					runtime_id: -385,
					component_based: false,
				},
				{
					name: "minecraft:skull",
					runtime_id: 522,
					component_based: false,
				},
				{
					name: "minecraft:powered_comparator",
					runtime_id: 150,
					component_based: false,
				},
				{
					name: "minecraft:cobbled_deepslate_double_slab",
					runtime_id: -396,
					component_based: false,
				},
				{
					name: "minecraft:white_glazed_terracotta",
					runtime_id: 220,
					component_based: false,
				},
				{
					name: "minecraft:shulker_spawn_egg",
					runtime_id: 470,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_stal",
					runtime_id: 547,
					component_based: false,
				},
				{
					name: "minecraft:brown_candle",
					runtime_id: -425,
					component_based: false,
				},
				{
					name: "minecraft:cobbled_deepslate_slab",
					runtime_id: -380,
					component_based: false,
				},
				{
					name: "minecraft:netherite_boots",
					runtime_id: 618,
					component_based: false,
				},
				{
					name: "minecraft:lantern",
					runtime_id: -208,
					component_based: false,
				},
				{
					name: "minecraft:glass",
					runtime_id: 20,
					component_based: false,
				},
				{
					name: "minecraft:element_20",
					runtime_id: -31,
					component_based: false,
				},
				{
					name: "minecraft:bookshelf",
					runtime_id: 47,
					component_based: false,
				},
				{
					name: "minecraft:glow_squid_spawn_egg",
					runtime_id: 504,
					component_based: false,
				},
				{
					name: "minecraft:iron_trapdoor",
					runtime_id: 167,
					component_based: false,
				},
				{
					name: "minecraft:porkchop",
					runtime_id: 262,
					component_based: false,
				},
				{
					name: "minecraft:orange_glazed_terracotta",
					runtime_id: 221,
					component_based: false,
				},
				{
					name: "minecraft:diamond_ore",
					runtime_id: 56,
					component_based: false,
				},
				{
					name: "minecraft:green_candle_cake",
					runtime_id: -443,
					component_based: false,
				},
				{
					name: "minecraft:element_88",
					runtime_id: -99,
					component_based: false,
				},
				{
					name: "minecraft:emerald_block",
					runtime_id: 133,
					component_based: false,
				},
				{
					name: "minecraft:beetroot_soup",
					runtime_id: 286,
					component_based: false,
				},
				{
					name: "minecraft:element_84",
					runtime_id: -95,
					component_based: false,
				},
				{
					name: "minecraft:end_portal",
					runtime_id: 119,
					component_based: false,
				},
				{
					name: "minecraft:hard_glass_pane",
					runtime_id: 190,
					component_based: false,
				},
				{
					name: "minecraft:netherrack",
					runtime_id: 87,
					component_based: false,
				},
				{
					name: "minecraft:lead",
					runtime_id: 553,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_pressure_plate",
					runtime_id: -295,
					component_based: false,
				},
				{
					name: "minecraft:gilded_blackstone",
					runtime_id: -281,
					component_based: false,
				},
				{
					name: "minecraft:log2",
					runtime_id: 162,
					component_based: false,
				},
				{
					name: "minecraft:nether_wart_block",
					runtime_id: 214,
					component_based: false,
				},
				{
					name: "minecraft:raw_copper_block",
					runtime_id: -452,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_lapis_ore",
					runtime_id: -400,
					component_based: false,
				},
				{
					name: "minecraft:lapis_lazuli",
					runtime_id: 415,
					component_based: false,
				},
				{
					name: "minecraft:polished_blackstone_slab",
					runtime_id: -293,
					component_based: false,
				},
				{
					name: "minecraft:blaze_rod",
					runtime_id: 424,
					component_based: false,
				},
				{
					name: "minecraft:waxed_exposed_copper",
					runtime_id: -345,
					component_based: false,
				},
				{
					name: "minecraft:quartz_ore",
					runtime_id: 153,
					component_based: false,
				},
				{
					name: "minecraft:ender_dragon_spawn_egg",
					runtime_id: 507,
					component_based: false,
				},
				{
					name: "minecraft:red_mushroom_block",
					runtime_id: 100,
					component_based: false,
				},
				{
					name: "minecraft:trader_llama_spawn_egg",
					runtime_id: 654,
					component_based: false,
				},
				{
					name: "minecraft:shield",
					runtime_id: 356,
					component_based: false,
				},
				{
					name: "minecraft:sheep_spawn_egg",
					runtime_id: 439,
					component_based: false,
				},
				{
					name: "minecraft:netherreactor",
					runtime_id: 247,
					component_based: false,
				},
				{
					name: "minecraft:birch_chest_boat",
					runtime_id: 645,
					component_based: false,
				},
				{
					name: "minecraft:lit_furnace",
					runtime_id: 62,
					component_based: false,
				},
				{
					name: "minecraft:cooked_porkchop",
					runtime_id: 263,
					component_based: false,
				},
				{
					name: "minecraft:honey_block",
					runtime_id: -220,
					component_based: false,
				},
				{
					name: "minecraft:leather_chestplate",
					runtime_id: 337,
					component_based: false,
				},
				{
					name: "minecraft:calcite",
					runtime_id: -326,
					component_based: false,
				},
				{
					name: "minecraft:verdant_froglight",
					runtime_id: -470,
					component_based: false,
				},
				{
					name: "minecraft:dried_kelp",
					runtime_id: 270,
					component_based: false,
				},
				{
					name: "minecraft:conduit",
					runtime_id: -157,
					component_based: false,
				},
				{
					name: "minecraft:oxidized_cut_copper_slab",
					runtime_id: -364,
					component_based: false,
				},
				{
					name: "minecraft:fletching_table",
					runtime_id: -201,
					component_based: false,
				},
				{
					name: "minecraft:tuff",
					runtime_id: -333,
					component_based: false,
				},
				{
					name: "minecraft:skull_banner_pattern",
					runtime_id: 589,
					component_based: false,
				},
				{
					name: "minecraft:cave_vines_head_with_berries",
					runtime_id: -376,
					component_based: false,
				},
				{
					name: "minecraft:white_candle_cake",
					runtime_id: -430,
					component_based: false,
				},
				{
					name: "minecraft:birch_fence_gate",
					runtime_id: 184,
					component_based: false,
				},
				{
					name: "minecraft:warped_slab",
					runtime_id: -265,
					component_based: false,
				},
				{
					name: "minecraft:stone_block_slab3",
					runtime_id: -162,
					component_based: false,
				},
				{
					name: "minecraft:enchanted_golden_apple",
					runtime_id: 259,
					component_based: false,
				},
				{
					name: "minecraft:coral_fan_hang",
					runtime_id: -135,
					component_based: false,
				},
				{
					name: "minecraft:mojang_banner_pattern",
					runtime_id: 590,
					component_based: false,
				},
				{
					name: "minecraft:brown_glazed_terracotta",
					runtime_id: 232,
					component_based: false,
				},
				{
					name: "minecraft:warped_double_slab",
					runtime_id: -267,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_button",
					runtime_id: -511,
					component_based: false,
				},
				{
					name: "minecraft:heavy_weighted_pressure_plate",
					runtime_id: 148,
					component_based: false,
				},
				{
					name: "minecraft:item.brewing_stand",
					runtime_id: 117,
					component_based: false,
				},
				{
					name: "minecraft:lightning_rod",
					runtime_id: -312,
					component_based: false,
				},
				{
					name: "minecraft:element_90",
					runtime_id: -101,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_mosaic",
					runtime_id: -509,
					component_based: false,
				},
				{
					name: "minecraft:unlit_redstone_torch",
					runtime_id: 75,
					component_based: false,
				},
				{
					name: "minecraft:orange_dye",
					runtime_id: 410,
					component_based: false,
				},
				{
					name: "minecraft:obsidian",
					runtime_id: 49,
					component_based: false,
				},
				{
					name: "minecraft:diamond_shovel",
					runtime_id: 318,
					component_based: false,
				},
				{
					name: "minecraft:air",
					runtime_id: -158,
					component_based: false,
				},
				{
					name: "minecraft:arrow",
					runtime_id: 302,
					component_based: false,
				},
				{
					name: "minecraft:crimson_stairs",
					runtime_id: -254,
					component_based: false,
				},
				{
					name: "minecraft:cracked_deepslate_tiles",
					runtime_id: -409,
					component_based: false,
				},
				{
					name: "minecraft:invisible_bedrock",
					runtime_id: 95,
					component_based: false,
				},
				{
					name: "minecraft:piglin_spawn_egg",
					runtime_id: 498,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_11",
					runtime_id: 550,
					component_based: false,
				},
				{
					name: "minecraft:ghast_spawn_egg",
					runtime_id: 455,
					component_based: false,
				},
				{
					name: "minecraft:ice",
					runtime_id: 79,
					component_based: false,
				},
				{
					name: "minecraft:disc_fragment_5",
					runtime_id: 643,
					component_based: false,
				},
				{
					name: "minecraft:blue_candle",
					runtime_id: -424,
					component_based: false,
				},
				{
					name: "minecraft:brush",
					runtime_id: 663,
					component_based: false,
				},
				{
					name: "minecraft:red_nether_brick_stairs",
					runtime_id: -184,
					component_based: false,
				},
				{
					name: "minecraft:carrot_on_a_stick",
					runtime_id: 523,
					component_based: false,
				},
				{
					name: "minecraft:element_27",
					runtime_id: -38,
					component_based: false,
				},
				{
					name: "minecraft:composter",
					runtime_id: -213,
					component_based: false,
				},
				{
					name: "minecraft:zombie_villager_spawn_egg",
					runtime_id: 478,
					component_based: false,
				},
				{
					name: "minecraft:mushroom_stew",
					runtime_id: 260,
					component_based: false,
				},
				{
					name: "minecraft:bone",
					runtime_id: 416,
					component_based: false,
				},
				{
					name: "minecraft:deepslate_brick_slab",
					runtime_id: -392,
					component_based: false,
				},
				{
					name: "minecraft:blast_furnace",
					runtime_id: -196,
					component_based: false,
				},
				{
					name: "minecraft:pufferfish",
					runtime_id: 267,
					component_based: false,
				},
				{
					name: "minecraft:item.birch_door",
					runtime_id: 194,
					component_based: false,
				},
				{
					name: "minecraft:smooth_red_sandstone_stairs",
					runtime_id: -176,
					component_based: false,
				},
				{
					name: "minecraft:coal_block",
					runtime_id: 173,
					component_based: false,
				},
				{
					name: "minecraft:element_101",
					runtime_id: -112,
					component_based: false,
				},
				{
					name: "minecraft:light_gray_candle_cake",
					runtime_id: -438,
					component_based: false,
				},
				{
					name: "minecraft:name_tag",
					runtime_id: 554,
					component_based: false,
				},
				{
					name: "minecraft:large_amethyst_bud",
					runtime_id: -330,
					component_based: false,
				},
				{
					name: "minecraft:element_14",
					runtime_id: -25,
					component_based: false,
				},
				{
					name: "minecraft:warped_trapdoor",
					runtime_id: -247,
					component_based: false,
				},
				{
					name: "minecraft:element_25",
					runtime_id: -36,
					component_based: false,
				},
				{
					name: "minecraft:element_49",
					runtime_id: -60,
					component_based: false,
				},
				{
					name: "minecraft:spruce_door",
					runtime_id: 559,
					component_based: false,
				},
				{
					name: "minecraft:element_112",
					runtime_id: -123,
					component_based: false,
				},
				{
					name: "minecraft:suspicious_stew",
					runtime_id: 596,
					component_based: false,
				},
				{
					name: "minecraft:oak_stairs",
					runtime_id: 53,
					component_based: false,
				},
				{
					name: "minecraft:crafting_table",
					runtime_id: 58,
					component_based: false,
				},
				{
					name: "minecraft:andesite_stairs",
					runtime_id: -171,
					component_based: false,
				},
				{
					name: "minecraft:sand",
					runtime_id: 12,
					component_based: false,
				},
				{
					name: "minecraft:element_38",
					runtime_id: -49,
					component_based: false,
				},
				{
					name: "minecraft:parrot_spawn_egg",
					runtime_id: 479,
					component_based: false,
				},
				{
					name: "minecraft:crimson_nylium",
					runtime_id: -232,
					component_based: false,
				},
				{
					name: "minecraft:scaffolding",
					runtime_id: -165,
					component_based: false,
				},
				{
					name: "minecraft:blackstone",
					runtime_id: -273,
					component_based: false,
				},
				{
					name: "minecraft:item.cauldron",
					runtime_id: 118,
					component_based: false,
				},
				{
					name: "minecraft:enchanted_book",
					runtime_id: 527,
					component_based: false,
				},
				{
					name: "minecraft:spruce_standing_sign",
					runtime_id: -181,
					component_based: false,
				},
				{
					name: "minecraft:rapid_fertilizer",
					runtime_id: 603,
					component_based: false,
				},
				{
					name: "minecraft:boat",
					runtime_id: 665,
					component_based: false,
				},
				{
					name: "minecraft:waxed_oxidized_double_cut_copper_slab",
					runtime_id: -450,
					component_based: false,
				},
				{
					name: "minecraft:stick",
					runtime_id: 321,
					component_based: false,
				},
				{
					name: "minecraft:snow_golem_spawn_egg",
					runtime_id: 506,
					component_based: false,
				},
				{
					name: "minecraft:item.bed",
					runtime_id: 26,
					component_based: false,
				},
				{
					name: "minecraft:jukebox",
					runtime_id: 84,
					component_based: false,
				},
				{
					name: "minecraft:exposed_cut_copper",
					runtime_id: -348,
					component_based: false,
				},
				{
					name: "minecraft:stripped_birch_log",
					runtime_id: -6,
					component_based: false,
				},
				{
					name: "minecraft:sticky_piston",
					runtime_id: 29,
					component_based: false,
				},
				{
					name: "minecraft:red_sandstone",
					runtime_id: 179,
					component_based: false,
				},
				{
					name: "minecraft:polished_diorite_stairs",
					runtime_id: -173,
					component_based: false,
				},
				{
					name: "minecraft:music_disc_pigstep",
					runtime_id: 626,
					component_based: false,
				},
				{
					name: "minecraft:husk_spawn_egg",
					runtime_id: 464,
					component_based: false,
				},
				{
					name: "minecraft:diamond_pickaxe",
					runtime_id: 319,
					component_based: false,
				},
				{
					name: "minecraft:spruce_trapdoor",
					runtime_id: -149,
					component_based: false,
				},
				{
					name: "minecraft:warped_button",
					runtime_id: -261,
					component_based: false,
				},
				{
					name: "minecraft:unknown",
					runtime_id: -305,
					component_based: false,
				},
				{
					name: "minecraft:seagrass",
					runtime_id: -130,
					component_based: false,
				},
				{
					name: "minecraft:medicine",
					runtime_id: 605,
					component_based: false,
				},
				{
					name: "minecraft:purple_candle",
					runtime_id: -423,
					component_based: false,
				},
				{
					name: "minecraft:element_97",
					runtime_id: -108,
					component_based: false,
				},
				{
					name: "minecraft:sculk_shrieker",
					runtime_id: -461,
					component_based: false,
				},
				{
					name: "minecraft:horse_spawn_egg",
					runtime_id: 459,
					component_based: false,
				},
				{
					name: "minecraft:torchflower_crop",
					runtime_id: -567,
					component_based: false,
				},
				{
					name: "minecraft:goat_spawn_egg",
					runtime_id: 503,
					component_based: false,
				},
				{
					name: "minecraft:lava_bucket",
					runtime_id: 364,
					component_based: false,
				},
				{
					name: "minecraft:crimson_fence_gate",
					runtime_id: -258,
					component_based: false,
				},
				{
					name: "minecraft:wooden_axe",
					runtime_id: 312,
					component_based: false,
				},
				{
					name: "minecraft:element_5",
					runtime_id: -16,
					component_based: false,
				},
				{
					name: "minecraft:fermented_spider_eye",
					runtime_id: 429,
					component_based: false,
				},
				{
					name: "minecraft:waxed_weathered_copper",
					runtime_id: -346,
					component_based: false,
				},
				{
					name: "minecraft:blue_candle_cake",
					runtime_id: -441,
					component_based: false,
				},
				{
					name: "minecraft:chorus_plant",
					runtime_id: 240,
					component_based: false,
				},
				{
					name: "minecraft:dispenser",
					runtime_id: 23,
					component_based: false,
				},
				{
					name: "minecraft:melon_stem",
					runtime_id: 105,
					component_based: false,
				},
				{
					name: "minecraft:mud_brick_stairs",
					runtime_id: -480,
					component_based: false,
				},
				{
					name: "minecraft:netherite_ingot",
					runtime_id: 609,
					component_based: false,
				},
				{
					name: "minecraft:bamboo_double_slab",
					runtime_id: -521,
					component_based: false,
				},
				{
					name: "minecraft:info_update",
					runtime_id: 248,
					component_based: false,
				},
				{
					name: "minecraft:brown_mushroom_block",
					runtime_id: 99,
					component_based: false,
				},
				{
					name: "minecraft:crimson_door",
					runtime_id: 622,
					component_based: false,
				},
				{
					name: "minecraft:lit_pumpkin",
					runtime_id: 91,
					component_based: false,
				},
				{
					name: "minecraft:element_86",
					runtime_id: -97,
					component_based: false,
				},
				{
					name: "minecraft:exposed_cut_copper_slab",
					runtime_id: -362,
					component_based: false,
				},
			],
			multiplayer_correlation_id: "",
			server_authoritative_inventory: true,
			engine: "GreenFrogMCBE",
			property_data: {
				type: "compound",
				name: "",
				value: {},
			},
			block_pallette_checksum: [0, 0],
			world_template_id: "00000000-0000-0000-0000-000000000000",
			client_side_generation: false,
		});
	}
}

module.exports = ServerStartGamePacket;
