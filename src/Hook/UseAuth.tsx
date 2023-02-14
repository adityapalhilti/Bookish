 import axios from 'axios';
 import { useEffect } from 'react';

 const useAuth = () => {
  
      const token = localStorage.getItem("token");

    //  const authAxios=axios.create({
    //     headers:{
    //         Authorization :`Bearer ${token}`,
    //     }
    //  })
    
    console.log(token);
    console.log(localStorage.getItem('token'))
        axios.interceptors.request.use(config => {
          config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
                
          return config;
        });
    }
    export default useAuth;

//         // axios.interceptors.request.use((request)=>{
//         //     request.headers.Authorization= `Bearer ${token}`;
//         //     return request;
//         // })


//         axios.interceptors.request.use(
//             config => {
//               const token = localStorage.getItem('token');
//               if (token) {
//                 config.headers['Authorization'] = 'Bearer ' + token
//               }
//               // config.headers['Content-Type'] = 'application/json';
//               return config
//             },
//             error => {
//               Promise.reject(error)
//             }
//           )
          
      
    
 // };
//  const token = localStorage.getItem('token');

//  export const getToken = () => localStorage.getItem("token")
//  ? (localStorage.getItem("token"))
//  : null;

// export const getAuthorizationHeader = () => `Bearer ${getToken()}`;


//      const authAxios=axios.create({
//         headers:{
//             Authorization :getAuthorizationHeader(),
//         },
//         withCredentials: true
//      });


//      const requestIntercept = authAxios.interceptors.request.use(
//         config => {
//             if (!config.headers['Authorization']) {
//                 config.headers['Authorization'] = `Bearer ${token}`;
//             }
//             return config;
//         }, (error) => Promise.reject(error)
//     );
//     const responseIntercept = authAxios.interceptors.response.use(
//         response => response,
//         async (error) => {
//             const prevRequest = error?.config;
//             if (error?.response?.status === 403 && !prevRequest?.sent) {
//                 prevRequest.sent = true;
//                 //const newAccessToken = await refresh();
//                 prevRequest.headers['Authorization'] = `Bearer ${token}`;
//                 return authAxios(prevRequest);
//             }
//             return Promise.reject(error);
//         }
//     );
//export default authAxios;



// import axios from 'axios';

// const instance = axios.create();

// instance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;




// import axios from 'axios';
// const BASE_URL = 'http://localhost:8080';

// export default axios.create({
//     baseURL: BASE_URL
// });

// const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });
// const requestIntercept = axiosPrivate.interceptors.request.use(
//     config => {
//         if (!config.headers['Authorization']) {
//             config.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('auth')).accessToken}`;
//         }
//         return config;
//     }, (error) => Promise.reject(error)
// );

// const responseIntercept = axiosPrivate.interceptors.response.use(
//     response => response,
//     async (error) => {
//         const prevRequest = error?.config;
//         if (error?.response?.status === 403 && !prevRequest?.sent) {
//             prevRequest.sent = true;
//             //const newAccessToken = await refresh();
//             prevRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('auth').accessToken}`;
//             return axiosPrivate(prevRequest);
//         }
//         return Promise.reject(error);
//     }
// );
// export {axiosPrivate};