import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

function sort<T>(array: T[], compareFunction: (a: T, b: T) => number): T[] {
    const arrayCopy = array.slice();
    arrayCopy.sort(compareFunction);
    return arrayCopy;
  }
console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))
// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);