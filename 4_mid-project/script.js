function change(index){
    const p =document.querySelector('.show-classdemo')

    switch (index) {
        case 1:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./hero/index.html"/> '
            break;
        case 2:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./resume/index.html"/> '
            break;
        case 3:
            p.innerHTML = '<iframe width = "100%" height ="100%" src="./rersonalgallery/index.html"/> '
            break;
    }
}
