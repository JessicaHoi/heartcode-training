// export default function Home() {
//   return(
//   <div>
//     <div className = "flex flex-col justify-centre h-dvh">

//     <div className="flex items-center justify-center min-h-screen p-4">

      
//       <p className="text-5xl font-bold text-600 animate-bounce">Don’t Do Drugs!</p>
//       <p className="text-1xl font-bold text-center animate-bounce">Drugs are bad!!!!!!!!!!</p>
//     </div>
      
      
//         <p className="font-bold text-4xl text-center">WHY ARE DRUGS HARMFUL?</p>

//         <div className="flex flex-row justify-center">
//         <p className="mb-4 text-center max-w-xl">Drugs can be harmful for a variety of reasons. Physically, they can cause severe damage to vital organs, increase the risk of diseases, and lead to addiction or overdose. Mentally, substance use can exacerbate existing issues, resulting in anxiety, depression, or psychosis. Additionally, drugs impair cognitive and motor functions, which raises the likelihood of accidents and poor decision-making. Socially, drug use can strain relationships, lead to isolation, and create legal or financial problems. Furthermore, many substances are addictive, creating a cycle of dependency that is difficult to escape, ultimately affecting all aspects of an individual's life. Overall, the negative effects of drug use extend far beyond the individual, impacting families and communities as well.</p>
//         </div>
//         <div className="flex items-center justify-center">
//       <div className="relative">
//         <img
//           src="https://media.npr.org/assets/img/2019/07/01/gettyimages-826753434_custom-4b8d6dc04d2e72b759aae4abc32570d6c84f15b9-s1100-c50.jpg"
//           alt="Animated"
//           className="w-64 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300"
//         />
//       </div>
//     </div>
//       <br></br>
//       <div className= "flex flex-row justify-center">
//         <div className="bg-white rounded-lg shadow-md p-4 max-w-xl text-center mb-4">
//           <h3 className="text-gray-700">Get Help</h3>
//           <p className="text-gray-700">
//             If you or someone you know is struggling with substance use, it's important to seek help. Reach out to a trusted friend, family member, or a professional.
//           </p>
//           <h4 className="font-bold text-lg mb-2 text-gray-700">Resources:</h4>
//         <ul className="list-disc list-inside text-gray-600">
//           <li><a href="#" className="text-blue-500 hover:underline">National Helpline</a></li>
//           <li><a href="#" className="text-blue-500 hover:underline">Support Groups</a></li>
//           <li><a href="#" className="text-blue-500 hover:underline">Educational Resources</a></li>
//         </ul>
//         </div>
//       </div>

//     </div>
//   </div>
  
  
  


// );
// }


import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["skibidi", "sigma","a flex","a vibe"];

  return (
	<div>
  	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	<h1 className="font-bold text-5xl">Taking drugs is not
      	<FlipWords words={words}/>
    	</h1>
  	</div>
	</div>
  
  )
}

