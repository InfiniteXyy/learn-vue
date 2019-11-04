export class Message {
  constructor(content) {
    this.id = Date.now();
    this.content = content;
    this.isBot = false;
    this.isTyping = false;
  }
  setBot() {
    this.isBot = true;
    return this;
  }
  setTyping() {
    this.isTyping = true;
    return this;
  }
}
