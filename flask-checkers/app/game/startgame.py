#! /usr/bin/python3
"""
@author: Cameron Bailey
"""

# Game representation and mechanics
from __future__ import print_function
import checkerboard

import ai
import human
import redis
import pickle


class Game:
    def __init__():
        redis = redis.Redis(host='localhost',
                    port=6379,
                    db=0)
        
        board = checkerboard.CheckerBoard()
        # board = pickle.loads(redis_client.get('BoardState'))
        redplayer = human.Strategy('r', board, maxplies=2)
        blackplayer = ai.Strategy('b', board, maxplies=2)
        player_strategies = {'r': redplayer, 'b': blackplayer}
        strategies = {'r': "Human", 'b': "AI"}
        players = ['r', 'b']
        current_player = players[1]
        movenum, lastcap, pawn_move, count = 1, 0, 0, 0

        # Constants
        self.EMPTY = 0
        self.WHITE = 1
        self.BLACK = 2
        self.KING = 4

        # Initial board setup
        self.white_pieces = 0b0000000000000000000000000000000011111111111111111111111111111
        self.black_pieces = 0b1111111111111111000000000000000000000000000000000000000000000000
        self.kings = 0b0000000000000000000000000000000000000000000000000000000000000000

        boardState = {
            'board': board,
            'redplayer': redplayer,
            'blackplayer': blackplayer,
            'player_strategies': player_strategies,
            'strategies': strategies,
            'players': players,
            'current_player': current_player,
            'movenum': movenum,
            'lastcap': lastcap,
            'pawn_move': pawn_move,
            'count': count
        }

        redis.set('BoardState', pickle.dumps(boardState))
        print("Initialized board state.....")
