export const getResultSearch = () => {
    let allItemResults = typeof document !== undefined ? document.querySelectorAll(".movieRow--item--result") : null;
    let numberOfResults = [];
    numberOfResults.push(allItemResults.length && allItemResults)

    for (let i = 0; i < numberOfResults?.length; i++) {
      return numberOfResults[i]?.length
    }
}