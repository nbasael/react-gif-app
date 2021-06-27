export const GetGifs = async categoria => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=iMhjCfo1rTM1RyItpGV8MjIHnTz2SEzH&q=' + categoria + '&limit=20';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });
    return gifs;
};
