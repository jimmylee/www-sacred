'use client';

import * as React from 'react';
import * as Utilities from '@common/utilities';

const FILE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const RANK = [8, 7, 6, 5, 4, 3, 2, 1];

const styles = {
  board: "inline-table border-collapse",
  corner: "w-[1ch] h-[calc(var(--theme-line-height-base)*1rem)]",
  cell: "w-[1ch] h-[calc(var(--theme-line-height-base)*1rem)] bg-[var(--theme-border-subdued)] text-center align-middle",
  square: "h-[calc(var(--theme-line-height-base)*2rem)] text-center align-middle w-[3ch]",
  dark: "bg-[var(--theme-focused-foreground)]",
  light: "bg-[var(--theme-focused-foreground-subdued)]",
  symbol: "text-[40px] leading-[calc(var(--theme-line-height-base)*2rem)]"
};

const getPieceSymbol = (piece: string) => {
  const mapping: Record<string, string> = {
    K: '♔',
    Q: '♕',
    R: '♖',
    B: '♗',
    N: '♘',
    P: '♙',
    k: '♚',
    q: '♛',
    r: '♜',
    b: '♝',
    n: '♞',
    p: '♟',
  };
  return mapping[piece] || '';
};

export interface ChessboardProps {
  board: string[][];
}

export const Chessboard: React.FC<ChessboardProps> = ({ board }) => {
  return (
    <table className={styles.board}>
      <tbody>
        <tr>
          <td className={styles.corner}></td>
          {FILE.map((file) => (
            <td key={file} className={styles.cell}>
              {file}
            </td>
          ))}
        </tr>
        {RANK.map((rank, rowIndex) => (
          <tr key={rank}>
            <td className={styles.cell}>{rank}</td>
            {FILE.map((_, colIndex) => {
              const isDark = (rowIndex + colIndex) % 2 === 0;
              const squareClass = isDark ? styles.dark : styles.light;
              return (
                <td key={colIndex} className={Utilities.classNames(styles.square, squareClass)}>
                  <span className={styles.symbol}>{getPieceSymbol(board[rowIndex][colIndex])}</span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Chessboard;
