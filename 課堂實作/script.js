function change(index){
    const p =document.querySelector('.show-classdemo')

    switch (index) {
        case 1:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./w2/intro.html"/> '
            break;
        case 2:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./w2/pokemon.html"/> '
            break;
        case 3:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./w4/imageGallery.html"/> '
            break;
        case 4:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./w4/blog.html"/> '
            break;
        case 5:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./w5/index.html"/> '
            break;
        case 6:
                p.innerHTML = '<iframe width = "100%" height ="100%" src="./w6-ms-slideshow/index.html"/> '
                break;       
    }
}