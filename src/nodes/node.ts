import NodeType from './type.js';

/**
 * Node Class as base class for TextNode and HTMLElement.
 */
export default abstract class Node {
	abstract nodeType: NodeType;
	public childNodes = [] as Node[];
	abstract text: string;
	abstract rawText: string;
	// abstract get rawText(): string;
	abstract toString(): string;
	public get innerText() {
		return this.rawText;
	}
	public get textContent() {
		return this.rawText;
	}
	public set textContent(val: string) {
		this.rawText = val;
	}
	public position?: { start: number, lengthStartTag?: number, length: number }
}
