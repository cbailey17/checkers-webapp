import game.game as game

class CheckersService:
    def __init__(self):
        """ 
        Initialize the board
        """

    def is_terminal(self):
        """
        Check if the game is over
        """
        return False
    
    def start_game(self):
        """
        Start the game
        """
        game.Game()
        


    def display_board(self):
        """
        Display the board
        """
        for row in range(7, -1, -1):
            for col in range(8):
                index = row * 8 + col
                if (self.white_pieces >> index) & 1:
                    print("W", end=" ")
                elif (self.black_pieces >> index) & 1:
                    print("B", end=" ")
                elif (self.kings >> index) & 1:
                    print("K", end=" ")
                else:
                    print(".", end=" ")
            print()

    def generate_bitboards(self):
        # Generate bitboards for all pieces
        # Placeholder implementation
        bitboards = {}
        return bitboards

    def get_available_moves(self, color):
        available_moves = []

        # Placeholder logic to find available moves
        # Modify this based on the actual rules of checkers
        for i in range(64):
            if (color >> i) & 1:
                # Check diagonal left
                if i % 8 > 0 and (self.white_pieces | self.black_pieces) >> (i - 9) & 1 == self.EMPTY:
                    available_moves.append((i, i - 9))

                # Check diagonal right
                if i % 8 < 7 and (self.white_pieces | self.black_pieces) >> (i - 7) & 1 == self.EMPTY:
                    available_moves.append((i, i - 7))

                # Additional logic for kings, if needed

        return available_moves
    
    def generate_attack_bitboards(self):
        attacks = {
            "white_left": (self.white_pieces << 7) & 0b0111111111111111111111111111111111111111111111111111111111111110,
            "white_right": (self.white_pieces << 9) & 0b0111111111111111111111111111111111111111111111111111111111111100,
            "black_left": (self.black_pieces >> 9) & 0b1111111111111111111111111111111111111111111111111111111111111110,
            "black_right": (self.black_pieces >> 7) & 0b1111111111111111111111111111111111111111111111111111111111111100
        }
        return attacks

