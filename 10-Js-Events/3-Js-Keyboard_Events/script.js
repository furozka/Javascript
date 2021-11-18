// Keyboard Events

const inputBox = document.querySelector("#txtTaskName");

function eventHandler(e){
    console.log(e.type);
    e.preventDefault(); //sayfanın her submite basıldığında yenilenmemesi için kullandık
}

function eventHandler1(event){
    console.log(event.type);
    console.log(event.keyCode);
    console.log(event.target.value); //yazıldıktan sonra alınabiliyor yani key up olduğunda
}
function eventHandlerFocus(event){
    console.log(event.type);
    // console.log(event.keyCode);
    // console.log(event.target.value); //yazıldıktan sonra alınabiliyor yani key up olduğunda
    inputBox.style.backgroundColor="yellow";
}

inputBox.addEventListener('keydown',eventHandler1); //input içinde tuşa basıldığında
inputBox.addEventListener('keyup',eventHandler1); //input içinde tuş bırakıldığında
inputBox.addEventListener('keypress',eventHandler1); //input içinde bir tuşa basıldığında
inputBox.addEventListener('focus',eventHandlerFocus); //focus olunca
inputBox.addEventListener('blur',eventHandler); //focusdan çıkınca
inputBox.addEventListener('cut',eventHandler); //input içinde bir yazıyı kesince ctrl+x ile
inputBox.addEventListener('paste',eventHandler); //input içinde bir yazıyı yapıştırınca ctrl+v ile
inputBox.addEventListener('select',eventHandler);//inputboxdaki bir texti seçtiğinde

//select  için html sayfasına bootstrapten bir select kısmı ekledim
const select = document.querySelector('#select')
select.addEventListener('change',eventHandler); //select içindeki seçimimizi değiştirince tetiklenir


/////////////////////////formlarda submite basınca servere yollar actiona yazarsın vs ileriki konular
//forma ulaştık
//formun submit olayı için submit butonu ekledim ve bu butonun typesini submit yaptım
//formun actionu yokken bulunduğu sayfaya gider 
//action olarak register.aspx dersek oraya erişmeye çalışır ileriki konular... şimdilik actionu sildim
//sayfanın tekrar tekrar yenilenmemesi için e.preventDefault() kullandık
const form = document.querySelector('form');
form.addEventListener('submit',eventHandler);