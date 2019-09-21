export default (board, i, j) => {
    const newBoard = [...board];
    newBoard[i][j] = !newBoard[i][j];
    if(i > 0) newBoard[i-1][j] = !newBoard[i-1][j];
    if(j > 0) newBoard[i][j-1] = !newBoard[i][j-1];
    if(i > 0 && j > 0) newBoard[i-1][j-1] = !newBoard[i-1][j-1];
    if(i < board.length - 1) newBoard[i+1][j] = !newBoard[i+1][j];
    if(j < board[0].length - 1) newBoard[i][j+1] = !newBoard[i][j+1];
    if(i < board.length - 1 && j < board[0].length - 1) newBoard[i+1][j+1] = !newBoard[i+1][j+1];
    if(i > 0 && j < board[0].length - 1) newBoard[i-1][j+1] = !newBoard[i-1][j+1];
    if(i < board.length - 1 && j > 0) newBoard[i+1][j-1] = !newBoard[i+1][j-1];
    return newBoard;
}