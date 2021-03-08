function mxDelExtra(str = ' ', space = ' ') {
    return ((str + ' ' + space).trim()).split(/\s+/);
}

function mxRemoveExtra(arr) {
    return arr.filter((value, pos) => {
        return arr.indexOf(value) === pos;
    });
}

function addWords(obj, wrds) {
    if(obj) {
        let arr = mxDelExtra(obj.words, wrds);
        obj.words = (mxRemoveExtra(arr)).join(' ');
    }
}

function removeWords(obj, wrds) {
    if(obj) {
        let arr = mxRemoveExtra(mxDelExtra(obj.words));
        let arrOfWrds = mxRemoveExtra(mxDelExtra(wrds));
        arrOfWrds.forEach(pos => {
            if(arr.indexOf(pos) === -1)
                return 0;
            else
                arr.splice(arr.indexOf(pos), 1);
        });
        obj.words = arr.join(" ");
    }
}

function changeWords(obj, oldWrds, newWrds) {
    if(obj) {
        let arr = mxRemoveExtra(mxDelExtra(obj.words));
        let arrOldWrds = mxRemoveExtra(mxDelExtra(oldWrds));
        let arrNewWrds = mxRemoveExtra(mxDelExtra(newWrds));
        arrOldWrds.forEach(pos => {
            if(arr.indexOf(pos) === -1)
                return 0;
            else
                arr.splice(arr.indexOf(pos), 1);
        });
        obj.words = arr.concat(arrNewWrds).join(" ");
    }
}