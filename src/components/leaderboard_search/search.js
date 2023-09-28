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
  const sortDropdown = document.getElementById("lb_option_select");
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
  // border-[1px], change it to just "border" after bootstrap is removed
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-6">
      <input className="p-2 h-12 w-64 md:w-1/2 rounded-md text-base bg-nord0 text-nord5 border-[1px] border-nord2 focus:outline-none focus:bg-headerFooterBlack transition duration-[470ms] ease-in-out" type="text" id="searchinput" onChange={(e) => { searchFunction(members, e, setter) }} placeholder="Search" />
      <div className="px-4 py-2 bg-nord0 text-nord4 mb-2 rounded-md flex flex-col items-center border-[1px] border-nord2">
        <span className="text-nord6 text-sm">Sort By: </span>
        <select id="lb_option_select" className="h-8 bg-nord2 text-nord5 rounded-md border-[1px] border-nord3" onChange={(e) => { chooseSort(members, setter) }}>
          <option>Score &uarr;</option>
          <option>Score &darr; </option>
          <option>Name &uarr;</option>
          <option>Name &darr;</option>
        </select>
      </div>
    </div>
  )
}