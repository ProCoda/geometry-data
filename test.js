const index = require('./index.js');
(async () => {
    console.log('wirkig');
    
    const level = await index.findLevel('27732941');
    const leaderboard = await level.fetchLeaderBoard();
    console.log(`Difficulty: ${level.difficulty}`);
    for(var leaderBoardProfile in leaderboard){
        console.log(`${leaderboardProfile.rank}: ${leaderBoardProfile.profile.username}`);
    }
})();