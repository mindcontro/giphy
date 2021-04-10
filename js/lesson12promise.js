// // console.log('Request Data')

// // setTimeout(() => {
// //     console.log('Preparing data')
// //     const backendData ={
// //         server : 'cyber',
// //         port: 2000,
// //         status : 'working'
// //     }

// //     setTimeout(() => {
// //         backendData.modified = true,
// //         console.log ('Data received', backendData)
// //     }, 2000);
// // }, 2000);


// console.log('Request Data')
// const promise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log('Preparing data..')
//         const backendData = {
//         server: 'cyber',
//         port: 2000,
//         status : 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// promise.then ((data) => {
//     // console.log('Promise resolved', data)
//     return new Promise ((resolve, reject ) => {
//         setTimeout(() => {
//             data.modified =true
//             resolve(data)
//             // reject(data)
            
//         }, 2000);
//     })
// }).then(clientData => {
//     console.log('Data recieved', clientData)
//     clientData.falsePromise =true 
//     return clientData
// }).then(data =>{
//     console.log('Modified', data)
// })


let api = "http://api.giphy.com/v1/gifs/search?q="
let key = "&api_key=vMzRkHwOCkh2yLz9kXYRVKc3no8QFYZB"



const search = async () => {
    let input = document.querySelector('#input')
    let url = api + input.value +key+ '&limit=10'

    let response = await fetch(url)
    let data = await response.json()

    let arr = data.data
    console.log(arr)

    let div = document.querySelector('.output')

    div.innerHTML = ''
    input.innerHTML = ''

    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        ifrm.src = el.embed_url
        div.append(ifrm)
    })
}   