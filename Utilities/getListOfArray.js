export const getListOfArray = (array) => { 
    let genresMovie = array;

    let genresArray = [];
    for(let i in genresMovie) {
        genresArray.push(genresMovie[i].name)
    }

    return genresArray.join(", ") || "-";
}