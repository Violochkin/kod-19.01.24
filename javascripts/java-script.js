document.addEventListener("DOMContentLoaded", function() { 
    alert('Привет Дизпрог, у нас новая эра с js'); 

    alert(3 + 1 + 2); // числовое выражение 
    alert("3 + 1 + 2"); // строка, воспринимается как текст 
    
    let message; 
    message = 'Hello!';  
    alert(message); // показывает содержимое переменной*

    let user = 'John';
    let age = 25;
    let message = 'Hello!';
    alert( message + user + age );

    alert ('viola' / 2 )
 
    let str = "Привет viola";
    let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
    alert (phrase); 

    alert( `результат: ${1 + 2}` ); // результат: 3 (вставляем выражение)

    let isGreater = 4 > 1;
    alert( isGreater ); // true (результатом сравнения будет "да")

    let x = 5;
    let y = 10;
    let z = x > y;
    console.log(z); 

    let temperature = 25;
    let isHot = temperature > 30 ? "Горячо" : "Не горячо";
    alert(isHot); // Вывод: Не горячо

    let age = '5';
    alert (age); // выведет 5, но если ничего 'underfiend' 

    let age = prompt( 'Сколько тебе лет?', 100 );
    alert( `Тебе ${age} лет!` ); // Тебе 100 лет!

    let userName = prompt( "Введите ваше имя:" );
    alert( "Привет, " + userName + "!" ); 

    let userAge = prompt("Введите ваш возраст:" );
    let ageNextYear = parseInt(userAge) + 1;
    alert( "В следкющем году вам будет" + ageNextYear + "лет." ); 

    let userAnswer = prompt("Вы согласны с условиями использования? (да/нет)"); 
 
    if (userAnswer.toLowerCase() === "да") { 
    alert("Спасибо за согласие!"); 
    } else if (userAnswer === null) { 
    alert("Операция отменена"); 
    } else { 
    alert("Вы отказались от условий использования."); 
    }

    let  str = 'abcde';
    alert(str[0]); //выведем букву 'a'
    alert(str[1]); //выведем букву 'b'
    alert(str[4]); //выведем букву 'e'




    alert( 2 > 1 );  // true 
    alert( 2 == 1 ); // false 
    alert( 2 != 1 ); // true 

    let result = 5 > 4; // результат сравнения присваивается переменной result
    alert( result ); // true

    alert( 'Э' > 'Б' ); // true
    alert( 'Коты' > 'Кода' ); // true
    alert( 'Сонный' > 'Сон' ); // true

    alert( '2' > 1 ); // true, строка '2' становится числом 2

    alert( true == 1 ); // true (true == (=) 1)
    alert( false == 0 ); // true (false == (=) 0)

    let a = 0;
    alert( Boolean(a) ); // false
 
    let b = "0";
    alert( Boolean(b) ); // true

    alert(a == b); // true!

    alert( 0 == false ); // true
    alert( '' == false ); // true

    alert( 0 === false ); // false, так как сравниваются разные типы

    alert( null === undefined ); // false
    alert( null == undefined ); // true

    alert( null > 0 );  // (1) false
    alert( null == 0 ); // (2) false
    alert( null >= 0 ); // (3) true (cравнения преобразуют null в число, рассматривая его как 0) 

    alert( undefined > 0 ); // false (1) (значение undefined несравнимо с другими значениями)
    alert( undefined < 0 ); // false (2)   (сравнение undefined с нулём всегда ложно)
    alert( undefined == 0 ); // false (3) 

    let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
    if (year == 2015) alert( 'Вы правы!' );

    if (year == 2015) {
        alert( "Правильно!" );
        alert( "Вы такой умный!" ); // если мы хотим выполнить более одной инструкции, то нужно заключить блок кода в фигурные скобки
    }

    let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

    if (year == 2015) {
      alert( 'Да вы знаток!' ); // инструкция if может содержать необязательный блок «else» («иначе»). он выполняется, когда условие ложно.
    } else {
      alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
    }

    let year = prompt('В ECMAScript-2015?', '2010');
    let period = (year == 2015);
    if (period) {
    alert( 'Да вы знаток!' );
    } 

    else {
    alert( 'А вот и неправильно!' ); 
    }
    
    let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', ''); // когда нужно проверить несколько вариантов условия. для этого используется блок else if.

    if (year < 2015) {
      alert( 'Это слишком рано...' );
    }
    else if (year > 2015) {
      alert( 'Это поздновато' );
    }
    else {
      alert( 'Верно!' );
    }

    let age = prompt('Сколько вам лет?', '');

    if (age > 18) {
    accessAllowed = true;
    } else {
    accessAllowed = false;
    }alert(accessAllowed);

    let result = условие ? значение1 : значение2;
    let accessAllowed = (age > 18) ? true : false;

    let age = prompt('Возраст?', 18); // последовательность операторов вопросительного знака ? позволяет вернуть значение, которое зависит от более чем одного условия

    let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
    (age < 100) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

    alert( message );

    if (age < 3) {
        message = 'Здравствуй, малыш!'; // при использовании if..else
      } else if (age < 18) {
        message = 'Привет!';
      } else if (age < 100) {
        message = 'Здравствуйте!';
      } else {
        message = 'Какой необычный возраст!';
      }

    let company = prompt('Какая компания создала JavaScript?', ''); // иногда оператор «вопросительный знак» ? используется в качестве замены if

    (company == 'Netscape') ?
    alert('Верно!') : alert('Неправильно.');

    let company = prompt('Какая компания создала JavaScript?', '');

    if (company == 'Netscape') {
    alert('Верно!');
    } else {
    alert('Неправильно.');
    }

    в JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).

    result = a || b; // || (ИЛИ)

    alert( true || true );   // true
    alert( false || true );  // true
    alert( true || false );  // true
    alert( false || false ); // false

    if (1 || 0) { // работает как if( true || false )
      alert( 'truthy!' );
    }
      
    alert( 1 || 0 ); // 1
    alert( true || 'no matter what' ); // true

    alert( null || 1 ); // 1 (первое истинное значение)
    alert( null || 0 || 1 ); // 1 (первое истинное значение)
    alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

    let currentUser = null;
    let defaultUser = "John";

    let name = currentUser || defaultUser || "unnamed";
    alert( name ); // выбирается "John" – первое истинное значение

    let x;
    true || (x = 1);
    alert(x); // undefined, потому что (x = 1) не вычисляется

    result = a && b; // && (И)

    alert( true && true );   // true
    alert( false && true );  // false
    alert( true && false );  // false
    alert( false && false ); // false

    let hour = 12;
    let minute = 30;

    if (hour == 12 && minute == 30) {
      alert( 'The time is 12:30' );
    }

    if (1 && 0) { // вычисляется как true && false
        alert( "не сработает, так как результат ложный" );
    }

    // Если первый операнд истинный,
    // И возвращает второй:
    alert( 1 && 0 ); // 0
    alert( 1 && 5 ); // 5

    // Если первый операнд ложный,
    // И возвращает его. Второй операнд игнорируется
    alert( null && 5 ); // null
    alert( 0 && "no matter what" ); // 0

    result = !value; // ! (НЕ)

    alert( !true ); // false
    alert( !0 ); // true

    let user = {       // объект
        name: "John",  // под ключом "name" хранится значение "John"
        age: 30        // под ключом "age" хранится значение 30
    };

    // получаем свойства объекта:
    alert( user.name ); // John
    alert( user.age ); // 30

    let user = {
        name: "John",
        age: 30,
        "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
    };

    const user = {
        name: "John" // объект, объявленный через const, может быть изменён.
    };
      
    user.name = "Pete"; // (*)*alert(user.name); // Pete
    let user = {};

    // присваивание значения свойству
    user["likes birds"] = true;
    // получение значения свойства
    alert(user["likes birds"]); // true
    // удаление свойства
    delete user["likes birds"];

    let user = {
        name: "John",
        age: 30
    };
    let key = prompt("Что вы хотите узнать о пользователе?", "name");
    
    // доступ к свойству через переменную
    alert( user[key] ); // John (если ввели "name")

    let fruit = prompt("Какой фрукт купить?", "apple");

    let bag = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
    };

    alert( bag.apple ); // 5, если fruit="apple"

    let fruit = 'apple';
    let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5

    function makeUser(name, age) {
        return {
          name, // то же самое, что и name: name
          age   // то же самое, что и age: age
          // ...
    };}

    // эти имена свойств допустимы
    let obj = {
    for: 1,
    let: 2,
    return: 3
    };
  
    alert( obj.for + obj.let + obj.return );  // 6

    let obj = {};
    obj.__proto__ = 5; // присвоим число
    alert(obj.__proto__); // [object Object], значение - это объект, т.е. не то, что мы ожидали

    let user = { name: "John", age: 30 }; // обратите внимание, что слева от оператора in должно быть имя свойства. 

    alert( "age" in user ); // true, user.age существует
    alert( "blabla" in user ); // false, user.blabla не существует

    let obj = {
        test: undefined
    };
      
    alert( obj.test ); //  выведет undefined, значит свойство не существует?
    alert( "test" in obj ); // true, свойство существует!
      
};
