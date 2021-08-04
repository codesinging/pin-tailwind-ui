import menus from "../configs/menus";

class Menu {
    menus = []
    count = 0
    currentPath = ''
    currentIndex = 0

    constructor(menus) {
        this.menus = this._flat(menus)
        this.count = this.menus.length
    }

    _flat(menus){
        let arr = []
        menus.forEach(menu => {
            if (menu.children) {
                arr = arr.concat(this._flat(menu.children))
            } else {
                arr.push(menu)
            }
        })
        return arr
    }

    _path(path) {
        this.currentPath = path
        this.currentIndex = this.menus.findIndex(menu => menu.to === path)
    }

    prev(path) {
        this._path(path)
        return this.currentIndex > 0 ? this.menus[this.currentIndex - 1] : null
    }

    next(path) {
        this._path(path)
        return this.currentIndex < this.count - 1 ? this.menus[this.currentIndex + 1] : null
    }
}

export default new Menu(menus)
