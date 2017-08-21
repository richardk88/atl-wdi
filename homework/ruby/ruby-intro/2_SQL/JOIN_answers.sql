-- 1
SELECT matchid, player 
FROM goal 
JOIN eteam
ON goal.teamid = eteam.id
WHERE teamname = 'Germany';

--2
SELECT id,stadium,team1,team2
FROM game
JOIN goal
ON game.id = goal.matchid
WHERE player = 'Lars Bender';

--3
SELECT player, teamid, stadium, mdate
FROM game 
JOIN goal 
ON game.id = goal.matchid
WHERE teamid = 'GER';

--4
SELECT team1, team2, player
FROM goal
JOIN game
ON game.id = goal.matchid
WHERE player LIKE 'Mario%';

--5
SELECT player, teamid, coach, gtime
FROM goal 
JOIN eteam 
ON teamid = id
WHERE gtime <= 10;

--6
SELECT game.mdate, eteam.teamname
FROM game
JOIN eteam
ON team1 = eteam.id
WHERE eteam.coach = 'Fernando Santos';

--7
SELECT goal.player
FROM goal
JOIN game
ON goal.matchid = game.id
WHERE game.stadium = 'National Stadium, Warsaw';

--8
SELECT DISTINCT player
FROM game
JOIN goal 
ON goal.matchid = game.id
WHERE (team1 = 'GER' OR team2 = 'GER')
AND teamid <> 'GER';

--9
SELECT teamname, COUNT(player) AS total_goals
FROM eteam 
JOIN goal 
ON eteam.id = goal.teamid
GROUP BY teamname;

--10
SELECT game.stadium, COUNT(player) goals_scored
FROM game
JOIN goal
ON game.id = goal.matchid
GROUP BY game.stadium;

--11 -- not working
SELECT game.id, game.mdate, COUNT(*)
FROM game
JOIN goal 
ON goal.matchid = game.id
WHERE (game.team1 = 'POL' OR game.team2 = 'POL')
GROUP BY game.id, game.mdate
ORDER BY game.id;

--12
SELECT matchid,mdate,COUNT(teamid)
FROM game JOIN goal ON matchid=id
WHERE (teamid='GER' )
GROUP BY matchid,mdate

--13
SELECT mdate, 
team1, SUM(CASE WHEN teamid=team1 THEN 1 ELSE 0 END) score1,
team2, SUM(CASE WHEN teamid=team2 THEN 1 ELSE 0 END) score2
FROM game 
LEFT JOIN goal 
ON matchid = id 
GROUP BY mdate,matchid,team1,team2