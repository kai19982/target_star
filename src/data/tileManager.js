/**
 * @file 保存 Tile 在图中的位置
 */

/**
 * 单个 Tile 在图片的位置
 */
class Tile {
    /**
     * Tile 在贴图里面的位置，以及保存它的路径偏移量（贴纸位置和路径偏移量无关，后者是保存它显示在屏幕的位置）
     *
     * @param {number} x tile 在贴图里的起始 x
     * @param {number} y tile 在贴图里的起始 y
     * @param {boolean} isEmpty 是否是空的
     */
    constructor(x,y,isEmpty) {
        this.x = x
        this.y = y
        this.isEmpty = isEmpty
    }
}

