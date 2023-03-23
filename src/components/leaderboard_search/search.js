import styles from "./search.module.css"


// function to sort members by name
function sortByName(members, setter, reverse = false) {
  // create a copy of members, as original array will not be modified
  let members_copy = members.filter((mem) => true);
  members_copy.sort((a, b) => a.name.localeCompare(b.name));
  if (reverse)
    members_copy.reverse();
  setter(members_copy);
}

// function to sort members by score
function sortByScore(members, setter, reverse = false) {
  let members_copy = members.filter((mem) => true);
  members_copy.sort((a, b) => {
    return b.points - a.points == 0 ? a.rank - b.rank : b.points - a.points;
  });
  if (reverse) {
    members_copy.reverse()
  }
  setter(members_copy)
}

// function to search for members by name or registration number
function searchFunction(members, e, setter) {
  const input = e.currentTarget;
  const filter = input.value.toUpperCase();
  const filteredMembers = members.filter(member => {
    return member.name.toUpperCase().includes(filter) || member.regno.toUpperCase().includes(filter);
  });
  setter(filteredMembers);
}

function chooseSort(members, setter) {
  const sortDropdown = document.querySelector(".leaderboard_sort_button");
  const sortOption = sortDropdown.options[sortDropdown.selectedIndex].value;
  switch (sortOption) {
    case "Name \u2191":
      sortByName(members, setter);
      break;
    case "Score \u2191":
      sortByScore(members, setter);
      break;
    case "Name \u2193":
      sortByName(members, setter, true);
      break;
    case "Score \u2193":
      sortByScore(members, setter, true);
      break;
  }
}


export default function LeaderboardSearch({
  members, setter
}) {
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
          <input type="text" id="searchinput" onChange={(e) => { searchFunction(members, e, setter) }} placeholder="Search" />
      </div>
      <div className={styles.buttons}>
        <div className={styles.btn_group}>
          <span style={{ color: "#ffffff", fontSize: "14px" }}>Sort By: </span>
          <select className="leaderboard_sort_button" onChange={(e) => { chooseSort(members, setter) }}>
            <option>Score &uarr;</option>
            <option>Score &darr; </option>
            <option>Name &uarr;</option>
            <option>Name &darr;</option>
          </select>
        </div>
      </div>
    </div>
  )
}