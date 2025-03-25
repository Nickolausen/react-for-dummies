/* Anche se qui in chiaro a scopo didattico, è sempre bene nascondere questa informazione! */
let apiKey = "51cbb90e080a960a4193839cbd45273a" 
let albumId = "72177720320089939"
let userId = "201366372%40N03"

export const QUERY_URL = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1`
export const PICTURES_URL = (server, id, secret) => `https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg`