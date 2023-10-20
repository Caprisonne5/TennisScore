import Player from "./Player";

let PlayerRepository = [];

const nico = new Player(1, "Nicolas");
const mat = new Player(2, "Mateo");
const jul = new Player(3, "Julian");

nico.addMatch(2, 1);
mat.addMatch(1, -1);
nico.addStrengths(80, 50, 40, 80, 50);
mat.addStrengths(70,70,40,60,60);

PlayerRepository.push(nico);
PlayerRepository.push(mat);


export default PlayerRepository;
