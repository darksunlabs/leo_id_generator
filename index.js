// aleo ids are of the form: aleo1vgdqhep7fpflj0yslgv05nflv7xdh5sexfvqpe6qav5g56x86grsr8l8m8

const to = 'aleo1vgdqhep7fpflj0yslgv05nflv7xdh5sexfvqpe6qav5g56x86grsr8l8m8';
const from = 'aleo1zjk0syd9jfkedc2tjklhcfc4qqmnyep3v393twywuya08yh4dgzq8wx8jd';
const count = 13; //assuming the user has generated 13 ids before
                    // this requires a mapping to exist to keep a track of such count 
                    // for every user

function getLeoId(to, from, count){
    var now = Date.now().toString();
    while (now.length < 15){
        now = '0'.concat(now);
    }
    var count_str = count.toString();
    while (count_str.length < 6){
        count_str = '0'.concat(count_str);
    }

    console.log(to.length);
    console.log(from.length);
    console.log(now);



    const id = 'aleo'.concat(from.substring(5,24).concat(count_str).concat(to.substring(37,56)).concat(now));
    return id;
}

const id = getLeoId(to,from, count);
console.log(id);
