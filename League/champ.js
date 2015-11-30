
exports.champ = (api, specifiers, res)=>{

    api.getChampionData(specifiers.opt, (champs){
        champ = champs.data[specifiers.name]

        // CHAMP IMAGES TO USE FOR SLACK
        champ.images.links = {
            "load" : "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champ.name + "_" + skin + ".jpg",
            "square" : "http://ddragon.leagueoflegends.com/cdn/" + league_v.n.champion + "/img/champion/" + champ.images.full ,
            "sprite" : "http://ddragon.leagueoflegends.com/cdn/" + league_v.n.champion + "/img/sprite/"
        }

        basic = {
            "fallback": "Basic champ information",
            "title": "Basic information",
            "text": "Name: " + champ.name + " " + champ.title
        }

        image = {
            "fallback": "Champ image"
            "image_url": champ.image.link.square
        }

        passive = {
            "fallback": "Champ Passive",
            "title": "Passive",
            "text": champ.passive.name + ": " + champ.passive.descrition

        }

        spells = {
            "fallback": "Champ Spells",
            "title": "Spells",
            "text": ""

        }

        //Assemble the champion data parts in slack format
        saybot = {
            "text": "Champ Info",
            "username": "LoL-champ",
            "icon_emoji": ":champ:"
            "attachments": [basic, image, passive, spells, ]
        }


        res.JSON(saybot)
    })
}






//Make attachments for each data set

// {
//     "fallback": "Required plain-text summary of the attachment.",
//     "color": "#36a64f",
//     "pretext": "Optional text that appears above the attachment block",
//     "author_name": "Bobby Tables",
//     "author_link": "http://flickr.com/bobby/",
//     "author_icon": "http://flickr.com/icons/bobby.jpg",
//     "title": "Slack API Documentation",
//     "title_link": "https://api.slack.com/",
//     "text": "Optional text that appears within the attachment",
//     "fields": [
//         {
//             "title": "Priority",
//             "value": "High",
//             "short": false
//         }
//     ],
//     "image_url": "http://my-website.com/path/to/image.jpg",
//     "thumb_url": "http://example.com/path/to/thumb.png"
// }
