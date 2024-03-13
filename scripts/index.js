var footer = document.querySelector('footer');
var body = document.querySelector('body');
body.style.margin = '0';
const size = {
    fontSize: 18,
    fontFamily: 'Verdana, Arial, Helvetica, sans-serif'
};
function generateFooter(contacts,title,bgcolor,fontcolor){
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.backgroundColor = bgcolor;
    footer.style.display = 'flex';
    footer.style.width = '100vw';
    footer.style.color = fontcolor;

    let div = document.createElement('div');
    div.style.width = '870px';
    div.style.color = fontcolor;
    contacts.forEach(contact => {
        let p = document.createElement('p');
        p.style.fontSize = size.fontSize + 'px';
        p.style.fontFamily = size.fontFamily;
        p.style.marginLeft = '15px';
        p.textContent = contact;
        div.appendChild(p);
    });
    footer.appendChild(div);

    let div2 = document.createElement('div');
    div2.style.height = '140px';
    div2.style.width = '650px';
    let titleElement = document.createElement('p');
    titleElement.style.fontSize = size.fontSize + 'px';
    titleElement.style.fontFamily = size.fontFamily;
    titleElement.style.float = 'right';
    titleElement.style.marginTop = '58px'
    titleElement.textContent = title;
    div2.appendChild(titleElement);
    footer.appendChild(div2);
}
//Знаю , что сочитание розового с белым такое себе, просто по настроению захотелось такое воплотить)
generateFooter(['Номер: +7(999)999-99-99\n','Эл. почта: example@gmail.com\n',
    'Адрес: г. Разработчик, ул. Подвальная, д. 5\n'], 'SiteName @2000 y.\n', 'pink', 'white');
