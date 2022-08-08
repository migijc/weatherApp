let body=document.querySelector('body')
export default function fetchNow(searchTerm){
    async function fetchImages(searchTerm) {
        let search=searchTerm
        const result = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=8&orientation=landscape&size=large`, {
          headers: {
            Authorization: "563492ad6f9170000100000154048af08c954889b05beb82931e4f59",
          }
        });
        const data = await result.json();
        let randomNum=Math.floor(Math.random()*data.photos.length-1)+1
        body.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${data.photos[randomNum].src.original})`;

    }
    fetchImages(searchTerm)
};

// backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.photos[randomNum].src.original})`;

