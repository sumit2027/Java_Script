    function clickHandler(color){
        return function(){
            document.body.style.backgroundColor = `${color}`
        }
    }