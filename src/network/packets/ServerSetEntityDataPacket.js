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
const PacketConstructor = require("./PacketConstructor");

let value = {};
let properties = {};
let tick = -1;
let runtime_entity_id = "";

class ServerSetEntityDataPacket extends PacketConstructor {
	/**
	 * Returns the packet name
	 * @returns {String} The name of the packet
	 */
	getPacketName() {
		return "set_entity_data";
	}

	/**
	 * Returns if is the packet critical?
	 * @returns {Boolean} Returns if the packet is critical
	 */
	isCriticalPacket() {
		return false;
	}

	/**
	 * Sets the field value for the player
	 * @param {String} field
	 * @param {Boolean} new_value
	 */
	setValue(field, new_value) {
		value[field] = new_value;
	}

	/**
	 * Returns the field value
	 * @returns {JSON}
	 */
	getFieldValue() {
		return value;
	}

	/**
	 * Sets properties for the packet
	 * @param {JSON} new_properties
	 */
	setProperties(new_properties) {
		properties = new_properties;
	}

	/**
	 * Returns the properties of the packet
	 * @returns {JSON}
	 */
	getProperties() {
		return properties;
	}

	/**
	 * Sets the current tick
	 * @param {Number} new_tick
	 */
	setTick(new_tick) {
		tick = new_tick;
	}

	/**
	 * Returns the current tick
	 * @returns {Number}
	 */
	getTick() {
		return tick;
	}

	/**
	 * Sets the runtime_entity_id
	 * @param {String} new_runtime_entity_id
	 */
	setRuntimeEntityID(new_runtime_entity_id) {
		runtime_entity_id = new_runtime_entity_id;
	}

	/**
	 * Returns the runtime entity ID of the entity.
	 * @returns {String}
	 */
	getRuntimeEntityID() {
		return runtime_entity_id;
	}

	writePacket(client) {
		client.queue(this.getPacketName(), {
			runtime_entity_id: this.getRuntimeEntityID(),
			metadata: [
				{
					key: "flags",
					type: "long",
					value: this.getFieldValue(),
				},
			],
			properties: this.getProperties(),
			tick: this.getTick(),
		});
	}
}

module.exports = ServerSetEntityDataPacket;
