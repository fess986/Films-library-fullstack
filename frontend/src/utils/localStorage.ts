import { storageName } from '../const/const'

class localStore {
  private storageName: string
  constructor(storageName: string) {
    this.storageName = storageName
  }

  setItem(value: unknown) {
    localStorage.setItem(this.storageName, JSON.stringify(value))
  }

  getItem() {
    const userData = localStorage.getItem(this.storageName)
    return userData ? JSON.parse(userData) : null
  }

  removeItem() {
    localStorage.removeItem(this.storageName)
  }
}

const local = new localStore(storageName)
export default local
