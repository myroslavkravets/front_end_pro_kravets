import React, { useState, useEffect } from 'react';

function App() {
    const [votes, setVotes] = useState(() => {
        const savedVotes = localStorage.getItem('votes');
        return savedVotes ? JSON.parse(savedVotes) : { smile1: 0, smile2: 0, smile3: 0 };
    });

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [emoji]: prevVotes[emoji] + 1,
        }));
    };

    const resetVotes = () => {
        setVotes({ smile1: 0, smile2: 0, smile3: 0 });
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Emoji Voting App</h1>
            <div>
                <button onClick={() => handleVote('smile1')}>😀 {votes.smile1}</button>
                <button onClick={() => handleVote('smile2')}>😎 {votes.smile2}</button>
                <button onClick={() => handleVote('smile3')}>😍 {votes.smile3}</button>
            </div>
            <button onClick={resetVotes} style={{ marginTop: '20px' }}>
                Reset Votes
            </button>
        </div>
    );
}

export default App;


