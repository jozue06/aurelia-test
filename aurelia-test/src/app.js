import {TestApp} from './test-app';

export class App {

  constructor() {
    this.heading = 'test app';
    this.testList = [];
    this.TestAppDescription = '';
  }
  addTestApp() {
    if (this.TestAppDescription) {
      this.testList.push(new TestApp(this.TestAppDescription));
      this.TestAppDescription = '';
    }
  }

  removeTestApp(test){
    let index = this.testList.indexOf(test);
    if(index !== -1) {
      this.test.splice(index, 1);
    }
  

  }

}
