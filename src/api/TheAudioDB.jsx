import React from 'react'

const theAudioDB = async (artist) => {
    try {
        const searchTerms = await fetch(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist}`);
        const searchData = await searchTerms.json();
        return searchData
    } catch (error) {
        console.log(error);
        return {artists: null}
    }
}

export default theAudioDB