//Отработка изученного материала на работу с DOM
/*
№1

Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
*/
// let elem1_input = document.querySelector('.input_elem');
// let elem1_par=document.querySelector("#elem1_p");
// elem1_input.addEventListener('blur', function(){
//     elem1_par.textContent+=elem1_input.value ;
// })

/*
№2

Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
*/
// let but= document.querySelector("#button")
// let elems_input = document.querySelectorAll('.input_elem');
// let elem1_par=document.querySelector("#elem1_p");
// let sum=0;
// but.addEventListener('click', function(){
//     for(let elem of elems_input){
//         sum=+elem.value+sum;
//     }
//     elem1_par.textContent=sum;
// })

/*
№3

Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let sum=0;
// elem1_input_id.addEventListener('blur', function(){
//     for(let i=0; i<elem1_input_id.value.length; i++){
//         sum=+elem1_input_id.value[i]+sum;
//     }
//     elem1_input_id.value=sum;
// })

/*
№4

Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let sum=0;
// let cout=0;
// elem1_input_id.addEventListener('blur', function(){
//     let arr=elem1_input_id.value.split(',');
//     for(let i=0; i<arr.length; i++){
//         sum=+arr[i]+sum;
//         cout+=1
//     }
//     elem1_input_id.value=sum/cout;
// })

/*
№5

Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let elem2_input_id = document.querySelector('#input_elem_id_2');
// let elem3_input_id = document.querySelector('#input_elem_id_3');
// let elem4_input_id = document.querySelector('#input_elem_id_4');
// elem1_input_id.addEventListener('blur', function(){
//     let arr=elem1_input_id.value.split(' ');
//         elem2_input_id.value=arr[0];
//         elem3_input_id.value=arr[1];
//         elem4_input_id.value=arr[2];
// })

/*
№6

Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество 
автоматически стали записанными с большой буквы (в этом же инпуте).
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// elem1_input_id.addEventListener('blur', function(){
//     this.value=this.value.split(' ').map(elem=>elem[0].toUpperCase() + elem.slice(1)).join(' ')
// })

/*
№7

Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// elem1_input_id.addEventListener('blur', function(){
//     this.value = this.value.split(' ').length;
// })

/*
№8

Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// elem1_input_id.addEventListener('blur', function(){
//     this.value = this.value.split('.').reverse().join('-');
// })

/*
№9

Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// elem1_input_id.addEventListener('click', function(){
//     console.log(this.value==this.value.split('').reverse().join(''));
// })

/*
№10

Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// elem1_input_id.addEventListener('blur', function(){
//     this.value = this.value.includes('3');
// })

/*
№11

Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
*/
// let elems_input_class = document.querySelectorAll('.elem1_class_p');
// let but= document.querySelector("#button")
// let count=1;
// but.addEventListener('click', function(){
//     for (let elem of elems_input_class){
//         elem.textContent+= count;
//         count+=1;
//     }
// })

/*
№12

Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
*/
// let a_ssylk=document.querySelectorAll('a');
// for (let elem of a_ssylk){
//     console.log(`(${elem.href})`)
// }

/*
№13

Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
*/
// let a_ssylk=document.querySelectorAll('a');
// for (let elem of a_ssylk){
//     if(elem.href.includes('http://')){
//         console.log(elem.innerHTML= elem.href + ' &rarr;'); 
//     }
// }

/*
№14

Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
*/
// let elems_class_p = document.querySelectorAll('.elem1_class_p');
// for (let elem of elems_class_p){
//     elem.addEventListener('click', function(){
//         elem.textContent= Number(elem.textContent) **2;
//     })
// }

/*
№15

Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// elem1_input_id.addEventListener('blur', function(){
//     let data = elem1_input_id.value.split('.').reverse().join(',');
//     let day = new Date(data).getDay();
//     elem1_input_id.value = days[day]
// })

/*
№16

Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let butplus1 = document.querySelector("#button1");
// let butminus1 = document.querySelector("#button2");
// butplus1.addEventListener('click', function(){
//     elem1_input_id.value = +elem1_input_id.value+1;
// })
// butminus1.addEventListener('click', function(){
//     if(elem1_input_id.value>0) elem1_input_id.value = +elem1_input_id.value-1;
// })

/*
№17

Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
*/
// let elem1_input_id = document.querySelector('#input_elem_zad16');
// let elems_p_class = document.querySelectorAll('.elem1_class_p');
// for (let elem of elems_p_class){
//     elem.addEventListener('click', function(){
//         elem1_input_id.value = +elem1_input_id.value+1;
// })
// }

/*
№18

На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в 
конец обрезанного текста
*/
// let divs = document.querySelectorAll("div");
// for(let elem of divs){
//     if(elem.textContent.length>10){
//         elem.textContent=elem.textContent.slice(0, 10)+'...'
//     }
// }

/*
№19

Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
*/
// let but= document.querySelector("#button");
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let sym='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let str=''
// but.addEventListener('click', function(){
//     for(let i = 0; i < 8; i++){
//         str += sym.charAt(Math.floor(Math.random() * sym.length));
//         elem1_input_id.value = str;
// }
// })

/*
№20

Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
*/
// let but= document.querySelector("#button");
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let k, temp;
// but.addEventListener('click', function(){
//     let arr=elem1_input_id.value.split('');
// 	for(let i = arr.length - 1; i > 0; i--){ //алгоритм Фишера-Йетса - прочла в интернете
// 		k = Math.floor(Math.random()*(i + 1));
// 		temp = arr[k];
// 		arr[k] = arr[i];
// 		arr[i] = temp;
// 	}
//     elem1_input_id.value=arr.join('')
// })

/*
№21

Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
*/
// let but= document.querySelector("#button");
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let elem1_p_id=document.querySelector('#elem1_p');
// but.addEventListener('click', function(){
//     elem1_p_id.textContent=(Number(elem1_input_id.value)-32)*5/9;
// })

/*
№22

Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
*/
// let but= document.querySelector("#button");
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let elem1_p_id=document.querySelector('#elem1_p');
// let fact=1;
// but.addEventListener('click', function(){
//     for(let i=1; i<=Number(elem1_input_id.value); i++){
//         fact*=i;
//     }
//     elem1_p_id.textContent=fact;
// })

/*
№23

Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
*/
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let elem2_input_id = document.querySelector('#input_elem_id_2');
// let elem3_input_id = document.querySelector('#input_elem_id_3');
// let but= document.querySelector("#button");
// let elem1_p_id=document.querySelector('#elem1_p');
// but.addEventListener('click', function(){
//     let D=Number(elem2_input_id.value)**2-4*+elem1_input_id.value*+elem3_input_id.value;
//     let x1, x2;
//     if(D>0){
//         elem1_p_id.innerHTML=`${(-Number(elem2_input_id.value)-Math.sqrt(D))/(2*+elem1_input_id.value)}-первый корень <br> ${(-Number(elem2_input_id.value)+Math.sqrt(D))/(2*+elem1_input_id.value)}-второй корень`
//     }else if(D==0){
//         elem1_p_id.innerHTML=`${-Number(elem2_input_id.value)/(2*+elem1_input_id.value)}-корень`
//     }else{
//         elem1_p_id.innerHTML="нет корней"
//     }
// })