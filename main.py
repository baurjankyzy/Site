import pygame
import random

WIDTH = 400
HEIGHT = 500
FPS = 30
ROWS = 4
COLS = 4
TILE_SIZE = 100
SPACING = 10
FONT_SIZE = 50

pygame.init()
pygame.font.init()

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("2048")

tile_images = {}
for i in range(1, 12):
    tile_images[2 ** i] = pygame.image.load("C:/game_2048/assets/tiles/1.png".format(i)).convert_alpha()

font = pygame.font.SysFont(None, FONT_SIZE)

def new_tile():
    if random.randint(1, 10) == 1:
        return 4
    else:
        return 2

def create_board():
    board = [[0 for _ in range(COLS)] for _ in range(ROWS)]
    board[random.randint(0, ROWS-1)][random.randint(0, COLS-1)] = new_tile()
    return board

def draw_board(board):
    for row in range(ROWS):
        for col in range(COLS):
            tile_value = board[row][col]
            tile_image = tile_images[tile_value]
            tile_rect = tile_image.get_rect()
            tile_rect.x = col * (TILE_SIZE + SPACING) + SPACING
            tile_rect.y = row * (TILE_SIZE + SPACING) + SPACING
            screen.blit(tile_image, tile_rect)

def draw_text(text, color, x, y):
    text_surface = font.render(text, True, color)
    text_rect = text_surface.get_rect()
    text_rect.center = (x, y)
    screen.blit(text_surface, text_rect)

def get_empty_cells(board):
    empty_cells = []
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == 0:
                empty_cells.append((row, col))
    return empty_cells

def add_new_tile(board):
    empty_cells = get_empty_cells(board)
    if len(empty_cells) > 0:
        row, col = random.choice(empty_cells)
        board[row][col] = new_tile()

def rotate_board(board):
    return [[board[ROWS-1-col][row] for col in range(COLS)] for row in range(ROWS)]

def flip_board(board):
    return [[board[row][COLS-1-col] for col in range(COLS)] for row in range(ROWS)]

def can_move(board):
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == 0:
                return True
            if col > 0 and board[row][col] == board[row][col-1]:
                return True
            if row > 0 and board[row][col] == board[row-1][col]:
                return True
    return False

def merge_tiles(tiles):
    merged = False
    result = []
    i = 0
    while i < len(tiles):
        if i == len(tiles)-1:
            result.append(tiles[i])
            break
        if tiles[i] == tiles[i+1]:
            result.append(tiles[i] * 2)
            merged = True
            i += 2
        else:
            result.append(tiles[i])
            i += 1
    while len(result) < len(tiles):
        result.append(0)
    return result, merged

def do_move(board, direction):
    moved = False
    if direction == "up":
        for col in range(COLS):
            tiles = []
            for row in range(ROWS):
                tiles.append(board[row][col])
            result, merged = merge_tiles(tiles)
            for row in range(ROWS):
                board[row][col] = result[row]
            if merged:
                moved = True
    elif direction == "down":
        for col in range(COLS):
            tiles = []
            for row in range(ROWS-1, -1, -1):
                tiles.append(board[row][col])
            result, merged = merge_tiles(tiles)
            for row in range(ROWS):
                board[row][col] = result[ROWS-1-row]
            if merged:
                moved = True
    elif direction == "left":
        for row in range(ROWS):
            tiles = []
            for col in range(COLS):
                tiles.append(board[row][col])
            result, merged = merge_tiles(tiles)
            for col in range(COLS):
                board[row][col] = result[col]
            if merged:
                moved = True
    elif direction == "right":
        for row in range(ROWS):
            tiles = []
            for col in range(COLS-1, -1, -1):
                tiles.append(board[row][col])
            result, merged = merge_tiles(tiles)
            for col in range(COLS):
                board[row][col] = result[COLS-1-col]
            if merged:
                moved = True
    return moved

def get_best_score():
    try:
        with open("score.txt", "r") as file:
            best_score = int(file.read())
    except (FileNotFoundError, ValueError):
        best_score = 0
    return best_score

def save_best_score(score):
    with open("score.txt", "w") as file:
        file.write(str(score))

def play_game(difficulty):
    moves_dict = {
        "easy": 100,
        "medium": 75,
        "hard": 50
    }
    moves = moves_dict.get(difficulty, 100)
    return moves

