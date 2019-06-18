function renderHtml(data){
    var parant = document.querySelector('tbody');
    var html = '';
    document.querySelector('table').classList.remove('hide');
    for(var i=0; i<data.length; i++){
        html += '<tr>'+
                    '<td>'+ data[i].School+'</td>'+
                    '<td>'+ data[i].Program+'</td>'+
                    '<td>'+ data[i].Type+'</td>'+
                    '<td>'+ data[i].Year+'</td>'+
                '</tr>'
    }
    parant.innerHTML = html;
    //parant.insertAdjacentHTML('afterbegin',html);
}
function getDegrees(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','data/degrees.json',true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            renderHtml(response.degrees);
        }
    };
    xhr.send();
}
window.onload=function(){
    document.querySelector('button').onclick=function(){
        this.classList.add('hide');
        getDegrees();
    }
};

