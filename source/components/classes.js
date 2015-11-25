export class MasterClass {
  constructor (opts = {}) {
    console.log('MasterClass instantiation.', opts);
  }

  doStuff ({ one, two, three } = { one: 1, two: 2, three: 3 }) {
    console.log('MasterClass::doStuff invoked with args', { one }, { two }, { three });
  }
}

export class InheritedClass extends MasterClass {
  constructor (opts = {}) {
    super(opts);
    console.log('InheritedClass instantiation.', opts);
  }

  doStuff ({ one, two } = { one: 'one', two: 'two' }) {
    console.log('InheritedClass::doStuff invoked with args', { one }, { two });
    super.doStuff({ one, two });
  }
}
