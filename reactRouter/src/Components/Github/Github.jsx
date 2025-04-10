import React from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData();
//   const [data,setData] = useState([]);
//     useEffect (()=>{
//         fetch('https://api.github.com/users/Burhanuddin-Kachwala')
//         .then(res => res.json())
//         .then(res =>{
//             setData(res);            
//         })
//     },[]);

    console.log(data);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-2xl rounded-2xl mb-3 text-gray-500">
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-24 rounded-full shadow-md mb-4"
        src={data.avatar_url}
        alt="User Avatar"
      />
      <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
      <p className="text-gray-500">@{data.login}</p>
      {data.bio && <p className="text-center mt-2 text-gray-600">{data.bio}</p>}
    </div>

    <div className="grid grid-cols-2 gap-4 mt-6 text-center">
      <div>
        <p className="text-gray-700 font-semibold">Followers</p>
        <p className="text-xl font-bold">{data.followers}</p>
      </div>
      <div>
        <p className="text-gray-700 font-semibold">Following</p>
        <p className="text-xl font-bold">{data.following}</p>
      </div>
      <div>
        <p className="text-gray-700 font-semibold">Public Repos</p>
        <p className="text-xl font-bold">{data.public_repos}</p>
      </div>
      <div>
        <p className="text-gray-700 font-semibold">Public Gists</p>
        <p className="text-xl font-bold">{data.public_gists}</p>
      </div>
    </div>

    {/* {data.location && (
      <div className="mt-6 text-center text-gray-600">
        📍 {data.location}
      </div>
    )}
    {data.blog && (
      <div className="mt-2 text-center">
        <a
          href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 Visit Blog
        </a>
      </div>
    )} */}
  </div>
);
    
 
}

export default Github

export const gitHubInfoLoader = async ()=>{
    const reponse = await fetch ('https://api.github.com/users/Burhanuddin-Kachwala')
    return reponse.json();
  }