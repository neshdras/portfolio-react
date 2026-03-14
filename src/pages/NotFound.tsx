import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

const CELL_SIZE = 25;
const GRID_SIZE = 25;
const INITIAL_SNAKE: Point[] = [{ x: 10, y: 10 }];

const randomFood = (): Point => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [dir, setDir] = useState<Point>({ x: 1, y: 0 });
  const [food, setFood] = useState<Point>(randomFood());
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === "ArrowUp" && dir.y !== 1) setDir({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && dir.y !== -1) setDir({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && dir.x !== 1) setDir({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && dir.x !== -1) setDir({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dir, gameOver]);

  useEffect(() => {
    if (gameOver) return;
    const id = window.setInterval(() => {
      setSnake((prev) => {
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };
        const hitsWall =
          head.x < 0 ||
          head.y < 0 ||
          head.x >= GRID_SIZE ||
          head.y >= GRID_SIZE;
        const hitsSelf = prev.some((p) => p.x === head.x && p.y === head.y);
        if (hitsWall || hitsSelf) {
          setGameOver(true);
          return prev;
        }
        const next = [head, ...prev];
        const ateFood = head.x === food.x && head.y === food.y;
        if (!ateFood) next.pop();
        else setFood(randomFood());
        return next;
      });
    }, 120);
    return () => window.clearInterval(id);
  }, [dir, food, gameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#0b0b0b";
    ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    ctx.fillStyle = "#2ecc71";
    snake.forEach((p) => {
      ctx.fillRect(p.x * CELL_SIZE, p.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });
  }, [snake, food]);

  const reset = () => {
    setSnake(INITIAL_SNAKE);
    setDir({ x: 1, y: 0 });
    setFood(randomFood());
    setGameOver(false);
  };

  return (
    <>
    
    <div style={{ textAlign: "center", padding: 20 }}>
    <a href="/">Acceuil</a>
      <h1>404 - Page non trouvée</h1>
      <p>Utilise les flèches pour jouer au Snake.</p>
      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        style={{ border: "1px solid #888" }}
      />
      {gameOver && (
        <div style={{ marginTop: 12 }}>
          <strong>Game Over</strong>{" "}
          <button onClick={reset}>Recommencer</button>
        </div>
      )}
    </div>
    </>
  );
};

export default NotFound;