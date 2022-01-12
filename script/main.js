
let pt = document.getElementById('Pt')
let en = document.getElementById('En')
let botao = document.getElementById('b');

let list1 = new Array;
let list2 = new Array;
let list3 = new Array;

pt.checked = true
pt.onclick = function(){
    pt.checked = true
}
en.onclick = function(){
    en.checked = true
}

if(pt.checked == true){
    list1 = ['Era um vez uma pessoa chamada, ', 'A tarde estava ensolara na cidade de ', 'A chuva caia em cima de ']
    list2 = [', que estava cansada e decidiu dormir ', ', que tentou achar um lugar para ficar confortavel ', ', que decidiu sair para correr ']  
    list3 = ['... acabou caindo e quebrando o braço.', '... então deitou e dormiu.', '... então teve que voltar para a casa']      
}

en.addEventListener('change', ()=>{
    pt.checked = false;
    list1 = ['Once upon a time there was a person called ', 'The afternoon was sunny in city where lived ', 'The rain fell over ']
    list2 = [', who was tired and decided to sleep ', ', who tried find a place for stay confortable ', ', they decided to go out for to run ']
    list3 = ['... ended up falling and breaking his arm.', '... then lay down and slept.', '... then had to back for home']
})
pt.addEventListener('change', ()=>{
    en.checked = false;

    list1 = ['Era um vez uma pessoa chamada, ', 'A tarde estava ensolara na cidade de ', 'A chuva caia em cima de ']
    list2 = [', que estava cansada e decidiu dormir ', ', que tentou achar um lugar para ficar confortavel ', ', que decidiu sair para correr ']  
    list3 = ['... acabou caindo e quebrando o braço.', '... então deitou e dormiu.', '... então teve que voltar para a casa']
})   




botao.addEventListener('click', ()=>{
    part1= Math.floor(Math.random() * list1.length);
    part2= Math.floor(Math.random() * list2.length);
    part3= Math.floor(Math.random() * list3.length);

    try{
    let nome = document.getElementById('name').value;
    if(!nome | !/^\S+$/.test(nome) )throw new Error('Nome necessário!')
        document.getElementById('est').textContent = list1[part1] + nome + list2[part2] + list3[part3];
        document.getElementById('error').textContent = null
    }catch(error){
        document.getElementById('error').textContent = error.message
    }
});