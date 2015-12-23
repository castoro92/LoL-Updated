module.exports = function(api){
    this.cache = {items:{}, champs:{}}
    var that = this;

    opt = {
        locale: "en_US",
        itemListData: ["all"],
        region: "na"
    }

    api.getItemData(opt).then((res)=>{
        that.cache.items = res;
    })
    api.getChampionData(opt).then((res)=>{
        that.cache.champs = res;
    })

    console.log(this.cache);

    return this.cache
}