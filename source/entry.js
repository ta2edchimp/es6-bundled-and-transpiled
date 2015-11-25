import { InheritedClass } from './components/classes';

export class MainClass {
  constructor () {
    console.log('MainClass instantiation.');
  }

  doStuff ({ one, two, three } = { one: 1, two: 2, three: 3 }) {
    console.log('MainClass::doStuff invoked with args', { one }, { two }, { three });
    let opts = { one, two, three };
    let myInhClass = new InheritedClass(opts);
    myInhClass.doStuff(opts);
  }
}
