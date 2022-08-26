// import React from 'react'

function Api() {
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
            'X-RapidAPI-Key': 'ae1f22826emshd3c4f5f8c5a663fp175d2ejsn0525695c57d0'
        }
    };
    return (
    
    
    fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
        .then(response => response.json())
        .then(response => console.log(response.typeMatches['0']))
        .catch(err => console.error(err))
  )
}

export default Api