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

  // для изменения данных в local storage - сначала данные получаются, потом модифицируются и только потом записываются, так как нельзя взаимодействовать с ним напрямую
  addFavoriteFilm(id: string) {
    const userData = this.getItem()
    if (userData) {
      if (!userData.favoriteFilms.includes(id)) {
        userData.favoriteFilms.push(id)
        this.setItem(userData)
      }
    }
  }

  removeFavoriteFilm(id: string) {
    const userData = this.getItem()
    if (userData) {
      userData.favoriteFilms = userData.favoriteFilms.filter(
        (filmId: string) => filmId !== id
      )
      this.setItem(userData)
    }
  }
}

const local = new localStore(storageName)
export default local
