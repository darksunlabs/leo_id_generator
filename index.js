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

    const id = 'aleo'.concat(from.substring(5,24).concat(count_str).concat(to.substring(37,56)).concat(now));
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

    var res = "";
    var i = 9;
    while (i < 18){
        var c = (from.charCodeAt(i)).toString();
        while (c.length < 3){
            c = '0'.concat(c);
        }
        
        res = res.concat(c);
        i += 1;
    }
    res = res.concat(count_str);

    i = 29;
    while (i < 38){
        var c = (from.charCodeAt(i)).toString();
        while (c.length < 3){
            c = '0'.concat(c);
        }
        
        res = res.concat(c);
        i += 1;
    }

    res = res.concat(now);

    return res.concat('field');
}

const id_a = getLeoIdAddress(to,from, count);
console.log(id_a);

const id_f = getLeoIdField(to, from, count);
console.log(id_f)
