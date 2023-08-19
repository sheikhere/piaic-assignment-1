
interface album{
    artist:string;
    title:string;
    tracks?:number;
}
function make_a_album(artist:string,album:string,tracks?:number):album{
    const album_ : album ={
        artist:artist,
        title:album,
    } 
    if (tracks !== undefined) {
        album_.tracks=tracks ;
        
    }
    return album_;

}
const album4 : album = make_a_album('The Beatles', 'Sgt. Pepper\'s Lonely Hearts Club Band', 13);
console.log(album4);
const album5 = make_a_album('Artist 3', 'Album 3', 15);
console.log(album5);
