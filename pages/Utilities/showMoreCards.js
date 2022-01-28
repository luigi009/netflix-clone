//Condition to be able to show the movie card related to the movie you are watching
export const showMoreCards = (show, setShowMoreOrLess) => {
    if(show === true) {
        setShowMoreOrLess(true)
    } else if(show === false) {
        setShowMoreOrLess(false)
    }
}