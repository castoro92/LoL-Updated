module.exports = (app, api)=>{
    this.cache = {items:{}, champs:{}}
    var that = this;

    opt = {
        locale: "en_US",
        itemListData: ["all"],
        region: "na"
    }

    api.getItemData(opt, (err, res)=>{
        that.cache.items = res;
    })
    api.getChampionData(opt, (err, res)=>{
        that.cache.champs = res;
    })

    setTimeout((data)=>{
        console.log("CACHE", JSON.stringify(data))
        app.set("cache", data)
    }, this.cache)
}
