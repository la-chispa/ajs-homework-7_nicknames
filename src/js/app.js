export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const conditions = (/[^\w-]|\d{4,}|^([\d\-_])|([\d\-_])$/g.test(this.name));
    return (!conditions);
  }
}