board = create_board()

score = 0
best_score = get_best_score()

def load_best_score():
    try:
        with open("best_score.txt", "r") as f:
            return int(f.read())
    except FileNotFoundError:
        return 0

def add_tile(board):
    num_empty_cells = sum([row.count(0) for row in board])

    if num_empty_cells == 0:
        return

    empty_cells = []
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 0:
                empty_cells.append((i, j))
    row, col = random.choice(empty_cells)

    value = 2 if random.random() < 0.9 else 4

    board[row][col] = value

def get_score(board):
    score = 0
    for i in range(len(board)):
        for j in range(len(board[i])):
            score += board[i][j]
    return score

playing = True
bot_enabled = False
score = 0
best_score = load_best_score()
moved = False

while playing:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            playing = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                moved = do_move(board, "up")
            elif event.key == pygame.K_DOWN:
                moved = do_move(board, "down")
            elif event.key == pygame.K_LEFT:
                moved = do_move(board, "left")
            elif event.key == pygame.K_RIGHT:
                moved = do_move(board, "right")
            if moved:
                add_tile(board)
                score += get_score(board)
                if score > best_score:
                    best_score = score
                    save_best_score(best_score)
            if not can_move(board):
                playing = False

        elif event.type == pygame.USEREVENT and event.user_type == pygame_gui.UI_BUTTON_PRESSED:
            if event.ui_element == bot_button:
                bot_enabled = not bot_enabled


import pygame
import pygame_gui

pygame.init()

WINDOW_WIDTH = 640
WINDOW_HEIGHT = 480

window_surface = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))

BACKGROUND_COLOR = (255, 255, 255) 

window_surface = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
background = pygame.Surface((WINDOW_WIDTH, WINDOW_HEIGHT))
background.fill(BACKGROUND_COLOR)

SCORE_TEXT_RECT = pygame.Rect(10, 10, 200, 50)
BEST_SCORE_TEXT_RECT = pygame.Rect(10, 70, 200, 50)

manager = pygame_gui.UIManager((WINDOW_WIDTH, WINDOW_HEIGHT))
score_text = pygame_gui.elements.UITextBox("Score: 0", relative_rect=SCORE_TEXT_RECT, manager=manager)
best_score_text = pygame_gui.elements.UITextBox("Best Score: 0", relative_rect=BEST_SCORE_TEXT_RECT, manager=manager)

my_manager = pygame_gui.UIManager((WINDOW_WIDTH, WINDOW_HEIGHT))
score_text = pygame_gui.elements.UITextBox("Score: 0", relative_rect=SCORE_TEXT_RECT, manager=my_manager)
best_score_text = pygame_gui.elements.UITextBox("Best Score: 0", relative_rect=BEST_SCORE_TEXT_RECT, manager=my_manager)

for event in pygame.event.get():
    if event.type == pygame.QUIT:
        playing = False
    my_manager.process_events(event)

clock = pygame.time.Clock()
time_delta = clock.tick(FPS) / 1000.0

my_manager.update(time_delta)
window_surface.blit(background, (0, 0))
my_manager.draw_ui(window_surface)
pygame.display.update()

if bot_enabled:
    directions = ["up", "down", "left", "right"]
    direction = random.choice(directions)
    moved = do_move(board, direction)
    if moved:
        add_tile(board)
        score += get_score(board)
        if score > best_score:
            best_score = score
            save_best_score(best_score)
    if not can_move(board):
        playing = False

if not can_move(board):
    playing = False

moves = 100 
while playing:
    moves -= 1
    if moves == 0:
        playing = False

moves -= 1
if moves == 0:
    playing = False

import pygame

def message_box(title, message):
    pygame.init()
    pygame.display.set_caption(title)
    font = pygame.font.SysFont(None, 30)
    text = font.render(message, True, (255, 255, 255))
    width, height = text.get_size()
    screen = pygame.display.set_mode((width + 20, height + 20))
    screen.fill((0, 0, 0))
    screen.blit(text, (10, 10))
    pygame.display.update()
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
    pygame.quit()

message_box("Game Over", f"Your Score: {score}\nBest Score: {best_score}")

pygame.quit()




