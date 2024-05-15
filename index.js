// aleo ids are of the form: aleo1vgdqhep7fpflj0yslgv05nflv7xdh5sexfvqpe6qav5g56x86grsr8l8m8

const to = 'aleo1vgdqhep7fpflj0yslgv05nflv7xdh5sexfvqpe6qav5g56x86grsr8l8m8';
const from = 'aleo1zjk0syd9jfkedc2tjklhcfc4qqmnyep3v393twywuya08yh4dgzq8wx8jd';
const count = 13; //assuming the user has generated 13 ids before
                    // this requires a mapping to exist to keep a track of such count 
                    // for every user

function getLeoIdAddress(to, from, count){
    var now = Date.now().toString();
    while (now.length < 15){
        now = '0'.concat(now);
    }
    var count_str = count.toString();
    while (count_str.length < 6){
        count_str = '0'.concat(count_str);
    }
    const rand = getRandomInt(100,999);
    const id = 'aleo'.concat(from.substring(5,23).concat(count_str).concat(to.substring(37,54)).concat(now).concat(rand.toString()));
    return id;
}

function getLeoIdField(to, from, count){
    var now = Date.now().toString();
    while (now.length < 15){
        now = '0'.concat(now);
    }
    var count_str = count.toString();
    while (count_str.length < 6){
        count_str = '0'.concat(count_str);
    }
    const rand = getRandomInt(100, 999);
    console.log(rand);

    var res = "";
    var i = 0;
    while (i < 17){
        var cd1 = from.charCodeAt(9 + i);
        var cd2 = to.charCodeAt(29 + i);
        var cd3 = from.charCodeAt(39 + i);
        var cd4 = to.charCodeAt(44 + i);
        var c = '';
        var c1 = 0;
        var c2 = 0;
        if ((cd1 + cd2) % 2 == 0){
            c1 = (cd1 + cd2)/2;
        }
        else {
            var toss = getRandomInt(0, 2);
            if (toss == 1){
                c1 = (cd1 + cd2 + 1)/2;
            }
            else {
                c1 = (cd1 + cd2 - 1)/2;
            }
        }
        if ((cd3 + cd4) % 2 == 0){
            c2 = (cd3 + cd4)/2;
        }
        else {
            var toss = getRandomInt(0, 2);
            if (toss == 1){
                c2 = (cd3 + cd4 + 1)/2;
            }
            else {
                c2 = (cd3 + cd4 - 1)/2;
            }
        }
        
        if ((c1 + c2) % 2 == 0){
            c = ((c1 + c2)/2).toString();
        }
        else {
            var toss = getRandomInt(0, 2);
            if (toss == 0){
                c = ((c1 + c2 - 1)/2).toString();
            }
            else {
                c = ((c1 + c2 + 1)/2).toString();
            }
        }
        while (c.length < 3){
            c = '0'.concat(c);
        }
        
        res = res.concat(c);
        i += 1;
    }
    res = res.concat(count_str);

    

    res = res.concat(now).concat(rand.toString());

    return res.concat('field');
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

const id_a = getLeoIdAddress(to,from, count);
console.log(id_a);

const id_f = getLeoIdField(to, from, count);
console.log(id_f);
