// const url = 'https://register-and-login-with-jwt-token.p.rapidapi.com/user/login';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': 'e6f6c3969emsh5b5934ead4bf381p1574a9jsn09423f6b9d31',
// 		'x-rapidapi-host': 'register-and-login-with-jwt-token.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	},
// 	body: {
// 		username: 'hari@gmail.com',
// 		password: 'hart123'
// 	}
// };

fetch('https://reqres.in/api/users?page=2')
.then(response=> response.json())
.then(json =>{
    console.log(json)
})