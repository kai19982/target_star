/**
 *@file 存放格子的位置数据
 */

class Grid {
    /**
     * 存储一个格子的位置（左上角）
     * @param {Number} x 当前格子在 Map里面的x轴坐标
     * @param {Number} y 当前格子在 Map里面的y轴坐标
     * @param {Number | null} tileX 这个格子对应的 Tile索引
     * @param {Number | null} tileY 这个格子对应的 Tile索引
     */
    constructor(x, y, tileX, tileY) {
        this.x = x
        this.y = y
        this.tileX = tileX
        this.tileY = tileY
    }
}

export class GridManager {
    #map
    #cols
    #rows

    constructor(space, cols, rows) {
        this.#map = []
        this.#cols = cols
        this.#rows = rows

        for (let i = 0; i < rows; i++) {
            let temp = []
            for (let j = 0;j< cols; j++){
                temp.push(new Grid(j * space,i * space,null,null))
            }
            this.#map.push(temp)
        }
    }

    /**
     * 获取Grid
     *
     * @param {number} x 一行的第几个格子
     * @param {number} y 一列的第几个格子
     * @returns {Grid} 返回Grid
     */
    getGrid(x,y){
        return this.#map[x][y]
    }

    /**
     * @returns {number} 返回Cols
     *
     */
    getColsNum(){
        return this.#cols
    }

    /**
     * @returns {number} 返回Rows
     *
     */
    getRowNUm(){
        return this.#rows
    }


}
