import React, { useState } from 'react';
import { Paragraph } from '../../Atoms';
// import arrayShuffle from 'array-shuffle';
import './InputSection.css';

function InputSection({ data }) {
  const [noOfGroups, setNoOfGroups] = useState(0);
  const [playerPerTeam, setPlayerPerTeam] = useState(0);
  const [teams, setTeams] = useState([]);

  // function shuffle(array) {
  //   let i = 0,
  //     randomIndex;

  //   for (; i != 0; i++) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const teamSpliter = (noOfGroups = 0, playerPerTeam = 0, data) => {
    //randomize data
    const temArr = shuffle(data);
    const teamDivided = [];

    // const arrLength = data.length / noOfGroups;
    const divider =
      playerPerTeam != 0 ? playerPerTeam : data.length / noOfGroups;

    let tempArray;
    for (let i = 0; i < temArr.length; i += divider) {
      tempArray = temArr.slice(i, i + divider);
      //         console.log(tempArray)
      teamDivided.push(tempArray);
    }

    setTeams(teamDivided);
  };

  // teamSpliter(0, 2, data);

  // const teamSpliter = (noOfGroups=0, playerPerTeam = 0, data) => {
  //   //randomize data
  //   const temArr = arrayShuffle(data);
  //   console.log(playerPerTeam);

  //   // const arrLength = data.length / noOfGroups;
  //   const divider = playerPerTeam != 0 ? playerPerTeam : data.length / noOfGroups;
  //   console.log(`divider:32`, divider);
  //   let tempArray;
  //   for (let i = 0; i < temArr.length; i += divider) {
  //     tempArray = temArr.slice(i, i + divider);
  //     // const arrItems = tempArray.map((ele, index) => <li id={index}>{ele}</li>);
  //     // console.log(`arrItems`, arrItems)
  //     console.log(`tempArray`, tempArray);
  //   }
  //   setTeams([...teams, tempArray]);
  // };

  // teamSpliter(noOfGroups, data);

  const groupHandler = (e) => {
    e.preventDefault();
    setNoOfGroups(parseInt(e.target.value));
    setPlayerPerTeam(0);
    teamSpliter(parseInt(e.target.value), 0, data);
  };

  const playerHandler = (e) => {
    e.preventDefault();
    setPlayerPerTeam(parseInt(e.target.value));
    setNoOfGroups(0);
    teamSpliter(0, parseInt(e.target.value), data);
  };

  console.log(teams);

  return (
    <>
      <Paragraph text="Number of groups" />
      <form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          teamSpliter(noOfGroups, playerPerTeam, data);
        }}
      >
        <label>
          Number of Teams:
          <input
            type="number"
            name="noOfTeams"
            value={noOfGroups}
            max={data.length}
            onChange={groupHandler}
          />
        </label>
        <button type="submit">Submit</button>
        <Paragraph text="or" />
        <label>
          Number of Players:
          <input
            type="number"
            name="noOfPlayers"
            value={playerPerTeam}
            onChange={playerHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {teams.map((team, teamsIndex) => {
        return (
          <ul id={teamsIndex}>
            {team.map((teamEle, teamIndex) => (
              <li id={teamIndex}>{teamEle}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

export default InputSection;
