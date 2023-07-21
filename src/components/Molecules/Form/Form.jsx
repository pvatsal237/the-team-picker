// import React from 'react';

// function Form() {
//   return (
//     <div>
//       <form
//         type="submit"
//         onSubmit={() => {
//           e.preventDefault();
//           teamSpliter(noOfGroups, playerPerTeam, data);
//         }}
//       >
//         <label>
//           Number of Teams:
//           <input
//             type="number"
//             name="noOfTeams"
//             value={noOfGroups}
//             min="0"
//             max={data.length / noOfGroups}
//             onChange={groupHandler}
//           />
//         </label>
//         <button type="submit">Submit</button>
//         <Paragraph text="or" />
//         <label>
//           Number of Players:
//           <input
//             type="number"
//             name="noOfPlayers"
//             value={playerPerTeam}
//             min="0"
//             max={data.length}
//             onChange={playerHandler}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;
