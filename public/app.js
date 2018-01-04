const xhr = new XMLHttpRequest();

const getRest = () => {
    let data = [];
    xhr.open('GET', 'http://rest.learncode.academy/api/clynk/signup')

    xhr.onloadend = function() {
        if (this.status == 200){
            data = JSON.parse(this.responseText);
            data.forEach( function(d){
                if(d.name) {
                    const li = document.createElement('li');
                    li.innerText = d.name;
                    document.getElementById('dataNames').appendChild(li)
                }

            })
        }
        setTimeout(function(){
            $(progressPB).fadeOut(1000)
        },1000)
    }

    xhr.onload = () => document.getElementById('restPB').style.width = '100%';

    xhr.send();
}


getRest()