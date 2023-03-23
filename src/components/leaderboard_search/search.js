import styles from './search.css'


// function to sort members by name
function sortByName(members, setter, reverse = false) {
  members.sort((a, b) => a.name.localeCompare(b.name));
  if (reverse)
    members.reverse()
  setter(members)
}

// function to sort members by score
function sortByScore(members, setter, reverse = false) {
  members.sort((a, b) => {
    return b.score - a.score
  });
  if (reverse)
    members.reverse()
  setter(members)
}

// function to search for members by name or registration number
function searchFunction(members, e) {
  const input = e
  const filter = input.value.toUpperCase();
  const filteredMembers = members.filter(member => {
    return member.name.toUpperCase().includes(filter) || member.regNo.toUpperCase().includes(filter);
  });
  return filteredMembers
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
  }
}


export default function LeaderboardSearch({
  members, setter
}) {
  return (
    <div className={styles.container}>
      <div className={styles.container_btn}>
        <div className={styles.searchbar}>
          <div className={styles.search}>
            <input type="text" id="searchinput" onChange={() => { searchFunction(members, this) }} placeholder="Search" />
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.btn_group}>
            <span style={{color: "#ffffff", fontSize: "14px"}}>Sort By: </span>
            <select className="leaderboard_sort_button" onChange={() => { chooseSort(members, setter) }}>
              <option>Name &uarr;</option>
              <option>Name &darr;</option>
              <option>Score &uarr;</option>
              <option>Score &darr; </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}