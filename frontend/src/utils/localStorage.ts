import { storageName } from '../const/const'

class localStore {

  private storageName: string;
  constructor(storageName: string) {
    this.storageName = storageName
  }

  setItem(value: string) {
    localStorage.setItem(this.storageName, value)
  }

  getItem() {
    return localStorage.getItem(this.storageName)
  }

  removeItem() {
    localStorage.removeItem(this.storageName)
  }
}

const local = new localStore(storageName)
export default local