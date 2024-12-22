import './LyricsSearch.css'

function LyricsSearch() {
    return (
        <div className='search-container'>
            <h2>Lyrics Search</h2>
            <form>
                <input type='text' placeholder='Artist Name' requried/>
                <input type='text' placeholder='Song Name' requried/>
                <button type='submit'>Search</button>
            </form>

            <hr/>
            <pre>Content</pre>
        </div>
    )
}

export default LyricsSearch