// import React, { useState, useEffect } from 'react';

// const NFTRow = (props) => {

//     const [owner, setOwner] = useState('')

//     useEffect(() => {
//         const load = async () => {
//             try {
//                 let owner = await props.contract.methods.ownerOf(props.id).call();
//                 setOwner(owner)
//             } catch {
//                 setOwner("Loading...")

//                 setInterval(()=> {
//                     load()
//                 }, 2000)
//             }
//         }
//         load()
//     }, [])

//   return (
//     <tr><td>{props.id}</td><td>{owner}</td></tr>
//   )
// };

// export default NFTRow;
