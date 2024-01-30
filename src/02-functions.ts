import {Friend, Colleague,EmailContact } from './myTypes'
import { friends,colleagues } from './01-basics'
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]): string[] {
    return friends.map(friend => older(friend));
}

console.log(older(friends[0]))
console.log(allOlder(friends));

function addColleague(colleaguesArray: Colleague[], name: string, department: string, email: string): void {
  let highestExtension = 0;

  colleaguesArray.forEach(colleague => {
      if (colleague.contact.extension > highestExtension) {
          highestExtension = colleague.contact.extension;
      }
  });

  const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
          email: email,
          extension: highestExtension + 1
      }
  };

  colleaguesArray.push(newColleague);
}


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

function findFriends(friendsArray: Friend[], criterion: (f: Friend) => boolean): Friend[] {
  return friendsArray.filter(criterion);
}
console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));