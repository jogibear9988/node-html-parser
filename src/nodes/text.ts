import NodeType from './type.js';
import Node from './node.js';

/**
 * TextNode to contain a text element in DOM tree.
 * @param {string} value [description]
 */
export default class TextNode extends Node {
	public constructor(public rawText: string) {
		super();
	}

	/**
	 * Node Type declaration.
	 * @type {Number}
	 */
	public nodeType = NodeType.TEXT_NODE;

	/**
	 * Get unescaped text value of current node and its children.
	 * @return {string} text content
	 */
	public get text() {
		return this.rawText;
	}

	/**
	 * Detect if the node contains only white space.
	 * @return {bool}
	 */
	public get isWhitespace() {
		return /^(\s|&nbsp;)*$/.test(this.rawText);
	}

	public toString() {
		return this.text;
	}
}
