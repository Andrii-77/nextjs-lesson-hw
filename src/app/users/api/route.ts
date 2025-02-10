
// http://localhost:3000/users/api  [GET]  - функція буде спрацьовувати, якщо хтось, коли наш додаток запущений
// (сервер працює), буде звертатись до нашого доменного імені (в даному випадку по вказаній урлі), і це все буде
// гетовий метод (фетчом гетовий запит).


// export async function GET(request: Request, response: Response){

// Це ще можна описати не функ-єю, а константою:
export const GET = async (request: Request, response: Response) =>{


    console.log('GET request route handler');


    // const users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    // return Response.json(users);


    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    console.log(request);
    console.log(response);

    // Ми можемо мати доступ до хедерів: чи змінити щось, чи щось додати до хедера, чи наповнити хедери чимось, або
    // в респонсі повернути додаткові хедери, чи просто доступитись, для того, щоб щось зчитати:
    // request.headers.set('Accept', 'application/json')
    // response.headers.set('XXX', 'dhkfldgjfd')
    return Response.json(users);


    // return Response.json({message: request.url, status: 200});
//     це для перевірки чи працює сервер і урла по http://localhost:3000/users/api  це наз-ся health check.
}

// Цю штуку викор-ють лише для 2-ох варіацій:
// 1). Коли це буде прошарок, який спроможний хайдити (скривати) інф-ію про якій ключики ітд., бо він знаходиться на
// сервері, а до сервера жоден хакер напряму немає доступу. Сервер надсилає відповіді обробляючи все на собі.
// 2). Коли ви робите health check.
// 3). Ви можете зробити редірект на якусь урлу. Але для цього існують інші механізми. Але таке тут можливо.
// Знати ці механізми корисно, бо можливо в майбутньому це знадобиться використовувати.


// http://localhost:3000/users/api  [POST] - робим обробник на цю урлу, який буде працювати постовим http-методом.
// З браузера ми вже її неспроможні зробити, доведеться заюзати постмен.
export const POST = () => {
    console.log('POST request route handler');
    return Response.json({message: 'Request route handler POST'});
}