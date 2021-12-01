
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const { validateSongs } = require('./middleware/songs-validation');
const { countReset } = require('console');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000."); 
});

app.get('/api/songs', (req,res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
});
app.get('/api/songs/:id', (req,res) => {
    const id = req.params.id;
    const songs = repoContext.songs.findSongById(id);
    return res.send(songs);
});

app.post('/api/songs', (req, res) => {
    const newSongs = req.body;
    const addedSongs = repoContext.products.createSongs(newSongs);
    return res.send(addedSongs);
});
