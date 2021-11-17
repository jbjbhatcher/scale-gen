const notes: string[] = ['a','b','c','d','e','f','g'];
const sharps: string[] = makeSharps(notes);
const wholesAndSharps: string[] = makeWholesAndSharps();

const majScale = ['w','w','h','w','w','w','h'];
const majScaleNum = [2,2,1,2,2,2,1];

function logMajorScale() {
    // TODO: parameterize this
    var startIndex = 0;
    console.log(`root is ${wholesAndSharps[0]}`);

    
    majScaleNum.forEach((e) => {
        // TODO: rename this var :)
        const foo = startIndex += e;
        // TODO: push this to an arry, then print that arry instead
        console.log(wholesAndSharps[foo]);
    });

    console.log(`final note is ${wholesAndSharps[0]}`);
}

function makeSharps(noteArry: string[]): string[] {
    const sharps: string[] = [];
    noteArry.map((note) => {
        sharps.push(note.concat('#'));
    });
    return sharps;
}

function makeWholesAndSharps(): string[] {
    const all: string[] = [];

    notes.forEach((note) => {
        if(note === 'b') {
            all.push(note);
        } 
        else if(note === 'e') {
            all.push(note);
        } else {
            all.push(note);
            all.push(note.concat('#'));
        }
    });

    return all;
}