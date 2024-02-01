#! /usr/bin/python3

from abc import ABC, abstractmethod


class Strategy(ABC):
    # Create two strategies one for each player
    """"Abstract strategy for playing a two player game.
    Abstract class from which specific strategies are derived
    """

    def __init__(self, player, game, maxplies):
        """"Initialize a strategy
        player is the player represented by this strategy
        game is a class or instance that supports the class or instance method
            game.other_player(player) which finds the name 
                of the other player
        maxplies is the maximum number of plies before a cutoff is applied
        """

        # Useful for initializing any constant values or structures
        # used to evaluate the utility of a board
        self.maxplayer = player
        self.minplayer = game.other_player(player)
        self.maxplies = maxplies

    @abstractmethod
    def utility(self, board):
        "Return the utility of the specified board"
        pass

    @abstractmethod
    def play(self, board):
        """"play - Make a move
        Given a board, return (newboard, action) where newboard is
        the result of having applied action to board and action is
        determined via a game tree search (e.g. minimax with alpha-beta
        pruning).
        """
        pass