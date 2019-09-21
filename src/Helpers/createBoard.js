export default (rows=0, cols=0) => {
    const board = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.random() > 0.5);            
        }
        board.push(row);
    }

    //Make sure that at least one cell is lighted
    board[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)] = true;

    return board;
}